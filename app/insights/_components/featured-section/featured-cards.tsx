import Image from 'next/image';
import React from 'react';

interface FeaturedBlogCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  category?: string;
  imageUrl: string;
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  title,
  author,
  date,
  description,
  category,
  imageUrl,
}) => (
  <div className="bg-si-offwhite hover:bg-si-slate/30 flex w-full min-w-0 flex-col rounded-xl p-4 transition-transform duration-300 hover:scale-[103%] hover:shadow sm:w-80 sm:p-6 md:w-[40vw] lg:max-w-[22vw]">
    <div className="z-0 mb-4 overflow-hidden rounded-lg">
      <div className="relative z-0 h-40 w-full transition-transform duration-300 ease-in-out hover:scale-105 sm:h-52 md:h-[30vh]">
        <Image fill src={imageUrl} alt={title} className="object-cover" />
      </div>
    </div>
    <div className="mb-4 flex flex-col items-start">
      {category && (
        <span className="bg-si-bluegreen text-si-offwhite mb-2 rounded px-2 py-1 text-xs font-semibold">
          {category}
        </span>
      )}
      <h3 className="text-si-dark mb-1 text-lg leading-tight font-bold md:text-xl">{title}</h3>
    </div>
    <div className="text-si-dark/80 mb-2 flex items-center text-xs md:text-sm">
      <span className="mr-2 font-medium">{author}</span>
      <span className="mx-2">·</span>
      <span>{date}</span>
    </div>
    <p className="text-si-dark/90 text-sm md:text-base">{description}</p>
  </div>
);

export default FeaturedBlogCard;
