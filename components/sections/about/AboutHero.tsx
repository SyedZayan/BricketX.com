import React from 'react';

export default function AboutHero() {
  return (
    <section className="w-full bg-bricket-dark pt-32 pb-24 px-6 flex flex-col items-center text-center relative border-b border-bricket-white/10 overflow-hidden">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-architecture.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      {/* Ambient Top Glow (Centered for consistency) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-bricket-gold/5 blur-[120px] pointer-events-none -z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Eyebrow with flanking gold lines */}
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-8 flex items-center justify-center gap-4 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
          Firm Overview
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
        </span>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up [animation-delay:150ms]">
          Architects of generational <br className="hidden md:block" />
          <span className="text-bricket-gold italic font-light">wealth.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-bricket-grey max-w-2xl leading-relaxed mb-12 animate-fade-in-up [animation-delay:300ms]">
          BricketX is a premier holding company and real-asset platform. We bridge the gap between institutional capital and the world’s most secure, high-yield physical assets.
        </p>

        {/* Centered Firm Badges to match layout consistency */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up [animation-delay:450ms]">
          <div className="flex items-center gap-3 text-xs font-bold text-bricket-white uppercase tracking-widest bg-bricket-white/5 px-5 py-2.5 rounded-md border border-bricket-white/10 shadow-lg">
            <svg className="w-4 h-4 text-bricket-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Est. 2015
          </div>
          
          <div className="flex items-center gap-3 text-xs font-bold text-bricket-grey uppercase tracking-widest bg-bricket-white/5 px-5 py-2.5 rounded-md border border-bricket-white/10 shadow-lg">
            <svg className="w-4 h-4 text-bricket-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Global Presence
          </div>
        </div>

      </div>
    </section>
  );
}