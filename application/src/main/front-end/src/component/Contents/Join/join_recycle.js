import React from "react";
import ApplicationPaths from "./applicationpaths";

import test1 from "../../../image/test1.png";

import Naver from "../../../image/join_image/naver.png";
import Google from "../../../image/join_image/google.png";
import Kakao from "../../../image/join_image/kakao.png";
import Call from "../../../image/join_image/call.png";

const icons = [
  Naver,
  Google,
  Kakao,
  Call
];

const activeStates = [true, true, true, true];

function Join() {
  return (
    <div className="flex justify-center">
      <div className="p-4 max-w-2xl w-full">
        <div className="flex flex-row border-2 border-gray-300 rounded-2xl drop-shadow-sm">

          {/* [왼쪽] 동아리 이미지 */}
          <div className="flex w-3/12 border-r-2 justify-center border-gray-300 rounded-l-2xl overflow-hidden">
            <img className="h-20" src={test1} alt="" />
          </div>

          {/* [중간] 동아리 홍보 상세 정보 */}
          <div className="flex flex-col w-6/12 justify-center items-center">

            {/* [중간] 상단 큰 제목 */}
            <div className="flex justify-center items-center font-bold drop-shadow-md text-lg sm:text-lg md:text-xl">
              <p>총동연 임원진 모집</p>
            </div>

            {/* [중간] 동아리 상세 정보 */}
            <div className="flex flex-row mt-1 text-gray-400 drop-shadow-none text-sm sm:text-base md:text-lg">
              <p>종교</p>
              <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-300" />
              <p>5명</p>
              <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-300" />
              <p>D-32</p>
            </div>
          </div>

          {/* [오른쪽] 동아리 신청 경로 */}
          <div className="flex flex-col w-3/12 justify-center items-center border-l-2 border-gray-300 drop-shadow-md">
            <ApplicationPaths icons={icons} activeStates={activeStates} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
