import { Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ResumeFitScorer } from "@/components/resume-fit-scorer";

export default function ResumeScorerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Resume-Fit Scorer"
        description="Upload CV → instant fit score & gaps. Tailored for F&B industry roles with AI-powered screening."
        stage="Discover & Screen"
        icon={Users}
      />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResumeFitScorer />
        </div>
      </main>
    </div>
  );
}