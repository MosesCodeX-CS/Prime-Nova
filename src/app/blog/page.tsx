import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    href: '/blog/ai-trends-2024',
    category: 'Artificial Intelligence',
    description:
      'Explore the latest AI trends that are transforming businesses and how you can leverage them for competitive advantage.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    readTime: '6 min read',
    author: {
      name: 'Alex Johnson',
      role: 'AI Specialist',
      imageUrl: '/author-alex.jpg',
    },
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Remote Workforces',
    href: '/blog/cybersecurity-remote-work',
    category: 'Cybersecurity',
    description:
      'Essential security measures to protect your remote workforce from evolving cyber threats in 2024.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    readTime: '8 min read',
    author: {
      name: 'Sarah Williams',
      role: 'Security Expert',
      imageUrl: '/author-sarah.jpg',
    },
  },
  {
    id: 3,
    title: 'Cloud Migration: A Step-by-Step Guide for Enterprises',
    href: '/blog/cloud-migration-guide',
    category: 'Cloud Computing',
    description:
      'A comprehensive guide to planning and executing a successful cloud migration strategy for large organizations.',
    date: 'Mar 5, 2024',
    datetime: '2024-03-05',
    readTime: '10 min read',
    author: {
      name: 'Michael Chen',
      role: 'Cloud Architect',
      imageUrl: '/author-michael.jpg',
    },
  },
  {
    id: 4,
    title: 'The Rise of Low-Code Development in 2024',
    href: '/blog/low-code-development',
    category: 'Software Development',
    description:
      'How low-code platforms are revolutionizing application development and what it means for your business.',
    date: 'Feb 28, 2024',
    datetime: '2024-02-28',
    readTime: '7 min read',
    author: {
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      imageUrl: '/author-emily.jpg',
    },
  },
  {
    id: 5,
    title: 'Data Privacy Regulations: What Businesses Need to Know',
    href: '/blog/data-privacy-regulations',
    category: 'Compliance',
    description:
      'An overview of the latest data privacy laws and how to ensure your business remains compliant.',
    date: 'Feb 20, 2024',
    datetime: '2024-02-20',
    readTime: '9 min read',
    author: {
      name: 'David Kim',
      role: 'Compliance Officer',
      imageUrl: '/author-david.jpg',
    },
  },
  {
    id: 6,
    title: 'Digital Transformation: Key Strategies for Success',
    href: '/blog/digital-transformation-strategies',
    category: 'Digital Transformation',
    description:
      'Proven strategies to ensure a successful digital transformation journey for your organization.',
    date: 'Feb 15, 2024',
    datetime: '2024-02-15',
    readTime: '11 min read',
    author: {
      name: 'Priya Patel',
      role: 'Digital Strategist',
      imageUrl: '/author-priya.jpg',
    },
  },
];

const categories = [
  { name: 'All', count: 24 },
  { name: 'Artificial Intelligence', count: 5 },
  { name: 'Cybersecurity', count: 4 },
  { name: 'Cloud Computing', count: 6 },
  { name: 'Software Development', count: 7 },
  { name: 'Digital Transformation', count: 8 },
  { name: 'Compliance', count: 3 },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-emerald-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Insights & Resources
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-emerald-100">
              Stay updated with the latest technology trends, insights, and best practices from our experts.
            </p>
            <div className="mt-8">
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-emerald-600 bg-opacity-25 text-white placeholder-emerald-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center -mx-2 -my-1">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                className={`px-4 py-2 m-1 rounded-full text-sm font-medium ${
                  category.name === 'All' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="bg-gray-50 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Article
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              In-depth analysis and insights on the latest technology trends.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 h-64 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Featured</span>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-600">
                    <Link href={`/blog/category/${posts[0].category.toLowerCase().replace(/\s+/g, '-')}`}>
                      {posts[0].category}
                    </Link>
                  </p>
                  <Link href={posts[0].href} className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {posts[0].title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {posts[0].description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{posts[0].author.name}</span>
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {posts[0].author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={posts[0].datetime}>
                        {posts[0].date}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{posts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Get the latest articles and news delivered to your inbox every week.
                </p>
                <form className="mt-6 flex">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Fresh insights and expert analysis on technology and business.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0 h-48 bg-gradient-to-r from-gray-400 to-gray-300"></div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-emerald-600">
                      <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                        {post.category}
                      </Link>
                    </p>
                    <Link href={post.href} className="block mt-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author.name}</span>
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>
                          {post.date}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Browse by Topic
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore our most popular categories and find what interests you.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              'Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Cloud Computing',
              'DevOps', 'Blockchain', 'Internet of Things', 'Big Data', 'Mobile Development',
              'Web Development', 'UX/UI Design', 'Digital Transformation', 'Agile', 'Startups',
              'Leadership', 'Remote Work', 'Product Management', 'Data Science', 'Automation'
            ].map((tag) => (
              <a
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
