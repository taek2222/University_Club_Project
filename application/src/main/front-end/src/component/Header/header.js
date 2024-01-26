import React from "react";

// Header 재사용
import HeaderRecycle from "./header_recycle";

// Header 이미지 import
import Main from "../../image/header_image/main.png";
import Club from "../../image/header_image/club.png";
import Location from "../../image/header_image/location.png";
import Event from "../../image/header_image/event.png";


function Header({ setActiveMainContent }) {
  return (
    <header className="flex flex-col items-center pt-7 pb-3 mb-10 bg-slate-100">
      <div className="flex justify-center items-center space-x-10 mb-3">
        <HeaderRecycle
          imageSrc={Main}
          altText="메인"
          label="메인"
          onClick={() => setActiveMainContent('Main')}
        />
        <HeaderRecycle
          imageSrc={Club}
          altText="핵심 동아리"
          label="핵심 동아리"
          onClick={() => setActiveMainContent('Club')}
        />
        <HeaderRecycle
          imageSrc={Location}
          altText="부스 위치"
          label="부스 위치"
          onClick={() => setActiveMainContent('Location')}
        />
        <HeaderRecycle
          imageSrc={Event}
          altText="이벤트"
          label="이벤트"
          onClick={() => setActiveMainContent('Event')}
        />
      </div>
    </header>
  );
}

export default Header;
