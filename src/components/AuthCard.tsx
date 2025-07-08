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

function AuthCard({ type, onSubmit, handleGithubLogin }: AuthCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
+    if (!email || !password) {
+      toast.error("Please fill in all fields");
+      return;
+    }
    setIsLoading(true);
    await onSubmit(email, password);
    setIsLoading(false);
  };
+
+  const handleKeyPress = (e: React.KeyboardEvent) => {
+    if (e.key === 'Enter' && !isLoading) {
+      handleSubmit();
+    }
+  };
  
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
+          onKeyPress={handleKeyPress}
+          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
+          onKeyPress={handleKeyPress}
+          disabled={isLoading}
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
