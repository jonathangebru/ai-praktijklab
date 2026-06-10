/* eslint-disable */
"use strict";

/**
 * /api/access — toegangsaanvragen voor het PraktijkLab.
 *
 *   POST  /api/access   (anoniem)   body { name, email, organisation, role, message }
 *                                   -> aanvraag opslaan; aanvrager ziet bevestiging
 *   GET   /api/access   (beheerder) -> alle aanvragen, nieuwste eerst
 *   PATCH /api/access   (beheerder) body { id, status } -> "nieuw" | "afgehandeld"
 *
 * Storage-layout (één tabel, default "PraktijklabAccess"):
 *   PartitionKey = "aanvraag"
 *   RowKey       = id (oplopend op tijd)
 *   props        = name/email/organisation/role/message/status/receivedAt/handledAt
 *
 * Elke aanvraag wordt ook gelogd (ACCESS_REQUEST ...) zodat hij in
 * Application Insights zichtbaar is als signaal richting Datagrid.
 */

const { app } = require("@azure/functions");
const { TableClient, odata } = require("@azure/data-tables");

const TABLE_NAME = process.env.ACCESS_TABLE_NAME || "PraktijklabAccess";
const PARTITION = "aanvraag";
const ADMIN_ROLE = "beheerder";
const MAX_LIST = 500;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
}

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

function isAdmin(req) {
  const p = getPrincipal(req);
  const roles = Array.isArray(p?.userRoles) ? p.userRoles : [];
  return roles.includes(ADMIN_ROLE);
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

function clean(v, max) {
  return (v == null ? "" : String(v)).trim().slice(0, max);
}

function looksLikeEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
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
      if (e?.statusCode !== 409) {
        context?.log("ACCESS_CREATE_TABLE " + (e?.message || e));
      }
    }
    _ensured = true;
  }
  return _client;
}

/* E-mailnotificatie bij een nieuwe aanvraag — via Azure Communication
 * Services. Zonder ACS_EMAIL_CONNECTION (bv. lokaal) wordt dit stil
 * overgeslagen; een mailfout breekt de aanvraag nooit. */
let _emailClient = null;
async function notifyDatagrid(context, r) {
  const conn = process.env.ACS_EMAIL_CONNECTION || "";
  const to = process.env.ACCESS_NOTIFY_TO || "";
  const from = process.env.ACCESS_NOTIFY_FROM || "";
  if (!conn || !to || !from) return;
  try {
    if (!_emailClient) {
      const { EmailClient } = require("@azure/communication-email");
      _emailClient = new EmailClient(conn);
    }
    const regels = [
      `Naam:        ${r.name}`,
      `E-mail:      ${r.email}`,
      `Instelling:  ${r.organisation || "—"}`,
      `Functie:     ${r.role || "—"}`,
      `Bericht:     ${r.message || "—"}`,
      `Ontvangen:   ${r.receivedAt}`,
      ``,
      `Afhandelen kan in het beheerdersdashboard:`,
      `https://praktijklab.datagrid.nl/analytics`,
    ].join("\n");
    const poller = await _emailClient.beginSend({
      senderAddress: from,
      recipients: { to: [{ address: to }] },
      content: {
        subject: `Nieuwe toegangsaanvraag · ${r.name}${
          r.organisation ? ` (${r.organisation})` : ""
        }`,
        plainText: `Er is een nieuwe toegangsaanvraag voor het AI PraktijkLab.\n\n${regels}\n`,
      },
      replyTo: [{ address: r.email, displayName: r.name }],
    });
    await poller.pollUntilDone();
    context.log("ACCESS_NOTIFY_SENT " + r.id);
  } catch (err) {
    context.log("ACCESS_NOTIFY_FAIL " + (err?.message || err));
  }
}

app.http("access", {
  methods: ["GET", "POST", "PATCH", "OPTIONS"],
  authLevel: "anonymous",
  route: "access",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") return { status: 204, headers: CORS };

    try {
      /* ─── POST — nieuwe aanvraag (anoniem toegestaan) ─────────────────── */
      if (req.method === "POST") {
        const body = await readBody(req);

        // Honeypot: echte mensen vullen dit verborgen veld nooit in.
        if (clean(body.website, 10)) {
          return { status: 200, headers: CORS, jsonBody: { ok: true } };
        }

        const name = clean(body.name, 120);
        const email = clean(body.email, 160).toLowerCase();
        const organisation = clean(body.organisation, 160);
        const role = clean(body.role, 80);
        const message = clean(body.message, 1500);

        if (!name || !looksLikeEmail(email)) {
          return {
            status: 400,
            headers: CORS,
            jsonBody: { ok: false, error: "name_and_valid_email_required" },
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

        const id =
          Date.now().toString(36) +
          "-" +
          Math.random().toString(36).slice(2, 8);

        const receivedAt = new Date().toISOString();
        await table.createEntity({
          partitionKey: PARTITION,
          rowKey: id,
          name,
          email,
          organisation,
          role,
          message,
          status: "nieuw",
          receivedAt,
        });

        // Signaal richting Datagrid — zichtbaar in App Insights traces.
        context.log(
          "ACCESS_REQUEST " +
            JSON.stringify({ id, name, email, organisation, role, receivedAt })
        );

        // E-mailnotificatie naar Datagrid (best-effort: een mailfout mag de
        // aanvraag nooit laten mislukken — die staat al veilig in de tabel).
        await notifyDatagrid(context, {
          id,
          name,
          email,
          organisation,
          role,
          message,
          receivedAt,
        });

        return { status: 200, headers: CORS, jsonBody: { ok: true, id } };
      }

      /* ─── Vanaf hier alleen beheerders ────────────────────────────────── */
      if (!getPrincipal(req)) {
        return {
          status: 401,
          headers: CORS,
          jsonBody: { ok: false, error: "unauthenticated" },
        };
      }
      if (!isAdmin(req)) {
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

      /* ─── GET — alle aanvragen, nieuwste eerst ────────────────────────── */
      if (req.method === "GET") {
        const items = [];
        const entities = table.listEntities({
          queryOptions: { filter: odata`PartitionKey eq ${PARTITION}` },
        });
        for await (const e of entities) {
          items.push({
            id: e.rowKey,
            name: e.name || "",
            email: e.email || "",
            organisation: e.organisation || "",
            role: e.role || "",
            message: e.message || "",
            status: e.status || "nieuw",
            receivedAt: e.receivedAt || null,
            handledAt: e.handledAt || null,
          });
          if (items.length >= MAX_LIST) break;
        }
        items.sort((a, b) =>
          String(b.receivedAt || "").localeCompare(String(a.receivedAt || ""))
        );
        return {
          status: 200,
          headers: CORS,
          jsonBody: { ok: true, requests: items },
        };
      }

      /* ─── PATCH — status bijwerken ────────────────────────────────────── */
      if (req.method === "PATCH") {
        const body = await readBody(req);
        const id = clean(body.id, 60);
        const status = clean(body.status, 20);
        if (!id || !["nieuw", "afgehandeld"].includes(status)) {
          return {
            status: 400,
            headers: CORS,
            jsonBody: { ok: false, error: "invalid_id_or_status" },
          };
        }
        await table.updateEntity(
          {
            partitionKey: PARTITION,
            rowKey: id,
            status,
            handledAt: status === "afgehandeld" ? new Date().toISOString() : "",
          },
          "Merge"
        );
        return { status: 200, headers: CORS, jsonBody: { ok: true } };
      }

      return {
        status: 405,
        headers: CORS,
        jsonBody: { ok: false, error: "method_not_allowed" },
      };
    } catch (err) {
      context.log("ACCESS_ERROR " + (err?.message || err));
      return {
        status: 500,
        headers: CORS,
        jsonBody: { ok: false, error: "storage_error" },
      };
    }
  },
});
