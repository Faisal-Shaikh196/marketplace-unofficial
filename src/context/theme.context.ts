import { observable } from "@legendapp/state";
import { syncObservable } from "@legendapp/state/sync";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";

export const themeContext = observable({
  theme: "light",
  toggleTheme: () => {
    const html = document.documentElement;
    if (themeContext.theme.get() === "light") {
      html.classList.add("dark");
      themeContext.theme.set("dark");
    } else {
      html.classList.remove("dark");
      themeContext.theme.set("light");
    }
  },
});
syncObservable(themeContext, {
  persist: {
    name: "theme-context",
    plugin: ObservablePersistLocalStorage,
  },
});
