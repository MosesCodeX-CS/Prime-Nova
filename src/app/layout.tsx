'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Since we're using 'use client', we'll handle metadata differently
const metadata = {
  title: "Prime Nova",
  description: "Innovative IT & Business Solutions",
};

// Navigation links data
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} ${mobileMenuOpen ? 'overflow-hidden' : ''}`}>
        <div className="min-h-screen flex flex-col">
          <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Prime Nova
                  </span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 relative group ${isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.span
                            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                            layoutId="activeNavLink"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    );
                  })}
                  <Link 
                    href="/contact" 
                    className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Get Started
                  </Link>
                </nav>

                {/* Mobile menu button */}
                <button 
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 flex flex-col items-end">
                    <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6 mb-1.5'}`}></span>
                    <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5 mb-1.5'}`}></span>
                    <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-4'}`}></span>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="md:hidden bg-white border-t border-gray-100 shadow-lg"
                >
                  <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.path;
                      return (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={toggleMobileMenu}
                          className={`block px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                    <Link
                      href="/contact"
                      onClick={toggleMobileMenu}
                      className="block mt-4 px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* Add padding to account for fixed header */}
          <div className="pt-20"></div>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Prime Nova. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
