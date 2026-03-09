import AboutHero from "@/components/sections/AboutHero";
import CorporateValues from "@/components/sections/CorporateValues";
import FirmMilestones from "@/components/sections/FirmMilestones";
import Team from "@/components/sections/Team"; // Reusing our amazing Team component!

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <AboutHero />
      <CorporateValues />
      <FirmMilestones />
      {/* We drop the Team component right here to show the Leadership Board */}
      <Team />
    </main>
  );
}