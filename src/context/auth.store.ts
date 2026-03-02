import { observable } from "@legendapp/state";
import type { AuthContext } from "../types/auth.context";

export const authContext = observable<AuthContext>({
  isLoggedIn: false,
  user: null,
});
