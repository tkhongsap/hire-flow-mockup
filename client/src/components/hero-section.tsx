import { Button } from "@/components/ui/button";
import { MapPin, Play } from "lucide-react";

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
    <section id="overview" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 animate-slide-up">
            AI-Powered HR Suite for the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Complete Recruitment Journey
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8 animate-fade-in">
            HireFlow 5 visualizes your entire recruitment lifecycle with five specialized AI micro-apps. 
            From resume screening to 90-day onboarding, streamline every step with intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate("subway-map")}
              className="bg-primary text-white px-8 py-3 hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Journey Map
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate("demos")}
              className="border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-all"
            >
              <Play className="w-4 h-4 mr-2" />
              View Live Demos
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
