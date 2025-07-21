'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiper.css';

import FeaturedBlogCard from './featured-cards'; // Adjust import path as needed

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
  // Add more items as desired
];

export default function FeaturedCarousel() {
  return (
    <div className="relative max-w-[100vw] px-8 py-6 lg:max-w-[70vw]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12" // extra space for pagination dots
      >
        {featuredData.map((item, index) => (
          <SwiperSlide key={index}>
            <FeaturedBlogCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
