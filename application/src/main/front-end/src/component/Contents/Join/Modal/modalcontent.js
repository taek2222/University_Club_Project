import React, { useState, useEffect } from "react";
import SwiperImage from "./swiperimage";
import apiClient from "api";

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
        console.log(Error);
        setIsLoading(false);
      });
  }, [clubId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const navigateTo = (url) => {
    window.open(url, "_blank").focus();
  };

  const titleLines = title.split('\\n').map((line, index) => (
    <p key={index} className="text-lg text-center font-bold">
      {line}
    </p>
  ));

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]">
      {/* 이미지 슬라이드 */}
      <div>
        <SwiperImage modalImage={data.modalImage} />
      </div>

      {/* 부스 (제목) */}
      <div className="mt-4">{titleLines}</div>

      {/* 부스 (내용) */}
      <div className="px-3 pt-2 text-sm">
        <TextComponent Content={data.modalContents} />
      </div>

      <div className="border-t-4 border-gray-300 my-4 drop-shadow" />

      {/* 가입 경로 */}
      <div className="content-center px-4">
        <div className="flex flex-row">
          <img src={LocationIcon} alt="LocationIcon" className="w-8 h-8" />
          <p className="text-lg font-bold ml-2">가입 문의 바로가기</p>
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
                  className="w-10 h-10 drop-shadow-md"
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
