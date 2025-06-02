import { Navigation } from "@/components/navigation";
import { ResumeFitScorer } from "@/components/resume-fit-scorer";
import { Footer } from "@/components/footer";

export default function ResumeScorerPage() {
  const handleNavigate = (section: string) => {
    // Handle navigation based on section
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
              Resume-Fit Scorer
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              AI-powered candidate screening and ranking system designed for ThaiBev's recruitment needs. 
              Analyze resumes against job requirements and get instant compatibility scores.
            </p>
          </div>
          
          <ResumeFitScorer />
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}