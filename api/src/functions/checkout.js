/* eslint-disable */
"use strict";

/**
 * POST /api/checkout  (ingelogde docent)
 *
 * Maakt een Mollie-betaling aan voor de Docent-tier en geeft de checkout-URL
 * terug. De koper-identiteit komt uit de SWA-login en gaat als metadata mee, zodat
 * de webhook na betaling de juiste entitlement kan zetten. Zonder MOLLIE_API_KEY
 * geeft dit endpoint een nette 503 (inert tot de sleutel als app-setting staat).
 *
 * Body: { tier?: "docent" }
 * Response: { ok, checkoutUrl } | { ok:false, error }
 */

const { app } = require("@azure/functions");

const BASE = "https://praktijklab.datagrid.nl";

// Prijzen INCL. 21% btw (self-paced e-learning is niet vrijgesteld — zie
// docs/btw-subsidies.md). €249 excl. → €301,29 incl.
const TIERS = {
  docent: {
    value: "301.29",
    description: "AI PraktijkLab — Docent (1 jaar toegang, incl. 21% btw)",
  },
};

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

function getPrincipal(req) {
  const raw = getHeader(req, "x-ms-client-principal");
  if (!raw) return null;
  try {
    const p = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
    return p && p.userId ? p : null;
  } catch {
    return null;
  }
}

app.http("checkout", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "checkout",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204, headers: CORS };

    const principal = getPrincipal(req);
    if (!principal) {
      return { status: 401, headers: CORS, jsonBody: { ok: false, error: "login_required" } };
    }

    const key = process.env.MOLLIE_API_KEY;
    if (!key) {
      return {
        status: 503,
        headers: CORS,
        jsonBody: { ok: false, error: "payments_not_configured" },
      };
    }

    const body = await readBody(req);
    const tierKey = TIERS[body.tier] ? body.tier : "docent";
    const tier = TIERS[tierKey];

    let payment;
    try {
      const res = await fetch("https://api.mollie.com/v2/payments", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: { currency: "EUR", value: tier.value },
          description: tier.description,
          redirectUrl: `${BASE}/?betaald=1`,
          webhookUrl: `${BASE}/api/mollie-webhook`,
          metadata: {
            userId: principal.userId,
            email: principal.userDetails || "",
            tier: tierKey,
          },
        }),
      });
      payment = await res.json();
      if (!res.ok) {
        context.log("CHECKOUT_MOLLIE_BAD " + res.status + " " + JSON.stringify(payment).slice(0, 200));
        return { status: 502, headers: CORS, jsonBody: { ok: false, error: "mollie_error" } };
      }
    } catch (err) {
      context.log("CHECKOUT_FAIL " + (err?.message || err));
      return { status: 502, headers: CORS, jsonBody: { ok: false, error: "mollie_unreachable" } };
    }

    const checkoutUrl = payment?._links?.checkout?.href;
    if (!checkoutUrl) {
      return { status: 502, headers: CORS, jsonBody: { ok: false, error: "no_checkout_url" } };
    }
    context.log(`CHECKOUT_OK tier=${tierKey} payment=${payment.id}`);
    return { status: 200, headers: CORS, jsonBody: { ok: true, checkoutUrl } };
  },
});
