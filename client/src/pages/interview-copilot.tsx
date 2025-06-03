import { MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InterviewCopilot } from "@/components/interview-copilot";

export default function InterviewCopilotPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Panel Copilot"
        description="Smart questions, live notes, STAR summary. Prepare deck → live tag → instant summary with competency heat-map."
        stage="Assess & Interview"
        icon={MessageSquare}
      />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InterviewCopilot />
        </div>
      </main>
    </div>
  );
}