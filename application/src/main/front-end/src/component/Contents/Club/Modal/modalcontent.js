import React, { useState, useEffect } from "react";
import SwiperImage from "./swiperimage";
import apiClient from 'api';

import { TextComponent } from "./formatText";
import LocationIcon from "../../../../image/club_image/modal/location.png";

const ModalContents = ({ clubId, tags }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(`/club/modal/${clubId}`)
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

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]">
      {/* 이미지 슬라이드 */}
      <div>
        <SwiperImage modalImage={data.modalImage} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-xl text-center font-bold mt-5">{data.modalTitle}</p>

      {/* 부스 (내용) */}
      <div className="px-4 pt-2">
        <TextComponent Content={data.modalContents} />
      </div>

      <div className="border-t-4 border-gray-300 my-4 drop-shadow" />

      {/* 위치 */}
      <div className="content-center px-4">
        <div className="flex flex-row">
          <img src={LocationIcon} alt="LocationIcon" className="w-8 h-8" />
          <p className="text-lg font-bold ml-2">부스 위치 안내</p>
        </div>
        <img
          src = {require(`../../../../image/club_image/modal/${data.modalLocationImage}`)}
          alt="modalLocationImage"
          className="px-6 w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* 하단 태그 */}
      <div className="ml-3 my-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-1 text-base font-semibold text-blue-700 my-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 하단 버튼 */}
      {/* [추가] 위치 추가 시 버튼 연결 작업 */}
      <div className="flex justify-center space-x-3 mb-4">
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
