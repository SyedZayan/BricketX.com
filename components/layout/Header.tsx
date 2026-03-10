'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

// Reusable navigation links array for cleaner code
const navLinks = [
  { name: "Investment Opportunities", href: "/opportunities" },
  { name: "Market Insights", href: "/insights" },
  { name: "Our Projects", href: "/projects" },
  { name: "Our Companies", href: "/companies" },
  { name: "About Us", href: "/about" }
];

const DesktopNav = () => (
  <nav className="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
    {navLinks.map((link) => (
      <Link 
        key={link.name} 
        href={link.href} 
        className="text-[15px] font-semibold text-bricket-dark/80 hover:text-bricket-dark relative group transition-colors"
      >
        {link.name}
        {/* Premium animated gold underline on hover */}
        <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-bricket-gold transition-all duration-300 group-hover:w-full"></span>
      </Link>
    ))}
  </nav>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const handleLinkClick = () => onClose();

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="absolute inset-0 bg-bricket-dark/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-bricket-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-6 border-b border-bricket-grey/10">
          <Image src="/images/logo/BrickX Logo.png" alt="BricketX Logo" width={120} height={36} className="h-8 w-auto object-contain" />
          <button onClick={onClose} className="p-2 -mr-2 text-bricket-grey hover:text-bricket-dark transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={handleLinkClick} 
              className="py-3.5 text-lg font-bold text-bricket-dark border-b border-bricket-grey/5 hover:text-bricket-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="p-6 bg-[#fbf8f3] border-t border-bricket-grey/10 flex flex-col gap-4">
          <Link href="/portal" onClick={handleLinkClick} className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-bricket-dark text-bricket-dark font-bold rounded-xl hover:bg-bricket-dark hover:text-bricket-white transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            Investor Login
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className="w-full text-center py-3.5 bg-bricket-dark text-bricket-white font-bold rounded-xl shadow-lg hover:bg-bricket-gold hover:text-bricket-dark transition-all">
            Become an Investor
          </Link>
        </div>

      </div>
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`w-full flex justify-center sticky top-0 z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? 'py-3.5 bg-bricket-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-bricket-grey/10' 
            : 'py-5 bg-bricket-white border-bricket-grey/15'
        }`}
      >
        {/* Expanded max-width for that spacious, airy layout from your screenshot */}
        <div className="w-full max-w-[1440px] flex items-center justify-between px-6 lg:px-10">
          
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity shrink-0 mr-8">
            <Image 
              src="/images/logo/BrickX Logo.png" 
              alt="BricketX Logo" 
              width={160} 
              height={48} 
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-10'}`} 
              priority 
            />
          </Link>

          {/* Desktop Links (Centered/Left-aligned) */}
          <DesktopNav />

          {/* Right Action Group */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <Link 
              href="/portal" 
              className="text-bricket-dark/90 font-bold hover:text-bricket-gold transition-colors flex items-center gap-2 text-[15px] group"
            >
              {/* Updated to a strict Lock Icon to match the screenshot */}
              <svg className="w-4 h-4 text-bricket-dark/50 group-hover:text-bricket-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Investor Login
            </Link>
            
            {/* The crisp vertical divider */}
            <div className="w-[1px] h-6 bg-bricket-grey/20"></div>
            
            <Link 
              href="/contact" 
              className="bg-[#1a1a1a] text-bricket-white px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-bricket-gold hover:text-bricket-dark transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Become an Investor
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-bricket-dark p-2 -mr-2 transition-colors hover:text-bricket-gold">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}