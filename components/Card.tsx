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
      className={`bg-si-white overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-lg ${className}`}
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image
          fill
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category Label */}
        <div className="mb-4">
          <span className="text-si-bluegreen inline-block text-sm font-medium tracking-wider uppercase">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl leading-tight font-bold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-gray-600">{description}</p>

        {/* Link */}
        <Link
          href={link}
          className="group text-si-bluegreen hover:text-si-bluegreen/70 inline-flex items-center gap-2 font-semibold transition-colors duration-200"
        >
          <span className="border-si-bluegreen group-hover:border-si-bluegreen/50 border-b-2 pb-1">
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
