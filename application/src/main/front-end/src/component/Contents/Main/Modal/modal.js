import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
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
          <div className="flex items-center">


          </div>
          <button onClick={onClose} className="text-lg font-bold mr-5">닫기</button>
        </div>

        {children}

        <div className="flex justify-center space-x-3 mt-2 mb-4">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full hover:cursor-pointer">
                저장
            </div>
            <div className="bg-slate-200 hover:bg-slate-300 text-white font-bold py-2 px-9 rounded-full hover:cursor-pointer">
                취소
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
