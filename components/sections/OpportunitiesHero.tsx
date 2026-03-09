import React from 'react';

export default function OpportunitiesHero() {
  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 relative overflow-hidden border-b border-bricket-gold/20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bricket-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-10 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
            Current Offerings
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight mb-6 leading-[1.1]">
            Access high-yield, <span className="text-bricket-gold italic font-light">asset-backed</span> portfolios.
          </h1>
          <p className="text-lg md:text-xl text-bricket-grey leading-relaxed">
            Explore our vetted pipeline of institutional-grade investment opportunities across global real estate, commodities, and digital infrastructure.
          </p>
        </div>
        
        <div className="shrink-0 animate-fade-in-up [animation-delay:200ms]">
           <div className="flex flex-col gap-3 bg-bricket-white/5 border border-bricket-white/10 p-5 rounded-xl backdrop-blur-sm">
              <p className="text-xs font-bold text-bricket-white uppercase tracking-wider mb-1">Platform Security</p>
              <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                Audited & Regulated
              </div>
              <div className="flex items-center gap-2 text-xs text-bricket-grey font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure Capital Deployment
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}