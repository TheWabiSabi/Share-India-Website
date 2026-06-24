import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { extractToc, getPostBySlug, getRelatedPosts, toCard } from '@/lib/ghost';
import PostBody from '@/components/blog/post-body';
import ShareButtons from '@/components/blog/share-buttons';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPost = toCard(post);
  // Tags shown alongside the primary category badge (deduped against it).
  const secondaryTags = blogPost.tags.filter((t) => t.name !== blogPost.category);
  // Build a real table of contents and ensure headings have anchor ids.
  const { html: bodyHtml, toc } = extractToc(post.html ?? '');
  const relatedArticles = (await getRelatedPosts(post)).map(toCard);

  return (
    <div className="min-h-screen bg-gray-50 pt-[8vh]">
      {/* Header with subtle background */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-si-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-si-primary transition-colors">
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
                <div className="bg-si-primary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
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
                <p className="mt-1 text-xs text-gray-500">{blogPost.dateLabel}</p>
              </div>

              {/* Social Sharing */}
              <ShareButtons title={blogPost.title} layout="icons" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-7">
            {/* Article Header */}
            <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-sm">
              {/* Hero Image */}
              <div
                className="bg-si-primary-900 relative h-64 bg-cover bg-center bg-no-repeat"
                style={
                  blogPost.image
                    ? {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${blogPost.image}')`,
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-6 bottom-4 left-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="bg-si-primary rounded-full px-3 py-1 text-xs font-medium text-white">
                      {blogPost.category}
                    </span>
                    {secondaryTags.map((tag) => (
                      <span
                        key={tag.slug}
                        className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm"
                      >
                        {tag.name}
                      </span>
                    ))}
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
                  <div className="bg-si-primary mr-3 flex h-10 w-10 items-center justify-center rounded-full">
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
                      <span>{blogPost.dateLabel}</span>
                      <span>•</span>
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Article Content (Prism highlighting + copy buttons applied client-side) */}
                <PostBody html={bodyHtml} />
                {/* Tags */}
                {secondaryTags.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2 border-t pt-6">
                    {secondaryTags.map((tag) => (
                      <span
                        key={tag.slug}
                        className="bg-si-muted text-si-slate-700 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Mobile Share Buttons */}
                <div className="mt-8 border-t pt-8 lg:hidden">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Share this article</h3>
                  <ShareButtons title={blogPost.title} layout="buttons" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related & Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents — generated from the post's headings */}
              {toc.length > 0 && (
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-gray-900">In this article</h3>
                  <nav className="space-y-1 text-sm">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`hover:text-si-primary-600 block transition-colors ${
                          item.level === 3 ? 'pl-4 text-xs text-gray-500' : 'text-gray-700'
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-gray-900">Related Reading</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <article key={article.slug} className="group">
                        <div className="relative mb-3 h-24 overflow-hidden rounded-lg bg-gray-200">
                          {article.image && (
                            <Image
                              fill
                              src={article.image}
                              alt={article.title}
                              unoptimized={article.image.startsWith('http://localhost')}
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          )}
                        </div>
                        <div>
                          <div className="mb-2 flex flex-wrap gap-1">
                            <span className="bg-si-primary rounded px-2 py-0.5 text-xs text-white">
                              {article.category}
                            </span>
                          </div>
                          <h4 className="mb-2 line-clamp-2 text-sm font-medium">
                            <Link
                              href={`/blog/${article.slug}`}
                              className="hover:text-si-primary text-gray-900 transition-colors"
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
                  href="/blogs"
                  className="text-si-primary hover:text-si-primary/80 flex items-center text-sm font-medium transition-colors"
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
