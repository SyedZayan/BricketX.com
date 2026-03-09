import React from 'react';

// The 4-step revenue pipeline data
const investmentSteps = [
  {
    number: "01",
    title: "Capital Allocation",
    description: "Your capital is securely invested directly into vetted, high-yield real asset projects.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    number: "02",
    title: "Asset Development",
    description: "Physical development, operational optimization, or strategic commodity trading activity begins.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    number: "03",
    title: "Profit Generation",
    description: "The tangible asset matures or trades, generating substantial revenue and intrinsic market value.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )
  },
  {
    number: "04",
    title: "Wealth Distribution",
    description: "High-yield returns are securely distributed back to investors via our transparent digital portal.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  }
];

export default function InvestmentModel() {
  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 overflow-hidden relative">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-bricket-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: "What is Real Asset Investment?" */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-24">
          <div className="w-full lg:w-1/2 animate-fade-in-up">
            <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-bricket-gold"></span>
              The BricketX Edge
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bricket-white tracking-tight leading-[1.1]">
              Backed by tangible assets. Built for absolute <span className="text-bricket-gold italic font-light">security.</span>
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in-up [animation-delay:200ms]">
            <p className="text-lg md:text-xl text-bricket-grey leading-relaxed mb-6">
              <strong className="text-bricket-white font-semibold">Real asset investments</strong> are backed by physical, intrinsic value—such as prime real estate, land development, natural resources, and commodities.
            </p>
            <p className="text-base text-bricket-grey/80 leading-relaxed pl-4 border-l-2 border-bricket-gold/50">
              This structure provides investors with greater capital security, robust protection against inflation, and complete transparency compared to purely financial, paper-based investments.
            </p>
          </div>
        </div>

        {/* Bottom Section: "How Investors Earn" Pipeline */}
        <div className="w-full pt-16 border-t border-bricket-white/10 relative">
          
          <h3 className="text-2xl md:text-3xl font-bold text-bricket-white mb-16 text-center animate-fade-in-up">
            How our investors earn returns
          </h3>

          {/* The Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[165px] left-[10%] w-[80%] h-[2px] bg-bricket-white/10 z-0"></div>
          <div className="hidden lg:block absolute top-[165px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-bricket-gold via-bricket-gold to-bricket-gold/10 z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>

          {/* 4-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {investmentSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                {/* Step Icon Box */}
                <div className="w-20 h-20 rounded-2xl bg-bricket-dark border border-bricket-gold/30 flex items-center justify-center text-bricket-gold mb-6 shadow-[0_0_30px_rgba(195,153,103,0.1)] relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-bricket-white text-bricket-dark font-bold text-xs flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                
                <h4 className="text-xl font-bold text-bricket-white mb-3">
                  {step.title}
                </h4>
                
                <p className="text-sm text-bricket-grey/80 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}