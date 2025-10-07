'use client';

export function BlogGrid() {
  const posts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: '2024-01-15',
      category: 'Web Development',
      readTime: '5 min read',
    },
    {
      title: 'Design Trends That Will Dominate 2024',
      excerpt: 'Discover the graphic design trends that will define the digital landscape this year.',
      date: '2024-01-10',
      category: 'Design',
      readTime: '4 min read',
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      date: '2024-01-05',
      category: 'Cloud Solutions',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <p className="text-sm text-gray-600">Blog Post</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-semibold text-primary-600 mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
