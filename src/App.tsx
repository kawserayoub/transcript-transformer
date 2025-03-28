
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Demo from "./pages/Demo";
import SummaryPreview from "./pages/SummaryPreview";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import HighlightSummary from "./pages/HighlightSummary";
import AIProcessing from "./pages/AIProcessing";
import StudyTips from "./pages/StudyTips";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/summary-preview" element={<SummaryPreview />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/highlight-summary" element={<HighlightSummary />} />
            <Route path="/ai-processing" element={<AIProcessing />} />
            <Route path="/study-tips" element={<StudyTips />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
