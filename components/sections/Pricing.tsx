'use client';

import { CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$2,500',
    period: '/month',
    features: [
      'Basic website design',
      'Up to 5 pages',
      'Mobile responsive',
      'Basic SEO',
      'Email support',
      '3 months maintenance',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$5,000',
    period: '/month',
    features: [
      'Custom web application',
      'Up to 15 pages',
      'Advanced SEO',
      'Analytics integration',
      'Priority support',
      '6 months maintenance',
      'Content management',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Complete digital transformation',
    price: 'Custom',
    period: '',
    features: [
      'Full-stack development',
      'Unlimited pages',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated support',
      '12 months maintenance',
      'Cloud hosting',
      'Security audit',
    ],
    color: 'from-green-500 to-emerald-500',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-primary-500' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-8">
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 transform hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
