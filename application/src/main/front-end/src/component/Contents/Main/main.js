/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from "../../../image/content_image/image1.jpg"
import image2 from "../../../image/content_image/image2.jpg"
import image3 from "../../../image/content_image/image3.jpg"
import image4 from "../../../image/content_image/image4.jpg"
import image5 from "../../../image/content_image/image5.jpg"

const images = [image1, image2, image3, image4, image5];

function Main() {
  const slidesPerView = window.innerWidth < 700 ? 1.4 : 2;

  return(
    <>
      <div className="mx-auto mt-10">
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
                  <img src={image} alt={`Image ${index + 1}`} className="w-full h-full" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  )
}

export default Main;