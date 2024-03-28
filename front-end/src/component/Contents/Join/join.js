// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useState, useEffect } from "react";
import apiClient from "api";
import Loader from "component/Recycle/loader.js";

import JoinRecycle from "./joinrecycle";
import Banner from "component/Recycle/banner";

function Join() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get(`/joins/all`);
        setData(response.data);
      } catch (error) {
        console.log("네트워크 오류 [Join]", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* 배너 */}
      <Banner
        title="📩 동아리 가입 신청"
        subtitle="관심있는 동아리를 클릭해 지원하자! ✔️"
      />

      <div className="relative flex flex-col justify-center w-full max-w-xl mx-auto px-3 mt-4">
        {data.map((join, index) => (
          <JoinRecycle
            key={index}
            clubId={join.clubId}
            iconImage={require(`image/join_image/icon/${join.iconImage}`)}
            title={join.title}
            details={[join.clubName, join.field, join.eventDate]}
            paths={join.paths}
          />
        ))}
      </div>
    </div>
  );
}

export default Join;
