import { ApplicationInsights } from "@microsoft/applicationinsights-web";

/* ──────────────────────────────────────────────────────────────────────────
 * App Insights — minimaal opgezet voor anonieme usage-tracking.
 *
 * Geen persoonsgegevens. We sturen:
 *   · automatic pageviews (route, duration)
 *   · custom events (lesson-opened, prompt-saved, feedback-sent)
 *   · uncaught errors
 *
 * Disable in lokale dev via VITE_DISABLE_APPINSIGHTS=1 in .env.local.
 * ──────────────────────────────────────────────────────────────────────── */

const CONNECTION_STRING =
  "InstrumentationKey=d42f476e-a805-4042-952f-818685e507a9;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=5fc35871-9698-4723-8d7b-667f104ce08d";

let appInsights = null;

export function initAppInsights() {
  if (appInsights) return appInsights;
  if (typeof window === "undefined") return null;
  if (import.meta.env.VITE_DISABLE_APPINSIGHTS === "1") return null;

  appInsights = new ApplicationInsights({
    config: {
      connectionString: CONNECTION_STRING,
      enableAutoRouteTracking: true,
      autoTrackPageVisitTime: true,
      enableCorsCorrelation: false,
      enableRequestHeaderTracking: false,
      enableResponseHeaderTracking: false,
      disableExceptionTracking: false,
      // Anonimiseer waar mogelijk
      disableTelemetry: false,
      isStorageUseDisabled: false,
      isCookieUseDisabled: false,
    },
  });

  appInsights.loadAppInsights();
  appInsights.trackPageView();

  return appInsights;
}

export function trackEvent(name, properties = {}) {
  if (!appInsights) return;
  try {
    appInsights.trackEvent({ name, properties });
  } catch {
    /* swallow */
  }
}

export function getAppInsights() {
  return appInsights;
}
