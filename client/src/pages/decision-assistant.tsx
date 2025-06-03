import { CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { DecisionAssistant } from "@/components/decision-assistant";

export default function DecisionAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Decision Assistant"
        description="Objective candidate comparison and risk assessment scoring. View ranked slate & rationale for data-driven hiring decisions."
        stage="Decide & Select"
        icon={CheckCircle}
      />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DecisionAssistant />
        </div>
      </main>
    </div>
  );
}