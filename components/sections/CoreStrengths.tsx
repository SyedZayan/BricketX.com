'use client';

import React, { useState } from 'react';
import { coreStrengths } from '../../data';

export default function CoreStrengths() {
  // State to track which accordion tab is currently open (defaults to the first one: 0)
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    // If clicking the already open tab, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-40 px-6 overflow-hidden border-t border-bricket-grey/10 relative">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-bricket-gold/5 to-transparent pointer-events-none -z-0"></div>

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
                {/* Accordion Header (Clickable) */}
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-bricket-gold/50 rounded-lg"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    {/* Number */}
                    <span className={`text-sm md:text-base font-bold tracking-widest transition-colors duration-300 ${isOpen ? 'text-bricket-gold' : 'text-bricket-grey/50 group-hover:text-bricket-grey'}`}>
                      {strength.number}
                    </span>
                    
                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isOpen ? 'text-bricket-white' : 'text-bricket-grey group-hover:text-bricket-white'}`}>
                      {strength.title}
                    </h3>
                  </div>

                  {/* Animated Plus/Minus Icon */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'border-bricket-gold bg-bricket-gold/10 text-bricket-gold rotate-180' : 'border-bricket-white/10 text-bricket-grey group-hover:border-bricket-white/30 group-hover:text-bricket-white'}`}>
                    <svg 
                      className="w-5 h-5 transition-transform duration-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {isOpen ? (
                        // Minus Icon
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        // Plus Icon
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Accordion Body (The smooth expanding trick using CSS Grid) */}
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