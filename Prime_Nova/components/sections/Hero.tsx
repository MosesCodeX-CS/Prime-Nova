'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 dark:from-gray-800 dark:via-primary-800 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-10 animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full opacity-10 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-10 animate-pulse delay-2000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Digital Innovation for{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Tomorrow&apos;s Business
              </span>
            </h1>
          </div>
          
          <p className="mt-8 text-xl leading-8 text-gray-300">
            We craft exceptional digital experiences through cutting-edge web development, 
            stunning graphic design, mobile applications, and cloud solutions that 
            transform your vision into reality.
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-lg px-8 py-4 text-lg font-semibold focus-ring flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 rounded-lg px-8 py-4 text-lg font-semibold focus-ring flex items-center gap-3 transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="h-5 w-5" />
              View Our Work
            </Link>
          </div>
        </div>
        
        {/* Digital showcase */}
        <div className="mt-20 flow-root sm:mt-24">
          <div className="-m-2 rounded-2xl bg-white/10 backdrop-blur-md p-4 ring-1 ring-inset ring-white/20 lg:-m-4 lg:rounded-3xl lg:p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center relative overflow-hidden">
              {/* Animated code lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                <div className="absolute top-8 left-4 w-16 h-1 bg-accent-400 rounded animate-pulse delay-500" />
                <div className="absolute top-12 left-4 w-12 h-1 bg-primary-400 rounded animate-pulse delay-1000" />
                <div className="absolute top-16 left-4 w-20 h-1 bg-accent-400 rounded animate-pulse delay-1500" />
              </div>
              
              <div className="text-center relative z-10">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6 shadow-2xl">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
                <p className="text-lg font-medium text-white">
                  Experience Our Digital Solutions
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  Watch our showcase video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional floating elements for digital vibe */}
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-30 animate-bounce delay-3000" />
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-40 animate-bounce delay-4000" />
    </section>
  );
}
