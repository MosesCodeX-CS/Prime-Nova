import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About Prime Nova"
            fill
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Delivering innovative IT solutions that transform businesses and drive growth.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p>
                Founded in 2015, Prime Nova began as a small team of passionate professionals with a vision to help businesses leverage technology for growth. What started as a modest startup has grown into a trusted partner for companies across various industries.
              </p>
              <p>
                Our journey has been marked by innovation, dedication, and a relentless pursuit of excellence. We&apos;ve helped over 200 clients transform their businesses through our custom IT solutions.
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To empower businesses with innovative technology solutions that drive efficiency, growth, and competitive advantage in an ever-evolving digital landscape.
              </p>
              
              <h3 className="mt-6 text-lg font-medium text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be the most trusted technology partner for businesses seeking to transform and thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The talented people behind our success
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Alex Johnson',
                role: 'CEO & Founder',
                bio: 'Alex has over 15 years of experience in technology and business strategy, helping companies leverage technology for growth.'
              },
              {
                name: 'Sarah Williams',
                role: 'CTO',
                bio: 'Sarah leads our technical team with expertise in software architecture and emerging technologies.'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Operations',
                bio: 'Michael ensures our projects are delivered on time and exceed client expectations.'
              },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Placeholder for team member photo */}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-blue-600">{person.role}</p>
                  <p className="mt-2 text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Values
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: 'Innovation',
              description: 'We embrace change and constantly seek new ways to solve complex problems.'
            },
            {
              name: 'Excellence',
              description: 'We strive for the highest standards in everything we do, delivering quality results.'
            },
            {
              name: 'Integrity',
              description: 'We build trust through transparency, honesty, and ethical practices.'
            },
            {
              name: 'Collaboration',
              description: 'We believe in the power of teamwork and partnership to achieve great things.'
            },
            {
              name: 'Customer Focus',
              description: 'We put our clients at the center of everything we do, delivering exceptional value.'
            },
            {
              name: 'Continuous Learning',
              description: 'We foster a culture of growth, curiosity, and continuous improvement.'
            },
          ].map((value) => (
            <div key={value.name} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">{value.name}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
