// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useState, useEffect } from "react";
import apiClient from 'api';
import Loader from 'component/Recycle/loader.js';

import CalendarIcon from "image/club_image/modal/calendar.png";

const ScheduleComponent = ({clubId}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const transformData = (data) => {
    return data.map((item) => {
      const categoryMap = {
        "performance": "공연",
        "booth": "부스",
      };

      const eventTimeDate = item.eventTime.split("T")[0]; // 날짜 부분
      const eventStartTime = item.eventTime.split("T")[1]; // 시간 부분
      const eventEndTime = item.eventEndTime.split("T")[1]; // 종료 시간 부분

      const dateMap = {
        "2024-04-01": "Day 1",
        "2024-04-02": "Day 2",
        "2024-04-03": "Day 3",
      };

      const timeRange = `${eventStartTime.split(":").slice(0, 2).join(":")} ~ ${eventEndTime.split(":").slice(0, 2).join(":")}`;

      return {
        date: dateMap[eventTimeDate] || eventTimeDate,
        event: categoryMap[item.category] || item.category,
        time: timeRange
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get(`/schedules/modal/${clubId}`);
        const transformedData = transformData(response.data);
        setData(transformedData);
      } catch (error) {
        console.log("네트워크 오류 [ScheduleComponent]", error);
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
    <div className="px-4">
      <div className="flex flex-row items-center">
        <img
          src={CalendarIcon}
          alt="CalendarIcon"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <p className="font-bold ml-2 text-lg md:text-xl">동아리 행사 일정</p>
      </div>
      <div className="mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="mb-3 px-4 py-2 border-2 border-gray-700 rounded-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{item.date}</p>
              <p className="font-semibold">{item.event}</p>
              <p className="text-sm text-gray-600">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleComponent;
