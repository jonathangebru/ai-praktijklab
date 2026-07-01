/* eslint-disable */
"use strict";

/**
 * POST /api/mollie-webhook   (publiek — Mollie roept dit aan)
 *
 * Mollie stuurt alleen een payment-id. We vertrouwen de POST NIET: we halen de
 * echte betaling op bij Mollie met onze eigen sleutel. Alleen bij status "paid"
 * schrijven we de entitlement voor de docent uit de metadata weg (1 jaar).
 * Route staat publiek in staticwebapp.config.json.
 */

const { app } = require("@azure/functions");
const { TableClient } = require("@azure/data-tables");

function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
}

async function readForm(req) {
  try {
    if (typeof req.text === "function") return await req.text();
    if (typeof req.body === "string") return req.body;
  } catch {
    return "";
  }
  return "";
}

function sanitizeKey(s) {
  const str = String(s || "");
  let out = "";
  for (let i = 0; i < str.length && out.length < 512; i++) {
    const ch = str[i], code = str.charCodeAt(i);
    out += code < 0x20 || code === 0x7f || ch === "/" || ch === "\\" || ch === "#" || ch === "?" ? "_" : ch;
  }
  return out || "_";
}

function getConn() {
  return process.env.WORK_STORAGE_CONNECTION || process.env.AzureWebJobsStorage || "";
}

let _table = null;
async function getTable(context) {
  const conn = getConn();
  if (!conn) return null;
  if (!_table) {
    _table = TableClient.fromConnectionString(conn, "entitlements", {
      allowInsecureConnection: conn.includes("127.0.0.1") || conn.includes("UseDevelopmentStorage"),
    });
    try {
      await _table.createTable();
    } catch (e) {
      if (e?.statusCode !== 409) context?.log("MW_CREATE_TABLE " + (e?.message || e));
    }
  }
  return _table;
}

app.http("mollie-webhook", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "mollie-webhook",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204 };

    const key = process.env.MOLLIE_API_KEY;
    if (!key) {
      // Niet geconfigureerd — 200 zodat Mollie niet blijft herproberen.
      return { status: 200, body: "not configured" };
    }

    // Payment-id uit de form-body ("id=tr_xxx").
    const raw = await readForm(req);
    let paymentId = "";
    try {
      paymentId = new URLSearchParams(raw).get("id") || "";
    } catch {
      paymentId = "";
    }
    if (!paymentId) return { status: 200, body: "no id" };

    // Echte status ophalen bij Mollie (bron van waarheid).
    let payment;
    try {
      const res = await fetch(`https://api.mollie.com/v2/payments/${encodeURIComponent(paymentId)}`, {
        headers: { Authorization: `Bearer ${key}` },
      });
      if (res.status === 404) return { status: 200, body: "unknown payment" };
      payment = await res.json();
      if (!res.ok) {
        context.log("MW_MOLLIE_BAD " + res.status);
        return { status: 503, body: "mollie error" }; // Mollie herprobeert
      }
    } catch (err) {
      context.log("MW_MOLLIE_UNREACHABLE " + (err?.message || err));
      return { status: 503, body: "mollie unreachable" };
    }

    if (payment.status !== "paid") {
      context.log(`MW_STATUS ${payment.status} id=${paymentId}`);
      return { status: 200, body: "ok" };
    }

    const meta = payment.metadata || {};
    const userId = meta.userId;
    const tier = meta.tier || "docent";
    if (!userId) return { status: 200, body: "no user in metadata" };

    try {
      const table = await getTable(context);
      if (!table) return { status: 503, body: "no storage" }; // herproberen
      const until = new Date();
      until.setFullYear(until.getFullYear() + 1);
      await table.upsertEntity(
        {
          partitionKey: "ent",
          rowKey: sanitizeKey(userId),
          tier,
          status: "active",
          validUntil: until.toISOString(),
          source: "mollie",
          lastPayment: payment.id,
          email: meta.email || "",
        },
        "Merge"
      );
      context.log(`MW_GRANT user=${sanitizeKey(userId).length}chars tier=${tier} payment=${payment.id}`);
      return { status: 200, body: "granted" };
    } catch (err) {
      context.log("MW_WRITE_FAIL " + (err?.message || err));
      return { status: 503, body: "write failed" }; // Mollie herprobeert
    }
  },
});
