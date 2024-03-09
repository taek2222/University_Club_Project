import React from "react";

import ModalTitleIcon from "../../../../image/join_image/modal/invite.png";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => { // 배경 클릭 시 닫기
    e.stopPropagation();
    onClose(); 
  };
// API 수작업 필요 아이패드 참고
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-20"
      onClick={handleBackgroundClick}
    >

      {/* 모달 창 크기 및 디자인 */}
      <div
        className="w-full pt-4 rounded-lg bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >

        {/* 제목 */}
        <div className="flex pb-3 items-center justify-between"> 
          <div className="flex items-center">

            {/* 모달 제목 (아이콘) */}
            <img
              src={ModalTitleIcon}
              alt="Modal Title Icon"
              className="w-7 h-7 rounded-full ml-5 border border-gray-500"
            />

            {/* 모달 제목 (제목) */}
            <h2 className="text-xl font-semibold ml-3">동아리 가입 신청</h2>
          </div>
          <button onClick={onClose} className="text-base font-bold mr-5">닫기</button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
