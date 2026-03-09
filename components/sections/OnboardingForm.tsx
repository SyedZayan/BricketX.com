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
    <section className="w-full pt-20 pb-10 px-6 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-bricket-white rounded-3xl shadow-xl border border-bricket-grey/15 p-8 md:p-12 animate-fade-in-up [animation-delay:150ms]">
          
          <div className="mb-10 pb-6 border-b border-bricket-grey/10">
            <h2 className="text-2xl font-extrabold text-bricket-dark mb-2">Confidential Inquiry</h2>
            <p className="text-sm text-bricket-grey">All submitted information is protected by 256-bit encryption and strict NDAs.</p>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="capital" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Intended Capital Allocation *</label>
              {/* FIXED: Added defaultValue="" here and removed selected from the option below */}
              <select id="capital" required defaultValue="" className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark appearance-none cursor-pointer">
                <option value="" disabled>Select an investment tier...</option>
                <option value="50k-250k">$50,000 - $250,000</option>
                <option value="250k-1M">$250,000 - $1,000,000</option>
                <option value="1M-5M">$1,000,000 - $5,000,000</option>
                <option value="5M+">$5,000,000+</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="asset" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Primary Asset Interest *</label>
              {/* FIXED: Added defaultValue="" here and removed selected from the option below */}
              <select id="asset" required defaultValue="" className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark appearance-none cursor-pointer">
                <option value="" disabled>Select an asset class...</option>
                <option value="real-estate">Real Estate & Development</option>
                <option value="mining">Mining & Commodities</option>
                <option value="digital">Digital Infrastructure</option>
                <option value="diversified">Diversified Portfolio</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-10">
            <label htmlFor="message" className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Investment Objectives (Optional)</label>
            <textarea id="message" rows={4} className="w-full bg-bricket-grey/5 border border-bricket-grey/20 rounded-lg px-4 py-3.5 focus:outline-none focus:border-bricket-gold transition-colors text-bricket-dark resize-none"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-bricket-dark hover:bg-bricket-gold text-bricket-white py-5 rounded-xl font-extrabold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Transmitting Securely...' : 'Submit Capital Inquiry'}
            {!isSubmitting && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
          </button>
        </form>
      </div>
    </section>
  );
}