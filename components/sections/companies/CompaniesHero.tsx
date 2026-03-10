'use client';

import React from 'react';
import { portfolioCompanies } from '../../../data';

export default function CompaniesHero() {
  return (
    <section className="w-full bg-bricket-dark pt-32 pb-24 px-6 flex flex-col items-center text-center relative border-b border-bricket-white/10 overflow-hidden">
      
      {/* MASTER BACKGROUND CONSISTENCY */}
      <div className="absolute inset-0 bg-[url('/images/hero-architecture.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-bricket-gold/5 blur-[120px] pointer-events-none -z-0"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Eyebrow with flanking gold lines */}
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-8 flex items-center justify-center gap-4 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
          The BricketX Ecosystem
          <span className="w-8 h-[1px] bg-bricket-gold"></span>
        </span>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up [animation-delay:150ms]">
          Building the foundation <br className="hidden md:block" />
          <span className="text-bricket-gold italic font-light">for tomorrow.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-bricket-grey max-w-2xl leading-relaxed mb-12 animate-fade-in-up [animation-delay:300ms]">
          Through Mintrix Contracting, Mintrix Maintenance, Mintrix Mining, and our regional tech hubs, BricketX delivers scale, expertise, and operational excellence across construction, resource extraction, and digital solutions.
        </p>

        {/* The CSS-Only Custom Dropdown */}
        <div className="relative inline-block text-left animate-fade-in-up [animation-delay:450ms] z-50">
          <details className="group">
            <summary className="flex items-center gap-4 px-8 py-4 bg-bricket-white/5 border border-bricket-white/10 text-bricket-white rounded-xl cursor-pointer hover:bg-bricket-white/10 transition-colors font-bold list-none [&::-webkit-details-marker]:hidden shadow-lg">
              Select Operating Company
              <svg className="w-5 h-5 text-bricket-gold transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </summary>
            
            {/* Dropdown Menu - Dynamically mapped from data.ts */}
            <div className="absolute top-full left-0 w-full mt-2 bg-[#1a1a1a] border border-bricket-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
              {portfolioCompanies.map((company, idx) => (
                <a 
                  key={idx}
                  href={company.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 text-sm text-bricket-grey hover:text-bricket-gold hover:bg-bricket-white/5 transition-colors border-b border-bricket-white/5 last:border-b-0 text-left font-bold flex justify-between items-center"
                >
                  {company.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}