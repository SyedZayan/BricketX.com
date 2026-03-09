import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 relative overflow-hidden border-b border-bricket-gold/20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bricket-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
          Execution & Proof
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight mb-8 leading-[1.1]">
          A legacy built on <span className="text-bricket-gold italic font-light">tangible results.</span>
        </h1>
        <p className="text-lg md:text-xl text-bricket-grey leading-relaxed max-w-3xl mx-auto">
          We do not just allocate capital; we engineer physical reality. Explore our portfolio of successfully delivered and actively managed real-asset projects across the globe.
        </p>
      </div>
    </section>
  );
}