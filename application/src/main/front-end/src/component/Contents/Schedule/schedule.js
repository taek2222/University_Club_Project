import React, {useEffect, useState} from "react";

import Event from "./event.js";
import Banner from "component/Recycle/banner.js";
import apiClient from "api.js";

// const events = [
//   {
//     eventTitle: "Part 1.",
//     clubNames: ["페르마타", "루시우스"],
//     tags: ["#밴드", "#댄스"],
//     eventTimes: ["03:00 PM ~ 04:30 PM", "04:30 PM ~ 06:00 PM"],
//     iconUrls: [TestImage, TestImage],
//   },
//   {
//     eventTitle: "Part 2.",
//     clubNames: ["프레이즈", "뉴를리"],
//     tags: ["#밴드", "#댄스"],
//     eventTimes: ["07:00 PM ~ 08:30 PM", "08:30 PM ~ 09:00 PM"],
//     iconUrls: [TestImage, TestImage],
//   },
// ];

function Schedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    apiClient.get('/schedules/all')
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
        {schedules.map((schedule, index) => (
          <Event key={index} schedule={schedule} />
        ))}
      </div>
    </>
  );
}

export default Schedule;