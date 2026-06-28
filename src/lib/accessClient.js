/* ──────────────────────────────────────────────────────────────────────────
 * accessClient — toegangsaanvragen (/api/access).
 *
 * submitAccess  (anoniem)   → true/false
 * listAccess    (beheerder) → [{...}] of null (geen rechten / storage uit)
 * updateAccess  (beheerder) → true/false
 * ─────────────────────────────────────────────────────────────────────── */

const ENDPOINT = "/api/access";

export async function submitAccess({ name, email, organisation, role, aantal, message, website }) {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, organisation, role, aantal, message, website }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    return !!data?.ok;
  } catch {
    return false;
  }
}

export async function listAccess() {
  try {
    const res = await fetch(ENDPOINT, {
      credentials: "include",
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.ok && Array.isArray(data.requests) ? data.requests : null;
  } catch {
    return null;
  }
}

export async function updateAccess(id, status) {
  try {
    const res = await fetch(ENDPOINT, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    return !!data?.ok;
  } catch {
    return false;
  }
}
