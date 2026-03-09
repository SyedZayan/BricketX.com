'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { opportunities } from '../../data'; // Pulls from your data.ts file

export default function InvestmentCatalog() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredOpps = activeFilter === 'All' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === activeFilter);

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12 animate-fade-in-up [animation-delay:300ms]">
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

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredOpps.map((opp, index) => (
            <div 
              key={opp.id} 
              className="bg-bricket-white rounded-2xl shadow-sm border border-bricket-grey/15 p-8 md:p-10 flex flex-col group hover:shadow-xl hover:border-bricket-gold/30 transition-all duration-500 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-bricket-dark bg-bricket-grey/5 px-3 py-1.5 rounded-md border border-bricket-grey/10">
                  {opp.category}
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 ${
                  opp.status === 'Accepting Capital' ? 'text-green-700 bg-green-50 border border-green-200' :
                  opp.status === 'Closing Soon' ? 'text-orange-700 bg-orange-50 border border-orange-200' :
                  'text-bricket-grey bg-bricket-grey/10 border border-bricket-grey/20'
                }`}>
                  {opp.status === 'Accepting Capital' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                  {opp.status === 'Closing Soon' && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>}
                  {opp.status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-bricket-dark mb-4 group-hover:text-bricket-gold transition-colors">
                {opp.title}
              </h3>
              <p className="text-base text-bricket-grey leading-relaxed mb-10 min-h-[48px]">
                {opp.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 border-y border-bricket-grey/10 py-6">
                <div>
                  <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Target ROI</p>
                  <p className="text-xl font-extrabold text-green-600">{opp.roi}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Min. Entry</p>
                  <p className="text-lg font-bold text-bricket-dark">{opp.minInvestment}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-bold text-bricket-dark">{opp.term}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Risk Profile</p>
                  <p className="text-lg font-bold text-bricket-dark">{opp.risk}</p>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-bricket-dark uppercase tracking-wider">Capital Allocation Status</span>
                  <span className="text-sm font-bold text-bricket-grey">{opp.progress}% Filled</span>
                </div>
                <div className="w-full h-2 bg-bricket-grey/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${opp.progress > 80 ? 'bg-orange-400' : 'bg-bricket-gold'}`}
                    style={{ width: `${opp.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Link href={`/contact?fund=${opp.id}`} className="flex-1 bg-bricket-dark hover:bg-bricket-gold text-bricket-white text-center py-4 rounded-xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                  Request Term Sheet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <button className="flex-1 border-2 border-bricket-grey/20 hover:border-bricket-dark text-bricket-dark text-center py-4 rounded-xl font-bold transition-all duration-300">
                  View Project Details
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}