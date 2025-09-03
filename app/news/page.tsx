import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaTag,
  FaSearch,
  FaNewspaper,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import blogPosts from '../blog/list_of_blogs.json';
import { TbTrendingUp } from 'react-icons/tb';
import { BlogInterface } from '../blog/blog.interface';

const NewsPage = () => {
  // Filter for news content and sort by date (newest first)
  const newsArticles = [...blogPosts]
    .filter(
      (post) =>
        post.type === 'news' ||
        post.category === 'Breaking News' ||
        post.category === 'News Analysis',
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Create additional news content to supplement existing data
  const additionalNews = [
    {
      slug: 'insurance-market-growth-2024',
      topic: 'market_trends',
      industry: 'corporate',
      type: 'news',
      title: 'Indian Insurance Market Shows 15% Growth in Q4 2024, Driven by Corporate Segment',
      author: 'Market Research Team',
      date: '2025-01-15',
      readTime: '4 min read',
      category: 'Market News',
      image: '/blogs/market-growth.svg',
      featured: true,
    },
    {
      slug: 'irdai-new-regulations-2025',
      topic: 'regulatory',
      industry: 'corporate',
      type: 'news',
      title: 'IRDAI Announces New Digital Insurance Regulations for 2025',
      author: 'Regulatory Affairs Team',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Regulatory News',
      image: '/blogs/regulatory.svg',
      featured: true,
    },
    {
      slug: 'climate-risk-insurance-trends',
      topic: 'climate_risk',
      industry: 'corporate',
      type: 'news',
      title: 'Climate Risk Insurance Demand Surges 200% Following Extreme Weather Events',
      author: 'Climate Risk Specialists',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Industry News',
      image: '/blogs/climate.svg',
      featured: false,
    },
    {
      slug: 'cyber-insurance-claims-rise',
      topic: 'cyber_security',
      industry: 'corporate',
      type: 'news',
      title: 'Cyber Insurance Claims Rise 300% as Indian Businesses Face Increased Threats',
      author: 'Cyber Security Team',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Breaking News',
      image: '/blogs/cyber-security.svg',
      featured: true,
    },
    {
      slug: 'startup-insurance-adoption',
      topic: 'startup_trends',
      industry: 'startup',
      type: 'news',
      title: 'Indian Startups Embrace Comprehensive Insurance Coverage Amid Funding Challenges',
      author: 'Startup Desk',
      date: '2025-01-05',
      readTime: '5 min read',
      category: 'Startup News',
      image: '/blogs/startup-news.svg',
      featured: false,
    },
  ];

  // Combine existing and additional news
  const allNews = [...newsArticles, ...additionalNews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const featuredNews = allNews.filter((article) => article.featured);
  const regularNews = allNews.filter((article) => !article.featured);

  // Get unique categories for filter
  const categories = [...new Set(allNews.map((article) => article.category))];

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <FaNewspaper className="text-3xl text-red-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Insurance Industry News
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
              Stay ahead with breaking news, market updates, and regulatory changes shaping the
              insurance landscape in India and globally.
            </p>

            {/* Search and Filter Bar */}
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search news, updates, and announcements..."
                      className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <select className="rounded-lg border border-gray-300 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none">
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select className="rounded-lg border border-gray-300 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none">
                    <option value="">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-red-600 py-3 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <TbTrendingUp className="text-yellow-300" />
              <span className="font-bold">BREAKING:</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                IRDAI announces new digital insurance regulations • Cyber insurance claims surge
                300% • Climate risk coverage demand increases • Indian insurance market grows 15% in
                Q4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Breaking News</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Latest developments and major announcements in the insurance industry
                </p>
              </div>
              <div className="hidden md:block">
                <span className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
                  Live Updates
                </span>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredNews.slice(0, 2).map((article, index) => (
                <FeaturedNewsCard key={article.slug} article={article} isLarge={index === 0} />
              ))}
            </div>

            {featuredNews.length > 2 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredNews.slice(2).map((article) => (
                  <RegularNewsCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* All News */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Latest News</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive coverage of insurance industry developments and market trends
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularNews.map((article) => (
              <RegularNewsCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">News Categories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore news by category to find what matters most to your business
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 group-hover:bg-red-200">
                <FaNewspaper className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Breaking News</h3>
              <p className="mt-2 text-sm text-gray-600">Latest developments and urgent updates</p>
              <div className="mt-3 text-sm font-medium text-red-600">12 Articles</div>
            </div>

            <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                <FaTag className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Regulatory News</h3>
              <p className="mt-2 text-sm text-gray-600">Policy changes and compliance updates</p>
              <div className="mt-3 text-sm font-medium text-blue-600">8 Articles</div>
            </div>

            <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200">
                <TbTrendingUp className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Market Trends</h3>
              <p className="mt-2 text-sm text-gray-600">Industry growth and market analysis</p>
              <div className="mt-3 text-sm font-medium text-green-600">15 Articles</div>
            </div>

            <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200">
                <FaExternalLinkAlt className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Industry News</h3>
              <p className="mt-2 text-sm text-gray-600">Sector-specific updates and insights</p>
              <div className="mt-3 text-sm font-medium text-purple-600">22 Articles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Never Miss Important News</h2>
          <p className="mt-4 text-lg text-red-100">
            Get breaking news, regulatory updates, and market insights delivered to your inbox
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-300 focus:outline-none"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition-colors hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-sm text-red-200">
              Join 10,000+ insurance professionals who trust our news updates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Featured News Card Component
const FeaturedNewsCard = ({
  article,
  isLarge = false,
}: {
  article: BlogInterface;
  isLarge?: boolean;
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Breaking News':
        return 'bg-red-100 text-red-800';
      case 'Market News':
        return 'bg-green-100 text-green-800';
      case 'Regulatory News':
        return 'bg-blue-100 text-blue-800';
      case 'Industry News':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${isLarge ? 'lg:row-span-2' : ''}`}
    >
      <div className={`relative ${isLarge ? 'h-64 lg:h-80' : 'h-48'}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(article.category)}`}
          >
            {article.category}
          </span>
          {article.featured && (
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
              FEATURED
            </span>
          )}
        </div>

        {/* Live indicator for breaking news */}
        {article.category === 'Breaking News' && (
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
            <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
            LIVE
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {new Date(article.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-xs" />
              {article.readTime}
            </span>
          </div>
          <h3 className={`leading-tight font-bold ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
            <Link href={`/news/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h3>
        </div>
      </div>
    </article>
  );
};

// Regular News Card Component
const RegularNewsCard = ({ article }: { article: BlogInterface }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Breaking News':
        return 'bg-red-100 text-red-800';
      case 'Market News':
        return 'bg-green-100 text-green-800';
      case 'Regulatory News':
        return 'bg-blue-100 text-blue-800';
      case 'Industry News':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isRecent = new Date(article.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(article.category)}`}
          >
            {article.category}
          </span>
          {isRecent && (
            <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-orange-900">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendar className="text-xs" />
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/news/${article.slug}`} className="hover:text-red-600">
            {article.title}
          </Link>
        </h3>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaClock className="text-xs" />
            {article.readTime}
          </span>
          <span className="text-sm font-medium text-red-600">
            {article.category === 'Breaking News' ? 'URGENT' : 'READ MORE'}
          </span>
        </div>

        <div className="mt-4">
          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-800"
          >
            Read Full Story
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsPage;
