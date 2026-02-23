import React, { Suspense } from "react";
import {
  createRootRouteWithContext,
  createRoute,
  redirect,
  Outlet,
  type AnyRoute,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import type {
  RouteConfig,
  RouteGroupConfig,
  RouteGroupKey,
} from "../types/routes.types";
import { ComponentFactory } from "./ComponentFactory";
import { ensureMe } from "../utils/auth";
import { canAccess, type Role } from "../utils/rbac";
import { NavBar } from "../components/shared/NavBar";

export type RouterContext = { queryClient: QueryClient };

export const RootRoute = createRootRouteWithContext<RouterContext>()({
  component: function Root() {
    return (
      <div style={{ fontFamily: "Inter, sans-serif" }}>
        <NavBar />
        <div style={{ padding: 16 }}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </React.Suspense>
        </div>
      </div>
    );
  },
});

// function LazyPage({ pageKey }: { pageKey: any }) {
//   const Page = ComponentFactory.get(pageKey);
//   return (
//     <Suspense fallback={<div style={{ padding: 16 }}>Loading page...</div>}>
//       <Page />
//     </Suspense>
//   );
// }

// function getCookie(name: string): string | null {
//   // Fast path: check cookie first
//   const authCookie = getCookie("access_token") || getCookie("session"); // adjust name
//   if (!authCookie) {
//     throw redirect({ to: "/login" as any });
//   }

//   const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
//   return match?.[2] ? decodeURIComponent(match[2]) : null;
// }

async function guard(context: RouterContext, allowedRoles?: Role[]) {
  let me;
  try {
    me = await ensureMe(context.queryClient);
  } catch {
    throw redirect({ to: "/login" as any });
  }

  if (allowedRoles && !canAccess(me.user.roles, allowedRoles)) {
    // You can change this to a /403 route if you want
    throw redirect({ to: "/dashboard" as any });
  }
}

export class RouteFactory {
  static createRouteTree(groups: RouteGroupConfig[], routes: RouteConfig[]) {
    // Create group routes (pathless)
    const groupRouteMap = new Map<RouteGroupKey, AnyRoute>();

    const groupRoutes = groups.map((g) => ({
      route: createRoute({
        getParentRoute: () => RootRoute,
        id: `group:${g.key}`,
        path: undefined, // pathless group route
        beforeLoad: g.protected
          ? async ({ context }) => guard(context, g.allowedRoles)
          : undefined,
        component: () => <Outlet />,
      }),
      key: g.key,
    }));

    for (const { route, key } of groupRoutes) {
      groupRouteMap.set(key, route);
    }

    // Create actual routes under their group
    const childRoutes = routes.map((cfg) => {
      const parent = groupRouteMap.get(cfg.group);
      if (!parent) throw new Error(`Missing group: ${cfg.group}`);
      const Page = ComponentFactory.get(cfg.component);
      return createRoute({
        getParentRoute: () => parent,
        path: cfg.path,
        // component: () => <LazyPage pageKey={cfg.component} />,
        component: () => (
          <Suspense
            fallback={<div style={{ padding: 16 }}>Loading page...</div>}
          >
            <Page />
          </Suspense>
        ),
      });
    });

    // Attach children to each group
    const updatedGroups = groupRoutes.map(({ route }) => {
      const groupChildren = childRoutes.filter(
        (r) => (r.options.getParentRoute() as any) === route
      );
      return route.addChildren(groupChildren);
    });

    // Root attaches all group routes
    return RootRoute.addChildren(updatedGroups);
  }
}
