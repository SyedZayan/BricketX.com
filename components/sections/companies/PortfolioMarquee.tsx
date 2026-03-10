import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { marqueeCompanies } from '..//..//..//data';

export default function PortfolioMarquee() {
  return (
    // Changed to Bricket Dark background for a high-contrast, premium "Trust Bar" look
    <section className="w-full bg-bricket-dark border-y border-bricket-dark py-12 flex flex-col items-center shadow-inner">
      
      <div className="w-full max-w-7xl px-6">
        
        {/* Gold Eyebrow Text */}
        <p className="text-xs font-bold text-bricket-gold uppercase tracking-[0.2em] mb-10 text-center">
          The driving force behind industry leaders
        </p>

        <div 
          className="w-full overflow-hidden relative"
          style={{
            // Masked edges fade to black instead of white now
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex w-max animate-scroll">
            
            {/* First Set */}
            <div className="flex items-center">
              {marqueeCompanies.map((company, idx) => (
                <Link 
                  href={company.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={`set1-${idx}`} 
                  className="flex items-center group cursor-pointer pr-16 sm:pr-24 outline-none focus-visible:ring-2 focus-visible:ring-bricket-gold rounded-full"
                >
                  
                  {/* Circular White Badge for the Logo */}
                  <div className="relative w-14 h-14 rounded-full bg-bricket-white flex items-center justify-center mr-5 shrink-0 overflow-hidden border-2 border-transparent group-hover:border-bricket-gold transition-all duration-300 shadow-lg">
                    <Image 
                      src={company.logo} 
                      alt={`${company.name} Logo`}
                      fill
                      className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110" 
                      sizes="56px"
                    />
                  </div>
                  
                  {/* Thick, striking typography */}
                  <span className="text-2xl sm:text-3xl font-extrabold text-bricket-white group-hover:text-bricket-gold transition-colors duration-300 tracking-tight whitespace-nowrap">
                    {company.name}
                  </span>

                  {/* Sophisticated Slash Separator */}
                  <div className="ml-16 sm:ml-24 text-bricket-grey/30 font-light text-3xl group-hover:text-bricket-gold/50 transition-colors duration-300">
                    /
                  </div>
                </Link>
              ))}
            </div>

            {/* Second Set (Duplicate for smooth looping) */}
            <div className="flex items-center">
              {marqueeCompanies.map((company, idx) => (
                <Link 
                  href={company.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={`set2-${idx}`} 
                  className="flex items-center group cursor-pointer pr-16 sm:pr-24 outline-none focus-visible:ring-2 focus-visible:ring-bricket-gold rounded-full"
                >
                  
                  <div className="relative w-14 h-14 rounded-full bg-bricket-white flex items-center justify-center mr-5 shrink-0 overflow-hidden border-2 border-transparent group-hover:border-bricket-gold transition-all duration-300 shadow-lg">
                    <Image 
                      src={company.logo} 
                      alt={`${company.name} Logo`}
                      fill
                      className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110" 
                      sizes="56px"
                    />
                  </div>
                  
                  <span className="text-2xl sm:text-3xl font-extrabold text-bricket-white group-hover:text-bricket-gold transition-colors duration-300 tracking-tight whitespace-nowrap">
                    {company.name}
                  </span>

                  <div className="ml-16 sm:ml-24 text-bricket-grey/30 font-light text-3xl group-hover:text-bricket-gold/50 transition-colors duration-300">
                    /
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}