import React from 'react';

export default function ContactHero() {
  return (
    <section className="w-full bg-bricket-dark py-24 px-6 relative overflow-hidden border-b border-bricket-gold/20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bricket-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
          Institutional Onboarding
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-white tracking-tight mb-6 leading-[1.1]">
          Initiate your <span className="text-bricket-gold italic font-light">allocation.</span>
        </h1>
        <p className="text-lg text-bricket-grey leading-relaxed max-w-2xl mx-auto">
          Connect directly with our wealth management directors to discuss tailored fund structures, private asset acquisition, and platform onboarding.
        </p>
      </div>
    </section>
  );
}