import React from "react";

const Modal = ({ isOpen, onClose }) => {
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
        className="w-full pt-4 rounded-lg bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* 제목 */}
        <div className="flex pb-3 items-center justify-between"> 
          <div className="flex items-center ml-3 text-lg font-bold">
            공연 곡 리스트
          </div>
          <button onClick={onClose} className="text-lg font-bold mr-5">닫기</button>
        </div>

        <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
            <div className="text-left mx-3">
                모달테스트
            </div>
        </div>
      </div>
    </div>    
  );
};

export default Modal;
