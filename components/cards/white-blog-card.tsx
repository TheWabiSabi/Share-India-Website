import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface WhiteBlogCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  category?: string;
  imageUrl: string;
  slug?: string;
  type?: string;
  industry?: string;
}

const WhiteBlogCard: React.FC<WhiteBlogCardProps> = ({
  title,
  author,
  date,
  description,
  category,
  imageUrl,
  slug,
  type,
  industry,
}) => {
  const href = slug ? `/blog/${slug}` : undefined;

  return (
    <article className="group card-vibrant focus-within:ring-si-primary/30 hover-lift hover-glow-blue flex h-full  flex-col overflow-hidden rounded-xl transition duration-300 focus-within:ring-2">
      {/* Media */}
      <div className="relative h-40 w-full overflow-hidden sm:h-52 md:h-[30vh]">
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 22vw"
          priority={false}
        />
        {/* Category Badge */}
        {category && (
          <span className="from-si-primary to-si-primary-600 shadow-vibrant-blue absolute top-3 left-3 rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            {category}
          </span>
        )}
        {/* Type Badge */}
        {type && (
          <span className="from-si-red/90 to-si-red shadow-vibrant-red absolute top-3 right-3 rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-bold text-white uppercase backdrop-blur-sm">
            {type.replace('_', ' ')}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Gradient accent bar */}
        <div className="accent-bar-gradient mb-3 h-2 w-14" />

        {/* Title */}
        {href ? (
          <Link
            href={href}
            className="text-si-ink hover:text-si-primary focus-visible:text-si-primary line-clamp-2 text-lg leading-tight font-bold transition-colors outline-none md:text-xl"
            aria-label={title}
          >
            {title}
          </Link>
        ) : (
          <h3 className="text-si-ink line-clamp-2 text-lg leading-tight font-bold md:text-xl">
            {title}
          </h3>
        )}

        {/* Author and Date */}
        <div className="text-si-primary mt-2 flex items-center text-xs font-medium md:text-sm">
          <span className="text-si-ink mr-2 font-semibold">{author}</span>
          <span className="text-si-ink/40 mx-2">•</span>
          <time>{date}</time>
        </div>

        {/* Industry Tag */}
        {industry && (
          <div className="mt-3">
            <span className="from-si-primary/20 to-si-primary/10 text-si-primary border-si-primary/20 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold">
              {industry}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-si-ink/80 mt-3 line-clamp-2 text-sm leading-relaxed font-medium md:text-base">
          {description}
        </p>

        {/* Read More Link */}
        {href && (
          <div className="mt-auto pt-4">
            <Link
              href={href}
              className="text-si-primary hover:text-si-primary-600 inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
            >
              Read more
              <svg
                className="h-4 w-4 transition-transform hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default WhiteBlogCard;
