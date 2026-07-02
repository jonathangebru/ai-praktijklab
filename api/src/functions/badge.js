/* eslint-disable */
"use strict";

/**
 * POST /api/badge
 *
 * Geeft een Open Badge 3.0 (AchievementCredential / Verifiable Credential) uit
 * voor de ingelogde docent en ondertekent die als VC-JWT (EdDSA / Ed25519).
 * De ontvanger-identiteit komt server-side uit de SWA-login; de client levert
 * de achievement-definitie. Zonder BADGE_SIGNING_KEY wordt een ONONDERTEKENDE
 * credential teruggegeven met een notitie (zodat de flow lokaal werkt).
 *
 * Body: { kind, id, name, description, criteria }
 * Response: { ok, signed, jwt?, credential, verifyUrl?, note? }
 */

const { app } = require("@azure/functions");
const crypto = require("crypto");
const { checkAccess } = require("../shared/entitlement");

const BASE = "https://praktijklab.datagrid.nl";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
}

async function readBody(req) {
  try {
    if (typeof req.json === "function") return await req.json();
    if (req.body) return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return {};
  }
  return {};
}

function principal(req) {
  const raw = getHeader(req, "x-ms-client-principal");
  if (!raw) return null;
  try {
    return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
  } catch {
    return null;
  }
}

const b64u = (buf) => Buffer.from(buf).toString("base64url");

function signVcJwt(payload, pemKey) {
  const header = { alg: "EdDSA", typ: "vc+jwt", kid: "praktijklab-badge-1" };
  const input = b64u(JSON.stringify(header)) + "." + b64u(JSON.stringify(payload));
  const sig = crypto.sign(null, Buffer.from(input), crypto.createPrivateKey(pemKey));
  return input + "." + b64u(sig);
}

function clampStr(s, n) {
  return typeof s === "string" ? s.slice(0, n) : "";
}

app.http("badge", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "badge",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204, headers: CORS };

    const body = await readBody(req);
    const kind = body.kind === "path" ? "path" : "module";
    const refId = clampStr(body.id, 200);
    const name = clampStr(body.name, 200) || "Afronding AI PraktijkLab";
    const description = clampStr(body.description, 600);
    const narrative = clampStr(body.criteria?.narrative, 600);

    if (!refId) {
      return { status: 400, headers: CORS, jsonBody: { ok: false, error: "id_required" } };
    }

    /* Betaalmuur (inert zolang ENTITLEMENT_ENFORCED-app-setting ≠ "true").
     * Een module-badge voor de gratis module mag altijd; elke andere module- of
     * pad-badge vereist een actieve entitlement (paden bundelen betaalde
     * modules → moduleId null dwingt de entitlement-check af). */
    const access = await checkAccess(req, kind === "module" ? refId : null, context);
    if (!access.allowed) {
      context.log(`BADGE_DENIED kind=${kind} ref=${refId}`);
      return { status: 402, headers: CORS, jsonBody: { ok: false, error: "entitlement_required" } };
    }

    const user = principal(req);
    const recipientName = (user?.userDetails || "deelnemer").slice(0, 120);

    const now = new Date().toISOString();
    const credId = `${BASE}/credentials/${crypto.randomUUID()}`;
    const achievementId = `${BASE}/badges/${kind}/${encodeURIComponent(refId)}`;

    const credential = {
      "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
      ],
      id: credId,
      type: ["VerifiableCredential", "OpenBadgeCredential"],
      issuer: {
        id: BASE,
        type: ["Profile"],
        name: "AI PraktijkLab · Datagrid",
        url: BASE,
      },
      validFrom: now,
      name,
      credentialSubject: {
        type: ["AchievementSubject"],
        identifier: [
          { type: "IdentityObject", identityType: "name", hashed: false, identity: recipientName },
        ],
        achievement: {
          id: achievementId,
          type: ["Achievement"],
          name,
          description,
          criteria: { narrative },
        },
      },
    };

    let pem = process.env.BADGE_SIGNING_KEY;
    // Accepteer zowel rauwe PEM als base64-gecodeerde PEM (robuust tegen
    // newline-mangling bij het zetten van de app-setting).
    if (pem && !pem.includes("BEGIN")) {
      try {
        pem = Buffer.from(pem, "base64").toString("utf8");
      } catch {
        /* laat staan; sign faalt dan netjes hieronder */
      }
    }
    if (!pem) {
      context.log("BADGE_UNSIGNED (no BADGE_SIGNING_KEY)");
      return {
        status: 200,
        headers: CORS,
        jsonBody: {
          ok: true,
          signed: false,
          credential,
          note: "Onondertekend uitgegeven — zet BADGE_SIGNING_KEY (Ed25519 PEM) als app-setting om verifieerbare badges te activeren.",
        },
      };
    }

    let jwt;
    try {
      jwt = signVcJwt(
        {
          // VC-JWT registered claims + the VC payload (OB3.0 toelaatbaar)
          iss: BASE,
          sub: recipientName,
          jti: credId,
          iat: Math.floor(Date.now() / 1000),
          vc: credential,
        },
        pem
      );
    } catch (err) {
      context.log("BADGE_SIGN_FAIL " + (err?.message || err));
      return { status: 500, headers: CORS, jsonBody: { ok: false, error: "sign_failed" } };
    }

    const verifyUrl = `${BASE}/verify?token=${jwt}`;
    context.log(`BADGE_OK kind=${kind} ref=${refId} recipient=${recipientName.length}chars`);
    return {
      status: 200,
      headers: CORS,
      jsonBody: { ok: true, signed: true, jwt, verifyUrl, credential },
    };
  },
});
