import ContactSection from "../../components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | BricketX",
  description: "Get in touch with the BricketX corporate team.",
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col">
      <ContactSection />
    </main>
  );
}