'use client';

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Success Stories
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Real results from real clients. See how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">TechStart Inc.</h3>
            <p className="text-gray-600 mb-6">
              Complete digital transformation including web development, mobile app, and cloud migration.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary-600">150%</div>
                <div className="text-sm text-gray-600">Increase in online sales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">40%</div>
                <div className="text-sm text-gray-600">Reduction in operational costs</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Solutions</h3>
            <p className="text-gray-600 mb-6">
              Enterprise cloud migration and data analytics implementation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary-600">300%</div>
                <div className="text-sm text-gray-600">Faster data processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
