import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { account, ID } from "@/lib/appwrite";
import { toast } from "sonner";
import AuthCard from "@/components/AuthCard";
import TerminalDeco from "@/components/TerminalDeco";
import { OAuthProvider } from "appwrite";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

function AuthPage() {
  const [query, setQuery] = useSearchParams();
  const currentTab = query.get("tab");

  useEffect(() => {
    if (!currentTab || (currentTab !== "signup" && currentTab !== "login")) {
      setQuery({ tab: "signup" }, { replace: true }); // Avoid pushing to history
    }
  }, [currentTab, setQuery]);

  const handleTabChange = (value: string) => {
    setQuery({ tab: value }, { replace: true });
  };

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
        await account.get();
        //TODO: Handle session data appropriately, e.g., update state
      } catch (error) {
        //TODO: User is not logged in, which is expected on auth page
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
    <div className="flex flex-1">
      <div className="flex flex-1 items-center justify-center">
        <Tabs onValueChange={handleTabChange} value={currentTab || "signup"}>
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

      <div className="hidden flex-1 items-center justify-center md:flex">
        <TerminalDeco />
      </div>
    </div>
  );
}

export default AuthPage;
