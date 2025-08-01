import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { account, ID } from "@/lib/appwrite";
import { toast } from "sonner";
import AuthCard from "@/components/AuthCard";
import TerminalDeco from "@/components/TerminalDeco";
import { OAuthProvider } from "appwrite";
import { useEffect } from "react";

function AuthPage() {
  const handleSignup = async (email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password);
      toast.success("Signup Successfull");
    } catch (error) {
      console.error(error);
      toast.error("Signup Failed");
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      toast.success("Login Successfull");
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
    }
  };

  useEffect(() => {
    const getSession = async () => {
      try {
        const session = await account.get();
        // Handle session data appropriately, e.g., update state
      } catch (error) {
        // User is not logged in, which is expected on auth page
      }
    };
    getSession();
  }, []);

  const handleGithubLogin = async () => {
    console.log(`${window.location.origin}/auth`);
    try {
      account.createOAuth2Session(
        OAuthProvider.Github,
        `${window.location.origin}/auth`,
        `${window.location.origin}/auth`,
        ["user:email"],
      );
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="flex-1 flex">
      <div className="flex-1 flex items-center justify-center">
        <Tabs defaultValue="signup">
          <TabsList>
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <AuthCard
              type="signup"
              onSubmit={handleSignup}
              handleGithubLogin={handleGithubLogin}
            />
          </TabsContent>
          <TabsContent value="login">
            <AuthCard
              type="login"
              onSubmit={handleLogin}
              handleGithubLogin={handleGithubLogin}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex-1 hidden md:flex items-center justify-center">
        <TerminalDeco />
      </div>
    </div>
  );
}

export default AuthPage;
