// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useState, useEffect } from "react";
import apiClient from "api";
import Loader from 'component/Recycle/loader.js';

import SwiperImage from "./swiperimage";
import { TextComponent } from "./formatText";
import LocationIcon from "image/join_image/modal/inquiry.png";

const ModalContents = ({ clubId, title, pathsIcons, paths }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(`/join/modal/${clubId}`)
      .then((Response) => {
        setData(Response.data);
        setIsLoading(false);
      })
      .catch((Error) => {
        console.log("네트워크 오류 [ModalContent_Join]", Error);
        setIsLoading(false);
      });
  }, [clubId]);

  if (isLoading) {
    return <Loader/>;
  }
  
  const navigateTo = (url) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank").focus();
    }
  };

  const titleLines = title.split('\\n').map((line, index) => (
    <p key={index}>
      {line}
    </p>
  ));

  return (
    <div className="overflow-auto max-h-[450px] md:max-h-[600px]">
      {/* 이미지 슬라이드 */}
      <div>
        <SwiperImage modalImage={data.modalImage} />
      </div>

      {/* 부스 (제목) */}
      <div className="mt-4 text-center font-bold text-lg md:text-xl">{titleLines}</div>

      {/* 부스 (내용) */}
      <div className="px-3 pt-2 text-sm md:text-base">
        <TextComponent Content={data.modalContents} />
      </div>

      <div className="border-t-4 border-gray-300 my-4 drop-shadow-md" />

      {/* 가입 경로 */}
      <div className="px-4">
        <div className="flex flex-row items-center">
          <img src={LocationIcon} alt="LocationIcon" className="w-8 h-8 md:w-10 md:h-10" />
          <p className="font-bold ml-2 text-lg md:text-xl">가입 문의 바로가기</p>
        </div>
        <div className="flex justify-center items-center space-x-6 py-4">
          {pathsIcons.map((icon, index) =>
            paths[index] ? (
              <button
                key={index}
                onClick={() => navigateTo(Object.values(data.joinUrl)[index])}
                className="focus:outline-none"
              >
                <img
                  src={icon}
                  alt={`Path ${index}`}
                  className="drop-shadow-xl w-10 h-10 md:w-12 md:h-12"
                />
              </button>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalContents;
