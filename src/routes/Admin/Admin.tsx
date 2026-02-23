import { useState } from "react";
import { apiFetch } from "../../utils/api";

export default function AdminPage() {
  const [msg, setMsg] = useState("");

  async function callAdmin() {
    setMsg("Calling /protected/admin ...");
    try {
      const res = await apiFetch<{ ok: boolean; area: string }>(
        "/protected/admin"
      );
      setMsg(`OK: ${res.area}`);
    } catch (e: any) {
      setMsg(`Failed: ${e?.message ?? "unknown"}`);
    }
  }

  return (
    <div>
      <h2>Superadmin Area (superadmin only)</h2>
      <button onClick={callAdmin}>Call Admin API</button>
      <div style={{ marginTop: 10 }}>{msg}</div>
    </div>
  );
}
