import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="w-full bg-bricket-white py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Intro Text */}
        <span className="text-bricket-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
          About BricketX
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-bricket-dark tracking-tight mb-8 max-w-4xl">
          We are the driving force behind <span className="text-bricket-gold">industry leaders.</span>
        </h1>
        <p className="text-xl text-bricket-grey max-w-3xl mb-16 leading-relaxed">
          BricketX is a premier holding company managing a diverse portfolio of specialized brands. From heavy construction to digital marketing, we provide the resources, strategy, and leadership needed for our subsidiaries to dominate their respective markets.
        </p>

        {/* Corporate Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-[400px]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bricket-grey/10 col-span-1 md:col-span-2">
            {/* Replace src with your actual corporate team/building image */}
            <Image src="/images/about-hero-1.jpg" alt="Corporate Team" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bricket-dark/10 hidden md:block">
            <Image src="/images/about-hero-2.jpg" alt="Construction Site" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}