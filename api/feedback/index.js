/* eslint-disable */
"use strict";

/**
 * POST /api/feedback
 *
 * SWA-managed Function. Accepteert anonieme feedback. Logt via
 * context.log — SWA pipet die automatisch door naar de gekoppelde
 * Application Insights resource (zelfde connection string als de
 * frontend gebruikt).
 *
 * Body:
 *   { message: string (required, max 4000), name?, role?, rating?, page? }
 *
 * Response:
 *   200 { ok: true, id }
 *   400 { ok: false, error: 'invalid_message' }
 */

function isString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

module.exports = async function (context, req) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "3600",
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  };

  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: corsHeaders };
    return;
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const message = (body.message || "").toString().trim();
  if (!isString(message) || message.length > 4000) {
    context.res = {
      status: 400,
      headers: corsHeaders,
      body: { ok: false, error: "invalid_message" },
    };
    return;
  }

  const id =
    "fb_" +
    Date.now().toString(36) +
    "_" +
    Math.random().toString(36).slice(2, 8);

  const payload = {
    id,
    receivedAt: new Date().toISOString(),
    message,
    name: (body.name || "").toString().slice(0, 120) || null,
    page: (body.page || "").toString().slice(0, 200) || null,
    role: (body.role || "").toString().slice(0, 80) || null,
    rating: Number.isFinite(body.rating)
      ? Math.max(1, Math.min(5, Math.round(body.rating)))
      : null,
    referer: req.headers?.["referer"] || null,
    ua: (req.headers?.["user-agent"] || "").slice(0, 200) || null,
  };

  // Custom App Insights-friendly log: structured + tagged for easy query.
  // Met SWA-managed Functions wordt context.log automatisch naar de
  // gekoppelde Application Insights gestuurd.
  context.log("FEEDBACK_RECEIVED " + JSON.stringify(payload));

  context.res = {
    status: 200,
    headers: corsHeaders,
    body: { ok: true, id },
  };
};
