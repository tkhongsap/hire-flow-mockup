import { Gift } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { OfferCraft } from "@/components/offercraft";

export default function OfferCraftPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="OfferCraft + 90-Day Accelerator"
        description="Craft Thai offer & onboarding kit. Tailored compensation packages with ThaiBev benefits and structured integration plans."
        stage="Offer & Onboard"
        icon={Gift}
      />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferCraft />
        </div>
      </main>
    </div>
  );
}