import useThemeStore from "@/store/themeStore";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router";

function Navbar() {
  const location = useLocation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isAuthPage = location.pathname.includes("/auth");

  return (
    <nav className="border-[accent]-600 flex items-center justify-between border-b px-5 py-2">
      <Link to="/" className="flex items-center gap-2">
        <img src="logo-dark.svg" alt="logo" className="h-10 w-10" />
        <div className="font-semibold">CodeChallenge</div>
      </Link>
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
        {!isAuthPage && (
          <>
            <Link to="/auth?tab=signup">
              <Button variant="link">Signup</Button>
            </Link>
            <Link to="/auth?tab=login">
              <Button variant="outline">Login</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
