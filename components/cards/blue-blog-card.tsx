'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlueBlogCardProps {
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

const BlueBlogCard: React.FC<BlueBlogCardProps> = ({
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
    <article className="group focus-within:ring-si-primary/30 hover-lift hover-glow-blue flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 focus-within:ring-2 md:flex-row">
      {/* Image Section - Fixed sizing for mobile */}
      <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-auto md:h-full md:w-2/5">
        <Image
          fill
          src={imageUrl}
          alt={title}
          quality={50}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30vw"
          priority={false}
        />

        {/* Category Badge */}
        {category && (
          <span className="from-si-primary to-si-primary-600 shadow-vibrant-blue absolute top-3 left-3 rounded-full bg-gradient-to-r px-2 py-1 text-xs font-bold text-white backdrop-blur-sm sm:px-3 sm:py-1.5">
            {category}
          </span>
        )}

        {/* Type Badge */}
        {type && (
          <span className="from-si-red/90 to-si-red shadow-vibrant-red absolute top-3 right-3 rounded-full bg-gradient-to-r px-2 py-1 text-xs font-bold text-white uppercase backdrop-blur-sm sm:px-3 sm:py-1.5">
            {type.replace('_', ' ')}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="flex min-h-[200px] flex-1 flex-col bg-gradient-to-br from-blue-600 to-blue-800 p-4 text-white sm:p-6">
        {/* Title */}
        {href ? (
          <Link
            href={href}
            className="mb-2 line-clamp-3 text-lg leading-tight font-bold transition-colors outline-none hover:text-blue-200 focus-visible:text-blue-200 sm:text-xl md:text-2xl"
            aria-label={title}
          >
            {title}
          </Link>
        ) : (
          <h3 className="mb-2 line-clamp-3 text-lg leading-tight font-bold sm:text-xl md:text-2xl">
            {title}
          </h3>
        )}

        {/* Author and Date */}
        <div className="mt-2 flex items-center text-xs font-medium text-blue-100 sm:text-sm">
          <span className="mr-2 font-semibold">{author}</span>
          <span className="mx-2 text-blue-200">•</span>
          <time>{date}</time>
        </div>

        {/* Industry Tag */}
        {industry && (
          <div className="mt-2 sm:mt-3">
            <span className="rounded-full border border-blue-300/30 bg-blue-500/20 px-2 py-1 text-xs font-semibold text-blue-100 sm:px-3">
              {industry}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-blue-50 sm:text-base">
          {description}
        </p>

        {/* Read More Link */}
        {href && (
          <div className="mt-4 pt-2">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-100 transition-all hover:gap-3 hover:text-blue-200"
            >
              Read More
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

export default BlueBlogCard;
