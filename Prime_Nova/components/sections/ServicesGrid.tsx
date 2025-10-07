'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    name: 'Web Development',
    description: 'Modern, responsive websites and web applications',
    features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Ready'],
    price: 'From $5,000',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Graphic Design',
    description: 'Visual identity, branding, and digital graphics',
    features: ['Logo Design', 'Brand Identity', 'Print Materials', 'Digital Graphics'],
    price: 'From $2,000',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    price: 'From $10,000',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Digital Marketing',
    description: 'Complete digital marketing strategies',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    price: 'From $3,000',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Cloud Solutions',
    description: 'Cloud infrastructure and migration services',
    features: ['AWS & Azure', 'Migration Services', 'DevOps', 'Monitoring'],
    price: 'From $8,000',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'E-commerce',
    description: 'Complete online store solutions',
    features: ['Payment Integration', 'Inventory Management', 'Customer Portal', 'Analytics'],
    price: 'From $7,000',
    color: 'from-yellow-500 to-orange-500',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Service Portfolio
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Choose from our comprehensive range of digital services, or combine multiple 
            services for a complete digital transformation.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              id={service.name.toLowerCase().replace(/\s+/g, '-')}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {service.price}
                </span>
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
