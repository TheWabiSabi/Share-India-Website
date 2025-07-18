import Link from 'next/link';

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Stock Market Fundamentals',
    excerpt:
      'Learn the basics of stock market investing and how to make informed decisions in the financial markets.',
    author: 'Share India Team',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Education',
    image: '/Scenery.jpg',
    slug: 'understanding-stock-market-fundamentals',
  },
  {
    id: 2,
    title: 'Top 10 Trading Strategies for Beginners',
    excerpt:
      'Discover proven trading strategies that can help new traders navigate the complex world of stock trading.',
    author: 'Market Analyst',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Trading',
    image: '/file.svg',
    slug: 'top-10-trading-strategies-for-beginners',
  },
  {
    id: 3,
    title: 'How to Build a Diversified Portfolio',
    excerpt:
      'A comprehensive guide to creating a well-balanced investment portfolio that minimizes risk and maximizes returns.',
    author: 'Investment Expert',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Investment',
    image: '/next.svg',
    slug: 'how-to-build-diversified-portfolio',
  },
  {
    id: 4,
    title: 'Market Analysis: Q1 2025 Outlook',
    excerpt: 'Our expert analysis of market trends and predictions for the first quarter of 2025.',
    author: 'Research Team',
    date: '2025-01-01',
    readTime: '10 min read',
    category: 'Analysis',
    image: '/window.svg',
    slug: 'market-analysis-q1-2025-outlook',
  },
  {
    id: 5,
    title: 'The Impact of Technology on Modern Trading',
    excerpt:
      'Explore how artificial intelligence and machine learning are revolutionizing the trading landscape.',
    author: 'Tech Analyst',
    date: '2024-12-28',
    readTime: '7 min read',
    category: 'Technology',
    image: '/vercel.svg',
    slug: 'impact-of-technology-on-modern-trading',
  },
  {
    id: 6,
    title: 'Risk Management in Volatile Markets',
    excerpt:
      'Essential strategies for protecting your investments during periods of market uncertainty.',
    author: 'Risk Manager',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Risk Management',
    image: '/globe.svg',
    slug: 'risk-management-in-volatile-markets',
  },
];

const categories = [
  'All',
  'Education',
  'Trading',
  'Investment',
  'Analysis',
  'Technology',
  'Risk Management',
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-400 to-gray-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Share India Blog</h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100 md:text-2xl">
              Stay updated with the latest insights, market analysis, and trading strategies from
              our expert team.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative z-10 overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-16 w-16 object-contain opacity-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mb-4 text-gray-600">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
                >
                  Read More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Stay in the Loop</h2>
          <p className="mb-8 text-xl text-gray-300">
            Get the latest market insights and trading tips delivered to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
