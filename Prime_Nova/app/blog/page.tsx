import { Metadata } from 'next';
import { BlogHero } from '@/components/sections/BlogHero';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { Newsletter } from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Blog & Insights - Primenova',
  description: 'Stay updated with the latest trends in digital technology, web development, design, and business insights from our expert team.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
