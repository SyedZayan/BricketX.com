'use client';

import React from 'react';

export default function ContactHero() {
  return (
    <section className="w-full bg-bricket-dark pt-32 pb-24 px-6 flex flex-col items-center text-center relative border-b border-bricket-white/10 overflow-hidden">
      
      {/* MASTER BACKGROUND CONSISTENCY */}
      <div className="absolute inset-0 bg-[url('/images/hero-architecture.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-bricket-gold/5 blur-[120px] pointer-events-none -z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-8 flex items-center justify-center gap-4 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
          Institutional Onboarding
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up [animation-delay:150ms]">
          Initiate your <br className="hidden md:block" />
          <span className="text-bricket-gold italic font-light">allocation.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-bricket-grey max-w-2xl leading-relaxed mb-12 animate-fade-in-up [animation-delay:300ms]">
          Connect directly with our wealth management directors to discuss tailored fund structures, private asset acquisition, and platform onboarding.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up [animation-delay:450ms]">
          <div className="flex items-center gap-3 text-xs font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-5 py-2.5 rounded-md border border-green-400/20 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            24/7 Investor Support
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-bricket-grey uppercase tracking-widest bg-bricket-white/5 px-5 py-2.5 rounded-md border border-bricket-white/10 shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Secure Data Encryption
          </div>
        </div>
      </div>
    </section>
  );
}