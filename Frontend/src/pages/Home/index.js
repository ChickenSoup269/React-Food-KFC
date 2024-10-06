import React from 'react';
import clsx from 'clsx';
import styles from './home.scss';
import { Navigation, Pagination } from 'swiper/modules'; // Keep this import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = clsx.bind(styles);

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Start with one slide for small screens
        breakpoints={{
          // Configure responsive breakpoints
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]} // Use Swiper modules here
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="p-4 bg-white rounded-md shadow-lg flex justify-center items-center">
            Slide 1 Content
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-white rounded-md shadow-lg flex justify-center items-center">
            Slide 2 Content
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-white rounded-md shadow-lg flex justify-center items-center">
            Slide 3 Content
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-white rounded-md shadow-lg flex justify-center items-center">
            Slide 4 Content
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}
