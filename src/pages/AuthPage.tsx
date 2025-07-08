import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { account, ID } from "@/lib/appwrite";
import { toast } from "sonner";
import AuthCard from "@/components/AuthCard";
import TerminalDeco from "@/components/TerminalDeco";
import { OAuthProvider } from "appwrite";
import { useEffect } from "react";

/**
 * Renders the authentication page with signup, login, and GitHub OAuth options.
 *
 * Displays a tabbed interface for user signup and login, each handled by dedicated forms. Integrates with Appwrite for authentication and provides feedback via toast notifications. Includes a decorative terminal component on larger screens.
 *
 * @returns The authentication page React element.
 */
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
      const session = await account.get();
      console.log(session);
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
