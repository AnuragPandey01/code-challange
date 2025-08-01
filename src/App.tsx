import { BrowserRouter, Route, Routes } from "react-router";
import ChallangePage from "./pages/ChallangePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";

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
