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
import { type BlogCard } from '@/lib/ghost';

const getBreakpoints = (layout: 1 | 2 | 3) => {
  if (layout === 1) {
    return {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 24 },
      1024: { slidesPerView: 1, spaceBetween: 28 },
      1280: { slidesPerView: 1, spaceBetween: 32 },
      1536: { slidesPerView: 1, spaceBetween: 36 },
    };
  } else if (layout === 2) {
    return {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 24 },
      1024: { slidesPerView: 2, spaceBetween: 28 },
      1280: { slidesPerView: 2, spaceBetween: 32 },
      1536: { slidesPerView: 2, spaceBetween: 36 },
    };
  } else {
    return {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 24 },
      1024: { slidesPerView: 2, spaceBetween: 28 },
      1280: { slidesPerView: 3, spaceBetween: 32 },
      1536: { slidesPerView: 3, spaceBetween: 36 },
    };
  }
};

interface MainCarouselProps {
  posts?: BlogCard[];
  layout: 1 | 2 | 3;
  color: 'blue' | 'white';
}

export default function MainCarousel({ posts = [], layout, color }: MainCarouselProps) {
  const enableLoop = posts.length > 2;

  const slides = posts.map((post) => ({
    title: post.title,
    author: post.author,
    date: post.dateLabel,
    description: `${post.readTime} • ${post.excerpt}`,
    category: post.category,
    imageUrl: post.image,
    slug: post.slug,
  }));

  return (
    <div className="relative w-full sm:pt-14">
      <div className="pointer-events-none absolute top-0 right-0 z-10 hidden gap-2 sm:flex">
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
        <button
          aria-label="Next insight"
          className="custom-next-btn text-si-primary border-si-primary/20 shadow-vibrant-blue hover:bg-si-primary hover:border-si-primary hover-lift pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all hover:text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {slides.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={false}
          watchOverflow
          loop={enableLoop}
          grabCursor
          pagination={{ clickable: true }}
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
          breakpoints={getBreakpoints(layout)}
          className="!pb-2"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={`${item.slug}-${index}`} aria-label={`Insight ${index + 1}`}>
              <div className={color === 'blue' ? 'h-64 md:h-72 lg:h-80' : 'h-full'}>
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
