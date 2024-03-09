import React, {useEffect, useState} from "react";

import Event from "./event.js";
import Banner from "component/Recycle/banner.js";
import apiClient from "api.js";

function Schedule() {
  const [schedules, setSchedules] = useState([]);

  function getMaxPart(schedules) {
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
      console.error('Error loading image:', error);
    }
  };

  useEffect(() => {
    apiClient
      .get('/schedules/all')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(error => {
        console.error('Error fetching memos:', error);
      });
  }, []);

  return (
    <>
      <Banner
        title="홍보제 축제 일정"
        subtitle="일정을 확인하고 참여하자!"
      />
      <div className="mt-10">
        {groupedEvents.map((events, partIndex) => (
          <div key={partIndex} className="flex justify-center items-center">
            <div className="flex justify-between border rounded-lg mx-5 my-5 px-5 shadow-lg max-w-[500px]">
              <div className="mx-3 my-5">
                <div className="mx-3 mt-4 font-bold text-xl">
                    Part {partIndex+1}.
                </div>
                  {events.map((schedule, index) => (
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