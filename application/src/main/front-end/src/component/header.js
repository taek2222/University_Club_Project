import React from "react";
import mainImage from "../image/main.png";

function Header() {
  return (
    <header className="flex flex-col items-center mb-10">
      <div className="flex justify-center items-center space-x-10 mb-3">
        <a href="/main" className="flex flex-col items-center">
          <div className="rounded-full p-[2.8px] gradient-border">
            <div className="rounded-full bg-white w-12 h-12 overflow-hidden">
              <img
                src={mainImage}
                alt="메인"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-sm font-medium">메인</span>
        </a>
        <a href="/main" className="flex flex-col items-center">
          <div className="rounded-full p-[2px] bg-gradient-to-r from-story-start via-story-middle to-story-end">
            <div className="rounded-full bg-white w-12 h-12 overflow-hidden">
              <img
                src={mainImage}
                alt="핵심 동아리"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-sm font-medium">핵심동아리</span>
        </a>
        <a href="/booth-location" className="flex flex-col items-center">
          <div className="rounded-full bg-gray-300 w-12 h-12"></div>
          <span className="text-sm font-medium">부스 위치</span>
        </a>
        <a href="/events" className="flex flex-col items-center">
          <div className="rounded-full bg-gray-300 w-12 h-12"></div>
          <span className="text-sm font-medium">이벤트</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
