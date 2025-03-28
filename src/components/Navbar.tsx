
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">explainly.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              Home
            </Link>
            <Link to="/demo" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              Demo
            </Link>
            <Link to="/summary-preview" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              Summary
            </Link>
            <Link to="/about" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-explainly-navy" />
              ) : (
                <Menu className="w-6 h-6 text-explainly-navy" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-explainly-navy hover:text-explainly-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/demo"
                className="text-explainly-navy hover:text-explainly-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                to="/summary-preview"
                className="text-explainly-navy hover:text-explainly-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Summary
              </Link>
              <Link
                to="/about"
                className="text-explainly-navy hover:text-explainly-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
