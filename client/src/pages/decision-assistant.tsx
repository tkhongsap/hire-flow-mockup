import { Navigation } from "@/components/navigation";
import { DecisionAssistant } from "@/components/decision-assistant";
import { Footer } from "@/components/footer";

export default function DecisionAssistantPage() {
  const handleNavigate = (section: string) => {
    if (section === "overview") {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={handleNavigate} />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Decision Assistant
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Data-driven candidate comparison and selection tool. Compare candidates objectively 
              with AI recommendations tailored for ThaiBev's hiring criteria and company culture.
            </p>
          </div>
          
          <DecisionAssistant />
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}