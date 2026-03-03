'use client';

import React, { useState } from 'react';
import { faqs } from '../../data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Editorial Header */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
            Insights & Information
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-dark tracking-tight mb-6">
            Frequently asked <span className="text-bricket-gold italic font-light">questions.</span>
          </h2>
          <p className="text-lg text-bricket-grey max-w-2xl mx-auto leading-relaxed">
            Gain clarity on how the BricketX group operates, our subsidiary structure, and our global capabilities.
          </p>
        </div>

        {/* Minimalist Line-Based Accordion List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-bricket-grey/20 group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-bricket-gold/50 rounded-lg"
                >
                  <span className={`text-xl md:text-2xl font-bold tracking-tight pr-8 transition-colors duration-300 ${isOpen ? 'text-bricket-gold' : 'text-bricket-dark group-hover:text-bricket-gold'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Custom Minimalist Plus/Minus Icon */}
                  <div className={`relative flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    {/* Horizontal Line (Always visible) */}
                    <span className={`absolute w-full h-0.5 transition-colors duration-300 ${isOpen ? 'bg-bricket-gold' : 'bg-bricket-dark group-hover:bg-bricket-gold'}`}></span>
                    {/* Vertical Line (Fades out when open to form a minus) */}
                    <span className={`absolute h-full w-0.5 transition-all duration-300 ${isOpen ? 'bg-transparent rotate-90 scale-0' : 'bg-bricket-dark group-hover:bg-bricket-gold scale-100'}`}></span>
                  </div>
                </button>

                {/* Smooth Expandable Answer */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-lg text-bricket-grey/90 leading-relaxed max-w-3xl pr-4 md:pr-12">
                      {faq.answer}
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