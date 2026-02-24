import { observable } from "@legendapp/state";
import { syncObservable } from "@legendapp/state/sync";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import type { AuthContext } from "../types/auth.context";

export const authContext = observable<AuthContext>({
  isLoggedIn: false,
  user: null,
});

syncObservable(authContext, {
  persist: {
    name: "authContext",
    plugin: ObservablePersistLocalStorage,
  },
});
