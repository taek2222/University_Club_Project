import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

function Memo() {
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

    function getSlidesPerView() {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 720) {
            return 2;
        } else if (windowWidth > 720 && windowWidth <= 1024) {
            return 3;
        } else if (windowWidth > 1024) {
            return 4;
        }
    }

    useEffect(() => {
        function handleResize() {
            setSlidesPerView(getSlidesPerView());
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <>
      <Swiper
        
        slidesPerView={slidesPerView}
        className='mt-10 w-full h-full'
        scrollbar={true}
        modules={[Scrollbar]}
      >
        {[...Array(30).keys()].map((index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center border rounded-lg mx-3 px-5 shadow-lg max-w-[500px] min-h-72 mb-12">
              <div className='mt-5 text-center'>
                <p className='text-lg font-bold'>컴퓨터공학과</p>
                <p className='text-sm'>20191758 이름 {index + 1}</p>
                <p className='text-sm mt-5'>응원문구 테스트 글 {index + 1}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Memo;
