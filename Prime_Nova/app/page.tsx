import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Primenova - Innovative Digital Solutions for Modern Business',
  description: 'Transform your business with cutting-edge digital solutions including web development, mobile apps, cloud solutions, graphic design, and digital marketing.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}