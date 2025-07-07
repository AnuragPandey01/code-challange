import { BrowserRouter, Route, Routes } from "react-router";
import ChallangePage from "./pages/ChallangePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ChallangePage />} index />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
