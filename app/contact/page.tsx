import ContactHero from "@/components/sections/ContactHero";
import OnboardingForm from "@/components/sections/OnboardingForm";
import ContactInfoAndMap from "@/components/sections/ContactInfoAndMap";

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <ContactHero />
      <OnboardingForm />
      <ContactInfoAndMap />
    </main>
  );
}