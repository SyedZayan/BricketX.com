import PortfolioMarquee from "../components/sections/PortfolioMarquee";
import PortfolioGrid from "../components/sections/PortfolioGrid";
import ImpactStats from "../components/sections/ImpactStats";
import Team from "../components/sections/Team";
import Blog from "../components/sections/Blog";
import Testimonials from "../components/sections/Testimonials";
import ShowcaseMarquee from "../components/sections/ShowcaseMarquee";
import CoreStrengths from "../components/sections/CoreStrengths"; // <-- Import
import Faq from "../components/sections/Faq";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero/>
      <PortfolioMarquee />
      <PortfolioGrid />
      <ImpactStats />
      <Team />
      <Blog />
      <Testimonials />
      <ShowcaseMarquee /> 
      <CoreStrengths /> 
      <Faq />
      
    </main>
  );
}