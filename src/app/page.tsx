import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Innovative IT & Business Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Transform your business with our cutting-edge technology solutions designed to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Our Services
              </Link>
              <Link 
                href="#contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Prime Nova</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
              <p className="text-gray-600 mb-4">
                Prime Nova is a leading provider of innovative IT and business solutions, helping companies of all sizes 
                leverage technology to achieve their business goals.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals is dedicated to delivering high-quality, customized solutions 
                that drive real business value and sustainable growth.
              </p>
              <Link 
                href="/about" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more about us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">10+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">200+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">50+</h4>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">24/7</h4>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
