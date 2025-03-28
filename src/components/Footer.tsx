
import { Link } from "react-router-dom";
import { BookOpen, Home, FileText, Zap, Lightbulb } from "lucide-react";
import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold gradient-text">explainly.ai</h3>
            </Link>
            <p className="text-explainly-gray text-sm max-w-xs">
              Transform raw transcripts into AI-powered learning tools
            </p>
            <div className="pt-4 flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-explainly-gray hover:text-explainly-blue transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-explainly-gray hover:text-explainly-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
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
            <h3 className="text-lg font-semibold text-explainly-navy">Concept Pages</h3>
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-explainly-navy">Contact</h3>
            <p className="text-explainly-gray">
              Have questions about explainly.ai?
            </p>
            <a 
              href="mailto:info@explainly.ai" 
              className="text-explainly-blue hover:underline"
            >
              info@explainly.ai
            </a>
            <div className="pt-2">
              <a 
                href="#" 
                className="inline-block px-4 py-2 bg-explainly-blue text-white rounded-md hover:bg-explainly-teal transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
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
      </Container>
    </footer>
  );
};

export default Footer;
