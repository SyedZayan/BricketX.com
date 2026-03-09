import React from 'react';

export default function InsightsHero() {
  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 relative overflow-hidden border-b border-bricket-white/10">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bricket-gold/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in-up">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
          Proprietary Intelligence
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight mb-8 leading-[1.1]">
          Global markets. <br className="hidden md:block"/> Localized <span className="text-bricket-gold italic font-light">precision.</span>
        </h1>
        <p className="text-lg md:text-xl text-bricket-grey leading-relaxed max-w-3xl mx-auto">
          BricketX capital allocation is driven by rigorous, real-time data. Review the historical performance and live metrics of the real assets anchoring our portfolios.
        </p>
      </div>
    </section>
  );
}