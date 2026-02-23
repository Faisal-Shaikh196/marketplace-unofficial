import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "../../utils/api";
import { ensureMe } from "../../utils/auth";
import type { Role } from "../../utils/rbac";

const ALL_ROLES: Role[] = ["user", "developer", "manufacturer", "superadmin"];

export default function Register() {
  const nav = useNavigate();
  const qc = useQueryClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // for testing: multi-role selection
  const [roles, setRoles] = useState<Role[]>(["user"]);
  const [err, setErr] = useState<string | null>(null);

  function toggleRole(role: Role) {
    setRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  }

  async function onRegister() {
    setErr(null);
    try {
      await apiFetch<{ ok: boolean }>("/auth/register", {
        method: "POST",
        body: { email, password, roles },
      });
      await ensureMe(qc);
      nav({ to: "/dashboard" as any, replace: true });
    } catch (e: any) {
      setErr(e?.message ?? "Registration failed");
    }
  }

  return (
    <div style={{ maxWidth: 460 }}>
      <h2>Register</h2>
      <div style={{ display: "grid", gap: 10 }}>
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

        <div>
          <div style={{ marginBottom: 6 }}>Roles (testing)</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {ALL_ROLES.map((r) => (
              <label
                key={r}
                style={{ display: "flex", gap: 6, alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={roles.includes(r)}
                  onChange={() => toggleRole(r)}
                />
                {r}
              </label>
            ))}
          </div>
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
            Superadmin will pass all RBAC checks automatically.
          </div>
        </div>

        <button onClick={onRegister}>Register</button>
        {err && <div style={{ color: "crimson" }}>{err}</div>}
      </div>
    </div>
  );
}
