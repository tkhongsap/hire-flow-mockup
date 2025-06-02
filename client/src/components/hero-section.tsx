import { Button } from "@/components/ui/button";
import { MapPin, Play } from "lucide-react";
import { Link } from "wouter";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const stats = [
    { value: "85%", label: "Faster Screening" },
    { value: "60%", label: "Better Matches" },
    { value: "40%", label: "Reduced Turnover" },
    { value: "25%", label: "Faster Onboarding" },
  ];

  return (
    <section id="overview" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-6 animate-slide-up leading-tight">
            AI-Powered HR Suite for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ThaiBev's Recruitment
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in">
            HireFlow 5 transforms ThaiBev's recruitment process with five specialized AI micro-apps. 
            From candidate screening to employee engagement, streamline every step with intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate("subway-map")}
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Journey Map
            </Button>
            <Link href="/resume-scorer">
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-600 hover:text-white transition-all w-full sm:w-auto"
              >
                <Play className="w-4 h-4 mr-2" />
                Try Live Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
