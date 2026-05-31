/* eslint-disable */
"use strict";

/**
 * POST /api/feedback
 *
 * Azure Functions v4 programming model. SWA-managed. Logt via context.log
 * naar de gekoppelde Application Insights resource.
 */

const { app } = require("@azure/functions");

function isString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

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

app.http("feedback", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "feedback",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") {
      return { status: 204, headers: corsHeaders };
    }

    const body = await readBody(req);
    const message = (body.message || "").toString().trim();

    if (!isString(message) || message.length > 4000) {
      return {
        status: 400,
        headers: corsHeaders,
        jsonBody: { ok: false, error: "invalid_message" },
      };
    }

    const id =
      "fb_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).slice(2, 8);

    const referer =
      typeof req.headers?.get === "function"
        ? req.headers.get("referer")
        : req.headers?.["referer"];
    const ua =
      typeof req.headers?.get === "function"
        ? req.headers.get("user-agent")
        : req.headers?.["user-agent"];

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
      referer: referer || null,
      ua: (ua || "").slice(0, 200) || null,
    };

    context.log("FEEDBACK_RECEIVED " + JSON.stringify(payload));

    return {
      status: 200,
      headers: corsHeaders,
      jsonBody: { ok: true, id },
    };
  },
});
