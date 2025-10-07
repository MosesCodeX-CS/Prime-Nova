'use client';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content:
      'Primenova transformed our outdated website into a modern, user-friendly platform that increased our online conversions by 150%. Their team was professional, responsive, and delivered exactly what they promised.',
    author: {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: '/testimonials/sarah.jpg',
    },
    rating: 5,
  },
  {
    id: 2,
    content:
      'The mobile app development project was handled flawlessly. Primenova delivered a high-quality app that our users love, and the ongoing support has been exceptional. Highly recommended!',
    author: {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLab',
      image: '/testimonials/michael.jpg',
    },
    rating: 5,
  },
  {
    id: 3,
    content:
      'Working with Primenova was a game-changer for our business. Their cloud migration services helped us reduce costs by 40% while improving performance. The team is knowledgeable and truly cares about our success.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      image: '/testimonials/emily.jpg',
    },
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Primenova.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-hover"
            >
              <div className="flex items-center gap-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-900">
                <p>&ldquo;{testimonial.content}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">
                    {testimonial.author.role} at {testimonial.author.company}
                  </div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
