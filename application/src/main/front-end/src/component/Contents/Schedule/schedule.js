import React, { useEffect, useState } from "react";
import Event from "./event.js";
import Banner from "component/Recycle/banner.js";
import apiClient from "api.js";

function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("day1");
  const categories = ["day1", "day2", "day3"];
  const categoryMapping = {
    "day1": "2024-03-12",
    "day2": "2024-03-13",
    "day3": "2024-03-14",
  };

  const getMaxPart = (schedules) => {
    if (!schedules || schedules.length === 0) {
      return 0;
    }

    const maxPart = schedules.reduce((max, schedule) => {
      const partNumber = parseInt(schedule.part, 10);
      return partNumber > max ? partNumber : max;
    }, 0);

    return maxPart;
  }

  const maxPart = getMaxPart(schedules);

  const groupedEvents = Array.from({ length: maxPart }, (_, index) => {
    const part = index + 1;
    const partEvents = schedules.filter(
      (schedule) => parseInt(schedule.part, 10) === part
    );
    return partEvents;
  });

  const getImageUrl = (iconUrl) => {
    try {
      return require(`image/club_image/modal/${iconUrl}`);
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };

  useEffect(() => {
    apiClient
      .get("/schedules/all")
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => {
        console.error("Error fetching memos:", error);
      });
  }, []);

  return (
    <>
      <Banner title="📆 홍보제 축제 일정" subtitle="일정을 확인하고 참여하자! 🕒" />
      <div className="flex justify-center space-x-1.5 mb-1">
        {categories.map((category) => (
          <div
            key={category}
            className={`relative text-center cursor-pointer px-3 py-2 ${
              selectedCategory === category
                ? "font-bold text-lg"
                : "text-lg text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 mx-auto w-full ${
                selectedCategory === category ? "bg-black" : "bg-transparent"
              }`}
              style={{ marginBottom: "-1px" }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3">
        {groupedEvents.map((events, partIndex) => (
          <div key={partIndex} className="flex justify-center items-center">
            <div className="flex justify-between border rounded-lg mx-5 my-5 px-5 shadow-lg max-w-[500px]">
              <div className="mx-3 my-5">
                <div className="mx-3 mt-4 font-bold text-xl">
                  Part {partIndex + 1}.
                </div>
                {events
                  .filter(
                    (schedule) =>
                      schedule.eventTime &&
                      schedule.eventTime.startsWith(
                        categoryMapping[selectedCategory]
                      )
                  )
                  .map((schedule, index) => (
                    <Event
                      key={index}
                      schedule={schedule}
                      iconUrl={getImageUrl(schedule.iconUrl)}
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Schedule;
