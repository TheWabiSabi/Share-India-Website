import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  className?: string;
}

export default function Card({
  image,
  imageAlt,
  category,
  title,
  description,
  link,
  linkText = 'Find Out More',
  className = '',
}: CardProps) {
  return (
    <div
      className={`card-vibrant hover-lift hover-glow-blue overflow-hidden rounded-xl ${className}`}
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          fill
          src={image}
          alt={imageAlt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="from-si-ink/20 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Accent bar */}
        <div className="accent-bar-gradient mb-4 h-2 w-12" />

        {/* Category Label */}
        <div className="mb-4">
          <span className="from-si-primary/20 to-si-primary/10 text-si-primary border-si-primary/20 rounded-full border bg-gradient-to-r px-3 py-1 text-sm font-bold tracking-wider uppercase">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-si-ink mb-4 text-2xl leading-tight font-bold">{title}</h3>

        {/* Description */}
        <p className="text-si-ink/80 mb-6 leading-relaxed font-medium">{description}</p>

        {/* Link */}
        <Link
          href={link}
          className="group text-si-primary hover:text-si-primary-600 inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
        >
          <span className="border-si-primary group-hover:border-si-primary-600 border-b-2 pb-1">
            {linkText}
          </span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
