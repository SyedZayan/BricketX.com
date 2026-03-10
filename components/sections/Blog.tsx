'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data';

export default function Blog() {
  return (
    // COLOR THEME: Cream background keeps the zebra striping intact
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 px-6 border-t border-bricket-grey/10">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            HEADER SECTION
        ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="animate-fade-in-up">
            <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-bricket-gold"></span>
              Market Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-dark tracking-tight leading-[1.1]">
              Knowledge for <span className="text-bricket-gold italic font-light">modern investors.</span>
            </h2>
          </div>
          
          <Link 
            href="/insights" 
            className="group flex items-center gap-3 px-6 py-3.5 bg-bricket-white border border-bricket-grey/20 text-bricket-dark text-sm font-bold rounded-xl hover:border-bricket-gold hover:bg-bricket-gold/5 transition-all duration-300 whitespace-nowrap animate-fade-in-up [animation-delay:150ms] shadow-sm"
          >
            View All Reports
            <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        {/* =========================================
            EDITORIAL GRID
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/insights/${post.title.toLowerCase().replace(/\s+/g, '-')}`} // Mock URL routing
              key={index} 
              className="group flex flex-col animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              
              {/* Cinematic Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg border border-bricket-grey/10">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Gradient Overlay for pill contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-bricket-dark/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30"></div>

                {/* Floating Category Pill (Inspired by your Dark Image) */}
                <div className="absolute top-5 left-5 bg-bricket-dark/80 backdrop-blur-md text-bricket-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-bricket-white/10 shadow-xl">
                  {post.category}
                </div>
              </div>

              {/* Meta Data Row */}
              <div className="flex items-center gap-3 text-[11px] font-bold text-bricket-grey uppercase tracking-wider mb-4">
                <span>{post.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-bricket-gold/50"></span>
                <span>By {post.author}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-bricket-gold/50"></span>
                <span>5 Min Read</span> {/* Added read time to match inspiration */}
              </div>
              
              {/* Title & Excerpt */}
              <h3 className="text-2xl font-extrabold text-bricket-dark mb-4 leading-snug group-hover:text-bricket-gold transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-bricket-grey text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              {/* Bottom "Read Report" Action */}
              <div className="mt-auto pt-4 border-t border-bricket-grey/20 flex items-center text-sm font-bold text-bricket-dark group-hover:text-bricket-gold transition-colors">
                Read Full Brief 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}