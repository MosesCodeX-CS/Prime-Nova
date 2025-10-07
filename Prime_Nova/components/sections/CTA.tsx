'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="bg-primary-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
            Let&apos;s discuss how we can help you achieve your goals. Get in touch with our team today for a free consultation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-50 rounded-md px-6 py-3 text-base font-semibold focus-ring flex items-center gap-2 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:+15551234567"
              className="text-white hover:text-primary-100 flex items-center gap-2 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-primary-100">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@primenova.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
