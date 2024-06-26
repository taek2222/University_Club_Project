import React from "react";
import poster from "image/content_image/poster.png"

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => { // 배경 클릭 시 닫기
    e.stopPropagation();
    onClose(); 
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-20"
      onClick={handleBackgroundClick}
    >

      {/* 모달 창 크기 및 디자인 */}
      <div
        className="w-full pt-4 rounded-lg bg-white max-w-xs sm:max-w-sm md:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >

        {/* 제목 */}
        <div className="flex pb-3 items-center justify-between"> 
          <div className="flex ml-3">
            <img src={poster} alt="poster" className="w-7" />
            <div className="flex items-center ml-2 text-lg font-bold">
              포스터
            </div>
          </div>
          <button onClick={onClose} className="text-md font-bold mr-5">닫기</button>
        </div>

        <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
            <div className="text-left mx-3">
                <img src={imageUrl} alt="playlist" className="flex flex-col mx-auto max-h-[400px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]" />
            </div>
        </div>
        <div className="flex justify-center space-x-3 mt-2 mb-4">
        </div>
      </div>
    </div>
  );
};

export default Modal;
