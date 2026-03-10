import Hero from "@/components/home/Hero";
import InvestmentModel from "@/components/sections/InvestmentModel";
import MarketIntelligence from "@/components/sections/MarketIntelligence";
import ImpactStats from "@/components/sections/ImpactStats";
import CalculatorAndMap from "@/components/sections/CalculatorAndMap";
import CoreStrengths from "@/components/sections/CoreStrengths";
import Blog from "@/components/sections/Blog";
import InvestorFaq from "@/components/sections/InvestorFAQ";
import PortfolioMarquee from "@/components/sections/companies/PortfolioMarquee";
import Team from "@/components/sections/about/Team";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. THE HOOK (DARK) */}
      <Hero /> 
      <PortfolioMarquee /> 

      {/* 2. THE PROCESS (CREAM) */}
      <InvestmentModel /> 

      {/* 3. THE PROOF (DARK) */}
      <ImpactStats /> 

      {/* 4. THE LIVE CONTEXT (WHITE) */}
      <MarketIntelligence /> 

      {/* 5. THE PERSONALIZATION (CREAM) */}
      <CalculatorAndMap /> 

      {/* 6. THE LOGIC (WHITE) */}
      <CoreStrengths /> 

      {/* 7. RECENT UPDATES (CREAM) */}
      <Blog />

      {/* 8. THE AUTHORITY (DARK) - Moved down! */}
      <Team/> 

      {/* 9. SUPPORT (WHITE) */}
      <InvestorFaq />
    </main>
  );
}