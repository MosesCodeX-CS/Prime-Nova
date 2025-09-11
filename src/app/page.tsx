'use client';

import { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck, FiUsers, FiAward, FiLayers, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaChartLine, FaLightbulb, FaHandshake } from 'react-icons/fa';

// Type definitions
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

// Hero images - Updated with researched high-quality Unsplash images for IT/business themes
const heroImages = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
];

// Stats data
const stats: StatItem[] = [
  { value: '200+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '10+', label: 'Years Experience' }
];

// Features data
const features: FeatureItem[] = [
  {
    icon: <FaLightbulb className="w-8 h-8 text-blue-500" />,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology tailored to your needs'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-green-500" />,
    title: 'Data-Driven',
    description: 'Make decisions based on real-time analytics'
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-purple-500" />,
    title: 'Client-Centric',
    description: 'Your success is our top priority'
  }
];

// Testimonials data
const testimonials: TestimonialItem[] = [
  {
    quote: "Prime Nova transformed our business with their innovative solutions. Highly recommended!",
    author: "Sarah Johnson",
    role: "CEO, TechCorp"
  },
  {
    quote: "The team delivered beyond our expectations. Exceptional service and support.",
    author: "Michael Chen",
    role: "CTO, InnovateX"
  },
  {
    quote: "A true partner in our digital transformation journey.",
    author: "Emily Rodriguez",
    role: "Director, Digital Solutions"
  }
];

// Animated Component
const AnimatedSection = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: Variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Footer component - Enhanced with animations and improved layout
const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <AnimatedSection delay={0.1}>
          <div>
            <h3 className="text-xl font-bold mb-6">Prime Nova</h3>
            <p className="text-gray-400 mb-6">Innovative IT and business solutions to help your company grow and succeed in the digital age.</p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FiFacebook className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FiTwitter className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FiInstagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'Digital Marketing'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Business Ave, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-blue-500 mr-3" />
                <a href="mailto:info@primenova.com" className="text-gray-400 hover:text-white transition-colors">info@primenova.com</a>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-blue-500 mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Prime Nova. All rights reserved.</p>
      </AnimatedSection>
    </div>
  </footer>
);

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Made more visible by reducing overlay opacity */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={heroImages[currentImageIndex]}
                  alt="Hero background"
                  fill
                  priority
                  className="object-cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Reduced opacity for better visibility */}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`View slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              Innovative IT & <span className="text-blue-400">Business Solutions</span>
            </motion.h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              Transform your business with our cutting-edge technology solutions designed to drive growth and efficiency.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            >
              <Link 
                href="/services" 
                className="group relative bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                <span>Our Services</span>
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="group relative bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                <span>Get in Touch</span>
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Scroll indicator - Enhanced animation */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1.5 h-4 bg-white rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Improved animations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <motion.div 
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.p 
                    className="text-4xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 * index }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <motion.div 
                  className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Updated image fallback */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/about-image.jpg" 
                    alt="About Prime Nova" 
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg w-2/3"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-bold mb-2">15+ Years Experience</h4>
                    <p className="text-sm">Delivering excellence since 2008</p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Prime Nova</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Prime Nova is a leading provider of innovative IT and business solutions, helping companies of all sizes 
                  leverage technology to achieve their business goals. Our team of experienced professionals is dedicated 
                  to delivering high-quality, customized solutions that drive real business value and sustainable growth.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Expert team of certified professionals',
                    'Proven track record of success',
                    'Customized solutions for your needs',
                    '24/7 dedicated support'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                >
                  Learn more about us 
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Smoothened transitions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-xl shadow-sm"
                  >
                    <div className="text-5xl text-gray-200 mb-4">"</div>
                    <p className="text-xl text-gray-700 mb-6">{testimonials[currentTestimonial].quote}</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</p>
                      <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Enhanced animations */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help you achieve your business goals with our innovative solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                Get Started Now
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                Learn More
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;