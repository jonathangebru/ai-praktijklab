import { trackEvent } from "./appInsights";

/* Start een Mollie-checkout voor de gekozen tier en stuurt de docent door naar
 * de betaalpagina. Gooit een fout als betalingen (nog) niet zijn ingericht. */
export async function startCheckout(tier = "docent") {
  let res;
  try {
    res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier }),
    });
  } catch {
    throw new Error("Geen verbinding met de betaaldienst.");
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (res.ok && data?.checkoutUrl) {
    trackEvent("checkout-start", { tier });
    window.location.href = data.checkoutUrl;
    return;
  }
  const code = data?.error || `status ${res.status}`;
  trackEvent("checkout-fail", { tier, code });
  if (code === "payments_not_configured") {
    throw new Error("Online betalen wordt binnenkort geactiveerd — neem intussen contact op via het formulier.");
  }
  throw new Error(`Afrekenen lukte niet (${code}).`);
}
