import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Resume Scorer", path: "/resume-scorer" },
    { label: "Interview Copilot", path: "/interview-copilot" },
    { label: "Decision Assistant", path: "/decision-assistant" },
    { label: "OfferCraft", path: "/offercraft" },
    { label: "Pulse Dashboard", path: "/pulse-dashboard" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-slate-900">HireFlow 5</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location === item.path
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button
            className="lg:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleNavClick}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    location === item.path
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
