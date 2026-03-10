'use client';

import React, { useState } from 'react';
import { coreStrengths } from '../../data';

export default function CoreStrengths() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // RESTORED: Deep dark background with subtle top border
    <section className="w-full bg-bricket-dark py-24 lg:py-40 px-6 overflow-hidden border-t border-bricket-white/5 relative">
      
      {/* RESTORED: Subtle Background Glow */}
<div className="absolute top-0 right-[-10%] w-[60%] h-[80%] rounded-full bg-bricket-gold/5 blur-[150px] pointer-events-none -z-0"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Sticky Header */}
        <div className="w-full lg:w-[40%] flex flex-col items-start text-left lg:sticky lg:top-32 h-max">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4 animate-fade-in-up">
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
            The BricketX Advantage
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-white tracking-tight mb-8 animate-fade-in-up [animation-delay:150ms] leading-[1.1]">
            Driven by excellence across <span className="text-bricket-gold font-serif italic font-light tracking-normal">every</span> dimension.
          </h2>
          
          <p className="text-lg text-bricket-grey leading-relaxed animate-fade-in-up [animation-delay:300ms]">
            We do not just invest in companies; we engineer ecosystems. Our rigorous operational standards ensure that every BricketX subsidiary dominates its respective market segment, providing unparalleled value to our partners.
          </p>
        </div>

        {/* Right Column: The Interactive Executive Accordion */}
        <div className="w-full lg:w-[60%] flex flex-col animate-fade-in-up [animation-delay:450ms]">
          {coreStrengths.map((strength, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-bricket-white/10 last:border-b-0 group"
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-bricket-gold/50 rounded-lg"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    {/* RESTORED: Ghosted numbers that turn gold */}
                    <span className={`text-sm md:text-base font-bold tracking-widest transition-colors duration-300 ${isOpen ? 'text-bricket-gold' : 'text-bricket-grey/40 group-hover:text-bricket-grey'}`}>
                      {strength.number}
                    </span>
                    
                    {/* RESTORED: Crisp white text */}
                    <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isOpen ? 'text-bricket-white' : 'text-bricket-grey group-hover:text-bricket-white'}`}>
                      {strength.title}
                    </h3>
                  </div>

                  {/* RESTORED: Dark mode icon borders */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'border-bricket-gold bg-bricket-gold/10 text-bricket-gold rotate-180' : 'border-bricket-white/10 text-bricket-grey group-hover:border-bricket-white/30 group-hover:text-bricket-white'}`}>
                    <svg 
                      className="w-5 h-5 transition-transform duration-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Accordion Body */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 md:pb-10 pl-14 md:pl-16 pr-4 md:pr-12 text-lg text-bricket-grey/90 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}