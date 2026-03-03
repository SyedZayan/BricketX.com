'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll down more than 20 pixels, trigger the "scrolled" state
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
          ? 'py-3 bg-bricket-white/90 backdrop-blur-lg shadow-sm border-b border-transparent' 
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
        <nav className="hidden lg:flex items-center gap-8 text-bricket-dark font-medium">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-bricket-gold transition-colors py-2">
              Our Companies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          <Link href="/about" className="hover:text-bricket-gold transition-colors py-2">About Us</Link>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-bricket-gold transition-colors py-2">
              Expertise
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
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