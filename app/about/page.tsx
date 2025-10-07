import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/AboutHero';
import { Team } from '@/components/sections/Team';
import { Values } from '@/components/sections/Values';
import { Timeline } from '@/components/sections/Timeline';

export const metadata: Metadata = {
  title: 'About Us - Primenova',
  description: 'Learn about Primenova\'s mission, team, and values. We\'re passionate about delivering innovative digital solutions that transform businesses.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Timeline />
      <Team />
    </>
  );
}
