import { Link } from "@tanstack/react-router";
import { authContext } from "../../context/auth.store";
import { observe } from "@legendapp/state";

export default function Home() {
  const { isLoggedIn } = authContext;
  observe(() => {
    isLoggedIn.get();
  });
  return (
    <div>
      <h2>Home (Public)</h2>
      {!isLoggedIn.get() && (
        <>
          {" "}
          <p>
            Go to <Link to={"/login" as any}>Login</Link> or{" "}
            <Link to={"/register" as any}>Register</Link>
          </p>
          <p>
            Then try routes: <Link to={"/dashboard" as any}>Dashboard</Link>,{" "}
            <Link to={"/dev" as any}>Dev</Link>,{" "}
            <Link to={"/manufacturer" as any}>Manufacturer</Link>,{" "}
            <Link to={"/admin" as any}>Admin</Link>
          </p>
        </>
      )}
    </div>
  );
}
