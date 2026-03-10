import React from 'react';
import { goldPerformanceData } from '../../../data';

export default function GoldMarketDashboard() {
  return (
    <section className="w-full py-24 px-6 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left: Historical Performance Chart */}
        <div className="w-full lg:w-1/2 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold text-bricket-dark mb-6">Yearly Gold Performance</h2>
          <p className="text-bricket-grey mb-10 leading-relaxed">
            Gold remains the ultimate hedge against fiat inflation. Observe the consistent, upward trajectory of physical gold over recent market cycles.
          </p>
          
          <div className="bg-bricket-white rounded-2xl shadow-sm border border-bricket-grey/15 p-6 md:p-8">
            <div className="grid grid-cols-3 text-xs font-bold text-bricket-grey uppercase tracking-wider mb-4 pb-2 border-b border-bricket-grey/10">
              <div>Year</div>
              <div>Price (USD/oz)</div>
              <div className="text-right">Growth</div>
            </div>
            
            <div className="flex flex-col gap-2">
              {goldPerformanceData.map((data, index) => (
                <div key={index} className="grid grid-cols-3 items-center py-4 border-b border-bricket-grey/5 last:border-0 hover:bg-bricket-grey/5 transition-colors rounded-lg px-2 -mx-2">
                  <div className="font-bold text-bricket-dark text-lg">{data.year}</div>
                  <div className="font-semibold text-bricket-dark">{data.price}</div>
                  <div className="text-right font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full w-max ml-auto border border-green-200">
                    {data.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Why Gold Insights */}
        <div className="w-full lg:w-1/2 animate-fade-in-up [animation-delay:200ms]">
          <div className="bg-bricket-dark rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bricket-gold/10 rounded-full blur-[40px]"></div>
            
            <h3 className="text-2xl font-bold text-bricket-white mb-8 relative z-10">
              Why Gold is a Core Real Asset
            </h3>
            
            <ul className="flex flex-col gap-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bricket-gold/20 flex items-center justify-center shrink-0 text-bricket-gold mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-bricket-white font-bold mb-1">Global Demand Remains High</h4>
                  <p className="text-sm text-bricket-grey/80">Industrial, tech, and central bank demand continues to outpace new mining supply.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bricket-gold/20 flex items-center justify-center shrink-0 text-bricket-gold mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-bricket-white font-bold mb-1">Hedge Against Inflation</h4>
                  <p className="text-sm text-bricket-grey/80">As fiat currencies lose purchasing power, physical gold intrinsically adjusts upward.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bricket-gold/20 flex items-center justify-center shrink-0 text-bricket-gold mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-bricket-white font-bold mb-1">Physical Asset Security</h4>
                  <p className="text-sm text-bricket-grey/80">Unlike digital or paper assets, gold cannot be erased, hacked, or bankrupted.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}