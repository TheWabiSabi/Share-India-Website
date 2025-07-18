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
      className={`overflow-hidden rounded-lg bg-gray-50 transition-shadow duration-300 hover:shadow-lg ${className}`}
    >
      {/* Image Section */}
      <div className="h-64 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category Label */}
        <div className="mb-4">
          <span className="inline-block text-sm font-medium tracking-wider text-teal-600 uppercase">
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
          className="group inline-flex items-center gap-2 font-semibold text-teal-600 transition-colors duration-200 hover:text-teal-700"
        >
          <span className="border-b-2 border-teal-600 pb-1 group-hover:border-teal-700">
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
