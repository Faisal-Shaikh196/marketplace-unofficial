import { lazy } from "react";
import type { ComponentMap, RouteKey } from "../types/routes.types";

const components: ComponentMap = {
  HOME: lazy(() => import("../routes/Home/Home")),
  LOGIN: lazy(() => import("../routes/Login/Login")),
  REGISTER: lazy(() => import("../routes/Register/Register")),
  DASHBOARD: lazy(() => import("../routes/Dashboard/Dashboard")),
  DEV: lazy(() => import("../routes/Dev/Dev")),
  MANUFACTURER: lazy(() => import("../routes/Manufacturer/Manufacturer")),
  ADMIN: lazy(() => import("../routes/Admin/Admin")),
  FORGOTPASSWORD: lazy(() => import("../routes/ForgotPassword/ForgotPassword")),
};

export class ComponentFactory {
  static get(key: RouteKey) {
    return components[key];
  }
}
