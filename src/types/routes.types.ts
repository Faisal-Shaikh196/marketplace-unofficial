import type { LazyExoticComponent, ReactElement } from "react";
import type { Role } from "../utils/rbac";

export type RouteKey =
  | "HOME"
  | "LOGIN"
  | "REGISTER"
  | "DASHBOARD"
  | "DEV"
  | "MANUFACTURER"
  | "ADMIN";

export type RouteGroupKey =
  | "public"
  | "auth"
  | "dev"
  | "manufacturer"
  | "admin";

export type RouteConfig = {
  key: RouteKey;
  path: string;
  component: RouteKey;
  group: RouteGroupKey;
};

export type RouteGroupConfig = {
  key: RouteGroupKey;
  protected?: boolean;
  allowedRoles?: Role[]; // applies only when protected
};

export type ComponentMap = Record<
  RouteKey,
  LazyExoticComponent<() => ReactElement>
>;
