import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './home.scss';
import { Navigation, /**Pagination**/ Thumbs } from 'swiper/modules'; // Add Thumbs module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import products from '~/components/Products/products';

const cx = clsx.bind(styles);

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // State to hold thumbnail Swiper instance
  const [activeCategory, setActiveCategory] = useState(null);
  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;

    Array.from(new Set(products.map((product) => product.category))).forEach(
      (category) => {
        const categoryElement = categoryRefs.current[category];
        const categoryTop = categoryElement.offsetTop;
        const categoryHeight = categoryElement.offsetHeight;

        // Check if the scroll position is within the category section
        if (scrollY >= categoryTop && scrollY < categoryTop + categoryHeight) {
          setActiveCategory(category);
        }
      }
    );
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample images for the slider
  const images = [
    'https://foodology.ca/wp-content/uploads/2024/04/KFC_MarketTest-Slider-Fill-Up-Box-CC_V3-r01.png',
    'https://static.kfcvietnam.com.vn/images/web/our-story/lg/our-story.jpg?v=gORrX4',
    'https://kfcbd.com/storage/sliders/3O7FUTPmx48qTxhyRNNn6Uo8V.jpg',
    'https://brand-uk.assets.kfc.co.uk/2024-09/W7_CAROUSEL_DELIVERYDEAL_2TWISTER_2FRIES_UK_2000x650px.jpg?VersionId=0mmPoRRt9ClJ377_i0DIORivQy.O7rPV',
  ];

  const categoryRefs = useRef({});

  // Function to scroll to the respective category section
  const scrollToSection = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wrapper-home mt-5">
      <div className="main-swiper w-full max-w-7xl mx-auto">
        {/* Main Swiper for large images */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Navigation /**Pagination**/, Thumbs]}
          className="swiper-container mb-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-md">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className=" w-full h-96 object-cover rounded-md"
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
          className="swiper-container-thumbs overflow-visible"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-32 flex justify-center items-center rounded-md cursor-pointer">
                {/* The glow effect (cloned thumbnail) */}
                <div className="absolute inset-0 w-full h-full rounded-md opacity-50 glow-image-thumb -z-10">
                  <img
                    src={image}
                    alt={`Glow Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ filter: 'var(--activeGlowImg)' }} // Applying glow effect based on theme
                  />
                </div>
                {/* The original thumbnail */}
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-swiper-home relative h-full w-full object-cover rounded-lg shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* product slider */}
      <div className="product-slider w-full max-w-7xl mx-auto mt-10">
        {/* Buttons to scroll to respective categories */}
        <div className="sticky custom-background flex top-16 z-10 py-2 justify-center w-full">
          <div className="button-container flex space-x-2 mb-1">
            {Array.from(
              new Set(products.map((product) => product.category))
            ).map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className={`btn-category text-white py-2 px-4 rounded-lg shadow-lg ${
                  activeCategory === category
                    ? 'bg-[var(--thirdary-color)]'
                    : 'bg-[var(--secondary-color)]'
                }`} // Use CSS variables for button colors
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Sections */}
        {Array.from(new Set(products.map((product) => product.category))).map(
          (category) => (
            <div
              key={category}
              ref={(el) => (categoryRefs.current[category] = el)}
              className="mt-12"
            >
              <h1 className="product-title text-4xl font-bold mb-5 uppercase">
                {category}
              </h1>
              <Swiper
                spaceBetween={10}
                slidesPerView={5} // Adjust the number of slides as needed
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation]}
                className="swiper-container-products"
              >
                {products
                  .filter((product) => product.category === category)
                  .map((product, index) => (
                    <SwiperSlide key={index}>
                      <div className="product-card p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-card-img w-36 h-32 object-cover rounded-md mb-2"
                          />
                        </div>
                        <h3 className="product-card-name text-sm font-semibold mb-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-2 text-sm">
                          {product.description}
                        </p>
                        <p className="product-card-price font-bold text-lg">
                          ${product.price}
                        </p>
                        <button className="btn-add-cart mt-1 py-2 px-3 rounded ">
                          Add to Cart
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          )
        )}
      </div>
    </div>
  );
}
