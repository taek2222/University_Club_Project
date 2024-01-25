import React from "react";

import HeaderRecycle from "./header_recycle"; // Header 재사용

import mainImage from "../../image/main.png"; // 메인 이미지


function Header() {
  return (
    <header className="flex flex-col items-center mb-10">
      <div className="flex justify-center items-center space-x-10 mb-3">
        <HeaderRecycle
          href="/main"
          imageSrc={mainImage}
          altText="메인"
          label="메인"
        />
        <HeaderRecycle
          href="/main"
          imageSrc={mainImage}
          altText="핵심 동아리"
          label="핵심 동아리"
        />
        <HeaderRecycle
          href="/main"
          imageSrc={mainImage}
          altText="부스 위치"
          label="이벤트"
        />
        <HeaderRecycle
          href="/main"
          imageSrc={mainImage}
          altText="이벤트"
          label="이벤트"
        />
      </div>
    </header>
  );
}

export default Header;
