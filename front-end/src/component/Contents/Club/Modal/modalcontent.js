// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useState, useEffect } from "react";
import apiClient from "api";
import Loader from 'component/Recycle/loader.js';

import SwiperImage from "./swiperimage";
import { TextComponent } from "./formatText";
import ScheduleComponent from "./schedulecomponent";
import LocationButton from "./locationbutton";

const ModalContents = ({ clubId, tags }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const Response = await apiClient.get(`/club/modal/${clubId}`);
        setData(Response.data);
      } catch (Error) {
        console.log("네트워크 오류 [ModalContents_club]", Error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [clubId]);
  

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="overflow-auto max-h-[450px] md:max-h-[600px]">
      {/* 이미지 슬라이드 */}
      <div>
        <SwiperImage modalImage={data.modalImage} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-center font-bold mt-4 text-lg md:text-xl">
        {data.modalTitle}
      </p>

      {/* 부스 (내용) */}
      <div className="px-3 pt-2 text-sm md:text-base">
        <TextComponent Content={data.modalContents} />
      </div>

      <div className="border-t-4 border-gray-300 my-4 drop-shadow-md" />

      {/* 일정 */}
      {data.scheduleUse && <ScheduleComponent clubId={clubId}/>}

      {/* 하단 태그 */}
      <div className="ml-3 my-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-1 font-semibold text-blue-700 my-2 text-sm md:text-base"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 하단 버튼 */}
      {data.modalLocationImage && (
        <div className="flex justify-center space-x-3 mb-4">
          <LocationButton
            locationImage={require(`image/club_image/modal/location/${data.modalLocationImage}`)}
          />
        </div>
      )}
    </div>
  );
};

export default ModalContents;
