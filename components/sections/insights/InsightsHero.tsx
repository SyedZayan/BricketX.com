'use client';

import React from 'react';

export default function InsightsHero() {
  return (
    <section className="w-full bg-bricket-dark pt-32 pb-24 px-6 flex flex-col items-center text-center relative border-b border-bricket-white/10 overflow-hidden">
      
      {/* MASTER BACKGROUND CONSISTENCY */}
      <div className="absolute inset-0 bg-[url('/images/hero-architecture.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-bricket-gold/5 blur-[120px] pointer-events-none -z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-8 flex items-center justify-center gap-4 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
          Proprietary Intelligence
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up [animation-delay:150ms]">
          Global markets. <br className="hidden md:block"/> 
          Localized <span className="text-bricket-gold italic font-light">precision.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-bricket-grey max-w-2xl leading-relaxed mb-12 animate-fade-in-up [animation-delay:300ms]">
          BricketX capital allocation is driven by rigorous, real-time data. Review the historical performance and live metrics of the real assets anchoring our portfolios.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up [animation-delay:450ms]">
          <div className="flex items-center gap-3 text-xs font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-5 py-2.5 rounded-md border border-green-400/20 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Live API Sync
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-bricket-grey uppercase tracking-widest bg-bricket-white/5 px-5 py-2.5 rounded-md border border-bricket-white/10 shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 13h2.626c.825 0 1.572-.44 1.963-1.152l.983-1.789a2.25 2.25 0 013.856 0l.983 1.789c.39.712 1.138 1.152 1.963 1.152H21m-6-6l-3-3m0 0l-3 3m3-3v12" /></svg>
            Real-Time Analytics
          </div>
        </div>
      </div>
    </section>
  );
}