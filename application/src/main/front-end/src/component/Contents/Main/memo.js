import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

import pin from '../../../image/content_image/pin.png'

function Memo() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        className='mt-10 w-full h-full max-w-[800px]'
        scrollbar={true}
        modules={[Scrollbar]}
      >
        {[...Array(30).keys()].map((index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="flex justify-center">
                <div className={`flex justify-center border mx-3 px-5 w-[250px] min-h-72 mb-12 shadow-lg rounded-lg
                  ${index % 2 === 0 ? '-rotate-6' : 'rotate-12'} ${index % 2 === 0 ? 'bg-red-200' : 'bg-yellow-100'}`}>
                    <div className={`text-center mt-5 ${index % 2 === 0 ? 'rotate-3' : '-rotate-6'}`}>
                      <img src={pin} alt='pin' className='w-8 h-8 mx-auto' />
                      <p className='text-lg font-bold mt-12'>컴퓨터공학과</p>
                      <p className='text-base mt-5 font-bold'>응원문구 테스트 글 {index + 1}</p>
                    </div>
                </div>
              </div>
              <div className="flex justify-center max-w-[500px]">
                <div className={`flex justify-center border min-w-[220px] w-[300px] h-52 mb-12 shadow-lg rounded-lg
                  ${index % 2 === 0 ? 'bg-orange-200' : '-rotate-6 bg-green-100'}`}>
                  <div className={`text-center mt-3 ${index % 2 === 0 ? '' : 'rotate-3'}`}>
                    <img src={pin} alt='pin' className='w-8 h-8 mx-auto' />
                    <p className='text-lg font-bold mt-4'>컴퓨터공학과</p>
                    <p className='text-base mt-5 font-bold'>응원문구 테스트 글 {index + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Memo;
