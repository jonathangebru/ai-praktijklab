/* eslint-disable */
"use strict";

/**
 * /api/progress — beheerder-only, geanonimiseerde voortgangsaggregaten.
 *
 *   GET /api/progress -> {
 *     ok, generatedAt,
 *     teachers,            // aantal unieke docenten met opgeslagen werk
 *     entries,             // aantal les-rijen met daadwerkelijk werk
 *     lessonsWithWork,     // aantal unieke lessen waar werk op staat
 *     fieldsFilled,        // totaal aantal ingevulde velden
 *     promptkitTotal,      // som van alle bewaarde prompts
 *     promptkitUsers,      // aantal docenten met een niet-lege promptkit
 *     lessons: [{ slug, teachers, fields, lastUpdated }],  // per les, gesorteerd
 *     weekly:  [{ week, rows }]                            // activiteit laatste 6 wkn
 *   }
 *
 * Leest dezelfde tabel als /api/work, maar over ALLE partities (alle docenten).
 * Geeft uitsluitend AGGREGATEN terug — nooit userId's of herleidbare velden (AVG).
 *
 * Toegang:
 *   · geen identiteit       -> 401 unauthenticated
 *   · rol ≠ "beheerder"     -> 403 forbidden
 *   · geen storage-config   -> 503 storage_unconfigured
 * In al deze gevallen valt het dashboard stilletjes terug op voorbeelddata,
 * net als bij /api/work — geen regressie, "licht aan" zodra alles live staat.
 */

const { app } = require("@azure/functions");
const { TableClient } = require("@azure/data-tables");

const TABLE_NAME = process.env.WORK_TABLE_NAME || "PraktijklabWork";
const PROMPTKIT_ROW = "__promptkit__";
/* Wie mag de aggregaten zien: beheerders én management (directeuren,
 * teamleiders). Het endpoint levert uitsluitend geanonimiseerde totalen. */
const VIEWER_ROLES = ["beheerder", "manager"];
const MAX_ROWS = 50000; // veiligheidsplafond tegen runaway-scans
const TREND_WEEKS = 6; // aantal weken in de activiteitstrend

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
}

/* SWA levert de ingelogde gebruiker als base64-gecodeerde JSON-header,
 * inclusief userRoles. */
function getPrincipal(req) {
  const raw = getHeader(req, "x-ms-client-principal");
  if (!raw) return null;
  try {
    const json = Buffer.from(raw, "base64").toString("utf8");
    const p = JSON.parse(json);
    return p && p.userId ? p : null;
  } catch {
    return null;
  }
}

function getConn() {
  return (
    process.env.WORK_STORAGE_CONNECTION ||
    process.env.AzureWebJobsStorage ||
    ""
  );
}

let _client = null;
let _ensured = false;
async function getTable(context) {
  const conn = getConn();
  if (!conn) return null;
  if (!_client) {
    _client = TableClient.fromConnectionString(conn, TABLE_NAME, {
      allowInsecureConnection:
        conn.includes("127.0.0.1") || conn.includes("UseDevelopmentStorage"),
    });
  }
  if (!_ensured) {
    try {
      await _client.createTable();
    } catch (e) {
      // 409 = bestaat al; al het andere loggen maar doorgaan.
      if (e?.statusCode !== 409) {
        context?.log("PROGRESS_CREATE_TABLE " + (e?.message || e));
      }
    }
    _ensured = true;
  }
  return _client;
}

/* ISO-8601 weeksleutel "YYYY-Www" voor een Date. */
function isoWeekKey(d) {
  const date = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
  );
  const day = date.getUTCDay() || 7; // ma=1 … zo=7
  date.setUTCDate(date.getUTCDate() + 4 - day); // dichtstbijzijnde donderdag
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/* De laatste n ISO-weeksleutels, chronologisch (oud → nieuw). */
function lastWeekKeys(n) {
  const keys = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i * 7);
    keys.push(isoWeekKey(d));
  }
  return keys;
}

/* Telt niet-lege waarden in een les-data-object. */
function countFilled(data) {
  let n = 0;
  for (const val of Object.values(data)) {
    if (typeof val === "string") {
      if (val.trim() !== "") n++;
    } else if (val != null && val !== "") {
      n++;
    }
  }
  return n;
}

app.http("progress", {
  methods: ["GET", "OPTIONS"],
  authLevel: "anonymous",
  route: "progress",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204, headers: CORS };

    const principal = getPrincipal(req);
    if (!principal) {
      return {
        status: 401,
        headers: CORS,
        jsonBody: { ok: false, error: "unauthenticated" },
      };
    }

    const roles = Array.isArray(principal.userRoles) ? principal.userRoles : [];
    if (!VIEWER_ROLES.some((r) => roles.includes(r))) {
      return {
        status: 403,
        headers: CORS,
        jsonBody: { ok: false, error: "forbidden" },
      };
    }

    const table = await getTable(context);
    if (!table) {
      return {
        status: 503,
        headers: CORS,
        jsonBody: { ok: false, error: "storage_unconfigured" },
      };
    }

    try {
      const users = new Set();
      const promptkitUsers = new Set();
      const lessonMap = new Map(); // slug -> { users:Set, fields, lastUpdated }

      const weekKeys = lastWeekKeys(TREND_WEEKS);
      const weekIndex = new Map(weekKeys.map((k, i) => [k, i]));
      const weekly = weekKeys.map((week) => ({ week, rows: 0 }));

      let entries = 0;
      let fieldsFilled = 0;
      let promptkitTotal = 0;
      let scanned = 0;

      for await (const e of table.listEntities()) {
        if (++scanned > MAX_ROWS) break;
        const pk = e.partitionKey;
        if (pk) users.add(pk);

        // Wekelijkse activiteit op basis van updatedAt.
        if (e.updatedAt) {
          const t = new Date(e.updatedAt);
          if (!isNaN(t.getTime())) {
            const idx = weekIndex.get(isoWeekKey(t));
            if (idx !== undefined) weekly[idx].rows += 1;
          }
        }

        // Promptkit-rij.
        if (e.rowKey === PROMPTKIT_ROW) {
          try {
            const v = JSON.parse(e.data || "[]");
            if (Array.isArray(v) && v.length) {
              promptkitTotal += v.length;
              if (pk) promptkitUsers.add(pk);
            }
          } catch {
            /* corrupte rij — negeer */
          }
          continue;
        }

        // Overige meta-rijen ("__done__" e.d.) zijn geen lessen — overslaan.
        if (String(e.rowKey || "").startsWith("__")) continue;

        // Gewone les-rij.
        let data = null;
        try {
          data = JSON.parse(e.data || "{}");
        } catch {
          continue;
        }
        if (!data || typeof data !== "object") continue;
        const filled = countFilled(data);
        if (filled === 0) continue; // lege rij telt niet als "werk"

        entries += 1;
        fieldsFilled += filled;

        const slug = e.slug || e.rowKey;
        let rec = lessonMap.get(slug);
        if (!rec) {
          rec = { users: new Set(), fields: 0, lastUpdated: null };
          lessonMap.set(slug, rec);
        }
        if (pk) rec.users.add(pk);
        rec.fields += filled;
        if (e.updatedAt && (!rec.lastUpdated || e.updatedAt > rec.lastUpdated)) {
          rec.lastUpdated = e.updatedAt;
        }
      }

      const lessons = Array.from(lessonMap.entries())
        .map(([slug, r]) => ({
          slug,
          teachers: r.users.size,
          fields: r.fields,
          lastUpdated: r.lastUpdated,
        }))
        .sort((a, b) => b.teachers - a.teachers || b.fields - a.fields);

      return {
        status: 200,
        headers: CORS,
        jsonBody: {
          ok: true,
          generatedAt: new Date().toISOString(),
          teachers: users.size,
          entries,
          lessonsWithWork: lessons.length,
          fieldsFilled,
          promptkitTotal,
          promptkitUsers: promptkitUsers.size,
          lessons,
          weekly,
        },
      };
    } catch (err) {
      context.log("PROGRESS_ERROR " + (err?.message || err));
      return {
        status: 500,
        headers: CORS,
        jsonBody: { ok: false, error: "storage_error" },
      };
    }
  },
});
