import React, { useState, useRef, useEffect } from 'react'
import { Navigation, /**Pagination**/ Thumbs } from 'swiper/modules' // Add Thumbs module
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import './home.scss'
import products from '~/components/Products/products'
import ProductCard from '~/components/Products'
import CategoryButton from '~/components/Button/categoryButton'

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null) // State to hold thumbnail Swiper instance
  const [activeCategory, setActiveCategory] = useState(null)
  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY

    Array.from(new Set(products.map((product) => product.category))).forEach((category) => {
      const categoryElement = categoryRefs.current[category]
      const categoryTop = categoryElement.offsetTop
      const categoryHeight = categoryElement.offsetHeight

      // Check if the scroll position is within the category section
      if (scrollY >= categoryTop && scrollY < categoryTop + categoryHeight) {
        setActiveCategory(category)
      }
    })
  }

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Sample images for the slider
  const images = [
    'https://foodology.ca/wp-content/uploads/2024/04/KFC_MarketTest-Slider-Fill-Up-Box-CC_V3-r01.png',
    'https://static.kfcvietnam.com.vn/images/web/our-story/lg/our-story.jpg?v=gORrX4',
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/ComboMaGe.webp?v=4B5EvL',
    'https://brand-uk.assets.kfc.co.uk/2024-09/W7_CAROUSEL_DELIVERYDEAL_2TWISTER_2FRIES_UK_2000x650px.jpg?VersionId=0mmPoRRt9ClJ377_i0DIORivQy.O7rPV',
  ]

  const categoryRefs = useRef({})

  // Function to scroll to the respective category section
  const scrollToSection = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
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
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          modules={[Thumbs]}
          className="swiper-container-thumbs overflow-visible"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-32 flex justify-center items-center rounded-md cursor-pointer">
                {/* The glow effect (cloned thumbnail) */}
                <div className="absolute inset-0 w-full h-full rounded-md opacity-50 ">
                  <img
                    src={image}
                    alt={`Glow Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ filter: 'var(--activeGlowImg)' }} // css glowing img
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
            {Array.from(new Set(products.map((product) => product.category))).map((category) => (
              <CategoryButton
                key={category}
                category={category}
                onClick={() => scrollToSection(category)}
                activeCategory={activeCategory} // Truyền activeCategory
              />
            ))}
          </div>
        </div>

        {/* Product Sections hiển thị sản phẩm */}
        {Array.from(new Set(products.map((product) => product.category))).map((category) => (
          <div key={category} ref={(el) => (categoryRefs.current[category] = el)} className="mt-12">
            <h1 className="product-title text-4xl font-bold mb-5 uppercase">{category}</h1>
            <Swiper
              spaceBetween={5}
              slidesPerView={4} // Default number of slides per view
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation]}
              className="swiper-container-products"
              breakpoints={{
                // When the window width is >= 640px
                640: {
                  slidesPerView: 1, // Show 1 slide
                  spaceBetween: 10,
                },
                // When the window width is >= 768px
                768: {
                  slidesPerView: 2, // Show 2 slides
                  spaceBetween: 15,
                },
                // When the window width is >= 1024px
                1024: {
                  slidesPerView: 3, // Show 3 slides
                  spaceBetween: 20,
                },
                // When the window width is >= 1280px
                1280: {
                  slidesPerView: 4, // Show 4 slides (default)
                  spaceBetween: 10,
                },
              }}
            >
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ))}
      </div>
      {/* about Kfc sesction */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              {/* First Image with Glow Effect */}
              <div className="relative flex pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5">
                <img
                  className="rounded-xl object-cover w-full h-auto" // Make sure the image is responsive
                  src="https://i.pinimg.com/originals/24/50/fc/2450fcf22635b5cf4678aeaffb7be9c8.jpg"
                  alt="about Us image"
                />
                {/* Glow Image for First Image */}
                <img
                  className="absolute w-full h-auto rounded-xl object-cover"
                  src="https://i.pinimg.com/originals/24/50/fc/2450fcf22635b5cf4678aeaffb7be9c8.jpg" // Duplicate for glow effect
                  alt="Glow Thumbnail"
                  style={{ filter: 'var(--activeGlowImg)', opacity: 0.2 }} // Adjust the glow effect
                />
              </div>

              {/* Second Image with Glow Effect */}
              <div className="relative">
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src="https://trendmedia.h5mag.com/trendmedia/kfc_delivery_april_2020/cover/75025/KFC_Delivery_480x670.960_0_1.png"
                  alt="about Us image"
                />
                {/* Glow Image for Second Image */}
                <img
                  className="absolute inset-0 w-full h-full rounded-xl object-cover"
                  src="https://trendmedia.h5mag.com/trendmedia/kfc_delivery_april_2020/cover/75025/KFC_Delivery_480x670.960_0_1.png" // Duplicate for glow effect
                  alt="Glow Thumbnail"
                  style={{ filter: 'var(--activeGlowImg)', opacity: 0.2 }} // Adjust the glow effect
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="about-kfc-bottom text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    KFC Historical Archives
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    The Colonel is the most iconic symbol we have. We proudly display him as our
                    symbol for all things Always Original, all the time.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="about-kfc-bottom text-4xl font-bold font-manrope leading-normal">
                      72+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Years Of Service
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="about-kfc-bottom text-4xl font-bold font-manrope leading-normal">
                      140+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Restaurant
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="about-kfc-bottom text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Millions Of People
                    </h6>
                  </div>
                </div>
              </div>
              <button className="about-kfc-bottom-btn sm:w-fit w-full px-3.5 py-2 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
