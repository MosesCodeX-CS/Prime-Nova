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

// Types for navigation
interface NavItem {
  name: string;
  path?: string;
  icon: string;
  subItems?: NavItem[];
}

// Navigation data with dropdown support
const navItems: NavItem[] = [
  { 
    name: 'Home', 
    path: '/', 
    icon: '⌂' 
  },
  { 
    name: 'About', 
    path: '/about', 
    icon: '🏢',
    subItems: [
      { name: 'Our Story', path: '/about/story', icon: '📜' },
      { name: 'Leadership', path: '/about/leadership', icon: '👥' },
      { name: 'Careers', path: '/careers', icon: '💼' },
    ]
  },
  { 
    name: 'Services', 
    path: '/services', 
    icon: '🛠️',
    subItems: [
      { name: 'Web Development', path: '/services/web', icon: '🌐' },
      { name: 'Mobile Apps', path: '/services/mobile', icon: '📱' },
      { name: 'UI/UX Design', path: '/services/design', icon: '🎨' },
      { name: 'Cloud Solutions', path: '/services/cloud', icon: '☁️' },
      { name: 'Digital Marketing', path: '/services/marketing', icon: '📈' },
    ]
  },
  { 
    name: 'Solutions', 
    icon: '💡',
    subItems: [
      { name: 'For Startups', path: '/solutions/startups', icon: '🚀' },
      { name: 'For Enterprises', path: '/solutions/enterprise', icon: '🏢' },
      { name: 'Case Studies', path: '/case-studies', icon: '📚' },
    ]
  },
  { 
    name: 'Resources', 
    icon: '📚',
    subItems: [
      { name: 'Blog', path: '/blog', icon: '✍️' },
      { name: 'Whitepapers', path: '/resources/whitepapers', icon: '📄' },
      { name: 'Webinars', path: '/resources/webinars', icon: '🎥' },
      { name: 'FAQ', path: '/faq', icon: '❓' },
    ]
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: '📱' 
  },
];

// Dropdown component for desktop
const DesktopDropdown = ({ item, pathname }: { item: NavItem, pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasActiveChild = item.subItems?.some(subItem => pathname === subItem.path);
  
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className={`flex items-center px-4 py-3 font-medium transition-all duration-300 ${hasActiveChild ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
        onClick={() => item.path && (window.location.href = item.path)}
      >
        <span className="flex items-center">
          <span className="mr-2 text-sm opacity-70">{item.icon}</span>
          {item.name}
        </span>
        <svg className="w-4 h-4 ml-1 transition-transform duration-200 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-1 w-56 rounded-lg bg-gray-800 shadow-xl border border-gray-700 overflow-hidden z-50"
          >
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path || '#'}
                className={`flex items-center px-4 py-3 text-sm transition-colors ${pathname === subItem.path ? 'bg-gray-700/50 text-cyan-400' : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'}`}
              >
                <span className="mr-2">{subItem.icon}</span>
                {subItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile dropdown component
const MobileDropdown = ({ item, pathname, onClose }: { item: NavItem, pathname: string, onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasActiveChild = item.subItems?.some(subItem => pathname === subItem.path);
  
  return (
    <div className="space-y-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-4 py-3 rounded-lg ${hasActiveChild ? 'bg-gray-700/50 text-cyan-400' : 'text-gray-300 hover:bg-gray-700/30'}`}
      >
        <div className="flex items-center">
          <span className="mr-3">{item.icon}</span>
          <span>{item.name}</span>
        </div>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-6 space-y-1 overflow-hidden"
          >
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path || '#'}
                onClick={onClose}
                className={`block px-4 py-2.5 text-sm rounded-lg ${pathname === subItem.path ? 'bg-gray-700/50 text-cyan-400' : 'text-gray-400 hover:bg-gray-700/30'}`}
              >
                <span className="flex items-center">
                  <span className="mr-2">{subItem.icon}</span>
                  {subItem.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
          <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md shadow-lg py-2' : 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm py-4'}`}>
            {/* Animated grid overlay */}
            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-white/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Prime Nova
                  </span>
                </Link>
                
                {/* Desktop Navigation - Professional with Dropdowns */}
                <nav className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.subItems ? (
                        <DesktopDropdown item={item} pathname={pathname} />
                      ) : (
                        <Link
                          href={item.path || '#'}
                          className={`group relative px-4 py-3 font-medium transition-all duration-300 ${pathname === item.path ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                        >
                          <span className="flex items-center">
                            <span className="mr-2 text-sm opacity-70">{item.icon}</span>
                            {item.name}
                          </span>
                          <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ${pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                          <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20"></span>
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link 
                    href="/contact" 
                    className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-cyan-400/20 hover:border-cyan-400/40 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">🚀</span>
                      Get Started
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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

            {/* Mobile Navigation with Dropdowns */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="md:hidden bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700/50 shadow-2xl overflow-y-auto max-h-[80vh]"
                >
                  <div className="px-4 pt-4 pb-6 space-y-1">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        {item.subItems ? (
                          <MobileDropdown 
                            item={item} 
                            pathname={pathname} 
                            onClose={() => setMobileMenuOpen(false)} 
                          />
                        ) : (
                          <Link
                            href={item.path || '#'}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${pathname === item.path ? 'bg-gray-800/50 text-cyan-400' : 'text-gray-300 hover:bg-gray-800/30 hover:text-white'}`}
                          >
                            <div className="flex items-center">
                              <span className="mr-3">{item.icon}</span>
                              <span>{item.name}</span>
                            </div>
                            {pathname === item.path && (
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            )}
                          </Link>
                        )}
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-6 block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-cyan-400/20 hover:border-cyan-400/40"
                    >
                      <span className="flex items-center justify-center">
                        <span className="mr-2">🚀</span>
                        Get Started
                      </span>
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
