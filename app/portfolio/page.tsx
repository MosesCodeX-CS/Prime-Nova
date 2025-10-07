import { Metadata } from 'next';
import { PortfolioHero } from '@/components/sections/PortfolioHero';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { CaseStudies } from '@/components/sections/CaseStudies';

export const metadata: Metadata = {
  title: 'Portfolio - Primenova',
  description: 'Explore our portfolio of successful digital projects including web applications, mobile apps, graphic design, and digital marketing campaigns.',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CaseStudies />
    </>
  );
}
