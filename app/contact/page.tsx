import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfoAndMap from "@/components/sections/contact/ContactInfoAndMap";
import OnboardingForm from "@/components/sections/contact/OnboardingForm";

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <ContactHero />
      <OnboardingForm />
      <ContactInfoAndMap />
    </main>
  );
}