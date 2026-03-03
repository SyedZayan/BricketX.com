import AboutHero from "../../components/sections/AboutHero";
import Values from "../../components/sections/Values";
import Timeline from "../../components/sections/Timeline";
import Team from "../../components/sections/Team";
import Link from "next/link";

export const metadata = {
  title: "About Us | BricketX",
  description: "Learn about the history, values, and leadership behind BricketX.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      <AboutHero />
      <Values />
      <Timeline />
      
      {/* Reusing your existing Team component! */}
      <div className="pt-20 bg-bricket-white">
        <Team />
      </div>

      {/* CTA Section matching the bottom of the screenshot */}
      <section className="w-full bg-[#fbf8f3] py-20 px-6 border-t border-bricket-grey/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-6">
            We're looking for people who share our vision!
          </h2>
          <p className="text-lg text-bricket-grey mb-10">
            Join the BricketX family and help us build the future across multiple global industries.
          </p>
          <Link 
            href="/careers" 
            className="inline-block bg-bricket-dark text-white font-semibold px-8 py-4 rounded-md hover:bg-bricket-gold transition-colors duration-300 shadow-md"
          >
            View Open Positions
          </Link>
        </div>
      </section>

    </main>
  );
}