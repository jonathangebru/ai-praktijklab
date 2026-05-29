import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Intake } from "./pages/Intake";
import { Module1 } from "./pages/Module1";
import { Module2 } from "./pages/Module2";
import { Lesson } from "./pages/Lesson";
import { Cases } from "./pages/Cases";
import { Prompts } from "./pages/Prompts";
import { Project } from "./pages/Project";
import { Analytics } from "./pages/Analytics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/modules/basiscursus-ai" element={<Module1 />} />
          <Route path="/modules/ai-geletterdheid" element={<Module2 />} />
          <Route path="/lessen/:slug" element={<Lesson />} />
          <Route path="/praktijkcasussen" element={<Cases />} />
          <Route path="/promptbibliotheek" element={<Prompts />} />
          <Route path="/project" element={<Project />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
