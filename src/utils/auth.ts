import { QueryClient } from "@tanstack/react-query";
import { apiFetch } from "./api";
import type { Role } from "./rbac";

export type MeResponse = {
  ok: boolean;
  user: { sub: string; email: string; roles: Role[] };
};

export const meQueryKey = ["auth", "me"] as const;

// Helper to check if auth cookie exists (you'd need to know the cookie name)
// function hasAuthCookie(): boolean {
//   // This depends on what cookie your server sets
//   // Common names: "access_token", "session", "auth_token", etc.
//   // You'd need to check what your backend sets
//   return (
//     document.cookie.includes("access_token") ||
//     document.cookie.includes("session")
//   );
// }

export function ensureMe(queryClient: QueryClient) {
  // // Fast path: if no cookie, definitely not authenticated
  // if (!hasAuthCookie()) {
  //   throw new Error("No authentication cookie");
  // }

  return queryClient.fetchQuery({
    queryKey: meQueryKey,
    queryFn: () => apiFetch<MeResponse>("/auth/me"),
    staleTime: 10_000,
  });
}

export async function logout(queryClient: QueryClient) {
  await apiFetch<{ ok: boolean }>("/auth/logout", { method: "POST" }).catch(
    () => {}
  );
  await queryClient.invalidateQueries({ queryKey: meQueryKey });
}
