
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-explainly-lightGray py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">explainly.ai</span>
            </Link>
            <p className="mt-4 text-sm">
              Transform raw transcripts into AI-powered learning tools
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/summary-preview" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Summary Preview
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/flashcards" className="text-explainly-gray hover:text-explainly-blue transition-colors">
                  Flashcards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Concept Pages</h3>
            <ul className="space-y-2">
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

        <div className="mt-12 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-explainly-gray">
            &copy; {new Date().getFullYear()} explainly.ai — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
