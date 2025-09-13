import React from 'react';
import { FaCalendar, FaClock, FaExternalLinkAlt, FaUser } from 'react-icons/fa';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  url: string;
  featured?: boolean;
}

interface RelevantArticlesProps {
  articles: Article[];
  industryName: string;
}

const RelevantArticles: React.FC<RelevantArticlesProps> = ({ articles, industryName }) => {
  return (
    <section className="w-full border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
        <p className="mt-3 text-gray-700">
          Stay updated with the latest trends, regulations, and best practices in{' '}
          {industryName.toLowerCase()} insurance.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                article.featured ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {article.featured && (
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Featured Article
                  </span>
                </div>
              )}

              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                  {article.category}
                </span>
              </div>

              <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">{article.title}</h3>

              <p className="mt-2 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendar />
                  <span>{article.publishDate}</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Read Full Article
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
            View All {industryName} Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelevantArticles;
