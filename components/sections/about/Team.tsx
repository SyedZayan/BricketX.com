'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '../../../data'; 

export default function Team() {
  const leader = teamMembers && teamMembers.length > 0 ? teamMembers[0] : null;

  if (!leader || !leader.image) {
    return null; 
  }

  // This ensures it ALWAYS starts with a '/' and removes any accidental blank spaces.
  const safeImageSrc = leader.image.trim().startsWith('/') 
    ? leader.image.trim() 
    : `/${leader.image.trim()}`;

  return (
    <section className="w-full bg-bricket-dark py-20 lg:py-28 px-6 border-t border-bricket-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full sm:w-2/3 lg:w-4/12 relative animate-fade-in-up">
            <div className="absolute -top-4 -left-4 w-full h-full bg-bricket-gold/10 rounded-2xl border border-bricket-gold/20"></div>
            
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border border-bricket-white/10 group">
              <Image 
                src={safeImageSrc} // Passed the sanitized URL here
                alt={leader.name}
                fill
                className="object-cover object-center transition-transform duration-1000 ease-in-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-bricket-dark/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-[10px] mb-1">
                  {leader.role}
                </p>
                <h3 className="text-2xl font-extrabold text-bricket-white leading-tight">
                  {leader.name}
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col justify-center animate-fade-in-up [animation-delay:200ms]">
            <span className="text-bricket-white font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-bricket-gold"></span>
              From the Executive Desk
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-bricket-white tracking-tight mb-8 leading-[1.2]">
              Engineering <span className="text-bricket-gold italic font-light">certainty</span> in complex markets.
            </h2>
            
            <div className="relative">
              <svg className="absolute -top-6 -left-6 w-16 h-16 text-bricket-gold/10 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h4V8h-4zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h4V8h-4z" />
              </svg>
              
              <p className="text-lg md:text-xl text-bricket-white leading-relaxed font-bold mb-6 relative z-10">
                "Capital allocation is not just about identifying value, it is about actively engineering it. Our mandate at BricketX is to protect and compound generational wealth."
              </p>
              
              <p className="text-sm md:text-base text-bricket-grey leading-relaxed mb-10 max-w-2xl">
                Under <strong>{leader.name}'s</strong> leadership, BricketX operates with a singular focus: shielding investor capital from the volatility of paper markets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-bricket-white/10">
              <Link 
                href="/contact" 
                className="bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center text-sm"
              >
                Contact Executive Office
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              
              <div className="hidden sm:block opacity-40">
                 <span className="font-serif italic text-2xl text-bricket-white tracking-wider">
                   {leader.name}
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}