import React from "react";

// Header 재사용
import HeaderRecycle from "./header_recycle";

// Header 이미지 import
import Main from "../../image/header_image/main.png";
import Club from "../../image/header_image/club.png";
import Delivery from "../../image/header_image/delivery.png";
import Join from "../../image/header_image/join.png";
import Calendar from "../../image/header_image/calendar.png";


function Header({ activeMainContent, setActiveMainContent }) {
  return (
    <header className="sticky top-0 w-full bg-white z-10">
      <div className="flex justify-center items-center space-x-6 pt-3 mb-3">
        <HeaderRecycle
          imageSrc={Main}
          altText="메인" 
          label="메인"
          onClick={() => setActiveMainContent('Main')}
          scale = {activeMainContent === 'Main' ? 'scale-110' : 'scale-100'}
        />
        <HeaderRecycle
          imageSrc={Club}
          altText="동아리"
          label="동아리"
          onClick={() => setActiveMainContent('Club')}
          scale = {activeMainContent === 'Club' ? 'scale-110' : 'scale-100'}
        />
        <HeaderRecycle
          imageSrc={Delivery}
          altText="주문"
          label="주문"
          onClick={() => setActiveMainContent('Delivery')}
          scale = {activeMainContent === 'Delivery' ? 'scale-110' : 'scale-100'}
        />
        <HeaderRecycle
          imageSrc={Join}
          altText="가입 신청"
          label="가입 신청"
          onClick={() => setActiveMainContent('Join')}
          scale = {activeMainContent === 'Join' ? 'scale-110' : 'scale-100'}
        />
        <HeaderRecycle
          imageSrc={Calendar}
          altText="일정"
          label="일정"
          onClick={() => setActiveMainContent('Calendar')}
          scale = {activeMainContent === 'Calendar' ? 'scale-110' : 'scale-100'}
        />
      </div>

    {/* 헤더 아래 회색 바 */}
    <div className="w-full h-px bg-gray-400"></div>
    </header>
  );
}

export default Header;
