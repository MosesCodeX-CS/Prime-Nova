import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A custom e-commerce solution with advanced inventory management and payment processing.',
    category: 'Web Development',
    image: '/project-ecommerce.jpg',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Enterprise SaaS Application',
    description: 'A comprehensive business management platform with real-time analytics and reporting.',
    category: 'SaaS',
    image: '/project-saas.jpg',
    link: '#',
    tags: ['Angular', 'Python', 'PostgreSQL', 'AWS']
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication and transaction management.',
    category: 'Mobile App',
    image: '/project-banking.jpg',
    link: '#',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase']
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description: 'A HIPAA-compliant platform for managing patient records and appointments.',
    category: 'Enterprise Software',
    image: '/project-healthcare.jpg',
    link: '#',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'Docker']
  },
  {
    id: 5,
    title: 'AI-Powered Analytics Dashboard',
    description: 'A data visualization platform with machine learning insights for business intelligence.',
    category: 'Data Analytics',
    image: '/project-analytics.jpg',
    link: '#',
    tags: ['React', 'Python', 'TensorFlow', 'D3.js']
  },
  {
    id: 6,
    title: 'IoT Smart Home Solution',
    description: 'An integrated system for home automation and energy management.',
    category: 'IoT',
    image: '/project-iot.jpg',
    link: '#',
    tags: ['React Native', 'Node.js', 'MQTT', 'Raspberry Pi']
  },
];

const categories = [
  { name: 'All', count: projects.length },
  { name: 'Web Development', count: 2 },
  { name: 'Mobile App', count: 1 },
  { name: 'SaaS', count: 2 },
  { name: 'Enterprise Software', count: 1 },
  { name: 'Data Analytics', count: 1 },
  { name: 'IoT', count: 1 },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-100">
              Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform through technology.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center -mx-2 -my-1">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                className={`px-4 py-2 m-1 rounded-full text-sm font-medium ${
                  category.name === 'All' 
                    ? 'bg-indigo-100 text-indigo-800' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  {/* Project image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{project.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {project.category}
                    </span>
                    <a 
                      href={project.link} 
                      className="text-indigo-600 hover:text-indigo-900 group-hover:scale-110 transition-transform duration-200"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Ready to start your project?</span>
              <span className="block text-indigo-600">Let&apos;s build something amazing together.</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get in touch
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Prime Nova transformed our business with their innovative solutions. Their team's expertise and dedication were evident throughout the project.",
                author: "Sarah Johnson",
                title: "CEO, TechCorp",
                image: "/testimonial-1.jpg"
              },
              {
                quote: "The mobile app they developed for us exceeded our expectations. It's user-friendly, fast, and has significantly improved our customer engagement.",
                author: "Michael Chen",
                title: "Product Manager, FinServe",
                image: "/testimonial-2.jpg"
              },
              {
                quote: "Working with Prime Nova was a game-changer for our digital transformation. Their strategic approach and technical expertise delivered outstanding results.",
                author: "Emily Rodriguez",
                title: "CTO, HealthPlus",
                image: "/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-12 w-12 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-gray-600">{testimonial.quote}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0">
                    {/* Testimonial image placeholder */}
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
