import React, { useState, useEffect } from "react";
import CalendarIcon from "image/club_image/modal/calendar.png";
import apiClient from 'api';

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
      const eventTimeTime = item.eventTime.split("T")[1]; // 시간 부분

      const dateMap = {
        "2024-03-14": "Day 1",
        "2024-03-15": "Day 2",
        "2024-03-16": "Day 3",
      };

      return {
        date: dateMap[eventTimeDate] || eventTimeDate,
        event: categoryMap[item.category] || item.category,
        time: `${eventTimeTime.split(":").slice(0, 2).join(":")} ~`, // "HH:MM ~" 형식
      };
    });
  };

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(`/schedules/modal/${clubId}`)
      .then((response) => {
        const transformedData = transformData(response.data);
        setData(transformedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [clubId]);

  if (isLoading) {
    return <div>Loading...</div>;
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
