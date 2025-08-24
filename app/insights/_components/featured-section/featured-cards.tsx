import Image from 'next/image';
import React from 'react';

interface FeaturedBlogCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  category?: string;
  imageUrl: string;
  // Optional: pass a link target if you have detail pages
  href?: string;
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  title,
  author,
  date,
  description,
  category,
  imageUrl,
  href,
}) => (
  <article className="group focus-within:ring-si-primary/30 flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 focus-within:ring-2 hover:-translate-y-1 hover:shadow-md sm:w-80 md:w-[40vw] lg:max-w-[22vw]">
    {/* media */}
    <div className="relative h-40 w-full overflow-hidden sm:h-52 md:h-[30vh]">
      <Image
        fill
        src={imageUrl}
        alt={title}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 22vw"
        priority={false}
      />
      {category && (
        <span className="bg-si-primary absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold text-white shadow">
          {category}
        </span>
      )}
    </div>

    {/* content */}
    <div className="flex flex-1 flex-col p-5">
      {/* red accent bar */}
      <div className="bg-si-red mb-3 h-1 w-12" />

      {href ? (
        <a
          href={href}
          className="text-si-ink hover:text-si-primary focus-visible:text-si-primary text-lg leading-tight font-semibold transition-colors outline-none md:text-xl"
          aria-label={title}
        >
          {title}
        </a>
      ) : (
        <h3 className="text-si-ink text-lg leading-tight font-semibold md:text-xl">{title}</h3>
      )}

      <div className="text-si-ink/60 mt-2 flex items-center text-xs md:text-sm">
        <span className="text-si-ink mr-2 font-medium">{author}</span>
        <span className="mx-2">•</span>
        <time>{date}</time>
      </div>

      <p className="text-si-ink/75 mt-3 line-clamp-3 text-sm leading-relaxed md:text-base">
        {description}
      </p>

      {/* subtle bottom link affordance when href provided */}
      {href && (
        <div className="text-si-primary hover:text-si-primary-600 mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          Read more
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H7"
            />
          </svg>
        </div>
      )}
    </div>
  </article>
);

export default FeaturedBlogCard;
