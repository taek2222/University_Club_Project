import React from "react";
import JoinRecycle from "./joinrecycle"; // Join 컴포넌트의 경로에 따라 조정하세요.

// 이미지 임포트
import Naver from "../../../image/join_image/naver.png";
import Google from "../../../image/join_image/google.png";
import Kakao from "../../../image/join_image/kakao.png";
import Call from "../../../image/join_image/call.png";
import ClubImage from "../../../image/test1.png"; // 동아리 이미지 경로 예시입니다. 실제 경로로 변경하세요.

function Join() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <JoinRecycle
          clubImage={ClubImage}
          title="총동연 임원진 모집"
          details={["종교", "5명", "D-32"]}
          applicationPaths={[Naver, Google, Kakao, Call]}
          applicationStates={[true, true, true, true]}
        />
        <JoinRecycle
          clubImage={ClubImage}
          title="총동연 임원진 모집"
          details={["종교", "5명", "D-32"]}
          applicationPaths={[Naver, Google, Kakao, Call]}
          applicationStates={[true, true, true, true]}
        />
      </div>
  );
}

export default Join;
