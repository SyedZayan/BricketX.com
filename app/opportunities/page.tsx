import OpportunitiesHero from "@/components/sections/OpportunitiesHero";
import InvestmentCatalog from "@/components/sections/InvestmentCatalog";
import OpportunitiesCTA from "@/components/sections/OpportunitiesCTA";

export default function OpportunitiesPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <OpportunitiesHero />
      <InvestmentCatalog />
      <OpportunitiesCTA />
    </main>
  );
}