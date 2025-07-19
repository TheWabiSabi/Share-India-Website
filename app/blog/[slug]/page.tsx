import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  id: 1,
  title: 'Understanding Stock Market Fundamentals',
  content: `
    <p>The stock market can seem intimidating to new investors, but understanding its fundamentals is the first step toward making informed investment decisions. In this comprehensive guide, we'll break down the essential concepts every investor should know.</p>
    
    <h2>What is the Stock Market?</h2>
    <p>The stock market is a collection of exchanges where investors buy and sell shares of publicly traded companies. Think of it as a giant marketplace where ownership stakes in companies are traded between investors.</p>
    
    <h2>Key Players in the Market</h2>
    <p>Several key players make the stock market function:</p>
    <ul>
      <li><strong>Individual Investors:</strong> People like you and me who buy and sell stocks</li>
      <li><strong>Institutional Investors:</strong> Large organizations like mutual funds, pension funds, and insurance companies</li>
      <li><strong>Market Makers:</strong> Firms that provide liquidity by buying and selling stocks</li>
      <li><strong>Brokers:</strong> Companies that facilitate trades between buyers and sellers</li>
    </ul>
    
    <h2>How Stock Prices Are Determined</h2>
    <p>Stock prices are determined by supply and demand. When more people want to buy a stock than sell it, the price goes up. When more people want to sell than buy, the price goes down. Several factors influence this supply and demand:</p>
    <ul>
      <li>Company performance and earnings</li>
      <li>Economic conditions</li>
      <li>Industry trends</li>
      <li>Market sentiment</li>
      <li>News and events</li>
    </ul>
    
    <h2>Types of Stock Analysis</h2>
    <p>There are two main approaches to analyzing stocks:</p>
    
    <h3>Fundamental Analysis</h3>
    <p>This involves studying a company's financial health, including its revenue, profits, debt, and growth prospects. Fundamental analysts look at financial statements, management quality, and competitive position.</p>
    
    <h3>Technical Analysis</h3>
    <p>This focuses on price patterns and trading volume to predict future price movements. Technical analysts use charts and indicators to identify trends and trading opportunities.</p>
    
    <h2>Getting Started</h2>
    <p>If you're new to investing, here are some steps to get started:</p>
    <ol>
      <li>Educate yourself about the basics</li>
      <li>Open a brokerage account</li>
      <li>Start with a small amount you can afford to lose</li>
      <li>Diversify your investments</li>
      <li>Stay informed about market news</li>
      <li>Be patient and think long-term</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>Understanding stock market fundamentals is crucial for anyone looking to invest successfully. Remember that investing involves risk, and it's important to do your research and consider your financial situation before making any investment decisions.</p>
  `,
  author: 'Share India Team',
  date: '2025-01-15',
  readTime: '5 min read',
  category: 'Education',
  image: '/globe.svg',
  slug: 'understanding-stock-market-fundamentals',
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch the blog post based on the slug
  const { slug } = await params;

  if (slug !== blogPost.slug) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-si-bluegreen hover:text-si-bluegreen/80">
              Home
            </Link>
            <svg
              className="text-si-bluegreen h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="text-si-bluegreen hover:text-si-bluegreen/80">
              Blog
            </Link>
            <svg
              className="text-si-bluegreen h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-si-bluegreen">Understanding Stock Market Fundamentals</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-si-slate">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="bg-si-bluegreen text-si-offwhite rounded-full px-3 py-1 text-sm">
              {blogPost.category}
            </span>
            <h1 className="text-si-dark mt-6 mb-6 text-4xl font-bold md:text-5xl">
              {blogPost.title}
            </h1>
            <div className="text-si-dark/80 flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <div className="bg-si-offwhite mr-3 flex h-10 w-10 items-center justify-center rounded-full">
                  <svg
                    className="text-si-dark h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="bg-si-white rounded-lg p-8 shadow-sm md:p-12">
          <div
            className="prose prose-lg prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Share Section */}
          <div className="border-si-bluegreen/30 mt-12 border-t pt-8">
            <h3 className="text-si-dark mb-4 text-lg font-semibold">Share this article</h3>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button className="bg-si-dark text-si-offwhite hover:bg-si-bluegreen focus:ring-si-bluegreen flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 transition-colors focus:ring-2 focus:outline-none sm:w-auto">
                {/* Twitter/X SVG */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span>Twitter</span>
              </button>
              <button className="text-si-offwhite flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-800 px-4 py-2 transition-colors hover:bg-blue-900 focus:ring-2 focus:ring-blue-800 focus:outline-none sm:w-auto">
                {/* LinkedIn SVG */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </button>
              <button className="text-si-offwhite flex w-full items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-2 transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:outline-none sm:w-auto">
                {/* WhatsApp SVG */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Related Articles */}
      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-2xl font-bold text-gray-900">Related Articles</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="bg-si-white overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-lg">
            <div className="from-si-bluegreen/20 to-si-slate flex h-40 items-center justify-center bg-gradient-to-r">
              <img src="/file.svg" alt="Trading strategies" className="h-12 w-12 opacity-50" />
            </div>
            <div className="p-6">
              <span className="bg-si-bluegreen text-si-offwhite rounded-full px-2 py-1 text-xs">
                Trading
              </span>
              <h4 className="mt-3 mb-2 text-lg font-semibold">
                <Link
                  href="/blog/top-10-trading-strategies-for-beginners"
                  className="hover:text-si-bluegreen"
                >
                  Top 10 Trading Strategies for Beginners
                </Link>
              </h4>
              <p className="text-sm text-gray-600">
                Discover proven trading strategies that can help new traders navigate the complex
                world of stock trading.
              </p>
            </div>
          </article>

          <article className="bg-si-white overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-lg">
            <div className="from-si-bluegreen/20 to-si-slate flex h-40 items-center justify-center bg-gradient-to-r">
              <img src="/next.svg" alt="Portfolio building" className="h-12 w-12 opacity-50" />
            </div>
            <div className="p-6">
              <span className="bg-si-bluegreen text-si-offwhite rounded-full px-2 py-1 text-xs">
                Investment
              </span>
              <h4 className="mt-3 mb-2 text-lg font-semibold">
                <Link
                  href="/blog/how-to-build-diversified-portfolio"
                  className="hover:text-si-bluegreen"
                >
                  How to Build a Diversified Portfolio
                </Link>
              </h4>
              <p className="text-sm text-gray-600">
                A comprehensive guide to creating a well-balanced investment portfolio that
                minimizes risk and maximizes returns.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-si-dark hover:text-si-bluegreen inline-flex items-center font-medium"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
