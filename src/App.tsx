import { BrowserRouter, Route, Routes } from "react-router";
import ChallangePage from "./pages/ChallangePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";
import useThemeStore from "./store/themeStore";
import Home from "./pages/Home";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <BrowserRouter>
      <div
        className={`${theme} bg-background text-foreground flex min-h-svh w-full flex-col`}
      >
        <Navbar />
        <main className="flex flex-1 p-5 md:px-8">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AuthPage />} path="/auth" />
            <Route element={<ChallangePage />} path="challange" />
          </Routes>
        </main>
        <footer className="p-5">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {new Date().getFullYear()} CodeChallange. All rights
            reserved.
          </p>
        </footer>

        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
