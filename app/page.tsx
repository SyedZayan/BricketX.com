import Hero from "@/components/sections/Hero";
import PortfolioMarquee from "@/components/sections/PortfolioMarquee";
import InvestmentModel from "@/components/sections/InvestmentModel";
import MarketIntelligence from "@/components/sections/MarketIntelligence";
// REMOVED: import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ImpactStats from "@/components/sections/ImpactStats";
import CalculatorAndMap from "@/components/sections/CalculatorAndMap";
import CoreStrengths from "@/components/sections/CoreStrengths";
import Team from "@/components/sections/Team";
import Blog from "@/components/sections/Blog";
import InvestorFaq from "@/components/sections/InvestorFAQ";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <PortfolioMarquee />
      <InvestmentModel />
      <MarketIntelligence />
      
      {/* The Operating Companies (PortfolioGrid) have been removed from here 
        to keep the investor focused purely on yield and security. 
      */}
      
      <ImpactStats />
      <CalculatorAndMap />
      <CoreStrengths />
      <Team />
      <Blog />
      <InvestorFaq />
    </main>
  );
}