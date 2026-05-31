/* eslint-disable */
"use strict";

/**
 * POST /api/feedback
 *
 * Accepteert anonieme feedback uit het demo-platform en logt 'em als
 * custom event in Application Insights. Geen database — alles loopt via
 * AI's query-interface (Kusto) zodat je daar later filters op kunt zetten.
 *
 * Body shape:
 *   { message: string (required, max 4000), name?: string, page?: string,
 *     role?: string, rating?: number 1..5 }
 *
 * Response:
 *   200 { ok: true, id: <eventId> }
 *   400 { ok: false, error: 'invalid_message' }
 *   429 { ok: false, error: 'rate_limited' }  (zachte limiet)
 */

const appInsights = require("applicationinsights");

let client = null;
function getClient(context) {
  if (client) return client;
  const cs = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING;
  if (!cs) {
    context.log.warn(
      "APPLICATIONINSIGHTS_CONNECTION_STRING ontbreekt — feedback wordt alleen in functie-log gezet"
    );
    return null;
  }
  try {
    appInsights
      .setup(cs)
      .setAutoCollectConsole(false)
      .setAutoCollectExceptions(false)
      .setAutoCollectPerformance(false)
      .setAutoCollectRequests(false)
      .setAutoCollectDependencies(false)
      .setSendLiveMetrics(false)
      .start();
    client = appInsights.defaultClient;
  } catch (e) {
    context.log.error("AI init faalde", e);
  }
  return client;
}

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

  const body = req.body || {};
  const message = (body.message || "").toString().trim();

  if (!isString(message) || message.length > 4000) {
    context.res = {
      status: 400,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: "invalid_message" }),
    };
    return;
  }

  const id =
    "fb_" +
    Date.now().toString(36) +
    "_" +
    Math.random().toString(36).slice(2, 8);

  const properties = {
    id,
    message,
    name: (body.name || "").toString().slice(0, 120) || null,
    page: (body.page || "").toString().slice(0, 200) || null,
    role: (body.role || "").toString().slice(0, 80) || null,
    rating: Number.isFinite(body.rating)
      ? Math.max(1, Math.min(5, Math.round(body.rating)))
      : null,
    referer: req.headers?.["referer"] || null,
    ua: (req.headers?.["user-agent"] || "").slice(0, 200) || null,
    receivedAt: new Date().toISOString(),
  };

  const c = getClient(context);
  if (c) {
    try {
      c.trackEvent({ name: "feedback-submitted", properties });
    } catch (e) {
      context.log.error("trackEvent faalde", e);
    }
  }
  context.log("Feedback ontvangen", JSON.stringify({ id, len: message.length }));

  context.res = {
    status: 200,
    headers: corsHeaders,
    body: JSON.stringify({ ok: true, id }),
  };
};
