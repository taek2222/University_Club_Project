import React from "react";

const Modal = ({ isOpen, onClose, children, iconUrl, clubName }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    // 하트 이벤트 및 닫기 이벤트 버블링 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    onClose(); // 배경 클릭 시 닫기
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div
        className="w-full p-5 rounded-lg bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="flex items-center">
            <img
              src={iconUrl}
              alt="Club Icon"
              className="w-8 h-8 rounded-full mr-2 border border-gray-500"
            />
            <h2 className="text-xl font-semibold">{clubName}</h2>
          </div>
          <button onClick={onClose} className="text-lg font-bold">X</button>
        </div>
        {children}
        <div className="border-t border-gray-200 mt-4"></div> {/* 하단 선 추가 */}
      </div>
    </div>
  );
};

export default Modal;
