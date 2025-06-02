import { TrendingUp, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const solutions = [
    { label: "Resume-Fit Scorer", path: "/resume-scorer" },
    { label: "Interview Copilot", path: "/interview-copilot" },
    { label: "Decision Assistant", path: "/decision-assistant" },
    { label: "OfferCraft", path: "/offercraft" },
    { label: "Pulse Dashboard", path: "/pulse-dashboard" },
  ];

  const companyLinks = [
    "About", "Careers", "Blog", "Contact", "Privacy"
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold">HireFlow 5</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform ThaiBev's recruitment process with AI-powered solutions that span the entire hiring journey from screening to retention.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 p-0">
                <Twitter className="text-gray-300 w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 p-0">
                <Linkedin className="text-gray-300 w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 p-0">
                <Github className="text-gray-300 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h6 className="font-semibold mb-4 text-white">AI Solutions</h6>
            <ul className="space-y-2 text-gray-300">
              {solutions.map((solution) => (
                <li key={solution.path}>
                  <Link 
                    href={solution.path}
                    className="hover:text-white transition-colors block"
                  >
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="font-semibold mb-4 text-white">Company</h6>
            <ul className="space-y-2 text-gray-300">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button className="hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HireFlow 5. All rights reserved. Designed for ThaiBev's recruitment excellence.</p>
        </div>
      </div>
    </footer>
  );
}
