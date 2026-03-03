import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data';

export default function Blog() {
  return (
    <section className="w-full bg-[#fbf8f3] py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-bricket-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight">
              Latest news and updates
            </h2>
          </div>
          
          <Link 
            href="#blog" 
            className="px-6 py-3 bg-bricket-dark text-bricket-white font-medium rounded-md hover:bg-bricket-gold transition-colors duration-300 whitespace-nowrap self-start md:self-auto"
          >
            View all posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-bricket-white rounded-2xl overflow-hidden shadow-sm border border-bricket-grey/10 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              
              {/* Image Implementation for Blog Header */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-bricket-grey/10">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-bricket-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-bricket-gold uppercase tracking-wider mb-3">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-bricket-dark mb-3 flex items-start justify-between group-hover:text-bricket-gold transition-colors">
                  {post.title}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16M4 20L20 4" />
                  </svg>
                </h3>
                
                <p className="text-bricket-grey text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center pt-4 border-t border-bricket-grey/10 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-bricket-dark text-bricket-white flex items-center justify-center text-xs font-bold mr-3">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-bricket-dark">{post.author}</span>
                    <span className="text-xs text-bricket-grey">{post.date}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}