import React from "react";

import Banner from "component/Recycle/banner.js";
import Emergency_Image from "image/emergency_image/emergency.png";

function Emergency() {
  return (
    <>
      <Banner
        title="🚨비상연락망 및 소화전 위치"
        subtitle="대처 방안을 숙지해 안전사고를 예방하자! ✔️"
      />
      <img className="w-full h-full px-2 rounded-xl shadow-md" src={Emergency_Image} alt="Emergency" />
    </>
  );
}

export default Emergency;
