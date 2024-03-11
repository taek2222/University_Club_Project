import React, { useState, useEffect } from "react";
import SwiperImage from "./swiperimage";
import apiClient from 'api';

import { TextComponent } from "./formatText";

const ModalContents = ({clubId, title, pathsIcons, paths}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(`/join/modal/1`)
      .then((Response) => {
        setData(Response.data);
        setIsLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  const navigateTo = (url) => {
    window.open(url, '_blank').focus();
  };

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]">
      {/* 이미지 슬라이드 */}
      <div>
        <SwiperImage modalImage={data.modalImage} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-xl text-center font-bold mt-5">{title}</p>

      {/* 부스 (내용) */}
      <div className="px-4 pt-2">
        <TextComponent Content={data.modalContents} />
      </div>

      {/* 가입 경로 */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        {pathsIcons.map((icon, index) => paths[index] ? (
          <button key={index} onClick={() => navigateTo(Object.values(data.joinUrl)[index])} className="focus:outline-none">
            <img src={icon} alt={`Path ${index}`} className="w-10 h-10" />
          </button>
        ) : null)}
      </div>
    </div>
  );
};

export default ModalContents;
