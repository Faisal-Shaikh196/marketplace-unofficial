// import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { RouteFactory, type RouterContext } from "./factories/RouteFactory";
import { routesConfig, routeGroups } from "./routes/routes.config";
// import { useEffect } from "react";
// import { apiFetch } from "./utils/api";

const queryClient = new QueryClient();

const routeTree = RouteFactory.createRouteTree(routeGroups, routesConfig);

const router = createRouter({
  routeTree,
  context: { queryClient } satisfies RouterContext,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// function Bootstrap() {
//   useEffect(() => {
//     // ensures csrf_token exists even before first login/register
//     apiFetch<{ ok: boolean }>("/auth/csrf").catch(() => {});
//   }, []);
//   return null;
// }

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Bootstrap /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
