import React from "react";

import SwiperImage from "./swiperimage"; // 상단 이미지 스와이프

const ModalContents = ({ modalImage, modalTitle, modalContents, tags }) => {
  const paragraphs = modalContents.split('\n').map((paragraph, index) => (
    // 여기서는 간단히 각 줄을 <div>로 감싸 줄바꿈을 구현합니다.
    // 실제 사용 시에는 <p>, <span> 또는 다른 방법을 사용할 수 있습니다.
    <div key={index}>
      {paragraph}
    </div>
  ));

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]">

      {/* 이미지 슬라이드 */}
      <div className="">
        <SwiperImage data={modalImage} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-lg text-center font-bold mt-3">
        {modalTitle}
      </p>

      {/* 부스 (내용) */}
      <div>{paragraphs}</div>

      {/* 하단 태그 */}
      <div className="ml-3 text-left">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-1 text-sm font-semibold text-blue-700 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 하단 버튼 */}
      {/* [추가] 위치 추가 시 버튼 연결 작업 */}
      <div className="flex justify-center space-x-3 mt-2 mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full">
          부스 위치
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-9 rounded-full">
          부원 모집
        </button>
      </div>
    </div>
  );
};

export default ModalContents;
