import React from "react";

// Header 재사용
import HeaderRecycle from "./header_recycle";

// Header 이미지 import
import Main from "../../image/header_image/main.png";
import Club from "../../image/header_image/club.png";
import Delivery from "../../image/header_image/delivery.png";
import Location from "../../image/header_image/location.png";
import Event from "../../image/header_image/event.png";


function Header({ setActiveMainContent }) {
  return (
    <header className="sticky top-0 w-full bg-white z-10">
      <div className="flex justify-center items-center space-x-6 pt-3 mb-3">
        <HeaderRecycle
          imageSrc={Main} // 이미지
          altText="메인" 
          label="메인"
          onClick={() => setActiveMainContent('Main')} // 클릭 이벤트 전달 매개변수
        />
        <HeaderRecycle
          imageSrc={Club}
          altText="동아리"
          label="동아리"
          onClick={() => setActiveMainContent('Club')}
        />
        <HeaderRecycle
          imageSrc={Delivery}
          altText="주문"
          label="주문"
          onClick={() => setActiveMainContent('Delivery')}
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

    {/* 헤더 아래 회색 바 */}
    <div className="w-full h-px bg-gray-400"></div>
    </header>
  );
}

export default Header;
