import type { RouteConfig, RouteGroupConfig } from "../types/routes.types";

export const routeGroups: RouteGroupConfig[] = [
  { key: "public", protected: false },

  // any authenticated user
  {
    key: "auth",
    protected: true,
    allowedRoles: ["user", "developer", "manufacturer", "superadmin"],
  },

  // dev routes (user cannot; manufacturer cannot; superadmin can)
  { key: "dev", protected: true, allowedRoles: ["developer", "superadmin"] },

  // manufacturer routes
  {
    key: "manufacturer",
    protected: true,
    allowedRoles: ["manufacturer", "superadmin"],
  },

  // admin only (manufacturer cannot)
  { key: "admin", protected: true, allowedRoles: ["superadmin"] },
];

export const routesConfig: RouteConfig[] = [
  { key: "HOME", path: "/", component: "HOME", group: "public" },
  { key: "LOGIN", path: "/login", component: "LOGIN", group: "public" },
  {
    key: "REGISTER",
    path: "/register",
    component: "REGISTER",
    group: "public",
  },

  {
    key: "DASHBOARD",
    path: "/dashboard",
    component: "DASHBOARD",
    group: "auth",
  },
  { key: "DEV", path: "/dev", component: "DEV", group: "dev" },
  {
    key: "MANUFACTURER",
    path: "/manufacturer",
    component: "MANUFACTURER",
    group: "manufacturer",
  },
  { key: "ADMIN", path: "/admin", component: "ADMIN", group: "admin" },
];
