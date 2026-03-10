import OpportunitiesHero from "@/components/sections/opportunities/OpportunitiesHero";
import OpportunitiesCTA from "@/components/sections/opportunities/OpportunitiesCTA";
import InvestmentCatalog from "@/components/sections/opportunities/InvestmentCatalog";

export default function OpportunitiesPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <OpportunitiesHero />
      <InvestmentCatalog />
      <OpportunitiesCTA />
    </main>
  );
}