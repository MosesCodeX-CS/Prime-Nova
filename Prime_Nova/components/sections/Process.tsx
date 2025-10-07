'use client';

import { ArrowRight, CheckCircle, Clock, Users, Zap } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes, prototypes, and visual designs for your approval.',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using cutting-edge technologies and rigorous testing protocols.',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing support to ensure continued success.',
    icon: Clock,
    color: 'from-orange-500 to-red-500',
  },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Process
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A proven methodology that ensures successful project delivery and client satisfaction.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} mb-6`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
