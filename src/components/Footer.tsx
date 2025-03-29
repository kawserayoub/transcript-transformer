
import { Link } from "react-router-dom";
import { BookOpen, Home, FileText, Zap, Lightbulb } from "lucide-react";
import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold gradient-text">explainly.ai</h3>
            </Link>
            <p className="text-explainly-gray text-sm max-w-xs">
              Transform raw transcripts into AI-powered learning tools
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-explainly-navy">Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-explainly-gray hover:text-explainly-blue transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-explainly-gray hover:text-explainly-blue transition-colors flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  <span>Demo</span>
                </Link>
              </li>
              <li>
                <Link to="/summary-preview" className="text-explainly-gray hover:text-explainly-blue transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Summary Preview</span>
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-explainly-gray hover:text-explainly-blue transition-colors flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Quiz</span>
                </Link>
              </li>
              <li>
                <Link to="/flashcards" className="text-explainly-gray hover:text-explainly-blue transition-colors flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  <span>Flashcards</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-explainly-navy">Upcoming Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/highlight-summary" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Highlighting
                </Link>
              </li>
              <li>
                <Link to="/ai-processing" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  AI Processing
                </Link>
              </li>
              <li>
                <Link to="/study-tips" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Study Tips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-explainly-gray mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} explainly.ai — All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-explainly-gray hover:text-explainly-blue transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-explainly-gray hover:text-explainly-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-sm text-explainly-gray hover:text-explainly-blue transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
