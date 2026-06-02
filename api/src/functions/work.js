/* eslint-disable */
"use strict";

/**
 * /api/work — per-gebruiker werkruimte-opslag (Azure Table Storage)
 *
 *   GET    /api/work   -> { ok, work: { [slug]: {fields} }, promptkit: [...] }
 *   POST   /api/work   body { slug, data }        -> upsert één les
 *   POST   /api/work   body { promptkit: [...] }   -> vervang de promptkit
 *   DELETE /api/work   -> wis alle data van de gebruiker (AVG · "verwijder mijn werk")
 *
 * Identiteit komt uit de SWA-header `x-ms-client-principal` (base64 JSON).
 *   · geen geldige identiteit  -> 401 unauthenticated
 *   · geen Storage-config      -> 503 storage_unconfigured
 * In beide gevallen valt de frontend stilletjes terug op localStorage, zodat
 * de app lokaal blijft werken en vanzelf gaat synchroniseren zodra login +
 * storage live staan.
 *
 * Storage-layout (één tabel, default "PraktijklabWork"):
 *   PartitionKey = userId (gesanitized)
 *   RowKey       = gesanitizede slug   |  "__promptkit__"
 *   slug         = originele slug (string)
 *   data         = JSON-string van { field: value }  (of de promptkit-array)
 *   updatedAt    = ISO-timestamp
 *
 * Let op: een string-property in Table Storage kan tot ~32k tekens bevatten.
 * Eén lesopzet past daar ruim binnen. Mocht een upsert toch falen, dan vangt
 * de frontend dat op via de localStorage-fallback.
 */

const { app } = require("@azure/functions");
const { TableClient, odata } = require("@azure/data-tables");

const TABLE_NAME = process.env.WORK_TABLE_NAME || "PraktijklabWork";
const PROMPTKIT_ROW = "__promptkit__";
const MAX_PROMPTKIT = 500;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
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

/* SWA levert de ingelogde gebruiker als base64-gecodeerde JSON-header. */
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

/* Table keys mogen geen control-chars of de tekens / \ # ? bevatten.
 * We bouwen de sleutel teken-voor-teken op — bewust geen regex, om
 * onbedoelde escape-fouten te vermijden. */
function sanitizeKey(s) {
  const str = String(s);
  let out = "";
  for (let i = 0; i < str.length && out.length < 512; i++) {
    const ch = str[i];
    const code = str.charCodeAt(i);
    const forbidden =
      code < 0x20 || code === 0x7f || ch === "/" || ch === "\\" || ch === "#" || ch === "?";
    out += forbidden ? "_" : ch;
  }
  return out || "_";
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
      // 409 = tabel bestaat al; al het andere loggen maar doorgaan.
      if (e?.statusCode !== 409) {
        context?.log("WORK_CREATE_TABLE " + (e?.message || e));
      }
    }
    _ensured = true;
  }
  return _client;
}

app.http("work", {
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  authLevel: "anonymous",
  route: "work",
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
    const userId = sanitizeKey(principal.userId);

    const table = await getTable(context);
    if (!table) {
      return {
        status: 503,
        headers: CORS,
        jsonBody: { ok: false, error: "storage_unconfigured" },
      };
    }

    try {
      /* ─── GET — alles van deze gebruiker ──────────────────────────────── */
      if (req.method === "GET") {
        const work = {};
        let promptkit = [];
        const entities = table.listEntities({
          queryOptions: { filter: odata`PartitionKey eq ${userId}` },
        });
        for await (const e of entities) {
          if (e.rowKey === PROMPTKIT_ROW) {
            try {
              const v = JSON.parse(e.data || "[]");
              if (Array.isArray(v)) promptkit = v;
            } catch {
              /* corrupte rij — negeer */
            }
          } else {
            try {
              const slug = e.slug || e.rowKey;
              const data = JSON.parse(e.data || "{}");
              if (data && typeof data === "object") work[slug] = data;
            } catch {
              /* corrupte rij — negeer */
            }
          }
        }
        return {
          status: 200,
          headers: CORS,
          jsonBody: { ok: true, work, promptkit },
        };
      }

      /* ─── POST — upsert één les óf vervang promptkit ───────────────────── */
      if (req.method === "POST") {
        const body = await readBody(req);

        if (Array.isArray(body.promptkit)) {
          const list = body.promptkit.slice(0, MAX_PROMPTKIT);
          await table.upsertEntity(
            {
              partitionKey: userId,
              rowKey: PROMPTKIT_ROW,
              slug: PROMPTKIT_ROW,
              data: JSON.stringify(list),
              updatedAt: new Date().toISOString(),
            },
            "Replace"
          );
          return { status: 200, headers: CORS, jsonBody: { ok: true } };
        }

        const slug = typeof body.slug === "string" ? body.slug.trim() : "";
        if (!slug) {
          return {
            status: 400,
            headers: CORS,
            jsonBody: { ok: false, error: "slug_required" },
          };
        }
        const data =
          body.data && typeof body.data === "object" ? body.data : {};
        await table.upsertEntity(
          {
            partitionKey: userId,
            rowKey: sanitizeKey(slug),
            slug,
            data: JSON.stringify(data),
            updatedAt: new Date().toISOString(),
          },
          "Replace"
        );
        return { status: 200, headers: CORS, jsonBody: { ok: true } };
      }

      /* ─── DELETE — wis alles van deze gebruiker (AVG) ──────────────────── */
      if (req.method === "DELETE") {
        const entities = table.listEntities({
          queryOptions: { filter: odata`PartitionKey eq ${userId}` },
        });
        const dels = [];
        for await (const e of entities) {
          dels.push(
            table.deleteEntity(e.partitionKey, e.rowKey).catch(() => {})
          );
        }
        await Promise.all(dels);
        return {
          status: 200,
          headers: CORS,
          jsonBody: { ok: true, deleted: dels.length },
        };
      }

      return {
        status: 405,
        headers: CORS,
        jsonBody: { ok: false, error: "method_not_allowed" },
      };
    } catch (err) {
      context.log("WORK_ERROR " + (err?.message || err));
      return {
        status: 500,
        headers: CORS,
        jsonBody: { ok: false, error: "storage_error" },
      };
    }
  },
});
