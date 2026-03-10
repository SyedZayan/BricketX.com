import InsightsHero from "@/components/sections/insights/InsightsHero";

import InsightsCTA from "@/components/sections/insights/InsightsCTA";
import GoldMarketDashboard from "@/components/sections/insights/GoldMarketDashboard";
import RegionalRealEstate from "@/components/sections/insights/RegionalRealEstate";

export default function InsightsPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <InsightsHero />
      <GoldMarketDashboard />
      <RegionalRealEstate/>
      <InsightsCTA />
    </main>
  );
}