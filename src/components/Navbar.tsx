import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-accent py-2 px-5">
      <div className="flex items-center gap-2">
        <img src="logo-dark.svg" alt="logo" className="w-10 h-10" />
        <div className="font-semibold">CodeChallange</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline">Signup</Button>
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
