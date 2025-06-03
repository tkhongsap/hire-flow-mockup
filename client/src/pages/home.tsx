import { useState } from "react";
import { motion } from "framer-motion";
import { Users, MessageSquare, CheckCircle, Gift, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);

  const stations = [
    {
      id: 1,
      name: "Resume-Fit Scorer",
      stage: "Discover & Screen",
      icon: Users,
      painPoint: "Manual resume screening takes days",
      solution: "AI ranks candidates in minutes",
      route: "/resume-scorer",
      benefits: [
        "Upload CV → instant fit score & gaps",
        "Tailored for F&B industry roles",
        "Eliminate unconscious bias"
      ]
    },
    {
      id: 2,
      name: "Panel Copilot",
      stage: "Assess & Interview", 
      icon: MessageSquare,
      painPoint: "Inconsistent interview quality",
      solution: "Smart questions, live notes, STAR summary",
      route: "/interview-copilot",
      benefits: [
        "Prepare deck → live tag → instant summary",
        "Real-time transcript & tagging",
        "STAR bullets & competency heat-map"
      ]
    },
    {
      id: 3,
      name: "Decision Assistant",
      stage: "Decide & Select",
      icon: CheckCircle,
      painPoint: "Complex multi-stakeholder decisions",
      solution: "Data-driven recommendation engine",
      route: "/decision-assistant",
      benefits: [
        "Objective candidate comparison",
        "Risk assessment scoring",
        "Collaborative decision making"
      ]
    },
    {
      id: 4,
      name: "OfferCraft + 90-Day",
      stage: "Offer & Onboard",
      icon: Gift,
      painPoint: "Generic offers lead to rejections",
      solution: "Personalized packages & onboarding",
      route: "/offercraft",
      benefits: [
        "15% higher offer acceptance",
        "Tailored compensation packages",
        "90-day success tracking"
      ]
    },
    {
      id: 5,
      name: "Pulse + Flight-Risk",
      stage: "Early-Tenure Engagement",
      icon: TrendingUp,
      painPoint: "Early attrition blindsides teams",
      solution: "Predictive engagement monitoring",
      route: "/pulse-dashboard",
      benefits: [
        "5% reduced early attrition",
        "Proactive intervention alerts",
        "Continuous engagement tracking"
      ]
    }
  ];

  const handleStationClick = (route: string) => {
    setLocation(route);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H5</span>
              </div>
              <h1 className="text-xl font-semibold">HireFlow 5</h1>
            </div>
            
            {/* ThaiBev Value Bar */}
            <motion.div 
              className="hidden md:flex items-center space-x-6 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <span className="font-medium" style={{ color: 'hsl(var(--chang-green))' }}>-15 days hire</span>
              </motion.div>
              <span className="text-gray-400">•</span>
              <motion.div 
                className="flex items-center space-x-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
              >
                <span className="font-medium" style={{ color: 'hsl(var(--thaibev-gold))' }}>+10% quality hire</span>
              </motion.div>
              <span className="text-gray-400">•</span>
              <motion.div 
                className="flex items-center space-x-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 2 }}
              >
                <span className="font-medium" style={{ color: 'hsl(var(--chang-green))' }}>-3% attrition</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Recruitment Rail
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Navigate through the complete recruitment lifecycle with five intelligent micro-apps
          </motion.p>
        </div>

        {/* Horizontal Subway Map */}
        <div className="relative">
          {/* Desktop Horizontal Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-8">
              {stations.map((station, index) => (
                <div key={station.id} className="flex-1 relative">
                  {/* Station */}
                  <motion.div
                    className="relative"
                    onHoverStart={() => setHoveredStation(station.id)}
                    onHoverEnd={() => setHoveredStation(null)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Station Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 mx-4 cursor-pointer hover:shadow-lg transition-all duration-300 relative z-10">
                      <div className="text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center`} 
                             style={{ backgroundColor: 'hsl(var(--chang-green) / 0.1)' }}>
                          <station.icon className="w-6 h-6" style={{ color: 'hsl(var(--chang-green))' }} />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">{station.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{station.stage}</p>
                        <p className="text-xs text-gray-500 mb-1">{station.painPoint}</p>
                        <p className="text-xs font-medium" style={{ color: 'hsl(var(--chang-green))' }}>{station.solution}</p>
                      </div>
                    </div>

                    {/* Benefits Fly-out */}
                    {hoveredStation === station.id && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-slate-900 text-white rounded-lg p-4 shadow-xl z-20 w-64"
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45"></div>
                        <div className="space-y-2 mb-4">
                          {station.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <span className="text-green-400 text-xs mt-1">•</span>
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            className="flex-1 text-white"
                            style={{ backgroundColor: 'hsl(var(--thaibev-gold))', borderColor: 'hsl(var(--thaibev-gold))' }}
                            onClick={() => handleStationClick(station.route)}
                          >
                            Enter Demo
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex-1"
                            style={{ borderColor: 'hsl(var(--chang-green))', color: 'hsl(var(--chang-green))' }}
                          >
                            View API Spec
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Connection Line */}
                  {index < stations.length - 1 && (
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-0.5 bg-blue-300 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden space-y-6">
            {stations.map((station, index) => (
              <motion.div
                key={station.id}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: 'hsl(var(--chang-green) / 0.1)' }}>
                    <station.icon className="w-6 h-6" style={{ color: 'hsl(var(--chang-green))' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{station.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{station.stage}</p>
                    <p className="text-xs text-gray-500 mb-2">{station.painPoint}</p>
                    <p className="text-xs text-blue-600 font-medium mb-3">{station.solution}</p>
                    
                    <div className="space-y-1 mb-4">
                      {station.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 text-xs mt-1">•</span>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleStationClick(station.route)}
                    >
                      Enter Demo
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 HireFlow 5. Built for modern recruitment teams.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600">API Documentation</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
