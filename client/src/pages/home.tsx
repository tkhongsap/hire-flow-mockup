import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SubwayMap } from "@/components/subway-map";
import { Footer } from "@/components/footer";

export default function Home() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId] || document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    // Store refs for all sections
    const sections = ['overview', 'subway-map', 'solutions'];
    sections.forEach(id => {
      sectionsRef.current[id] = document.getElementById(id);
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe sections
    const animatedSections = document.querySelectorAll('[data-animate]');
    animatedSections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <SubwayMap onNavigate={scrollToSection} />
        
        <section id="solutions" className="py-16 lg:py-24 bg-gray-50" data-animate>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Transform Your Recruitment Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                HireFlow 5 empowers ThaiBev's HR team with AI-driven insights at every stage of the recruitment journey, 
                from initial screening to long-term employee engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Candidate Screening</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered resume analysis and scoring tailored for F&B industry roles, helping you identify top talent faster.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Interview Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Real-time interview guidance with industry-specific questions and performance analytics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-600 mb-4">
                  Objective candidate comparison and selection recommendations based on comprehensive analytics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Personalized Offers</h3>
                <p className="text-gray-600 mb-4">
                  Craft competitive packages with ThaiBev-specific benefits and comprehensive onboarding plans.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💗</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Employee Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Monitor satisfaction and predict flight risk to ensure long-term retention and success.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">ROI & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Track hiring success metrics and optimize your recruitment process with actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
