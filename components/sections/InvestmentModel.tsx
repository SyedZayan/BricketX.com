'use client';

import React from 'react';

const investmentSteps = [
  {
    number: "01",
    title: "Capital Allocation",
    description: "Your capital is securely deployed directly into vetted, high-yield institutional real asset projects.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    number: "02",
    title: "Asset Development",
    description: "Physical development, operational optimization, and strategic trading cycles are executed to build value.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    number: "03",
    title: "Yield Realization",
    description: "The tangible asset matures, generating substantial cash flow and significant intrinsic market appreciation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )
  },
  {
    number: "04",
    title: "Wealth Distribution",
    description: "High-yield returns are distributed back to your secure digital portal with complete radical transparency.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  }
];

export default function InvestmentModel() {
  return (
    // THEME ALIGNMENT: Soft Cream background makes the dark cards pop.
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 px-6 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: The Value Prop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24">
          <div className="w-full lg:w-1/2 animate-fade-in-up">
            <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-bricket-gold"></span>
              The BricketX Advantage
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-dark tracking-tight leading-[1.05] mb-8">
              Secured by assets. <br />
              Built for <span className="text-bricket-gold italic font-light">certainty.</span>
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-lg md:text-xl text-bricket-grey leading-relaxed mb-8">
              <strong className="text-bricket-dark font-bold">Real asset investments</strong> provide a defensive shield for your wealth by backing every dollar with physical, high-yield property, energy, and commodities.
            </p>
            <div className="flex items-center gap-6 p-6 bg-bricket-white rounded-2xl shadow-sm border border-bricket-grey/10">
               <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               </div>
               <p className="text-sm font-bold text-bricket-dark tracking-wide uppercase">
                  Radical Transparency • Inflation Protection • Capital Security
               </p>
            </div>
          </div>
        </div>

        {/* PIPELINE SECTION: How Investors Earn */}
        <div className="relative pt-12">
          
          {/* Subtle connecting line background for desktop */}
          <div className="hidden lg:block absolute top-[160px] left-0 w-full h-[1px] bg-bricket-grey/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {investmentSteps.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-8 rounded-3xl bg-bricket-white border border-bricket-grey/10 hover:border-bricket-gold/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                {/* Step Number Badge */}
                <div className="w-16 h-16 rounded-2xl bg-bricket-dark text-bricket-gold flex items-center justify-center mb-8 shadow-lg group-hover:bg-bricket-gold group-hover:text-bricket-dark transition-colors duration-500 relative">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-bricket-gold text-bricket-dark text-xs font-black border-4 border-[#fbf8f3] flex items-center justify-center">
                    {step.number}
                  </span>
                  {step.icon}
                </div>
                
                <h4 className="text-xl font-extrabold text-bricket-dark mb-4 group-hover:text-bricket-gold transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-sm text-bricket-grey leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile/tablet flow */}
                {index !== investmentSteps.length - 1 && (
                  <div className="lg:hidden mt-8 text-bricket-gold/30">
                    <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}