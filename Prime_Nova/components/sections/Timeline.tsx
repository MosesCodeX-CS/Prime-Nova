'use client';

export function Timeline() {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Primenova was established with a vision to revolutionize digital solutions.',
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and expanded our team to 10 members.',
    },
    {
      year: '2018',
      title: 'Cloud Expertise',
      description: 'Became certified AWS partners and launched our cloud solutions division.',
    },
    {
      year: '2020',
      title: 'Remote Revolution',
      description: 'Successfully transitioned to remote work and expanded globally.',
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched AI-powered solutions and machine learning services.',
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to innovate with emerging technologies and sustainable practices.',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Journey
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A decade of innovation, growth, and transformation in the digital landscape.
          </p>
        </div>
        
        <div className="mt-20 flow-root">
          <div className="-mb-8">
            {milestones.map((milestone, milestoneIdx) => (
              <div key={milestone.year} className="relative pb-8">
                {milestoneIdx !== milestones.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center ring-8 ring-white">
                      <span className="text-sm font-bold text-white">{milestoneIdx + 1}</span>
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{milestone.year}</p>
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
