'use client';

export function Newsletter() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Stay Updated
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Subscribe to our newsletter for the latest insights, tips, and industry updates.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
