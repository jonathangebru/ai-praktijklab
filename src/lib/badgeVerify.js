/* ──────────────────────────────────────────────────────────────────────────
 * Badge-verificatie (frontend, publiek). Verifieert een VC-JWT (EdDSA /
 * Ed25519) tegen de publieke uitgever-sleutel met Web Crypto. De publieke
 * sleutel is veilig om mee te leveren; alleen de private sleutel (server-env)
 * kan tekenen. Zelfde sleutel staat ook op /.well-known/jwks.json.
 * ─────────────────────────────────────────────────────────────────────── */

export const ISSUER_PUBLIC_JWK = {
  crv: "Ed25519",
  x: "uanp9bKHB1I9WSjGipv8-mzb6oxjfLn4iB3kK9j6MKY",
  kty: "OKP",
  kid: "praktijklab-badge-1",
  alg: "EdDSA",
  use: "sig",
};

function b64uToBytes(s) {
  s = String(s).replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function decodeSegment(seg) {
  return JSON.parse(new TextDecoder().decode(b64uToBytes(seg)));
}

/* Leest payload zonder te verifiëren (voor weergave bij fouten). */
export function peekPayload(jwt) {
  try {
    return decodeSegment(String(jwt).trim().split(".")[1]);
  } catch {
    return null;
  }
}

export async function verifyBadgeJwt(jwt) {
  const token = String(jwt || "").trim();
  const parts = token.split(".");
  if (parts.length !== 3) {
    return { ok: false, error: "Dit is geen geldig badge-token (verwacht drie delen)." };
  }
  const [h, p, s] = parts;
  let header, payload;
  try {
    header = decodeSegment(h);
    payload = decodeSegment(p);
  } catch {
    return { ok: false, error: "Het token kon niet worden gelezen." };
  }
  if (header.alg !== "EdDSA") {
    return { ok: false, error: `Onverwacht algoritme: ${header.alg}.`, payload };
  }
  if (!(window.crypto?.subtle)) {
    return { ok: false, error: "Deze browser ondersteunt verificatie niet.", payload };
  }
  try {
    const key = await crypto.subtle.importKey(
      "jwk",
      ISSUER_PUBLIC_JWK,
      { name: "Ed25519" },
      false,
      ["verify"]
    );
    const data = new TextEncoder().encode(h + "." + p);
    const ok = await crypto.subtle.verify({ name: "Ed25519" }, key, b64uToBytes(s), data);
    return {
      ok,
      payload,
      error: ok
        ? null
        : "Handtekening ongeldig — dit certificaat is niet door AI PraktijkLab uitgegeven of is gewijzigd.",
    };
  } catch (e) {
    return {
      ok: false,
      payload,
      error:
        "Verificatie kon niet worden uitgevoerd in deze browser (Ed25519 niet ondersteund): " +
        (e?.message || e),
    };
  }
}
