import { TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PulseDashboard } from "@/components/pulse-dashboard";

export default function PulseDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Pulse + Flight-Risk"
        description="Submit pulse → mentor recommendation. Proactive intervention alerts and continuous engagement tracking for retention."
        stage="Early-Tenure Engagement"
        icon={TrendingUp}
      />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PulseDashboard />
        </div>
      </main>
    </div>
  );
}