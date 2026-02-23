import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div>
      <h2>Home (Public)</h2>
      <p>
        Go to <Link to="/login">Login</Link> or{" "}
        <Link to="/register">Register</Link>
      </p>
      <p>
        Then try routes: <Link to="/dashboard">Dashboard</Link>,{" "}
        <Link to="/dev">Dev</Link>, <Link to="/manufacturer">Manufacturer</Link>
        , <Link to="/admin">Admin</Link>
      </p>
    </div>
  );
}
