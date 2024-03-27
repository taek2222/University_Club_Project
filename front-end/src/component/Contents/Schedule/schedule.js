import React, { useEffect, useState } from "react";
import Event from "./event.js";
import Banner from "component/Recycle/banner.js";
import apiClient from "api.js";
import Booth from "./Booth/booth.js";
import Loader from 'component/Recycle/loader.js';

import Location from "image/schedule_image/location.png";

function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Day1 [부스]");
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["Day1 [부스]", "Day2 [부스]", "Day3 [공연]"];
  const categoryMapping = {
    "Day1 [부스]": "2024-04-01",
    "Day2 [부스]": "2024-04-02",
    "Day3 [공연]": "2024-04-03",
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
  };

  const maxPart = getMaxPart(schedules);

  const groupedEvents = Array.from({ length: maxPart }, (_, index) => {
    const part = index + 1;
    const partEvents = schedules.filter(
      (schedule) => parseInt(schedule.part, 10) === part
    );
    return partEvents;
  });

  const getIconUrl = (iconUrl) => {
    try {
      return require(`image/club_image/feed/${iconUrl}`);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    const fetchSchedules = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get("/schedules/all");
        setSchedules(response.data);
      } catch (error) {
        console.error("네트워크 오류 [Schedule]", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchSchedules();
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
      <Banner
        title="📆 홍보제 축제 일정"
        subtitle="행사 일정을 확인하고 참여하자! 🕒"
      />
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
      <p className="flex justify-center mt-5 text-lg font-bold">
        {categoryMapping[selectedCategory]}
      </p>

      <div className="mt-3">
        {selectedCategory !== "Day3 [공연]" ? (
          <Booth
            category={categoryMapping[selectedCategory] || selectedCategory}
            groupedEvents={groupedEvents}
          />
        ) : (
          groupedEvents.map((events, partIndex) => (
            <div key={partIndex} className="flex justify-center items-center">
              <div className="flex justify-between border rounded-lg mx-5 my-3 px-5 shadow-lg max-w-[500px]">
                <div className="mx-3 my-5">
                  <div className="mx-3 mt-4 font-bold text-xl">
                    Part {partIndex + 1}
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
                        iconUrl={getIconUrl(schedule.iconUrl)}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="px-3 mt-5">
        <img className="rounded-xl shadow-xl" src={Location} alt="Location" />
      </div>
    </>
  );
}

export default Schedule;
