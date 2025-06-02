import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SubwayMap } from "@/components/subway-map";
import { ResumeFitScorer } from "@/components/resume-fit-scorer";
import { InterviewCopilot } from "@/components/interview-copilot";
import { DecisionAssistant } from "@/components/decision-assistant";
import { OfferCraft } from "@/components/offercraft";
import { PulseDashboard } from "@/components/pulse-dashboard";
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
    const sections = ['overview', 'subway-map', 'demos', 'resume-scorer', 'interview-copilot', 'decision-assistant', 'offercraft', 'pulse-dashboard'];
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

    // Observe demo sections
    const demoSections = document.querySelectorAll('#demos > div > div');
    demoSections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navigation onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <SubwayMap onNavigate={scrollToSection} />
        
        <section id="demos" className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Live Demo Experience</h2>
              <p className="text-xl text-secondary max-w-2xl mx-auto">
                Interact with each AI micro-app using realistic mock data
              </p>
            </div>

            <ResumeFitScorer />
            <InterviewCopilot />
            <DecisionAssistant />
            <OfferCraft />
            <PulseDashboard />
          </div>
        </section>
      </main>
      
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
