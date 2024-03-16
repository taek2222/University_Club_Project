import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const importAll = (context) => context.keys().filter(key => /image\d+\.jpg$/.test(key)).map(context);
const images = importAll(require.context("../../../image/content_image/", false, /\.(jpg)$/));

function ImageSwiper() {
    const slidesPerView = window.innerWidth < 700 ? 1.4 : 2;

    return(
        <div className="mx-auto mt-8">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mainSwiper"
        >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="mx-auto">
                  <img src={image} alt={`img ${(index + 1).toString()}`} className="w-full h-full" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    )
}

export default ImageSwiper;