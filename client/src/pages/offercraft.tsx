import { Navigation } from "@/components/navigation";
import { OfferCraft } from "@/components/offercraft";
import { Footer } from "@/components/footer";

export default function OfferCraftPage() {
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
              OfferCraft + 90-Day Accelerator
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Create personalized offer packages and comprehensive 90-day onboarding plans. 
              Tailor compensation and benefits to ThaiBev standards with structured integration programs.
            </p>
          </div>
          
          <OfferCraft />
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}