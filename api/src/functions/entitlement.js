/* eslint-disable */
"use strict";

/**
 * GET  /api/entitlement   → entitlement van de ingelogde gebruiker
 *      Response: { ok, active, tier, status, validUntil, source }
 * POST /api/entitlement   → (alleen beheerder) ken entitlement toe
 *      Body: { scope: "person"|"domain", key, tier, validUntil }
 *
 * Gratis modules (Module 01 + intake) hebben GEEN entitlement nodig — dat
 * regelt de frontend. Dit endpoint zegt alleen óf iemand betaalde toegang heeft.
 * Twee tabellen: `entitlements` (per persoon, rowKey=userId) en
 * `domainentitlements` (per e-maildomein, rowKey=domein) zodat een school in
 * één keer toegang krijgt.
 */

const { app } = require("@azure/functions");
const { TableClient } = require("@azure/data-tables");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

function sanitizeKey(s) {
  const str = String(s || "");
  let out = "";
  for (let i = 0; i < str.length && out.length < 512; i++) {
    const ch = str[i], code = str.charCodeAt(i);
    out += code < 0x20 || code === 0x7f || ch === "/" || ch === "\\" || ch === "#" || ch === "?" ? "_" : ch;
  }
  return out || "_";
}

function emailDomain(p) {
  const v = (p?.userDetails || "").toLowerCase();
  const at = v.lastIndexOf("@");
  return at > 0 ? v.slice(at + 1) : "";
}

function getConn() {
  return process.env.WORK_STORAGE_CONNECTION || process.env.AzureWebJobsStorage || "";
}

const _clients = {};
async function getTable(name, context) {
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

function isActive(entity) {
  if (!entity) return false;
  if (entity.status && entity.status !== "active" && entity.status !== "trial") return false;
  if (entity.validUntil) {
    const until = new Date(entity.validUntil);
    if (!isNaN(until) && until.getTime() < Date.now()) return false;
  }
  return true;
}

async function getEntity(table, rowKey) {
  if (!table) return null;
  try {
    return await table.getEntity("ent", sanitizeKey(rowKey));
  } catch (e) {
    if (e?.statusCode === 404) return null;
    throw e;
  }
}

app.http("entitlement", {
  methods: ["GET", "POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "entitlement",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204, headers: CORS };

    const principal = getPrincipal(req);
    if (!principal) {
      return { status: 200, headers: CORS, jsonBody: { ok: true, active: false, source: "none" } };
    }

    if (req.method === "POST") {
      const roles = Array.isArray(principal.userRoles) ? principal.userRoles : [];
      if (!roles.includes("beheerder")) {
        return { status: 403, headers: CORS, jsonBody: { ok: false, error: "forbidden" } };
      }
      const body = await readBody(req);
      const scope = body.scope === "domain" ? "domain" : "person";
      const key = String(body.key || "").trim().toLowerCase();
      const tier = String(body.tier || "docent");
      const validUntil = String(body.validUntil || "");
      if (!key) return { status: 400, headers: CORS, jsonBody: { ok: false, error: "key_required" } };
      const table = await getTable(scope === "domain" ? "domainentitlements" : "entitlements", context);
      if (!table) return { status: 500, headers: CORS, jsonBody: { ok: false, error: "no_storage" } };
      await table.upsertEntity(
        {
          partitionKey: "ent",
          rowKey: sanitizeKey(key),
          tier,
          status: "active",
          validUntil,
          source: "invoice",
          grantedBy: principal.userDetails || "beheerder",
        },
        "Merge"
      );
      context.log(`ENT_GRANT scope=${scope} tier=${tier}`);
      return { status: 200, headers: CORS, jsonBody: { ok: true, scope, tier } };
    }

    // GET — bepaal entitlement: persoon → anders domein.
    try {
      const personT = await getTable("entitlements", context);
      const person = await getEntity(personT, principal.userId);
      if (isActive(person)) {
        return {
          status: 200,
          headers: CORS,
          jsonBody: { ok: true, active: true, tier: person.tier || "docent", status: person.status || "active", validUntil: person.validUntil || "", source: person.source || "person" },
        };
      }
      const dom = emailDomain(principal);
      if (dom) {
        const domainT = await getTable("domainentitlements", context);
        const d = await getEntity(domainT, dom);
        if (isActive(d)) {
          return {
            status: 200,
            headers: CORS,
            jsonBody: { ok: true, active: true, tier: d.tier || "school", status: d.status || "active", validUntil: d.validUntil || "", source: "domain" },
          };
        }
      }
    } catch (e) {
      context.log("ENT_READ_FAIL " + (e?.message || e));
      // Bij opslagfout: niet hard blokkeren — geef inactive terug.
    }
    return { status: 200, headers: CORS, jsonBody: { ok: true, active: false, source: "none" } };
  },
});
