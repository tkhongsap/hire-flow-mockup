import { Search, MessageSquare, BarChart3, Handshake, Heart } from "lucide-react";
import { Link } from "wouter";

interface SubwayMapProps {
  onNavigate: (section: string) => void;
}

export function SubwayMap({ onNavigate }: SubwayMapProps) {
  const stops = [
    {
      id: "resume-scorer",
      path: "/resume-scorer",
      title: "Discover & Screen",
      description: "Resume-Fit Scorer analyzes and ranks candidates automatically",
      icon: Search,
      step: "Step 1",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "interview-copilot",
      path: "/interview-copilot",
      title: "Assess & Interview",
      description: "Interview Copilot guides conversations and evaluations",
      icon: MessageSquare,
      step: "Step 2",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "decision-assistant",
      path: "/decision-assistant",
      title: "Decide & Select",
      description: "Decision Assistant compares candidates objectively",
      icon: BarChart3,
      step: "Step 3",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "offercraft",
      path: "/offercraft",
      title: "Offer & Onboard",
      description: "OfferCraft creates packages and 90-day plans",
      icon: Handshake,
      step: "Step 4",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: "pulse-dashboard",
      path: "/pulse-dashboard",
      title: "Engage & Retain",
      description: "Pulse monitors satisfaction and flight-risk",
      icon: Heart,
      step: "Step 5",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section id="subway-map" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Your Recruitment Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate through each stage with AI-powered precision
          </p>
        </div>

        {/* Desktop Subway Map */}
        <div className="hidden lg:block relative">
          <div className="subway-line h-2 rounded-full mb-8"></div>
          
          <div className="flex justify-between items-start -mt-10">
            {stops.map((stop, index) => {
              const Icon = stop.icon;
              const isLast = index === stops.length - 1;
              
              return (
                <Link 
                  key={stop.id}
                  href={stop.path}
                  className="flex flex-col items-center max-w-xs cursor-pointer group"
                >
                  <div className={`w-6 h-6 ${isLast ? 'bg-red-500' : 'bg-blue-500'} rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}></div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 group-hover:shadow-xl transition-all">
                    <div className={`w-12 h-12 ${stop.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`${stop.iconColor} w-6 h-6`} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{stop.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{stop.description}</p>
                    <span className="text-xs text-blue-600 font-medium">{stop.step}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Subway Map */}
        <div className="lg:hidden space-y-6">
          {stops.map((stop, index) => {
            const Icon = stop.icon;
            const isLast = index === stops.length - 1;
            
            return (
              <Link 
                key={stop.id}
                href={stop.path}
                className="flex items-center space-x-4 cursor-pointer" 
              >
                <div className={`w-8 h-8 ${isLast ? 'bg-red-500' : 'bg-blue-500'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-medium">{index + 1}</span>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-slate-900 mb-1">{stop.title}</h3>
                  <p className="text-sm text-gray-600">{stop.description.split(' ').slice(0, 3).join(' ')}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
