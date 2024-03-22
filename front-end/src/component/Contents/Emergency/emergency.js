// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React from "react";

import Banner from "component/Recycle/banner.js";
import Emergency_Image from "image/emergency_image/emergency.png";

function Emergency() {
  return (
    <>
      <Banner
        title="🚨비상연락망 및 안전수칙"
        subtitle="대처 방안을 숙지해 안전사고를 예방하자! ✔️"
      />
      <div className="px-2">
        <img
          className="w-full h-full rounded-xl shadow-md"
          src={Emergency_Image}
          alt="Emergency"
        />
      </div>
    </>
  );
}

export default Emergency;
