'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '../../data'; 

export default function Team() {
  // Grab the first (and only) member from your data array
  const leader = teamMembers[0];

  // Safety check
  if (!leader) return null;

  return (
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 px-6 border-t border-bricket-grey/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
          
          {/* =========================================
              LEFT: The Editorial Portrait
          ========================================= */}
          <div className="w-full lg:w-5/12 relative animate-fade-in-up">
            
            {/* Decorative Offset Backgrounds */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-bricket-gold/10 rounded-2xl border border-bricket-gold/20"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-bricket-dark/5 rounded-2xl"></div>
            
            {/* Main Image Container (Tall Rectangle, not a circle) */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-bricket-white group">
              <Image 
                src={leader.image} 
                alt={leader.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out grayscale group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Premium Inner Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bricket-dark/90 via-bricket-dark/20 to-transparent opacity-90"></div>
              
              {/* Name & Title Overlay */}
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <p className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs mb-2">
                  {leader.role}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-bricket-white leading-tight">
                  {leader.name}
                </h3>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT: The Executive Letter
          ========================================= */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center pt-8 lg:pt-12 animate-fade-in-up [animation-delay:200ms]">
            
            <span className="text-bricket-dark font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-bricket-gold"></span>
              From the Executive Desk
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-dark tracking-tight mb-10 leading-[1.1]">
              Engineering <span className="text-bricket-gold italic font-light">certainty</span> in complex markets.
            </h2>
            
            <div className="relative">
              {/* Massive Decorative Quote Mark */}
              <svg className="absolute -top-8 -left-8 w-24 h-24 text-bricket-gold/10 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h4V8h-4zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h4V8h-4z" />
              </svg>
              
              <p className="text-xl md:text-2xl text-bricket-dark leading-relaxed font-bold mb-8 relative z-10">
                "Capital allocation is not just about identifying value—it is about actively engineering it. Our mandate at BricketX is to protect and compound generational wealth through uncompromising asset quality and radical transparency."
              </p>
              
              <p className="text-base md:text-lg text-bricket-grey leading-relaxed mb-12 max-w-2xl">
                Under <strong>{leader.name}'s</strong> direction, the firm operates with a singular focus: shielding investor capital from the volatility of paper markets by deploying directly into high-yield, tangible infrastructure. We invite you to review our current allocations.
              </p>
            </div>

            {/* Actions & Signature */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-bricket-grey/20">
              <Link 
                href="/contact" 
                className="bg-bricket-dark hover:bg-bricket-gold text-bricket-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Contact the Executive Office
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
              {/* Pseudo-Signature for an ultra-premium touch */}
              <div className="hidden sm:block opacity-60">
                 <span className="font-serif italic text-3xl text-bricket-dark tracking-wider">
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