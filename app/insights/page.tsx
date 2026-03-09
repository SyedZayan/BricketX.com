import InsightsHero from "@/components/sections/InsightsHero";
import GoldMarketDashboard from "@/components/sections/GoldMarketDashboard";
import RegionalRealEstate from "@/components/sections/RegionalRealEstate";
import InsightsCTA from "@/components/sections/InsightsCTA";

export default function InsightsPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <InsightsHero />
      <GoldMarketDashboard />
      <RegionalRealEstate />
      <InsightsCTA />
    </main>
  );
}