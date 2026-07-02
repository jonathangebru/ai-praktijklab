/* eslint-disable */
"use strict";

/**
 * POST /api/coach
 *
 * Single-shot gestructureerde feedback voor vier modes:
 *   · reflection — docent's reflectie-antwoord
 *   · rubric     — docent's lesopzet + zelfscore
 *   · prompt     — docent's prompt vs modelprompt
 *   · writeblock — docent's stap-antwoord, deterministisch gescoord tegen een
 *                  rubric (0-5 per criterium + totaalband + voorbeeld)
 *
 * writeblock + rubric draaien op temperature 0 (reproduceerbaar oordeel);
 * reflection + prompt iets warmer (vrije coaching). Een meegegeven
 * context.rubric (+ context.referenceAnswer) verankert de scoring; zonder
 * rubric leidt het model 3-5 criteria af uit de stap-context.
 *
 * Response: { ok, feedback, suggestions, scores?, overall?, criteria?, tip?, modelAnswer? }
 *   scores:  [{ name, score: 0-5, note }]
 *   overall: { score, max, band: "sterk"|"op weg"|"nog dun" }
 * Caps: 1000 input tokens (~4000 chars), 800 output tokens.
 * Rate limit: 30 calls / 60s per IP.
 */

const { app } = require("@azure/functions");
const { checkAccess } = require("../shared/entitlement");

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
    "Je bent een strenge maar eerlijke onderwijscoach die het antwoord van een docent beoordeelt tegen een rubric. Werk UITSLUITEND op basis van de meegegeven criteria en de stap-context — verzin geen eisen die er niet staan, en beloon geen lengte of vlotte taal op zichzelf. Als er een rubric is meegegeven, scoor je exact op díe criteria in dezelfde volgorde; is er geen rubric, leid dan 3-5 concrete criteria af uit de stap-context. Beoordeel elk criterium op een schaal van 0 t/m 5: 0 = ontbreekt, 2 = aangezet maar te dun, 4 = degelijk, 5 = volledig en concreet. Geef per criterium een korte onderbouwing (max 18 woorden) die letterlijk verwijst naar wat de docent wél of niet schreef. Geef daarna één prioriteit-verbetering (de aanpassing met het grootste effect) en een voorbeeld van een sterk antwoord dat bij déze stap past (gebruik het meegegeven referentie-antwoord als basis als dat er is). Spreek Nederlands, zeg 'je', geen complimenten als opener, geen opgeklopte taal. Antwoord ALTIJD in exact dit JSON-format: {\"feedback\": \"<kernoordeel, 1-2 zinnen, max 45 woorden>\", \"scores\": [{\"name\":\"<criterium, max 8 woorden>\",\"score\":<geheel getal 0-5>,\"note\":\"<onderbouwing, max 18 woorden>\"}], \"tip\": \"<prioriteit-verbetering, max 40 woorden>\", \"modelAnswer\": \"<voorbeeld goed antwoord, max 110 woorden>\"}",
};

/* Welke modes scoren/beoordelen (deterministisch, temperature 0) versus
 * genereren vrije coaching (iets warmer). Determinisme telt het zwaarst waar
 * we een oordeel teruggeven dat reproduceerbaar moet zijn. */
const SCORING_MODES = new Set(["writeblock", "rubric"]);

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
    const rubric = Array.isArray(context?.rubric) ? context.rubric : null;
    const rubricBlock =
      rubric && rubric.length
        ? [
            "",
            "RUBRIC — scoor exact op deze criteria, in deze volgorde:",
            ...rubric.map((c, i) => {
              const name = typeof c === "string" ? c : c?.name || "";
              const good = typeof c === "object" ? c?.good || c?.beschrijving : "";
              return `${i + 1}. ${name}${good ? ` — sterk = ${good}` : ""}`;
            }),
          ]
        : ["", "Geen rubric meegegeven: leid zelf 3-5 concrete criteria af uit de stap-context."];
    const refBlock = context?.referenceAnswer
      ? ["", `Referentie-antwoord (gold standard, niet woordelijk delen): ${context.referenceAnswer}`]
      : [];
    const lines = [
      "Stap-context:",
      context?.stepTitle ? `Titel van de stap: ${context.stepTitle}` : null,
      context?.stepBody ? `Beschrijving van de stap: ${context.stepBody}` : null,
      context?.voorbeeld ? `Voorbeeld dat in de les staat: ${context.voorbeeld}` : null,
      context?.label ? `Wat docent moest opleveren: ${context.label}` : null,
      context?.hint ? `Hint die docent kreeg: ${context.hint}` : null,
      ...rubricBlock,
      ...refBlock,
      "",
      "Antwoord van de docent:",
      input,
    ].filter((l) => l !== null && l !== undefined);
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

    /* Betaalmuur (inert zolang ENTITLEMENT_ENFORCED-app-setting ≠ "true").
     * De gratis module blijft toegankelijk; alles daarbuiten vereist een
     * actieve entitlement. Staat de vlag uit → geen storage-call, geen effect. */
    const access = await checkAccess(req, ctx?.moduleId, context);
    if (!access.allowed) {
      context.log(`COACH_DENIED mode=${mode} module=${ctx?.moduleId || "?"}`);
      return {
        status: 402,
        headers: CORS,
        jsonBody: { ok: false, error: "entitlement_required" },
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
          temperature: SCORING_MODES.has(mode) ? 0 : 0.5,
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

    /* writeblock-rubric: 0-5 scores per criterium → afgeleide totaalband.
     * Bij een meegegeven rubric forceren we namen + volgorde naar die rubric,
     * zodat de getoonde criteria deterministisch zijn en het model er geen kan
     * bijverzinnen of weglaten. */
    const clampScore = (n) => {
      const x = Math.round(Number(n));
      return Number.isFinite(x) ? Math.max(0, Math.min(5, x)) : 0;
    };
    const rawScores = Array.isArray(parsed?.scores) ? parsed.scores : null;
    let scores = null;
    if (rawScores) {
      const rubric = Array.isArray(ctx?.rubric) ? ctx.rubric : null;
      if (rubric && rubric.length) {
        scores = rubric.slice(0, 8).map((c, i) => {
          const name = (typeof c === "string" ? c : c?.name || `Criterium ${i + 1}`)
            .toString()
            .trim()
            .slice(0, 120);
          const match =
            rawScores.find(
              (s) =>
                s &&
                typeof s.name === "string" &&
                s.name.trim().toLowerCase() === name.toLowerCase()
            ) ||
            rawScores[i] ||
            {};
          return {
            name,
            score: clampScore(match.score),
            note:
              typeof match.note === "string" && match.note.trim()
                ? match.note.trim().slice(0, 200)
                : "",
          };
        });
      } else {
        scores = rawScores
          .filter(
            (s) =>
              s &&
              typeof s === "object" &&
              typeof s.name === "string" &&
              s.name.trim()
          )
          .slice(0, 8)
          .map((s) => ({
            name: s.name.trim().slice(0, 120),
            score: clampScore(s.score),
            note:
              typeof s.note === "string" && s.note.trim()
                ? s.note.trim().slice(0, 200)
                : "",
          }));
      }
      if (!scores.length) scores = null;
    }

    let overall = null;
    if (scores && scores.length) {
      const total = scores.reduce((a, s) => a + s.score, 0);
      const max = scores.length * 5;
      const pct = max ? total / max : 0;
      const band = pct >= 0.8 ? "sterk" : pct >= 0.55 ? "op weg" : "nog dun";
      overall = { score: total, max, band };
    }

    if (!feedback && !criteria && !scores && !modelAnswer) {
      return {
        status: 502,
        headers: CORS,
        jsonBody: { ok: false, error: "empty_feedback" },
      };
    }

    context.log(
      `COACH_OK ip=${ip} mode=${mode} fbChars=${feedback.length} sugs=${suggestions.length}${
        criteria ? ` crit=${criteria.length}` : ""
      }${scores ? ` scores=${scores.length}/${overall.max} band=${overall.band}` : ""}`
    );

    return {
      status: 200,
      headers: CORS,
      jsonBody: {
        ok: true,
        feedback,
        suggestions,
        mode,
        ...(scores ? { scores } : {}),
        ...(overall ? { overall } : {}),
        ...(criteria ? { criteria } : {}),
        ...(tip ? { tip } : {}),
        ...(modelAnswer ? { modelAnswer } : {}),
      },
    };
  },
});
