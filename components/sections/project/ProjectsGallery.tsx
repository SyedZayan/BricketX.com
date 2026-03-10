'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projectsPortfolio } from '../../../data';

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsPortfolio 
    : projectsPortfolio.filter(project => project.category === activeFilter);

  return (
    <section className="w-full py-24 px-6 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-in-up [animation-delay:150ms]">
          {['All', 'Real Estate', 'Mining & Commodities', 'Digital Growth'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-bricket-dark text-bricket-white shadow-md' 
                  : 'bg-bricket-white border border-bricket-grey/20 text-bricket-grey hover:border-bricket-dark hover:text-bricket-dark'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-bricket-white rounded-3xl overflow-hidden shadow-sm border border-bricket-grey/15 hover:shadow-2xl hover:border-bricket-gold/30 transition-all duration-500 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-bricket-dark">
                {/* Fallback image rendering */}
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                />
                
                {/* Status Badge floating on image */}
                <div className="absolute top-6 right-6">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 ${
                    project.status === 'Completed' ? 'bg-bricket-dark text-bricket-white' :
                    project.status === 'Operational' ? 'bg-green-500 text-bricket-dark' :
                    'bg-bricket-gold text-bricket-dark'
                  }`}>
                    {project.status === 'Operational' && <span className="w-1.5 h-1.5 rounded-full bg-bricket-dark animate-pulse"></span>}
                    {project.status === 'Under Construction' && <span className="w-1.5 h-1.5 rounded-full bg-bricket-white animate-pulse"></span>}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-bricket-gold mb-3 block">
                  {project.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-bricket-dark mb-4 group-hover:text-bricket-gold transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-base text-bricket-grey leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Hard Metrics Footer */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-bricket-grey/10">
                  <div>
                    <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Asset Value</p>
                    <p className="text-xl font-extrabold text-bricket-dark">{project.assetValue}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Location</p>
                    <p className="text-sm font-bold text-bricket-dark flex items-center gap-1">
                      <svg className="w-4 h-4 text-bricket-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {project.location}
                    </p>
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