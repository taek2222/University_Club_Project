import React from "react";
import CalendarIcon from "image/club_image/modal/calendar.png";

const scheduleData = [
  {
    date: "Day 1",
    event: "부스",
    time: "16:00 ~ 18:00",
  },
  {
    date: "Day 2",
    event: "부스",
    time: "16:00 ~ 18:00",
  },
];

const ScheduleComponent = () => {
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
        {scheduleData.map((item, index) => (
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
