'use client';

import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="w-full bg-bricket-dark pt-32 pb-24 px-6 flex flex-col items-center text-center relative border-b border-bricket-white/10 overflow-hidden">
      
      {/* MASTER BACKGROUND CONSISTENCY */}
      <div className="absolute inset-0 bg-[url('/images/hero-architecture.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-bricket-gold/5 blur-[120px] pointer-events-none -z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-8 flex items-center justify-center gap-4 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
          Execution & Proof
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up [animation-delay:150ms]">
          A legacy built on <br className="hidden md:block" />
          <span className="text-bricket-gold italic font-light">tangible results.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-bricket-grey max-w-2xl leading-relaxed mb-12 animate-fade-in-up [animation-delay:300ms]">
          We do not just allocate capital; we engineer physical reality. Explore our portfolio of successfully delivered and actively managed real-asset projects across the globe[cite: 322].
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up [animation-delay:450ms]">
          <div className="flex items-center gap-3 text-xs font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-5 py-2.5 rounded-md border border-green-400/20 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            250+ Projects Delivered [cite: 320]
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-bricket-grey uppercase tracking-widest bg-bricket-white/5 px-5 py-2.5 rounded-md border border-bricket-white/10 shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Global Infrastructure [cite: 294]
          </div>
        </div>
      </div>
    </section>
  );
}