import { BrowserRouter, Route, Routes } from "react-router";
import ChallangePage from "./pages/ChallangePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";

/**
 * The main application component that sets up routing, layout, navigation, and notifications.
 *
 * Wraps the app in a router, displays the navigation bar, and renders either the authentication or challenge page based on the current route. Includes a toaster for displaying notifications.
 *
 * @returns The root React element for the application.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="dark min-h-svh w-full bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="p-5 flex-1 flex">
          <Routes>
            <Route element={<AuthPage />} path="/auth" />
            <Route element={<ChallangePage />} index />
          </Routes>
          <Toaster />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
