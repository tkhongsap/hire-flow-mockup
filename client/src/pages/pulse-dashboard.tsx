import { Navigation } from "@/components/navigation";
import { PulseDashboard } from "@/components/pulse-dashboard";
import { Footer } from "@/components/footer";

export default function PulseDashboardPage() {
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
              Pulse + Flight-Risk Dashboard
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Real-time employee engagement monitoring and retention analytics. Track satisfaction scores, 
              predict flight risk, and get actionable insights for ThaiBev's workforce management.
            </p>
          </div>
          
          <PulseDashboard />
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}