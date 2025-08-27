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

const featuredData = [
  {
    title: "How India's Market Structure Impacts Retail Investors",
    author: 'Rohit Sharma',
    date: 'July 18, 2025',
    description:
      'A deep dive into market reforms and what they mean for everyday investors, featuring key insights from the latest SEBI updates.',
    category: 'Market Insights',
    imageUrl: '/insights-img/demoimg.png',
  },
  {
    title: 'Understanding Financial Regulations',
    author: 'Anita Desai',
    date: 'June 15, 2025',
    description:
      'Insights into recent financial regulatory changes impacting markets and investors.',
    category: 'Regulatory Updates',
    imageUrl: '/insights-img/demoimg2.png',
  },
  {
    title: 'Investment Strategies for New Investors',
    author: 'Vikram Patel',
    date: 'May 05, 2025',
    description: 'Practical advice and strategies tailored to beginners in the stock market.',
    category: 'Investment',
    imageUrl: '/insights-img/demoimg3.png',
  },
  // …add more items as desired
];

export default function FeaturedCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Loop only if enough slides to make sense
  const enableLoop = featuredData.length > 3;

  return (
    <div className="relative w-full">
      {/* Branded arrows */}
      <div className="pointer-events-none absolute -top-12 right-0 z-10 hidden gap-2 sm:flex">
        <button
          ref={prevRef}
          aria-label="Previous insight"
          className="text-si-ink pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow hover:bg-slate-50"
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
          className="text-si-ink pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow hover:bg-slate-50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

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
          // will be wired on init
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
          // @ts-expect-error – Swiper tyes are a bit strict here
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error – Swiper tyes are a bit strict here
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
          <SwiperSlide key={`${item.title}-${index}`} aria-label={`Featured insight ${index + 1}`}>
            <div className="h-full">
              <FeaturedBlogCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
