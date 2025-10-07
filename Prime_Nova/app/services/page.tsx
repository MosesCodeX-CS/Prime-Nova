import { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';

export const metadata: Metadata = {
  title: 'Digital Services - Primenova',
  description: 'Comprehensive digital services including web development, mobile apps, cloud solutions, graphic design, digital marketing, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <Process />
      <Pricing />
    </>
  );
}
