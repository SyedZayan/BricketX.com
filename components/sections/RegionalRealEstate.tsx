'use client';

import React, { useState } from 'react';
import { regionalRealEstateData } from '../../data';

export default function RegionalRealEstate() {
  const [activeRegion, setActiveRegion] = useState<'uae' | 'pakistan'>('uae');

  return (
    <section className="w-full py-24 px-6 bg-bricket-white border-t border-bricket-grey/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-dark mb-4">Regional Real Estate Markets</h2>
          <p className="text-lg text-bricket-grey max-w-2xl mx-auto">
            Strategic land development and property acquisition in high-growth corridors.
          </p>
        </div>

        {/* Region Toggles */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in-up [animation-delay:150ms]">
          <button 
            onClick={() => setActiveRegion('uae')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeRegion === 'uae' ? 'bg-bricket-dark text-bricket-white shadow-lg' : 'bg-bricket-grey/5 text-bricket-grey hover:bg-bricket-grey/10'}`}
          >
            UAE Markets
          </button>
          <button 
            onClick={() => setActiveRegion('pakistan')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeRegion === 'pakistan' ? 'bg-bricket-dark text-bricket-white shadow-lg' : 'bg-bricket-grey/5 text-bricket-grey hover:bg-bricket-grey/10'}`}
          >
            Pakistan Markets
          </button>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalRealEstateData[activeRegion].map((city, index) => (
            <div 
              key={index}
              className="bg-[#fbf8f3] rounded-2xl border border-bricket-grey/15 p-6 flex flex-col hover:border-bricket-gold/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up opacity-0 group"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-bricket-dark text-bricket-gold flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-bricket-dark">{city.city}</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-bricket-grey mb-1">Average Price</p>
                <p className="text-lg font-extrabold text-bricket-dark">{city.price}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-bricket-grey mb-1">Market Trend</p>
                <p className="text-sm font-bold text-green-600 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  {city.trend}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-bricket-grey/10">
                <p className="text-[10px] font-bold uppercase tracking-wider text-bricket-grey mb-2">Key Targets</p>
                <div className="flex flex-wrap gap-2">
                  {city.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs font-medium text-bricket-dark bg-bricket-white border border-bricket-grey/20 px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}