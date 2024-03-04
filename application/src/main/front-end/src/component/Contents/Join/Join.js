import React from "react";
import test1 from "../../../image/test1.png";

function Join() {
  return (
    <div className="p-4">
      <div className="flex flex-row min-h-20 border-2 border-gray-300 rounded-2xl drop-shadow-sm">
        <div className="flex w-2/12 items-center border-r-2 border-gray-300 rounded-l-2xl overflow-hidden">
          <img className="" src={test1} alt="" />
        </div>

        <div className="flex flex-col w-7/12 justify-center items-center">

          <div className="flex justify-center items-center font-bold text-lg sm:text-lg md:text-xl lg:text-2xl">
            <p>총동연 임원진 모집</p>
          </div>

          <div className="flex flex-row mt-1 font-bold text-gray-500 sm:text-base md:text-lg lg:text-xl">
            <p className="">종교</p>
            <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-300" />
            <p>모집 5명</p>
            <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-300" />
            <p>D-32</p>
          </div>

        </div>

        <div className="flex w-3/12 justify-center items-center border-l-2 border-gray-300">
          <p>신청경로</p>
          
        </div>
      </div>
    </div>
  );
}

export default Join;
