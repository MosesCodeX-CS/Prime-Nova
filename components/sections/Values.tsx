'use client';

import { Lightbulb, Target, Users, Zap } from 'lucide-react';

const values = [
  {
    name: 'Innovation',
    description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Excellence',
    description: 'Quality is at the heart of everything we do. We strive for perfection in every project we undertake.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and work closely with our clients as partners in their success.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Agility',
    description: 'We adapt quickly to changing requirements and market conditions, ensuring your project stays on track.',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
  },
];

export function Values() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            These principles guide everything we do and shape how we work with our clients.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} mb-6`}>
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
