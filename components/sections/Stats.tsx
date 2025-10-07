'use client';

import { useRef } from 'react';

const stats = [
  { id: 1, name: 'Projects Completed', value: '500+' },
  { id: 2, name: 'Happy Clients', value: '200+' },
  { id: 3, name: 'Years of Experience', value: '10+' },
  { id: 4, name: 'Team Members', value: '50+' },
];

function AnimatedCounter({ value }: { value: string }) {
  return (
    <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      {value}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our track record speaks for itself. Here are some numbers that showcase our commitment to excellence.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center"
              >
                <AnimatedCounter value={stat.value} />
                <dt className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
