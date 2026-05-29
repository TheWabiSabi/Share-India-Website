import Image from 'next/image';
import Link from 'next/link';
import listOfBlogs from '../list_of_blogs.json';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import { readFile, access } from 'fs/promises';
import { notFound } from 'next/navigation';
import BlogContent from './blog-content';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const POSTS_FOLDER = path.join(process.cwd(), 'markdowns');

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch (err) {
    return err;
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });
  return fileContent;
}

// Helper function to get related articles
function getRelatedArticles(currentSlug: string, currentTopic: string, currentIndustry: string) {
  let related = listOfBlogs.filter(
    (post) =>
      post.slug !== currentSlug &&
      (post.topic === currentTopic || post.industry === currentIndustry),
  );

  if (related.length > 2) {
    const topicMatches = related.filter((post) => post.topic === currentTopic);
    const industryMatches = related.filter(
      (post) => post.industry === currentIndustry && post.topic !== currentTopic,
    );

    related = [...topicMatches.slice(0, 1), ...industryMatches.slice(0, 1)];
  }

  return related.slice(0, 2);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = listOfBlogs.find((post) => post.slug === slug);
  const markdown = await readPostFile(slug);

  if (!blogPost || !markdown) {
    notFound();
  }

  const { content } = await compileMDX<{
    title: string;
    author: string;
    date: string;
  }>({
    source: typeof markdown === 'string' ? markdown : '',
    options: { parseFrontmatter: true },
  });

  const relatedArticles = getRelatedArticles(blogPost.slug, blogPost.topic, blogPost.industry);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with subtle background */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-si-bluegreen transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-si-bluegreen transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="max-w-xs truncate text-gray-400">{blogPost.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Grid Layout - Medium Style */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Sidebar - Author & Sharing (Hidden on mobile) */}
          <div className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <div className="text-center">
                <div className="bg-si-bluegreen mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-sm font-medium text-gray-900">{blogPost.author}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {new Date(blogPost.date).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Social Sharing */}
              <div className="flex flex-row space-x-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                  <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                  <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                  <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-7">
            {/* Article Header */}
            <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-sm">
              {/* Hero Image */}
              <div
                className="relative h-64 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${blogPost.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-6 bottom-4 left-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="bg-si-bluegreen rounded-full px-3 py-1 text-xs font-medium text-white">
                      {blogPost.category}
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                      {blogPost.type.replace('_', ' ').charAt(0).toUpperCase() +
                        blogPost.type.replace('_', ' ').slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Info */}
              <div className="p-6 lg:p-8">
                <h1 className="mb-4 text-3xl leading-tight font-bold text-gray-900 lg:text-4xl">
                  {blogPost.title}
                </h1>

                {/* Author info for mobile */}
                <div className="mb-6 flex items-center border-b pb-6 lg:hidden">
                  <div className="bg-si-bluegreen mr-3 flex h-10 w-10 items-center justify-center rounded-full">
                    <svg
                      className="h-5 w-5 text-white"
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
                  <div>
                    <p className="font-medium text-gray-900">{blogPost.author}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>
                        {new Date(blogPost.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span>•</span>
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <BlogContent content={content} />

                {/* Mobile Share Buttons */}
                <div className="mt-8 border-t pt-8 lg:hidden">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Share this article</h3>
                  <div className="flex space-x-3">
                    <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gray-900 px-4 py-3 text-white transition-colors hover:bg-gray-800">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      <span>Twitter</span>
                    </button>
                    <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related & Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents (Optional - you can add this if needed) */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-gray-900">In this article</h3>
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="hover:text-si-bluegreen block text-sm text-gray-600 transition-colors"
                  >
                    Quick Navigation
                  </a>
                  <div className="ml-3 space-y-1">
                    <a
                      href="#"
                      className="hover:text-si-bluegreen block text-xs text-gray-500 transition-colors"
                    >
                      • Key Points
                    </a>
                    <a
                      href="#"
                      className="hover:text-si-bluegreen block text-xs text-gray-500 transition-colors"
                    >
                      • Main Content
                    </a>
                    <a
                      href="#"
                      className="hover:text-si-bluegreen block text-xs text-gray-500 transition-colors"
                    >
                      • Conclusion
                    </a>
                  </div>
                </nav>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-gray-900">Related Reading</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <article key={article.slug} className="group">
                        <div className="relative mb-3 h-24 overflow-hidden rounded-lg bg-gray-200">
                          <Image
                            fill
                            src={article.image}
                            alt={article.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <div className="mb-2 flex flex-wrap gap-1">
                            <span className="bg-si-bluegreen rounded px-2 py-0.5 text-xs text-white">
                              {article.category}
                            </span>
                          </div>
                          <h4 className="mb-2 line-clamp-2 text-sm font-medium">
                            <Link
                              href={`/blog/${article.slug}`}
                              className="hover:text-si-bluegreen text-gray-900 transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <Link
                  href="/blog"
                  className="text-si-bluegreen hover:text-si-bluegreen/80 flex items-center text-sm font-medium transition-colors"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
