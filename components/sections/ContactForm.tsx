'use client';

export function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Doe"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your Company"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option>Select a service</option>
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Mobile Apps</option>
            <option>Digital Marketing</option>
            <option>Cloud Solutions</option>
            <option>E-commerce</option>
            <option>Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Tell us about your project..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
