import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "../../utils/api";
import { ensureMe } from "../../utils/auth";

export default function Login() {
  const nav = useNavigate();
  const qc = useQueryClient();

  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("admin123");
  const [err, setErr] = useState<string | null>(null);

  async function onLogin() {
    setErr(null);
    try {
      await apiFetch<{ ok: boolean }>("/auth/login", {
        method: "POST",
        body: { email, password },
      });
      await ensureMe(qc);
      nav({ to: "/dashboard" as any, replace: true });
    } catch (e: any) {
      setErr(e?.message ?? "Login failed");
    }
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <h2>Login</h2>
      <div style={{ display: "grid", gap: 8 }}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{ width: "100%" }}
          />
        </label>
        <button onClick={onLogin}>Login</button>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          Seed superadmin: <b>admin@test.com</b> / <b>admin123</b>
        </div>
        {err && <div style={{ color: "crimson" }}>{err}</div>}
      </div>
    </div>
  );
}
