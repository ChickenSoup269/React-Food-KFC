import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './home.scss';
import { Navigation, /**Pagination**/ Thumbs } from 'swiper/modules'; // Add Thumbs module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const cx = clsx.bind(styles);

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // State to hold thumbnail Swiper instance

  // Sample images for the slider
  const images = [
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Snack.webp?v=LDwWO3',
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Dinner.webp?v=LDwWO3',
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Addon.webp?v=LDwWO3',
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/TNAGP4.webp?v=LDwWO3',
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Swiper for large images */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }} // Ensure thumbsSwiper is valid
        modules={[Navigation /**Pagination**/, Thumbs]} // Use Swiper modules here
        className="swiper-container mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-md shadow-lg">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className=" w-full object-cover rounded-md" // Fill the container
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper below the main Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={4} // 4 thumbnails per row
        onSwiper={setThumbsSwiper} // Set the Swiper instance for thumbs
        watchSlidesProgress // Track active slide
        modules={[Thumbs]}
        className="swiper-container-thumbs"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-32 flex justify-center items-center rounded-md cursor-pointer">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-fit rounded-sm"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
