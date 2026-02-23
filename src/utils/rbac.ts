export type Role = "user" | "developer" | "manufacturer" | "superadmin";

export function canAccess(userRoles: Role[], allowed: Role[]) {
  if (userRoles.includes("superadmin")) return true;
  return userRoles.some((r) => allowed.includes(r));
}
