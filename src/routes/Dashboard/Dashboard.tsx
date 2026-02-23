import { useState } from "react";
import { apiFetch } from "../../utils/api";

export default function DashboardPage() {
  const [msg, setMsg] = useState("");

  async function callProtected() {
    setMsg("Calling /protected/ping ...");
    try {
      const res = await apiFetch<{ ok: boolean; message: string }>(
        "/protected/ping"
      );
      setMsg(res.message);
    } catch (e: any) {
      setMsg(`Failed: ${e?.message ?? "unknown"}`);
    }
  }

  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      <button onClick={callProtected}>Call Protected API</button>
      <div style={{ marginTop: 10 }}>{msg}</div>
      <p style={{ opacity: 0.8 }}>
        Access token expires in ~60s. Next call triggers refresh automatically
        and retries.
      </p>
    </div>
  );
}
