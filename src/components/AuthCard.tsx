import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface AuthCardProps {
  type: "signup" | "login";
  onSubmit: (email: string, password: string) => Promise<void>;
  handleGithubLogin: () => void;
}

/**
 * Renders an authentication card for user signup or login with email/password and GitHub OAuth options.
 *
 * Displays input fields for email and password, a submit button that triggers the provided authentication handler, and an option to authenticate via GitHub.
 *
 * @param type - Determines whether the card is in "signup" or "login" mode
 * @param onSubmit - Async function called with the entered email and password when the user submits the form
 * @param handleGithubLogin - Function called when the user chooses to authenticate with GitHub
 *
 * @returns A React element representing the authentication card UI
 */
function AuthCard({ type, onSubmit, handleGithubLogin }: AuthCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await onSubmit(email, password);
    setIsLoading(false);
  };
  return (
    <Card className="w-[350px] overflow-hidden relative">
      <CardHeader className="text-center">
        <CardTitle>{type === "signup" ? "Signup" : "Login"}</CardTitle>
        <CardDescription>Login to your account to continue</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" onClick={handleSubmit} isLoading={isLoading}>
          {type === "signup" ? "Signup" : "Login"}
        </Button>
        <div className="flex w-full items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">Or</span>
          <Separator className="flex-1" />
        </div>
        <Button
          className="w-full"
          variant="outline"
          onClick={handleGithubLogin}
        >
          <Github />
          Continue with Github
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AuthCard;
