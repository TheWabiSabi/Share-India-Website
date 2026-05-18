'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiper.css';
import WhiteBlogCard from './cards/white-blog-card';
import BlueBlogCard from './cards/blue-blog-card';
import blogPosts from '@/app/blog/list_of_blogs.json';
import { AllTypes } from '@/consts/types';
import { AllTopics } from '@/consts/topics';
import { AllIndustries } from '@/consts/industries';

const getBreakpoints = (layout: 1 | 2 | 3) => {
  const baseBreakpoints = {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 1, spaceBetween: 24 },
    1024: { slidesPerView: 1, spaceBetween: 28 },
    1280: { slidesPerView: 1, spaceBetween: 32 },
    1536: { slidesPerView: 1, spaceBetween: 36 },
  };

  if (layout === 1) {
    return baseBreakpoints;
  } else if (layout === 2) {
    return {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 24 },
      1024: { slidesPerView: 2, spaceBetween: 28 },
      1280: { slidesPerView: 2, spaceBetween: 32 },
      1536: { slidesPerView: 2, spaceBetween: 36 },
    };
  } else if (layout === 3) {
    return {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 24 },
      1024: { slidesPerView: 2, spaceBetween: 28 },
      1280: { slidesPerView: 3, spaceBetween: 32 },
      1536: { slidesPerView: 3, spaceBetween: 36 },
    };
  }
};

interface CaraouselProps {
  type?: AllTypes;
  topic?: AllTopics;
  industry?: AllIndustries;
  featured?: boolean;
  layout: 1 | 2 | 3;
  color: 'blue' | 'white';
}

// function getRandomElements<T>(array: T[], count: number = 10): T[] {
//   if (array.length <= count) return array;

//   // Create a copy to avoid modifying original array
//   const shuffled = [...array].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// }

export default function MainCaraousel({
  type,
  topic,
  industry,
  featured,
  layout,
  color,
}: CaraouselProps) {
  // Notice we removed the useState hooks for prevEl and nextEl!
  // CSS classes are much more reliable for Swiper in React.

  let featuredData = blogPosts
    .filter((post) => {
      if (featured && !post.featured) return false;
      if (type && post.type !== type) return false;
      if (topic && post.topic !== topic) return false;
      if (industry && post.industry !== industry) return false;
      return true;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      title: post.title,
      author: post.author,
      date: new Date(post.date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      description: `${post.readTime} • Explore insights on ${post.topic.replace('_', ' ')}`,
      category: post.category,
      imageUrl: post.image,
      slug: post.slug,
      type: post.type,
      industry: post.industry,
    }));

  if (featuredData.length > 10) {
    featuredData = featuredData.slice(0, 10);
  }

  const enableLoop = featuredData.length > 2;

  return (
    // 1. ADDED sm:pt-14 HERE to create a safe zone for the arrows
    <div className="relative w-full sm:pt-14">
      {/* 2. CHANGED -top-12 to top-0 so they sit inside the padded safe zone */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 hidden gap-2 sm:flex">
        {/* 3. Added custom-prev-btn class */}
        <button
          aria-label="Previous insight"
          className="custom-prev-btn text-si-primary border-si-primary/20 shadow-vibrant-blue hover:bg-si-primary hover:border-si-primary hover-lift pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all hover:text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* 3. Added custom-next-btn class */}
        <button
          aria-label="Next insight"
          className="custom-next-btn text-si-primary border-si-primary/20 shadow-vibrant-blue hover:bg-si-primary hover:border-si-primary hover-lift pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all hover:text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {featuredData.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={false}
          watchOverflow
          loop={enableLoop}
          grabCursor
          pagination={{ clickable: true }}
          // 4. Mapped navigation directly to the CSS classes we added to the buttons
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Previous insight',
            nextSlideMessage: 'Next insight',
            slideRole: 'group',
          }}
          // 5. Removed the buggy onInit hack completely!
          breakpoints={getBreakpoints(layout)}
          className="!pb-2"
        >
          {featuredData.map((item, index) => (
            <SwiperSlide key={`${item.slug}-${index}`} aria-label={`Featured insight ${index + 1}`}>
              <div className={color == 'blue' ? 'h-64 md:h-72 lg:h-80' : 'h-full'}>
                {color === 'white' ? <WhiteBlogCard {...item} /> : <BlueBlogCard {...item} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="py-8 text-center">
          <div className="card-vibrant hover-lift mx-auto max-w-md rounded-xl p-6">
            <p className="text-si-ink/70 font-medium">
              No featured articles available at the moment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
