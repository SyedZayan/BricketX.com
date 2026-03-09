'use client';

import React, { useState } from 'react';

// --- MOCK DATA FOR THE DASHBOARD ---
const realEstateData = {
  uae: [
    { city: "Dubai", price: "AED 1,450", unit: "sq ft", trend: "up", update: "Daily" },
    { city: "Abu Dhabi", price: "AED 1,200", unit: "sq ft", trend: "up", update: "Daily" },
    { city: "Sharjah", price: "AED 520", unit: "sq ft", trend: "neutral", update: "Daily" },
    { city: "Ajman", price: "AED 320", unit: "sq ft", trend: "up", update: "Daily" },
  ],
  pk: [
    { city: "Islamabad", price: "PKR 14,500", unit: "sq ft", trend: "up", update: "Weekly" },
    { city: "Karachi", price: "PKR 12,000", unit: "sq ft", trend: "up", update: "Weekly" },
    { city: "Lahore", price: "PKR 10,200", unit: "sq ft", trend: "up", update: "Weekly" },
  ]
};

export default function MarketIntelligence() {
  const [chartPeriod, setChartPeriod] = useState('1M');
  const [activeRegion, setActiveRegion] = useState<'uae' | 'pk'>('uae');

  return (
    // We use your light cream background here to create a break from the dark sections, 
    // but the dashboard cards themselves will be dark and premium.
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
            Global Market Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-6">
            Data-driven <span className="text-bricket-gold italic font-light">intelligence.</span>
          </h2>
          <p className="text-lg text-bricket-grey max-w-2xl leading-relaxed">
            Real-time market insights driving our capital allocation. Monitor the core assets that back the BricketX global portfolio.
          </p>
        </div>

        {/* Dashboard Grid (Bento Box Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* =========================================
              LEFT COLUMN: GOLD MARKET TERMINAL (7 Cols)
          ========================================= */}
          <div className="lg:col-span-7 bg-bricket-dark rounded-2xl shadow-xl border border-bricket-grey/20 p-8 flex flex-col relative overflow-hidden animate-fade-in-up [animation-delay:150ms]">
            
            {/* Subtle Grid Background for "Terminal" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {/* Header & Status */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-bricket-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-bricket-gold animate-pulse"></span>
                  Live Gold Market
                </h3>
                <p className="text-sm text-bricket-grey/70 mt-1">XAU/USD • Spot Price</p>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <p className="text-xs font-bold text-bricket-white uppercase tracking-wider">Updated Daily</p>
                <p className="text-xs text-bricket-grey/70">10:00 AM UAE Time</p>
              </div>
            </div>

            {/* Big Data Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 relative z-10">
              <div>
                <p className="text-xs text-bricket-grey/70 uppercase font-bold tracking-wider mb-1">Price (USD/Oz)</p>
                <p className="text-3xl font-extrabold text-bricket-white">$2,162.40</p>
              </div>
              <div>
                <p className="text-xs text-bricket-grey/70 uppercase font-bold tracking-wider mb-1">Price (Gram)</p>
                <p className="text-2xl font-bold text-bricket-grey">$69.45</p>
              </div>
              <div>
                <p className="text-xs text-bricket-grey/70 uppercase font-bold tracking-wider mb-1">Weekly Trend</p>
                <p className="text-xl font-bold text-green-400 flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  +2.3%
                </p>
              </div>
              <div>
                <p className="text-xs text-bricket-grey/70 uppercase font-bold tracking-wider mb-1">Market Sentiment</p>
                <p className="text-xl font-bold text-bricket-gold">Bullish</p>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 min-h-[200px] bg-bricket-white/5 border border-bricket-white/10 rounded-xl relative z-10 flex flex-col p-4">
              
              {/* Chart Tabs */}
              <div className="flex gap-2 mb-4">
                {['1D', '1W', '1M', '1Y'].map((period) => (
                  <button 
                    key={period}
                    onClick={() => setChartPeriod(period)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-md transition-colors ${chartPeriod === period ? 'bg-bricket-gold text-bricket-dark' : 'text-bricket-grey hover:bg-bricket-white/10'}`}
                  >
                    {period}
                  </button>
                ))}
              </div>

              {/* Pseudo-Chart / API Placeholder */}
              {/* DEVELOPER NOTE: Inject TradingView Lightweight Chart Widget Here */}
              <div className="flex-1 w-full h-full flex items-end justify-between gap-1 mt-4 relative">
                 {/* This is a CSS-drawn placeholder line to look like a chart before you hook up the API */}
                 <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,45 T100,20 L100,100 L0,100 Z" fill="rgba(195,153,103,0.1)" />
                    <path d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,45 T100,20" fill="none" stroke="#C39967" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                 </svg>
              </div>
            </div>
          </div>


          {/* =========================================
              RIGHT COLUMN: REAL ESTATE MARKETS (5 Cols)
          ========================================= */}
          <div className="lg:col-span-5 bg-bricket-white rounded-2xl shadow-xl border border-bricket-grey/10 p-8 flex flex-col animate-fade-in-up [animation-delay:300ms]">
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-bricket-dark">Real Estate Indices</h3>
            </div>

            {/* Region Toggle */}
            <div className="flex p-1 bg-bricket-grey/5 rounded-lg mb-6">
              <button 
                onClick={() => setActiveRegion('uae')}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeRegion === 'uae' ? 'bg-bricket-white shadow-sm text-bricket-dark' : 'text-bricket-grey hover:text-bricket-dark'}`}
              >
                UAE Markets
              </button>
              <button 
                onClick={() => setActiveRegion('pk')}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeRegion === 'pk' ? 'bg-bricket-white shadow-sm text-bricket-dark' : 'text-bricket-grey hover:text-bricket-dark'}`}
              >
                Pakistan Markets
              </button>
            </div>

            {/* Data List */}
            <div className="flex flex-col gap-3">
              {/* Header Row */}
              <div className="grid grid-cols-12 text-xs font-bold text-bricket-grey uppercase tracking-wider pb-2 border-b border-bricket-grey/10">
                <div className="col-span-5">City</div>
                <div className="col-span-5">Avg Price</div>
                <div className="col-span-2 text-right">Trend</div>
              </div>

              {/* Render active region data */}
              {realEstateData[activeRegion].map((item, index) => (
                <div key={index} className="grid grid-cols-12 items-center py-3 border-b border-bricket-grey/5 last:border-0 hover:bg-bricket-grey/5 transition-colors rounded-lg px-2 -mx-2 cursor-pointer group">
                  <div className="col-span-5 font-bold text-bricket-dark group-hover:text-bricket-gold transition-colors">
                    {item.city}
                    <span className="block text-[10px] text-bricket-grey font-normal mt-0.5">Updated {item.update}</span>
                  </div>
                  <div className="col-span-5">
                    <span className="font-semibold text-bricket-dark">{item.price}</span>
                    <span className="text-xs text-bricket-grey ml-1">/ {item.unit}</span>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    {item.trend === 'up' ? (
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <button className="w-full py-3 border border-bricket-grey/20 rounded-lg text-sm font-bold text-bricket-dark hover:border-bricket-dark transition-colors">
                View Detailed Reports →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}