import { useState } from "react";
import { apiFetch } from "../../utils/api";

export default function ManufacturerPage() {
  const [msg, setMsg] = useState("");

  async function callManu() {
    setMsg("Calling /protected/manufacturer ...");
    try {
      const res = await apiFetch<{ ok: boolean; area: string }>(
        "/protected/manufacturer"
      );
      setMsg(`OK: ${res.area}`);
    } catch (e: any) {
      setMsg(`Failed: ${e?.message ?? "unknown"}`);
    }
  }

  return (
    <div>
      <h2>Manufacturer Area (manufacturer + superadmin)</h2>
      <button onClick={callManu}>Call Manufacturer API</button>
      <div style={{ marginTop: 10 }}>{msg}</div>
    </div>
  );
}
