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
        className={`${theme} min-h-svh w-full bg-background text-foreground flex flex-col`}
      >
        <Navbar />
        <main className="p-5 flex-1 flex md:px-8">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AuthPage />} path="/auth" />
            <Route element={<ChallangePage />} path="challange" />
          </Routes>
        </main>
        <footer className="p-5">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeChallange. All rights reserved.
          </p>
        </footer>

        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
