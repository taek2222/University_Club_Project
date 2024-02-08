import React from "react";

import SwiperImage from "./swiperimage"; // 상단 이미지 스와이프

// 테스트 이미지 추후 컴포넌트 분리
import image1 from "../../../../image/Testi1.JPG";
import image2 from "../../../../image/Testi2.JPG";
import image3 from "../../../../image/Testi3.JPG";

const ModalContents = ({ modalTitle, modalContents, tags }) => {
  const images = [image1, image2, image3]; // 컴포넌트 분리 필요


  const formattedDescription = modalContents.replace(/\n/g, "<br>");

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">

      {/* 이미지 슬라이드 */}
      <div className="">
        <SwiperImage data={images} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-lg text-center font-bold mt-3">
        {modalTitle}
      </p>

      {/* 부스 (내용) */}
      <p
        className="text-sm text-left2 p-4"
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
      />

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
