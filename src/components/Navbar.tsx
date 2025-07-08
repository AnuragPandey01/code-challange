import { Button } from "./ui/button";

/**
 * Renders a navigation bar with a logo, site title, and authentication buttons.
 *
 * The navigation bar displays a logo and the "CodeChallange" title on the left, and "Singup" and "Login" buttons on the right.
 *
 * @returns The navigation bar React element.
 */
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-accent py-2 px-5">
      <div className="flex items-center gap-2">
        <img src="logo-dark.svg" alt="logo" className="w-10 h-10" />
        <div className="font-semibold">CodeChallange</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline">Singup</Button>
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
