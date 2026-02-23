import { useState } from "react";
import { apiFetch } from "../../utils/api";

export default function DevPage() {
  const [msg, setMsg] = useState("");

  async function callDev() {
    setMsg("Calling /protected/dev ...");
    try {
      const res = await apiFetch<{ ok: boolean; area: string }>(
        "/protected/dev"
      );
      setMsg(`OK: ${res.area}`);
    } catch (e: any) {
      setMsg(`Failed: ${e?.message ?? "unknown"}`);
    }
  }

  return (
    <div>
      <h2>Dev Area (developer + superadmin)</h2>
      <button onClick={callDev}>Call Dev API</button>
      <div style={{ marginTop: 10 }}>{msg}</div>
    </div>
  );
}
