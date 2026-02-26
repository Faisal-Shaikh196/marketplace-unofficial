import React from "react";
import "./style.scss";
import { Outlet } from "@tanstack/react-router";
import { NavBar } from "../../shared/NavBar/NavBar";
import Sidebar from "../../shared/Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <div className="root-layout" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavBar />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
};

export default RootLayout;
