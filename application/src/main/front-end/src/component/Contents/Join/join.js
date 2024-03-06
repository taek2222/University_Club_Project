import React from "react";
import JoinRecycle from "./joinrecycle";
import Banner from "component/Recycle/banner";

// 이미지 임포트
import Naver from "../../../image/join_image/naver.png";
import Google from "../../../image/join_image/google.png";
import Kakao from "../../../image/join_image/kakao.png";
import Call from "../../../image/join_image/call.png";

import ClubImage from "../../../image/test1.png";
import TestImage from "image/join_image/feed_test.png"

const recycleData = [
  {
    clubImage: ClubImage,
    title: "총동연 임원진 모집",
    details: ["총동연", "학회", "D-32"],
    applicationPaths: [Naver, Google, Kakao, Call],
    applicationStates: [true, true, true, true],
  },
  {
    clubImage: TestImage,
    title: "테스트",
    details: ["테스트", "테스트", "D-20"],
    applicationPaths: [Naver, Google, Kakao, Call],
    applicationStates: [false, false, true, false],
  }
];

function Join() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* 배너 */}
      <Banner
        title="동아리 가입 신청"
        subtitle="관심있는 동아리를 클릭해 지원해!"
      />

      <div className="relative flex flex-col justify-center w-full max-w-xl mx-auto px-3">
        {recycleData.map((data, index) => (
          <JoinRecycle
            key={index}
            clubImage={data.clubImage}
            title={data.title}
            details={data.details}
            applicationPaths={data.applicationPaths}
            applicationStates={data.applicationStates}
          />
        ))}
      </div>
    </div>
  );
}

export default Join;
