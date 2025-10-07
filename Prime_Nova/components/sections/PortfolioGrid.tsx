'use client';

export function PortfolioGrid() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features',
      image: '/portfolio/ecommerce.jpg',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure banking application for iOS and Android',
      image: '/portfolio/banking.jpg',
    },
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete brand identity for tech startup',
      image: '/portfolio/branding.jpg',
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Enterprise cloud migration and optimization',
      image: '/portfolio/cloud.jpg',
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Multi-channel marketing campaign with 300% ROI',
      image: '/portfolio/marketing.jpg',
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Real-time business intelligence dashboard',
      image: '/portfolio/analytics.jpg',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A showcase of our most successful projects across different industries and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Project Preview</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-semibold text-primary-600 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
