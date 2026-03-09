import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 relative overflow-hidden border-b border-bricket-gold/20">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-architecture.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bricket-gold/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
          Firm Overview
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-bricket-white tracking-tight mb-8 leading-[1.1]">
          Architects of generational <span className="text-bricket-gold italic font-light">wealth.</span>
        </h1>
        <p className="text-lg md:text-xl text-bricket-grey leading-relaxed max-w-3xl mx-auto">
          BricketX is a premier holding company and real-asset platform. We bridge the gap between institutional capital and the world’s most secure, high-yield physical assets.
        </p>
      </div>
    </section>
  );
}