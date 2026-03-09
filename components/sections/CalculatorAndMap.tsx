'use client';

import React, { useState, useEffect } from 'react';

// --- GLOBAL REGIONS DATA ---
const globalRegions = [
  {
    id: "uae",
    name: "United Arab Emirates",
    focus: "Real Estate & Infrastructure",
    status: "Active Market",
    coordinates: "23.4241° N, 53.8478° E"
  },
  {
    id: "pk",
    name: "Pakistan",
    focus: "Development & Tech Hubs",
    status: "High Growth",
    coordinates: "30.3753° N, 69.3451° E"
  },
  {
    id: "afr",
    name: "Africa Region",
    focus: "Mineral & Industrial Mining",
    status: "Strategic Expansion",
    coordinates: "8.7832° S, 34.5085° E"
  },
  {
    id: "gl",
    name: "Global Markets",
    focus: "Commodity & Gold Trading",
    status: "Liquid Assets",
    coordinates: "Worldwide Operations"
  }
];

export default function CalculatorAndMap() {
  // Calculator State
  const [amount, setAmount] = useState<number>(100000);
  const [roi, setRoi] = useState<number>(15);
  const [duration, setDuration] = useState<number>(5); // In years

  // Derived State
  const [projectedProfit, setProjectedProfit] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  // Recalculate whenever inputs change
  useEffect(() => {
    // Simple compound/linear calculation for demonstration
    // Profit = Amount * (ROI / 100) * Duration
    const calculatedProfit = amount * (roi / 100) * duration;
    setProjectedProfit(calculatedProfit);
    setTotalValue(amount + calculatedProfit);
  }, [amount, roi, duration]);

  // Formatter for currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bricket-gold/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 animate-fade-in-up">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
            Project Your Wealth
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-white tracking-tight mb-6">
            Calculate your <span className="text-bricket-gold italic font-light">returns.</span>
          </h2>
          <p className="text-lg text-bricket-grey max-w-2xl mx-auto leading-relaxed">
            Use our interactive tool to project the potential growth of your capital across our global real-asset portfolio.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* =========================================
              LEFT: THE ROI CALCULATOR
          ========================================= */}
          <div className="w-full lg:w-1/2 bg-bricket-white/5 border border-bricket-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm animate-fade-in-up [animation-delay:150ms] flex flex-col">
            
            {/* Range Slider: Amount */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-bricket-grey uppercase tracking-wider">Initial Investment</label>
                <span className="text-2xl font-extrabold text-bricket-white">{formatCurrency(amount)}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="1000000" 
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-bricket-white/10 rounded-lg appearance-none cursor-pointer accent-bricket-gold"
              />
              <div className="flex justify-between text-xs text-bricket-grey/50 mt-2 font-medium">
                <span>$10k</span>
                <span>$1M+</span>
              </div>
            </div>

            {/* Range Slider: ROI */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-bricket-grey uppercase tracking-wider">Expected Annual Return</label>
                <span className="text-2xl font-extrabold text-bricket-white">{roi}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="35" 
                step="1"
                value={roi}
                onChange={(e) => setRoi(Number(e.target.value))}
                className="w-full h-2 bg-bricket-white/10 rounded-lg appearance-none cursor-pointer accent-bricket-gold"
              />
              <div className="flex justify-between text-xs text-bricket-grey/50 mt-2 font-medium">
                <span>5% (Conservative)</span>
                <span>35% (Aggressive)</span>
              </div>
            </div>

            {/* Range Slider: Duration */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-bricket-grey uppercase tracking-wider">Investment Duration</label>
                <span className="text-2xl font-extrabold text-bricket-white">{duration} Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-bricket-white/10 rounded-lg appearance-none cursor-pointer accent-bricket-gold"
              />
              <div className="flex justify-between text-xs text-bricket-grey/50 mt-2 font-medium">
                <span>1 Year</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Output Display */}
            <div className="mt-auto bg-bricket-dark rounded-2xl p-6 md:p-8 border border-bricket-gold/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-bricket-gold/5 group-hover:bg-bricket-gold/10 transition-colors duration-500"></div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <p className="text-xs text-bricket-grey font-bold uppercase tracking-wider mb-2">Projected Profit</p>
                  <p className="text-2xl md:text-3xl font-extrabold text-green-400">{formatCurrency(projectedProfit)}</p>
                </div>
                <div>
                  <p className="text-xs text-bricket-grey font-bold uppercase tracking-wider mb-2">Total Value</p>
                  <p className="text-2xl md:text-3xl font-extrabold text-bricket-gold">{formatCurrency(totalValue)}</p>
                </div>
              </div>
              
              <button className="w-full mt-8 bg-bricket-gold hover:bg-bricket-white text-bricket-dark py-4 rounded-xl font-bold transition-colors duration-300 relative z-10">
                Inquire About This Projection
              </button>
            </div>

          </div>


          {/* =========================================
              RIGHT: GLOBAL INVESTMENT MAP / REGIONS
          ========================================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center animate-fade-in-up [animation-delay:300ms]">
            
            <h3 className="text-3xl font-bold text-bricket-white mb-8">
              A globally diversified footprint.
            </h3>
            
            <p className="text-lg text-bricket-grey mb-10 leading-relaxed">
              We mitigate localized risk by distributing capital across emerging and established international markets, focusing purely on high-demand real assets.
            </p>

            <div className="flex flex-col gap-4">
              {globalRegions.map((region, index) => (
                <div 
                  key={index} 
                  className="group relative flex items-center justify-between p-6 rounded-2xl bg-bricket-white/5 border border-bricket-white/10 hover:border-bricket-gold/50 hover:bg-bricket-white/10 transition-all duration-300 overflow-hidden cursor-default"
                >
                  {/* Glowing Pin Effect on Hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-bricket-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>
                  
                  <div className="flex items-center gap-6 relative z-10">
                    {/* Animated Map Pin */}
                    <div className="w-12 h-12 rounded-full bg-bricket-dark border border-bricket-white/10 flex items-center justify-center shrink-0 group-hover:border-bricket-gold transition-colors duration-300 relative">
                      <span className="absolute w-2 h-2 rounded-full bg-bricket-gold animate-ping opacity-75"></span>
                      <span className="relative w-2 h-2 rounded-full bg-bricket-gold"></span>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-bricket-white group-hover:text-bricket-gold transition-colors duration-300">
                        {region.name}
                      </h4>
                      <p className="text-sm text-bricket-grey mt-1">
                        {region.focus}
                      </p>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block relative z-10">
                    <p className="text-xs font-bold text-bricket-white uppercase tracking-wider bg-bricket-dark px-3 py-1 rounded-full border border-bricket-white/10">
                      {region.status}
                    </p>
                    <p className="text-[10px] text-bricket-grey mt-2 tracking-widest font-mono">
                      {region.coordinates}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}