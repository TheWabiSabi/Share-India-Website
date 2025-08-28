'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiper.css';
import FeaturedBlogCard from './featured-cards';
import blogPosts from '@/app/blog/list_of_blogs.json';

export default function FeaturedCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Filter only featured articles and transform data
  const featuredData = blogPosts
    .filter((post) => post.featured === true)
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

  // Loop only if enough slides to make sense
  const enableLoop = featuredData.length > 3;

  return (
    <div className="relative w-full">
      {/* Navigation arrows */}
      <div className="pointer-events-none absolute -top-12 right-0 z-10 hidden gap-2 sm:flex">
        <button
          ref={prevRef}
          aria-label="Previous insight"
          className="text-si-dark pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition-colors hover:bg-slate-50"
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
          className="text-si-dark pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition-colors hover:bg-slate-50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {featuredData.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={8}
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
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
            1280: { slidesPerView: 3, spaceBetween: '2vw' },
          }}
          className="!pb-12"
        >
          {featuredData.map((item, index) => (
            <SwiperSlide key={`${item.slug}-${index}`} aria-label={`Featured insight ${index + 1}`}>
              <div className="h-full">
                <FeaturedBlogCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="py-8 text-center">
          <p className="text-si-dark/60">No featured articles available at the moment.</p>
        </div>
      )}
    </div>
  );
}
