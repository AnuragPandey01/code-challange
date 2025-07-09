import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set, get) => ({
  theme: (localStorage.getItem("theme") as Theme) || "dark",

  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
    localStorage.setItem("theme", get().theme);
  },
}));

export default useThemeStore;
