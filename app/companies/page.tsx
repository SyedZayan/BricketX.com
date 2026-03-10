import React from 'react';
import { Metadata } from 'next';
import CompaniesHero from '@/components/sections/companies/CompaniesHero';
import PortfolioGrid from '@/components/sections/companies/PortfolioGrid';
import PortfolioMarquee from '@/components/sections/companies/PortfolioMarquee';

export const metadata: Metadata = {
  title: "Operating Companies | BricketX",
  description: "Explore the diverse ecosystem of specialized companies and infrastructure operated by BricketX.",
};

export default function CompaniesPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <CompaniesHero />

      <PortfolioMarquee />

      <PortfolioGrid />
    </main>
  );
}