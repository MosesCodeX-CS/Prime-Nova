'use client';

import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Moses Mwangi',
    role: 'CEO & Founder',
    bio: 'Visionary leader with expertise in digital transformation and business strategy.',
    image: '/team/moses.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Collins Kipchuma',
    role: 'CTO & Lead Developer',
    bio: 'Tech innovator specializing in cloud architecture, AI, and modern web technologies.',
    image: '/team/collins.jpg',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Stanley Njuguna',
    role: 'Head of Design & Creative Director',
    bio: 'Creative director passionate about user-centered design and digital experiences.',
    image: '/team/stanley.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export function Team() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
            Talented individuals united by a passion for innovation and excellence.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 dark:border-gray-600"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {person.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                {person.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {person.bio}
              </p>
              <div className="flex justify-center space-x-4">
                {person.social.linkedin && (
                  <a href={person.social.linkedin} className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {person.social.twitter && (
                  <a href={person.social.twitter} className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {person.social.github && (
                  <a href={person.social.github} className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
