'use client';

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            About <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Primenova</span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-300">
            We&apos;re a passionate team of digital innovators dedicated to transforming businesses 
            through cutting-edge technology and creative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
