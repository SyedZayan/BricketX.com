import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioCompanies } from '../../data'; 

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="w-full bg-[#fbf8f3] py-24 lg:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32">
          <h2 className="text-5xl md:text-6xl font-extrabold text-bricket-dark tracking-tight mb-6">
            Our established <span className="text-bricket-gold">portfolio</span>
          </h2>
          <p className="text-lg text-bricket-grey leading-relaxed">
            BricketX operates a diverse ecosystem of specialized companies. Each brand is united by our core values of innovation, reliability, and excellence.
          </p>
        </div>

        {/* Alternating Grid */}
        <div className="flex flex-col gap-32 lg:gap-40">
          {portfolioCompanies.map((company, index) => {
            // Even indexes text on left, odd indexes text on right
            const isTextLeft = index % 2 === 0;

            return (
              <div 
                key={company.name} 
                className={`flex flex-col gap-12 lg:gap-20 items-center animate-fade-in-up ${
                  isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Text Content */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-10 relative mt-8 lg:mt-0">
                  
                  {/* The Editorial Watermark Number anchored directly behind the typography */}
                  <span className="absolute -top-16 -left-6 md:-top-24 md:-left-10 text-[140px] md:text-[180px] font-extrabold text-bricket-grey/10 select-none -z-10 leading-none tracking-tighter pointer-events-none">
                    {company.number}
                  </span>

                  {/* Eyebrow */}
                  <span className="text-xs font-bold text-bricket-gold uppercase tracking-[0.2em] block mb-4 pt-2">
                    Member Brand
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-extrabold text-bricket-dark mb-6 tracking-tight">
                    {company.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg text-bricket-grey mb-8 leading-relaxed">
                    {company.description}
                  </p>
                  
                  {/* Features Grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-10 w-full">
                    {company.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-bricket-dark font-medium text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-bricket-gold mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link 
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-bricket-dark hover:bg-bricket-gold text-bricket-white px-8 py-4 rounded-xl font-semibold flex items-center transition-all duration-300 shadow-md"
                  >
                    Visit Website
                    <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Mockup Image Presentation */}
                <div className="w-full lg:w-[55%] relative flex justify-center items-center">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] group">
                    <Image
                      src={company.image}
                      alt={`Preview of ${company.name}`}
                      fill
                      className="object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
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