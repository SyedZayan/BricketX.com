'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

// =========================================
// 1. DATA
// =========================================
const companyLinks = [
  { name: "Mintrix Contracting", desc: "Construction & Engineering", href: "https://mintrixcontracting.com" },
  { name: "Mintrix Maintenance", desc: "Facility Management", href: "https://mintrixmaintenance.com" },
  { name: "Mintrix Mining", desc: "Digital Infrastructure", href: "https://mintrix-mining.vercel.app" },
  { name: "BricketX.pk", desc: "Regional Tech Solutions", href: "https://bricketx.pk" },
];

// =========================================
// 2. DESKTOP NAVIGATION COMPONENT
// =========================================
const DesktopNav = () => (
  <nav className="hidden lg:flex items-center gap-8 text-bricket-dark font-medium h-full">
    
    {/* OUR COMPANIES DROPDOWN */}
    <div className="group relative h-full flex items-center">
      <button className="flex items-center gap-1.5 hover:text-bricket-gold transition-colors py-2 outline-none">
        Our Companies
        <svg className="w-4 h-4 text-bricket-grey group-hover:text-bricket-gold transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Floating Dropdown */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-bricket-white rounded-xl shadow-2xl border border-bricket-grey/15 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
        <div className="w-full h-1 bg-bricket-gold"></div>
        <div className="flex flex-col py-2">
          {companyLinks.map((company, index) => (
            <Link key={index} href={company.href} target="_blank" className="flex flex-col px-6 py-3 hover:bg-bricket-grey/5 transition-colors group/link">
              <span className="text-sm font-bold text-bricket-dark group-hover/link:text-bricket-gold transition-colors">{company.name}</span>
              <span className="text-xs text-bricket-grey mt-0.5">{company.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>

    <Link href="/#about" className="hover:text-bricket-gold transition-colors py-2">About Us</Link>
    
    {/* EXPERTISE DROPDOWN */}
    <div className="group relative h-full flex items-center">
      <button className="flex items-center gap-1.5 hover:text-bricket-gold transition-colors py-2 outline-none">
        Expertise
        <svg className="w-4 h-4 text-bricket-grey group-hover:text-bricket-gold transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Floating Dropdown */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-bricket-white rounded-xl shadow-2xl border border-bricket-grey/15 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
        <div className="w-full h-1 bg-bricket-gold"></div>
        <div className="flex flex-col py-2">
          <Link href="/#portfolio" className="px-6 py-2.5 text-sm font-semibold text-bricket-dark hover:text-bricket-gold hover:bg-bricket-grey/5 transition-colors">Construction</Link>
          <Link href="/#portfolio" className="px-6 py-2.5 text-sm font-semibold text-bricket-dark hover:text-bricket-gold hover:bg-bricket-grey/5 transition-colors">Maintenance</Link>
          <Link href="/#portfolio" className="px-6 py-2.5 text-sm font-semibold text-bricket-dark hover:text-bricket-gold hover:bg-bricket-grey/5 transition-colors">Digital Growth</Link>
        </div>
      </div>
    </div>
    
    {/* Careers Link Removed */}

  </nav>
);

// =========================================
// 3. MOBILE MENU COMPONENT
// =========================================
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isMobileCompaniesOpen, setIsMobileCompaniesOpen] = useState(false);

  // Helper to close everything when a link is tapped
  const handleLinkClick = () => {
    onClose();
    setIsMobileCompaniesOpen(false);
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      
      {/* Dark Blur Backdrop */}
      <div className="absolute inset-0 bg-bricket-dark/30 backdrop-blur-sm" onClick={onClose}></div>

      {/* Slide-out Drawer */}
      <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-bricket-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-bricket-grey/15">
          <Image src="/images/bricketx-logo.png" alt="BricketX Logo" width={120} height={36} className="h-8 w-auto object-contain" />
          <button onClick={onClose} className="p-2 -mr-2 text-bricket-grey hover:text-bricket-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Scrollable Links Area */}
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          
          {/* Companies Accordion */}
          <div className="border-b border-bricket-grey/10 pb-4 mb-2">
            <button onClick={() => setIsMobileCompaniesOpen(!isMobileCompaniesOpen)} className="w-full flex items-center justify-between py-2 text-xl font-bold text-bricket-dark focus:outline-none">
              Our Companies
              <svg className={`w-5 h-5 text-bricket-gold transition-transform duration-300 ${isMobileCompaniesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`grid transition-all duration-300 ease-in-out ${isMobileCompaniesOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-bricket-gold/30">
                {companyLinks.map((company, index) => (
                  <Link key={index} href={company.href} target="_blank" onClick={handleLinkClick} className="flex flex-col pt-2">
                    <span className="text-base font-bold text-bricket-dark">{company.name}</span>
                    <span className="text-xs text-bricket-grey">{company.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#about" onClick={handleLinkClick} className="py-3 text-xl font-bold text-bricket-dark border-b border-bricket-grey/10">About Us</Link>
          <Link href="/#portfolio" onClick={handleLinkClick} className="py-3 text-xl font-bold text-bricket-dark border-b border-bricket-grey/10">Expertise</Link>
          {/* Careers Link Removed */}
        </div>

        {/* Bottom CTAs */}
        <div className="p-6 bg-bricket-grey/5 border-t border-bricket-grey/15 flex flex-col gap-4">
          <Link href="/#portfolio" onClick={handleLinkClick} className="w-full text-center py-3.5 border-2 border-bricket-dark text-bricket-dark font-bold rounded-lg">Explore Portfolio</Link>
          <Link href="/contact" onClick={handleLinkClick} className="w-full text-center py-3.5 bg-bricket-gold text-bricket-dark font-bold rounded-lg shadow-md">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

// =========================================
// 4. MAIN HEADER EXPORT
// =========================================
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`w-full flex justify-center sticky top-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-bricket-white/95 backdrop-blur-lg shadow-sm border-b border-bricket-grey/10' 
            : 'py-5 bg-bricket-white border-b border-bricket-grey/20'
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between px-6">
          
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image 
              src="/images/bricketx-logo.png" 
              alt="BricketX Logo" 
              width={160} 
              height={48} 
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'}`}
              priority
            />
          </Link>

          {/* Render Desktop Nav Component */}
          <DesktopNav />

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/#portfolio" className="text-bricket-dark font-medium hover:text-bricket-gold transition-colors">Explore Portfolio</Link>
            <Link href="/contact" className="bg-bricket-dark text-bricket-white px-6 py-2.5 rounded-md font-medium hover:bg-bricket-gold transition-colors duration-300 shadow-sm">Contact Us</Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-bricket-dark p-2 -mr-2 focus:outline-none"
            aria-label="Open main menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Render Mobile Menu Overlay Component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}