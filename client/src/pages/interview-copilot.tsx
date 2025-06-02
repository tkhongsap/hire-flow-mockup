import { Navigation } from "@/components/navigation";
import { InterviewCopilot } from "@/components/interview-copilot";
import { Footer } from "@/components/footer";

export default function InterviewCopilotPage() {
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
              Interview Copilot
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Real-time interview guidance and candidate evaluation system. Get AI-powered question suggestions 
              and live performance analytics during interviews for ThaiBev positions.
            </p>
          </div>
          
          <InterviewCopilot />
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}