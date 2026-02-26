import React from "react";
import "./style.scss";
import { Outlet, useLocation } from "@tanstack/react-router";
import { NavBar } from "../../shared/NavBar/NavBar";
import Sidebar from "../../shared/Sidebar/Sidebar";

const AuthLayout = () => {
  const location = useLocation();
  return (
    <div className="auth-layout" style={{ fontFamily: "Inter, sans-serif" }}>
      {location.pathname === "/" && <Sidebar />}
      <div style={{ width: "100%" }}>
        {location.pathname === "/" && <NavBar />}
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
};

export default AuthLayout;
