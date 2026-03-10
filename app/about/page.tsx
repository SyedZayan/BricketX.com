import AboutHero from "@/components/sections/about/AboutHero";
import CorporateValues from "@/components/sections/about/CorporateValues";
import FirmMilestones from "@/components/sections/about/FirmMilestones";
import Team from "@/components/sections/about/Team";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <AboutHero />
      <CorporateValues />
      <FirmMilestones/>
      <Team />
    </main>
  );
}