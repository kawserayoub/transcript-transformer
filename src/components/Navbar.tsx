
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">explainly.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              Home
            </Link>
            <Link to="/demo" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              Demo
            </Link>
            <Link to="/summary-preview" className="text-explainly-navy hover:text-explainly-blue transition-colors">
              Previews
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-explainly-navy hover:text-explainly-blue hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Coming Soon
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-md">
                    <ul className="grid w-[200px] gap-2 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/highlight-summary"
                            className="block p-2 hover:bg-gray-100 rounded-md text-explainly-navy hover:text-explainly-blue transition-colors"
                          >
                            Smart Highlighting
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/ai-processing"
                            className="block p-2 hover:bg-gray-100 rounded-md text-explainly-navy hover:text-explainly-blue transition-colors"
                          >
                            AI Visualization
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/study-tips"
                            className="block p-2 hover:bg-gray-100 rounded-md text-explainly-navy hover:text-explainly-blue transition-colors"
                          >
                            Personalized Study Tips
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
                Previews
              </Link>
              
              {/* Mobile Upcoming Features Dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleFeatures} 
                  className="flex items-center text-explainly-navy hover:text-explainly-blue transition-colors w-full justify-between"
                >
                  <span>Coming Soon</span>
                  {featuresOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {featuresOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    <Link
                      to="/highlight-summary"
                      className="block text-explainly-navy hover:text-explainly-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Smart Highlighting
                    </Link>
                    <Link
                      to="/ai-processing"
                      className="block text-explainly-navy hover:text-explainly-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI Visualization
                    </Link>
                    <Link
                      to="/study-tips"
                      className="block text-explainly-navy hover:text-explainly-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Study Tips
                    </Link>
                  </div>
                )}
              </div>
              
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
