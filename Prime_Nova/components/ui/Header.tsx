'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/theme';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Graphic Design', href: '/services#graphic-design' },
      { name: 'Mobile Apps', href: '/services#mobile-apps' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' },
      { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
      { name: 'E-commerce', href: '/services#ecommerce' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
    setDropdownTimeout(timeout);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/50 shadow-lg shadow-black/5 dark:shadow-black/20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5 opacity-50" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-primary-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-4 right-1/3 w-1 h-1 bg-accent-400 rounded-full animate-pulse delay-1000 opacity-40" />
        <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-primary-300 rounded-full animate-pulse delay-2000 opacity-50" />
      </div>
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="text-2xl font-bold text-gradient relative">
              Primenova
              {/* Digital glow effect */}
              <span className="absolute inset-0 text-gradient blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300">
                Primenova
              </span>
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                         <button
                           type="button"
                           className="relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary-600 transition-all duration-300 group"
                           aria-expanded={openDropdown === item.name}
                         >
                           {item.name}
                           <ChevronDown className={`h-4 w-4 transition-all duration-300 ${openDropdown === item.name ? 'rotate-180 text-primary-600' : 'group-hover:text-primary-600'}`} />
                           {/* Digital underline effect */}
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
                           {/* Glow effect on hover */}
                           <span className="absolute inset-0 text-primary-600 blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                             {item.name}
                           </span>
                         </button>
                  
                  {openDropdown === item.name && (
                    <div 
                      className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-sm leading-6 shadow-2xl ring-1 ring-white/20 dark:ring-gray-700/50 border border-white/30 dark:border-gray-600/30">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-2xl" />
                        
                        <div className="relative p-2">
                          {item.children.map((child) => (
                            <div key={child.name} className="group relative flex gap-x-6 rounded-lg p-3 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300">
                              <div>
                                <Link
                                  href={child.href}
                                  className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-all duration-300 relative"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {child.name}
                                  {/* Digital glow effect */}
                                  <span className="absolute inset-0 text-primary-600 blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                    {child.name}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="relative text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary-600 transition-all duration-300 group"
                >
                  {item.name}
                  {/* Digital underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 text-primary-600 blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    {item.name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 group border border-white/20 dark:border-gray-700/50"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 transition-colors duration-300" />
            ) : (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 transition-colors duration-300" />
            )}
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <Link
            href="/contact"
            className="relative bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-lg px-6 py-2.5 text-sm font-semibold focus-ring transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <span className="relative z-10">Get Started</span>
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/20 dark:sm:ring-gray-700/50 border-l border-white/30 dark:border-gray-600/30">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5" />
            
            <div className="relative flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 group">
                  <span className="text-2xl font-bold text-gradient relative">
                    Primenova
                    {/* Digital glow effect */}
                    <span className="absolute inset-0 text-gradient blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300">
                      Primenova
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="relative mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10 dark:divide-gray-700/30">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <div>
                            <button
                              type="button"
                              className={cn(
                                'relative flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group',
                                openDropdown === item.name && 'bg-white/20 dark:bg-gray-700/50'
                              )}
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === item.name ? null : item.name
                                )
                              }
                            >
                              {item.name}
                              <ChevronDown
                                className={cn(
                                  'h-5 w-5 transition-all duration-300 group-hover:text-primary-600',
                                  openDropdown === item.name && 'rotate-180 text-primary-600'
                                )}
                              />
                              {/* Digital glow effect */}
                              <span className="absolute inset-0 text-primary-600 blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                {item.name}
                              </span>
                            </button>
                            {openDropdown === item.name && (
                              <div className="mt-2 space-y-1 overflow-hidden">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="relative block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-600 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                  >
                                    {child.name}
                                    {/* Digital glow effect */}
                                    <span className="absolute inset-0 text-primary-600 blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                      {child.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="relative block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                            {/* Digital glow effect */}
                            <span className="absolute inset-0 text-primary-600 blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <button
                      onClick={toggleTheme}
                      className="relative flex items-center justify-center w-full p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 group border border-white/20 dark:border-gray-700/50"
                    >
                      {theme === 'light' ? (
                        <>
                          <Moon className="h-5 w-5 mr-2 group-hover:text-primary-600 transition-colors duration-300" />
                          Dark Mode
                        </>
                      ) : (
                        <>
                          <Sun className="h-5 w-5 mr-2 group-hover:text-primary-600 transition-colors duration-300" />
                          Light Mode
                        </>
                      )}
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    <Link
                      href="/contact"
                      className="relative bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold focus-ring transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <span className="relative z-10">Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </header>
  );
}
