import useThemeStore from "@/store/themeStore";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <nav className="flex items-center justify-between py-2 px-5 border-[accent]-600 border-b">
      <div className="flex items-center gap-2">
        <img src="logo-dark.svg" alt="logo" className="w-10 h-10" />
        <div className="font-semibold">CodeChallenge</div>
      </div>
      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <Moon
            className="size-4"
            onClick={() => {
              toggleTheme();
            }}
          />
        ) : (
          <Sun
            className="size-4"
            onClick={() => {
              toggleTheme();
            }}
          />
        )}

        <Button variant="link">Signup</Button>
        <Button variant="outline">Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
