import { trackEvent } from "./appInsights";

/* Vraagt een ondertekende Open Badge 3.0 aan bij /api/badge. De ontvanger-
 * identiteit wordt server-side uit de SWA-login gehaald; de client levert
 * alleen de achievement-definitie aan. Retourneert { ok, jwt, signed,
 * verifyUrl, credential }. */
export async function requestBadge({ kind, id, name, description, criteria, signal }) {
  let res;
  try {
    res = await fetch("/api/badge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, id, name, description, criteria }),
      signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    throw new Error("Geen verbinding met de badge-service.");
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok || !data?.ok) {
    const detail = data?.error || `status ${res.status}`;
    trackEvent("badge-request-fail", { kind, id, detail });
    if (detail === "entitlement_required") {
      throw new Error(
        "Een verifieerbare badge zit in het betaalde pakket — activeer je toegang om 'm uit te geven."
      );
    }
    throw new Error(`Badge-uitgifte werkte niet (${detail}).`);
  }
  trackEvent("badge-issued", { kind, id, signed: !!data.signed });
  return data;
}

export function downloadBadge(data, filenameBase) {
  // Download de open badge als .json (de credential) — importeerbaar in wallets.
  const blob = new Blob([JSON.stringify(data.credential, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filenameBase}.openbadge.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
