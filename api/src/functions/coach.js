/* eslint-disable */
"use strict";

/**
 * POST /api/coach
 *
 * Single-shot gestructureerde feedback voor vier modes:
 *   · reflection — docent's reflectie-antwoord
 *   · rubric     — docent's lesopzet + zelfscore
 *   · prompt     — docent's prompt vs modelprompt
 *   · writeblock — docent's stap-antwoord met criteria-check + voorbeeld
 *
 * Response: { ok: true, feedback, suggestions, criteria?, tip?, modelAnswer? }
 * Caps: 1000 input tokens (~4000 chars), 800 output tokens.
 * Rate limit: 30 calls / 60s per IP.
 */

const { app } = require("@azure/functions");

/* ─── Rate limit (in-memory) ──────────────────────────────────────────────── */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 30;
const rateMap = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const arr = (rateMap.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    const retryAfter = Math.ceil(
      (RATE_WINDOW_MS - (now - arr[0])) / 1000
    );
    return { ok: false, retryAfter: Math.max(retryAfter, 1) };
  }
  arr.push(now);
  rateMap.set(ip, arr);
  return { ok: true };
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
}

function getIp(req) {
  return (
    getHeader(req, "x-forwarded-for")?.split(",")[0]?.trim() ||
    getHeader(req, "x-azure-clientip") ||
    getHeader(req, "client-ip") ||
    "anon"
  );
}

async function readBody(req) {
  if (!req) return {};
  try {
    if (typeof req.json === "function") return await req.json();
    if (req.body) {
      return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    }
  } catch {
    return {};
  }
  return {};
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

/* ─── System prompts per mode ─────────────────────────────────────────────── */
const SYSTEM_PROMPTS = {
  reflection:
    "Je bent een ervaren onderwijscoach. De docent reflecteert op een AI-PD les. Geef korte, scherpe feedback (max 80 woorden) en 2-3 concrete vervolgvragen. Spreek Nederlands. Zeg 'je'. Geen complimenten als opening. Antwoord ALTIJD in JSON met dit format: {\"feedback\": \"<je terugkoppeling, max 80 woorden>\", \"suggestions\": [\"<vervolgvraag 1>\", \"<vervolgvraag 2>\", \"<vervolgvraag 3>\"]}",
  rubric:
    "Je bent een ervaren docent-coach. Een collega heeft hun lesopzet zelf gescoord op een rubric. Bekijk hun werk en zelfscore. Vertel ze of de score realistisch is (eerlijk maar warm), waar je 't anders ziet, en welke éne aanpassing het grootste verschil maakt. Max 120 woorden. Nederlands, 'je'. Antwoord ALTIJD in JSON met dit format: {\"feedback\": \"<je beoordeling, max 120 woorden>\", \"suggestions\": [\"<concrete aanpassing 1>\", \"<concrete aanpassing 2>\"]}",
  prompt:
    "Je bent een AI-prompt-coach. De docent schreef een prompt in een leersituatie. Vergelijk met de modelprompt en geef 3 concrete verbeterpunten. Max 80 woorden. Nederlands, 'je'. Geen patronisering. Antwoord ALTIJD in JSON met dit format: {\"feedback\": \"<korte vergelijking, max 80 woorden>\", \"suggestions\": [\"<verbeterpunt 1>\", \"<verbeterpunt 2>\", \"<verbeterpunt 3>\"]}",
  writeblock:
    "Je bent een onderwijscoach. Een docent heeft een antwoord geschreven op een stap in een AI-PD les. Lees het antwoord, vergelijk met de stap-context, en geef: (1) 3-5 criteria die in een goed antwoord aanwezig moeten zijn, elk met status \"yes\" (duidelijk aanwezig), \"partial\" (zwak aanwezig) of \"no\" (ontbreekt). Criteria-namen zijn kort en concreet (max 8 woorden). (2) Eén concrete tip (max 40 woorden) die het grootste verschil maakt. (3) Een voorbeeld van een goed antwoord (max 100 woorden) dat past bij déze stap — geen generieke tekst. Spreek Nederlands. Zeg 'je'. Geen complimenten als opener. Antwoord ALTIJD in JSON: {\"feedback\": \"<korte beoordeling, max 50 woorden>\", \"criteria\": [{\"name\":\"<criterium>\",\"status\":\"yes|partial|no\"}], \"tip\": \"<concrete tip>\", \"modelAnswer\": \"<voorbeeld antwoord>\"}",
};

function buildUserMessage(mode, input, context) {
  if (mode === "reflection") {
    return `Reflectie-antwoord van de docent:\n\n${input}`;
  }
  if (mode === "rubric") {
    const lines = [
      "Zelfscore samenvatting:",
      input,
      "",
      "Rubric-criteria (context):",
      JSON.stringify(context?.criteria || context || {}, null, 2),
    ];
    return lines.join("\n");
  }
  if (mode === "prompt") {
    const lines = [
      "Prompt van de docent:",
      input,
      "",
      "Modelprompt ter vergelijking:",
      context?.modelPrompt || "(geen modelprompt meegegeven)",
    ];
    return lines.join("\n");
  }
  if (mode === "writeblock") {
    const lines = [
      "Stap-context:",
      context?.stepTitle ? `Titel van de stap: ${context.stepTitle}` : null,
      context?.stepBody ? `Beschrijving van de stap: ${context.stepBody}` : null,
      context?.voorbeeld ? `Voorbeeld dat in de les staat: ${context.voorbeeld}` : null,
      context?.label ? `Wat docent moest opleveren: ${context.label}` : null,
      context?.hint ? `Hint die docent kreeg: ${context.hint}` : null,
      "",
      "Antwoord van de docent:",
      input,
    ].filter(Boolean);
    return lines.join("\n");
  }
  return input;
}

/* ─── Handler ─────────────────────────────────────────────────────────────── */
app.http("coach", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "coach",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") {
      return { status: 204, headers: CORS };
    }

    const ip = getIp(req);
    const limit = rateLimit(ip);
    if (!limit.ok) {
      return {
        status: 429,
        headers: { ...CORS, "Retry-After": String(limit.retryAfter) },
        jsonBody: {
          ok: false,
          error: "rate_limited",
          retryAfter: limit.retryAfter,
        },
      };
    }

    const body = await readBody(req);
    const mode = body.mode;
    const input = typeof body.input === "string" ? body.input.trim() : "";
    const ctx = body.context || {};

    if (!SYSTEM_PROMPTS[mode]) {
      return {
        status: 400,
        headers: CORS,
        jsonBody: { ok: false, error: "invalid_mode" },
      };
    }

    if (!input || input.length < 8) {
      return {
        status: 400,
        headers: CORS,
        jsonBody: { ok: false, error: "input_required" },
      };
    }

    /* Cap input rond 4000 chars (~1000 tokens) */
    const userMessage = buildUserMessage(mode, input, ctx).slice(0, 4000);

    const endpoint = process.env.AOAI_ENDPOINT;
    const deployment = process.env.AOAI_DEPLOYMENT;
    const apiVersion = process.env.AOAI_API_VERSION;
    const key = process.env.AOAI_KEY;

    if (!endpoint || !deployment || !apiVersion || !key) {
      context.log("COACH_CONFIG_MISSING");
      return {
        status: 500,
        headers: CORS,
        jsonBody: { ok: false, error: "config_missing" },
      };
    }

    const url = `${endpoint.replace(/\/$/, "")}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

    let upstream;
    try {
      upstream = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": key,
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPTS[mode] },
            { role: "user", content: userMessage },
          ],
          temperature: 0.6,
          max_tokens: mode === "writeblock" ? 800 : 600,
          response_format: { type: "json_object" },
        }),
      });
    } catch (err) {
      context.log("COACH_UPSTREAM_FAIL " + (err?.message || err));
      return {
        status: 502,
        headers: CORS,
        jsonBody: { ok: false, error: "upstream_unreachable" },
      };
    }

    if (!upstream.ok) {
      const txt = await upstream.text().catch(() => "");
      context.log(
        "COACH_UPSTREAM_BAD " + upstream.status + " " + txt.slice(0, 200)
      );
      return {
        status: 502,
        headers: CORS,
        jsonBody: { ok: false, error: "upstream_error", status: upstream.status },
      };
    }

    let data;
    try {
      data = await upstream.json();
    } catch (err) {
      context.log("COACH_JSON_PARSE_FAIL " + (err?.message || err));
      return {
        status: 502,
        headers: CORS,
        jsonBody: { ok: false, error: "bad_upstream_json" },
      };
    }

    const raw = data?.choices?.[0]?.message?.content || "";
    let parsed = null;
    try {
      parsed = JSON.parse(raw);
    } catch {
      /* val terug op plain string */
    }

    const feedback =
      (parsed && typeof parsed.feedback === "string" && parsed.feedback) ||
      (typeof raw === "string" ? raw.trim() : "");
    const suggestions = Array.isArray(parsed?.suggestions)
      ? parsed.suggestions.filter((s) => typeof s === "string" && s.trim()).slice(0, 5)
      : [];

    /* writeblock-specifiek: criteria + tip + modelAnswer */
    const VALID_STATUS = new Set(["yes", "partial", "no"]);
    const criteria = Array.isArray(parsed?.criteria)
      ? parsed.criteria
          .filter(
            (c) =>
              c &&
              typeof c === "object" &&
              typeof c.name === "string" &&
              c.name.trim() &&
              VALID_STATUS.has(c.status)
          )
          .slice(0, 8)
          .map((c) => ({ name: c.name.trim().slice(0, 120), status: c.status }))
      : null;
    const tip =
      typeof parsed?.tip === "string" && parsed.tip.trim()
        ? parsed.tip.trim().slice(0, 500)
        : null;
    const modelAnswer =
      typeof parsed?.modelAnswer === "string" && parsed.modelAnswer.trim()
        ? parsed.modelAnswer.trim().slice(0, 1200)
        : null;

    if (!feedback && !criteria && !modelAnswer) {
      return {
        status: 502,
        headers: CORS,
        jsonBody: { ok: false, error: "empty_feedback" },
      };
    }

    context.log(
      `COACH_OK ip=${ip} mode=${mode} fbChars=${feedback.length} sugs=${suggestions.length}${
        criteria ? ` crit=${criteria.length}` : ""
      }`
    );

    return {
      status: 200,
      headers: CORS,
      jsonBody: {
        ok: true,
        feedback,
        suggestions,
        mode,
        ...(criteria ? { criteria } : {}),
        ...(tip ? { tip } : {}),
        ...(modelAnswer ? { modelAnswer } : {}),
      },
    };
  },
});
