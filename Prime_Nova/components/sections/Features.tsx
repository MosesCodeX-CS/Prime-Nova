'use client';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette,
  Megaphone,
  BarChart3,
  Users, 
  Shield, 
  Zap,
  Globe,
  Camera,
  Database
} from 'lucide-react';

const features = [
  {
    name: 'Web Development',
    description: 'Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Graphic Design',
    description: 'Stunning visual identities, logos, branding, and digital graphics that make your brand stand out.',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Mobile Applications',
    description: 'Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter.',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Digital Marketing',
    description: 'SEO, social media marketing, PPC campaigns, and content strategy to grow your online presence.',
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Cloud Solutions',
    description: 'AWS, Azure, and Google Cloud infrastructure setup, migration, and optimization services.',
    icon: Cloud,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Data Analytics',
    description: 'Business intelligence, data visualization, and analytics dashboards to drive informed decisions.',
    icon: BarChart3,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'E-commerce Solutions',
    description: 'Complete online stores with payment integration, inventory management, and customer portals.',
    icon: Globe,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'UI/UX Design',
    description: 'User-centered design processes, wireframing, prototyping, and usability testing.',
    icon: Camera,
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Database Management',
    description: 'Database design, optimization, migration, and maintenance for scalable applications.',
    icon: Database,
    color: 'from-violet-500 to-purple-500',
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Complete Digital Solutions
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
            From concept to launch, we provide end-to-end digital services that transform your business 
            and accelerate your growth in the digital landscape.
          </p>
        </div>
        
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
