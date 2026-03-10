'use client';

import React, { useState } from 'react';

export default function OnboardingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000); 
  };

  return (
    <section className="w-full pt-20 pb-24 px-6 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-bricket-white rounded-3xl shadow-xl border border-bricket-grey/15 p-8 md:p-12 animate-fade-in-up [animation-delay:150ms]">
          
          <div className="mb-10 pb-6 border-b border-bricket-grey/10">
            <h2 className="text-2xl font-extrabold text-bricket-dark mb-2">Confidential Inquiry</h2>
            <p className="text-sm text-bricket-grey">All submitted information is protected by 256-bit encryption and strict NDAs.</p>
          </div>

          {/* Grid Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Full Legal Name *</label>
              <input type="text" id="fullName" required className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Corporate Email *</label>
              <input type="email" id="email" required className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark" />
            </div>
          </div>

          {/* Grid Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Company / Family Office</label>
              <input type="text" id="company" className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Direct Phone Number</label>
              <input type="tel" id="phone" className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark" />
            </div>
          </div>

          {/* Grid Row 3 (The Enhanced Dropdowns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Capital Allocation Select */}
            <div className="flex flex-col gap-2">
              <label htmlFor="capital" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Intended Capital Allocation *</label>
              <div className="relative w-full group">
                <select 
                  id="capital" 
                  required 
                  defaultValue="" 
                  className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled>Select an investment tier...</option>
                  <option value="50k-250k">$50,000 - $250,000</option>
                  <option value="250k-1M">$250,000 - $1,000,000</option>
                  <option value="1M-5M">$1,000,000 - $5,000,000</option>
                  <option value="5M+">$5,000,000+</option>
                </select>
                {/* Custom Professional Chevron */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-bricket-gold transition-transform duration-300 group-focus-within:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Asset Interest Select */}
            <div className="flex flex-col gap-2">
              <label htmlFor="asset" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Primary Asset Interest *</label>
              <div className="relative w-full group">
                <select 
                  id="asset" 
                  required 
                  defaultValue="" 
                  className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled>Select an asset class...</option>
                  <option value="real-estate">Real Estate & Development</option>
                  <option value="mining">Mining & Commodities</option>
                  <option value="digital">Digital Infrastructure</option>
                  <option value="diversified">Diversified Portfolio</option>
                </select>
                {/* Custom Professional Chevron */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-bricket-gold transition-transform duration-300 group-focus-within:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-2 mb-10">
            <label htmlFor="message" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Investment Objectives (Optional)</label>
            <textarea id="message" rows={4} className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark resize-none"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-bricket-dark hover:bg-bricket-gold text-bricket-white hover:text-bricket-dark py-5 rounded-xl font-extrabold text-lg transition-all duration-500 shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Transmitting Securely...
              </span>
            ) : (
              <>
                Submit Capital Inquiry
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}