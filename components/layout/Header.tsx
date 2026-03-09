'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const DesktopNav = () => (
  <nav className="hidden lg:flex items-center gap-8 text-bricket-dark font-medium h-full">
    <Link href="/opportunities" className="hover:text-bricket-gold transition-colors py-2 font-semibold">Investment Opportunities</Link>
    <Link href="/insights" className="hover:text-bricket-gold transition-colors py-2 font-semibold">Market Insights</Link>
    <Link href="/projects" className="hover:text-bricket-gold transition-colors py-2 font-semibold">Our Projects</Link>
    <Link href="/about" className="hover:text-bricket-gold transition-colors py-2 font-semibold">About Us</Link>
  </nav>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const handleLinkClick = () => onClose();

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="absolute inset-0 bg-bricket-dark/60 backdrop-blur-md" onClick={onClose}></div>
      <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-bricket-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-bricket-grey/15">
          <Image src="/images/bricketx-logo.png" alt="BricketX Logo" width={120} height={36} className="h-8 w-auto object-contain" />
          <button onClick={onClose} className="p-2 -mr-2 text-bricket-grey hover:text-bricket-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          <Link href="/opportunities" onClick={handleLinkClick} className="py-3 text-lg font-bold text-bricket-dark border-b border-bricket-grey/10">Investment Opportunities</Link>
          <Link href="/insights" onClick={handleLinkClick} className="py-3 text-lg font-bold text-bricket-dark border-b border-bricket-grey/10">Market Insights</Link>
          <Link href="/projects" onClick={handleLinkClick} className="py-3 text-lg font-bold text-bricket-dark border-b border-bricket-grey/10">Our Projects</Link>
          <Link href="/about" onClick={handleLinkClick} className="py-3 text-lg font-bold text-bricket-dark border-b border-bricket-grey/10">About Us</Link>
        </div>
        <div className="p-6 bg-bricket-grey/5 border-t border-bricket-grey/15 flex flex-col gap-4">
          <Link href="/portal" onClick={handleLinkClick} className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-bricket-dark text-bricket-dark font-bold rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Investor Login
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className="w-full text-center py-3.5 bg-bricket-gold text-bricket-dark font-bold rounded-lg shadow-md">Become an Investor</Link>
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
      <header className={`w-full flex justify-center sticky top-0 z-40 transition-all duration-500 ${isScrolled ? 'py-3 bg-bricket-white/95 backdrop-blur-lg shadow-sm border-b border-bricket-grey/10' : 'py-5 bg-bricket-white border-b border-bricket-grey/20'}`}>
        <div className="w-full max-w-7xl flex items-center justify-between px-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/images/bricketx-logo.png" alt="BricketX Logo" width={160} height={48} className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'}`} priority />
          </Link>

          <DesktopNav />

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/portal" className="text-bricket-dark font-bold hover:text-bricket-gold transition-colors flex items-center gap-2 px-4 py-2 border-r border-bricket-grey/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Investor Login
            </Link>
            <Link href="/contact" className="bg-bricket-dark text-bricket-white px-6 py-2.5 rounded-md font-bold hover:bg-bricket-gold transition-colors duration-300 shadow-sm">
              Become an Investor
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-bricket-dark p-2 -mr-2">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}