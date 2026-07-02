/* eslint-disable */
"use strict";

/**
 * GET  /api/entitlement   → entitlement van de ingelogde gebruiker
 *      Response: { ok, active, tier, status, validUntil, source, enforced }
 *      `enforced` = staat de paywall aan? De frontend gebruikt deze vlag zodat
 *      één app-setting (ENTITLEMENT_ENFORCED) UI én server tegelijk omzet.
 * POST /api/entitlement   → (alleen beheerder) ken entitlement toe
 *      Body: { scope: "person"|"domain", key, tier, validUntil }
 *
 * De entitlement-lookup zelf leeft in ../shared/entitlement.js — dezelfde code
 * die coach/chat/badge gebruiken, zodat UI en server nooit uit elkaar lopen.
 * Gratis modules hebben geen entitlement nodig (dat regelt de frontend).
 */

const { app } = require("@azure/functions");
const { TableClient } = require("@azure/data-tables");
const { isEnforced, getPrincipal, lookupEntitlement } = require("../shared/entitlement");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

async function readBody(req) {
  try {
    if (typeof req.json === "function") return await req.json();
    if (req.body) return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return {};
  }
  return {};
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

const _clients = {};
async function getWritableTable(name, context) {
  const conn = getConn();
  if (!conn) return null;
  if (!_clients[name]) {
    const c = TableClient.fromConnectionString(conn, name, {
      allowInsecureConnection: conn.includes("127.0.0.1") || conn.includes("UseDevelopmentStorage"),
    });
    try {
      await c.createTable();
    } catch (e) {
      if (e?.statusCode !== 409) context?.log("ENT_CREATE_TABLE " + (e?.message || e));
    }
    _clients[name] = c;
  }
  return _clients[name];
}

app.http("entitlement", {
  methods: ["GET", "POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "entitlement",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204, headers: CORS };

    const enforced = isEnforced();
    const principal = getPrincipal(req);
    if (!principal) {
      return { status: 200, headers: CORS, jsonBody: { ok: true, active: false, source: "none", enforced } };
    }

    if (req.method === "POST") {
      const roles = Array.isArray(principal.userRoles) ? principal.userRoles : [];
      if (!roles.includes("beheerder")) {
        return { status: 403, headers: CORS, jsonBody: { ok: false, error: "forbidden" } };
      }
      const body = await readBody(req);
      const scope = body.scope === "domain" ? "domain" : "person";
      const key = String(body.key || "").trim().toLowerCase();
      const tier = String(body.tier || "docent").slice(0, 40);
      const revoke = body.revoke === true;
      const validUntil = String(body.validUntil || "");
      if (!key) return { status: 400, headers: CORS, jsonBody: { ok: false, error: "key_required" } };
      const table = await getWritableTable(scope === "domain" ? "domainentitlements" : "entitlements", context);
      if (!table) return { status: 500, headers: CORS, jsonBody: { ok: false, error: "no_storage" } };
      const status = revoke ? "revoked" : "active";
      await table.upsertEntity(
        {
          partitionKey: "ent",
          rowKey: sanitizeKey(key),
          tier,
          status,
          validUntil,
          source: "invoice",
          grantedBy: principal.userDetails || "beheerder",
        },
        "Merge"
      );
      context.log(`ENT_${revoke ? "REVOKE" : "GRANT"} scope=${scope} tier=${tier}`);
      return { status: 200, headers: CORS, jsonBody: { ok: true, scope, key, tier, validUntil, status } };
    }

    // GET — entitlement bepalen via de gedeelde lookup (persoon → domein).
    const ent = await lookupEntitlement(principal, context);
    return {
      status: 200,
      headers: CORS,
      jsonBody: {
        ok: true,
        active: ent.active,
        tier: ent.tier || undefined,
        status: ent.status || undefined,
        validUntil: ent.validUntil || undefined,
        source: ent.source,
        enforced,
      },
    };
  },
});
