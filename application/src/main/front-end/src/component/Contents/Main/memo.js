import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import apiClient from 'api.js';

import 'swiper/css';
import 'swiper/css/scrollbar';

import pin from '../../../image/content_image/pin.png'

// function getRandomColor() {
//   const colors = ['bg-red-200', 'bg-yellow-100', 'bg-orange-200', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-indigo-200', 'bg-violet-200',
//                   'bg-purple-200', 'bg-fuchsia-200', 'bg-pink-200', 'bg-rose-100', ];
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// }

function Memo() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    apiClient.get('/memos/all')
      .then(response => {
        setMemos(response.data);
      })
      .catch(error => {
        console.error('Error fetching memos:', error);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={2}
        className='mt-5 w-full h-full max-w-[800px]'
        scrollbar={true}
        modules={[Scrollbar]}
      >
        {memos.slice(0, memos.length / 2).map((memo, index) => (
          <SwiperSlide key={index} style={{fontFamily:"Nanum Pen Script"}}>
            <div className='mt-6'>
              <div className="flex justify-center">
                <div className={`flex justify-center border mx-3 px-5 w-[250px] mb-12 shadow-lg rounded-lg
                  ${index % 2 === 0 ? '-rotate-6' : 'rotate-12'} ${memos[index*2]?.color}`}>
                    <div className={`text-center mt-5 mb-5`}>
                      <img src={pin} alt='pin' className='w-8 h-8 mx-auto' />
                      <p className='text-xl md:text-3xl mt-3'>{memos[index*2]?.major}</p>
                      <p className='text-lg md:text-2xl mt-3'>{memos[index*2]?.content}</p>
                      <p className='text-lg md:text-2xl -mr-3 md:-mr-5 mt-3 mb-1 md:mb-3 text-right'>- {memos[index*2]?.studentName} -</p>
                    </div>
                </div>
              </div>
              <div className="flex justify-center max-w-[500px]">
                <div className={`flex justify-center border min-w-[180px] w-[300px] px-2 mb-12 shadow-lg rounded-lg
                  ${index % 2 === 0 ? '' : '-rotate-6'} ${memos[index*2 + 1]?.color}`}>
                  <div className={`text-center mt-5 mb-5`}>
                    <img src={pin} alt='pin' className='w-8 h-8 -mt-3 mx-auto' />
                    <p className='text-xl md:text-3xl mt-4'>{memos[index*2 + 1]?.major}</p>
                    <p className='text-lg md:text-2xl mt-3'>{memos[index*2 + 1]?.content}</p>
                    <p className='text-lg md:text-2xl -mr-3 md:-mr-5 mt-3 mb-1 md:mb-3 text-right'>- {memos[index*2 + 1]?.studentName} -</p>
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
