import React, { useState } from 'react';

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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full"
        onClick={openModal}
      >
        부스 위치
      </button>
      {isModalOpen && (
        <div>
          <div onClick={closeModal}>닫기</div>
          <img src={locationImage} alt="부스 위치" />
        </div>
      )}
    </>
  );
};

export default LocationButton;
