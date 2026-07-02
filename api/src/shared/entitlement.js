/* eslint-disable */
"use strict";

/**
 * Gedeelde entitlement-laag voor de betaalde API's (coach, chat, badge) én het
 * /api/entitlement-endpoint. Eén bron van waarheid voor:
 *   (a) staat de paywall aan?            → isEnforced()
 *   (b) heeft deze gebruiker toegang?     → lookupEntitlement(principal)
 *   (c) mag deze module?                  → moduleAllowed() / checkAccess()
 *
 * VEILIGHEIDSVLAG — ÉÉN schakelaar: enforcement staat UIT tenzij de app-setting
 * ENTITLEMENT_ENFORCED exact "true" is. Zolang die uit staat is checkAccess()
 * een no-op (iedereen door, geen storage-call, geen extra latency) — precies
 * zoals nu. Zet de app-setting op "true" om de paywall server-side te
 * activeren; /api/entitlement geeft die vlag door aan de frontend, zodat één
 * app-setting UI én server tegelijk omzet (geen herbouw nodig).
 *
 * De free-module-uitzondering leunt op een client-opgegeven moduleId en is dus
 * spoofbaar — dat is bewust acceptabel: de lescontent zit toch al in de
 * client-bundle, dus wat we hier beschermen is AI-compute + ondertekende
 * badges, en de gratis module is per definitie een gratis proeftuin. Spiegelt
 * exact src/lib/entitlement.js zodat UI en server nooit uit elkaar lopen.
 */

const { TableClient } = require("@azure/data-tables");

// Gratis zonder betaling (spiegelt FREE_MODULE_IDS in src/lib/entitlement.js).
const FREE_MODULE_IDS = ["basiscursus-ai"];

function isEnforced() {
  return String(process.env.ENTITLEMENT_ENFORCED || "").trim().toLowerCase() === "true";
}

function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
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
function getTable(name) {
  const conn = getConn();
  if (!conn) return null;
  if (!_clients[name]) {
    // Leespad: geen createTable (dat doen de POST/webhook-schrijvers). Een
    // ontbrekende tabel geeft 404 → inactive, geen crash.
    _clients[name] = TableClient.fromConnectionString(conn, name, {
      allowInsecureConnection: conn.includes("127.0.0.1") || conn.includes("UseDevelopmentStorage"),
    });
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
    if (e?.statusCode === 404) return null; // onbekende rij óf ontbrekende tabel
    throw e;
  }
}

/**
 * Zoekt de entitlement van de ingelogde gebruiker: eerst per persoon, anders
 * per e-maildomein (school krijgt in één keer toegang).
 * Retour: { active, tier, status, validUntil, source }.
 * Bij een opslagfout → { active:false, source:"error" } (fail-closed, spiegelt
 * de frontend die bij een lees-/netwerkfout ook geen toegang aanneemt).
 */
async function lookupEntitlement(principal, context) {
  if (!principal) return { active: false, tier: null, status: null, validUntil: "", source: "none" };
  try {
    const person = await getEntity(getTable("entitlements"), principal.userId);
    if (isActive(person)) {
      return {
        active: true,
        tier: person.tier || "docent",
        status: person.status || "active",
        validUntil: person.validUntil || "",
        source: person.source || "person",
      };
    }
    const dom = emailDomain(principal);
    if (dom) {
      const d = await getEntity(getTable("domainentitlements"), dom);
      if (isActive(d)) {
        return {
          active: true,
          tier: d.tier || "school",
          status: d.status || "active",
          validUntil: d.validUntil || "",
          source: "domain",
        };
      }
    }
  } catch (e) {
    context?.log?.("ENT_LOOKUP_FAIL " + (e?.message || e));
    return { active: false, tier: null, status: null, validUntil: "", source: "error" };
  }
  return { active: false, tier: null, status: null, validUntil: "", source: "none" };
}

/**
 * Spiegelt src/lib/entitlement.js hasModuleAccess EXACT:
 *   - enforcement uit  → altijd toegang
 *   - gratis module    → altijd toegang
 *   - anders           → alleen met actieve entitlement
 */
function moduleAllowed(moduleId, ent, enforced) {
  if (!enforced) return true;
  if (moduleId && FREE_MODULE_IDS.includes(moduleId)) return true;
  return !!(ent && ent.active);
}

/**
 * Dé gate voor de betaalde endpoints. Eén await per aanroep, en volledig inert
 * wanneer de vlag uit staat (geen storage-call).
 *
 * @returns {Promise<{allowed:boolean, enforced:boolean, ent?:object, principal?:object}>}
 */
async function checkAccess(req, moduleId, context) {
  const enforced = isEnforced();
  if (!enforced) return { allowed: true, enforced: false };
  const principal = getPrincipal(req);
  const ent = await lookupEntitlement(principal, context);
  return { allowed: moduleAllowed(moduleId, ent, enforced), enforced: true, ent, principal };
}

module.exports = {
  FREE_MODULE_IDS,
  isEnforced,
  getPrincipal,
  lookupEntitlement,
  moduleAllowed,
  checkAccess,
};
