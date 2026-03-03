'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

// Quick data array for the dropdown items
const companyLinks = [
  { name: "Mintrix Contracting", desc: "Construction & Engineering", href: "https://mintrixcontracting.com" },
  { name: "Mintrix Maintenance", desc: "Facility Management", href: "https://mintrixmaintenance.com" },
  { name: "Mintrix Mining", desc: "Digital Infrastructure", href: "https://mintrix-mining.vercel.app" },
  { name: "BricketX.pk", desc: "Regional Tech Solutions", href: "https://bricketx.pk" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full flex justify-center sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-bricket-white/95 backdrop-blur-lg shadow-sm border-b border-bricket-grey/10' 
          : 'py-5 bg-bricket-white border-b border-bricket-grey/20'
      }`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6">
        
        {/* Official Logo Area */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/images/bricketx-logo.png" 
            alt="BricketX Logo" 
            width={160} 
            height={48} 
            className={`w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-bricket-dark font-medium h-full">
          
          {/* OUR COMPANIES DROPDOWN */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-bricket-gold transition-colors py-2 outline-none">
              Our Companies
              {/* Arrow rotates smoothly on hover */}
              <svg className="w-4 h-4 text-bricket-grey group-hover:text-bricket-gold transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* The Floating Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-bricket-white rounded-xl shadow-2xl border border-bricket-grey/15 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
              {/* Premium Gold Accent Line at the top */}
              <div className="w-full h-1 bg-bricket-gold"></div>
              
              <div className="flex flex-col py-2">
                {companyLinks.map((company, index) => (
                  <Link 
                    key={index} 
                    href={company.href}
                    target="_blank"
                    className="flex flex-col px-6 py-3 hover:bg-bricket-grey/5 transition-colors group/link"
                  >
                    <span className="text-sm font-bold text-bricket-dark group-hover/link:text-bricket-gold transition-colors">
                      {company.name}
                    </span>
                    <span className="text-xs text-bricket-grey mt-0.5">
                      {company.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-bricket-gold transition-colors py-2">About Us</Link>
          
          {/* EXPERTISE DROPDOWN (Placeholder matching the style) */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-bricket-gold transition-colors py-2 outline-none">
              Expertise
              <svg className="w-4 h-4 text-bricket-grey group-hover:text-bricket-gold transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Simple Dropdown for Expertise */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-bricket-white rounded-xl shadow-2xl border border-bricket-grey/15 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
              <div className="w-full h-1 bg-bricket-gold"></div>
              <div className="flex flex-col py-2">
                <Link href="#construction" className="px-6 py-2.5 text-sm font-semibold text-bricket-dark hover:text-bricket-gold hover:bg-bricket-grey/5 transition-colors">Construction</Link>
                <Link href="#maintenance" className="px-6 py-2.5 text-sm font-semibold text-bricket-dark hover:text-bricket-gold hover:bg-bricket-grey/5 transition-colors">Maintenance</Link>
                <Link href="#digital" className="px-6 py-2.5 text-sm font-semibold text-bricket-dark hover:text-bricket-gold hover:bg-bricket-grey/5 transition-colors">Digital Growth</Link>
              </div>
            </div>
          </div>

          <Link href="/careers" className="hover:text-bricket-gold transition-colors py-2">Careers</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#portfolio" className="text-bricket-dark font-medium hover:text-bricket-gold transition-colors">
            Explore Portfolio
          </Link>
          <Link 
            href="/contact" 
            className="bg-bricket-dark text-bricket-white px-6 py-2.5 rounded-md font-medium hover:bg-bricket-gold transition-colors duration-300 inline-block text-center shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-bricket-dark p-2">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}