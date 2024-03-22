// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useState } from 'react';

import iconUrl from 'image/club_image/modal/location.png';

const LocationButton = ({ locationImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full shadow-md"
        onClick={openModal}
      >
        부스 위치
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 pr-3 bg-black bg-opacity-0" onClick={closeModal}>

          <div className="relative top-1/2 transform -translate-y-1/2 mx-auto p-4 border shadow-lg rounded-md bg-white max-w-sm md:max-w-md lg:max-w-lg">
            
          <div className="flex pb-3 items-center justify-between"> 
            <div className="flex items-center">

            {/* 위치 모달 제목 (아이콘) */}
            <img
              src={iconUrl}
              alt="Club Icon"
              className="w-7 h-7"
            />

            {/* 위치 모달 제목 (제목) */}
            <h2 className="text-xl font-semibold ml-2">동아리 부스 위치</h2>
            </div>
          <button onClick={closeModal} className="text-black font-bold rounded hover:bg-gray-100">
              닫기
            </button>
         </div>
            <div className="flex justify-center">
              <img src={locationImage} alt="부스 위치" className="rounded-md" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationButton;
