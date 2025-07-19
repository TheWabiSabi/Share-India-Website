import Image from 'next/image';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="from-si-slate to-si-bluegreen text-si-offwhite bg-gradient-to-r py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Share India Blog</h1>
            <p className="text-si-offwhite/85 mx-auto max-w-3xl text-xl md:text-2xl">
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
              className="border-si-bluegreen bg-si-white text-si-dark hover:border-si-dark hover:bg-si-bluegreen hover:text-si-offwhite rounded-full border px-4 py-2 transition-colors duration-200"
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
              className="bg-si-white relative z-10 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="from-si-bluegreen to-si-slate relative flex h-48 items-center justify-center bg-gradient-to-r">
                <Image
                  fill
                  src={post.image}
                  alt={post.title}
                  className="h-16 w-16 object-contain opacity-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-si-slate text-si-dark rounded-full px-3 py-1 text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-si-bluegreen mb-3 flex items-center text-sm">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-si-dark hover:text-si-slate mb-3 text-xl font-bold transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-si-dark/80 mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-si-bluegreen hover:text-si-bluegreen/80 inline-flex items-center font-medium transition-colors"
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
      <div className="bg-si-bluegreen text-si-offwhite py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Stay in the Loop</h2>
          <p className="text-si-offwhite/80 mb-8 text-xl">
            Get the latest market insights and trading tips delivered to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-si-slate text-si-offwhite focus:ring-si-slate flex-1 rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
            />
            <button className="bg-si-slate text-si-dark hover:bg-si-offwhite rounded-lg px-6 py-3 font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
