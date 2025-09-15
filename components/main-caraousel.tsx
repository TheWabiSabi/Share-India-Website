'use client';

import { useRef } from 'react';
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

function getRandomElements<T>(array: T[], count: number = 10): T[] {
  if (array.length <= count) return array;

  // Create a copy to avoid modifying original array
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function MainCaraousel({
  type,
  topic,
  industry,
  featured,
  layout,
  color,
}: CaraouselProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Filter only featured articles and transform data
  let featuredData = blogPosts
    .filter((post) => {
      if (featured && !post.featured) return false;
      if (type && post.type !== type) return false;
      if (topic && post.topic !== topic) return false;
      if (industry && post.industry !== industry) return false;
      return true;
    })
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

    if (featuredData.length > 10){
      featuredData = getRandomElements(featuredData, 10);
    }

  // Loop only if enough slides to make sense
  const enableLoop = featuredData.length > 2;

  return (
    <div className="relative w-full">
      {/* Navigation arrows */}
      <div className="pointer-events-none absolute -top-12 right-0 z-10 hidden gap-2 sm:flex">
        <button
          ref={prevRef}
          aria-label="Previous insight"
          className="text-si-primary border-si-primary/20 shadow-vibrant-blue hover:bg-si-primary hover:border-si-primary hover-lift pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all hover:text-white"
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
        <button
          ref={nextRef}
          aria-label="Next insight"
          className="text-si-primary border-si-primary/20 shadow-vibrant-blue hover:bg-si-primary hover:border-si-primary hover-lift pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all hover:text-white"
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
          scrollbar={{ draggable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Previous insight',
            nextSlideMessage: 'Next insight',
            slideRole: 'group',
          }}
          onInit={(swiper) => {
            // Wire navigation after refs exist
            // @ts-expect-error – Swiper types are a bit strict here
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error – Swiper types are a bit strict here
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={getBreakpoints(layout)}
          className="!pb-12"
        >
          {featuredData.map((item, index) => (
            <SwiperSlide key={`${item.slug}-${index}`} aria-label={`Featured insight ${index + 1}`}>
              <div className={color == 'blue' ? 'h-64 md:h-72 lg:h-80' : 'h-full'}>
                {' '}
                {/* Fixed height for horizontal cards */}
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
