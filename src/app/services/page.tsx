import { CheckCircleIcon, CodeBracketIcon, CloudArrowUpIcon, ShieldCheckIcon, ServerIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your business growth.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'IT Consulting',
    description: 'Expert guidance to align your technology with your business goals.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Managed IT Services',
    description: 'Proactive IT management to keep your business running smoothly.',
    icon: ServerIcon,
  },
  {
    name: 'AI & Machine Learning',
    description: 'Leverage the power of AI to gain insights and automate processes.',
    icon: CpuChipIcon,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Comprehensive IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-600">
                        {feature.description}
                      </p>
                      <div className="mt-4">
                        <a href="#" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-600">Let&apos;s discuss your project today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get in touch
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Approach to Delivering Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We follow a proven methodology to ensure your project&apos;s success from start to finish.
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Discovery',
                  description: 'We begin by thoroughly understanding your business objectives, challenges, and requirements to develop a clear project roadmap.'
                },
                {
                  name: 'Planning',
                  description: 'Our team creates a detailed project plan, including timelines, milestones, and resource allocation to ensure smooth execution.'
                },
                {
                  name: 'Development',
                  description: 'We build your solution using industry best practices and cutting-edge technologies, with regular updates and feedback loops.'
                },
                {
                  name: 'Testing',
                  description: 'Rigorous testing is conducted to ensure your solution is reliable, secure, and performs as expected across all scenarios.'
                },
                {
                  name: 'Deployment',
                  description: 'We manage the entire deployment process, ensuring a smooth transition to the new system with minimal disruption.'
                },
                {
                  name: 'Support',
                  description: 'Our relationship continues after launch with ongoing support, maintenance, and optimization services.'
                }
              ].map((step, index) => (
                <div key={step.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {index + 1}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
