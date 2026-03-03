'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

// 1. We separate the numeric 'target' from the 'suffix' (+, %) so we can animate the number!
const stats = [
  {
    target: 4,
    suffix: "+",
    label: "Operating Companies",
    description: "A diverse portfolio across construction, maintenance, and digital solutions."
  },
  {
    target: 250,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully executed projects driving growth and regional development."
  },
  {
    target: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Committed to excellence, safety, and uncompromising quality standards."
  }
];

// 2. Custom component to handle the scroll-triggered counting animation
const AnimatedCounter = ({ target, suffix }: { target: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Trigger animation only once when it comes into view
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16); // 60fps calculation

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the element is visible
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={elementRef} className="text-6xl lg:text-7xl font-extrabold text-bricket-gold mb-6 tracking-tight">
      {count}{suffix}
    </div>
  );
};

// 3. The Main Section Component
export default function ImpactStats() {
  return (
    <section className="w-full bg-bricket-dark py-24 lg:py-32 px-6 relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-bricket-gold/10 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-bricket-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 lg:mb-24 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-extrabold text-bricket-white tracking-tight mb-8">
            Building the foundation for <span className="text-bricket-gold">tomorrow.</span>
          </h2>
          <p className="text-xl text-bricket-grey leading-relaxed">
            Through Mintrix Contracting, Mintrix Maintenance, and our regional hubs, BricketX delivers scale, expertise, and operational excellence.
          </p>
        </div>

        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-bricket-white/[0.03] border border-bricket-white/10 rounded-3xl p-10 lg:p-12 flex flex-col items-center text-center hover:bg-bricket-white/[0.08] hover:border-bricket-white/20 hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm shadow-2xl"
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              
              <h3 className="text-2xl font-bold text-bricket-white mb-4">
                {stat.label}
              </h3>
              <p className="text-bricket-grey leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/contact" 
            className="group px-10 py-5 bg-bricket-gold text-bricket-dark font-bold rounded-xl hover:bg-bricket-white transition-all duration-300 shadow-lg hover:shadow-bricket-white/20 flex items-center justify-center text-lg"
          >
            Partner with BricketX
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="#portfolio" 
            className="px-10 py-5 border-2 border-bricket-grey/30 text-bricket-white font-bold rounded-xl hover:border-bricket-white hover:bg-bricket-white/5 transition-all duration-300 flex items-center justify-center text-lg"
          >
            View Corporate Deck
          </Link>
        </div>

      </div>
    </section>
  );
}