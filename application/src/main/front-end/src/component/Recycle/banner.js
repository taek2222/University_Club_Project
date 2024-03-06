import React, { useEffect, useRef, useState } from 'react';

import BannerImage from "image/banner.png";

function Banner({ title, subtitle }) {
    const titleRef = useRef(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);
  
    useEffect(() => {
      if (titleRef.current) {
        setUnderlineWidth(titleRef.current.offsetWidth);
      }
    }, []);
  
    return (
      <div className="relative w-full mx-auto rounded-lg shadow-md mb-6 overflow-hidden">
        <img
          src={BannerImage}
          alt="Background"
          className="absolute right-0 w-28 h-28 object-cover opacity-50"
        />
        <div className="relative bg-white bg-opacity-75 p-4 px-6 flex flex-col items-start">
          <h1 ref={titleRef} className="text-xl font-bold mb-2 text-left inline-block">{title}</h1>
          <div className="border-b-2 border-blue-500 mb-2" style={{ width: underlineWidth }}></div>
          <p className="text-md text-left">{subtitle}</p>
        </div>
      </div>
    );
  }
  
  export default Banner;