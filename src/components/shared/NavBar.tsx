import { Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { logout, meQueryKey } from "../../utils/auth";

export function NavBar() {
  const qc = useQueryClient();
  const me = qc.getQueryData(meQueryKey) as any;

  const role = me?.user?.role ?? "guest";
  const email = me?.user?.email ?? "";

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link to={"/" as any} style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to={"/dashboard" as any} style={{ textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link to={"/dev" as any} style={{ textDecoration: "none" }}>
        Dev
      </Link>
      <Link to={"/manufacturer" as any} style={{ textDecoration: "none" }}>
        Manufacturer
      </Link>
      <Link to={"/admin" as any} style={{ textDecoration: "none" }}>
        Admin
      </Link>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 12, opacity: 0.8 }}>
          {role} {email ? `(${email})` : ""}
        </span>
        {email ? (
          <button
            onClick={async () => {
              await logout(qc);
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to={"/login" as any} style={{ textDecoration: "none" }}>
              Login
            </Link>
            <Link to={"/register" as any} style={{ textDecoration: "none" }}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
