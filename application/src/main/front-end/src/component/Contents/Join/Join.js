import React from "react";
import test1 from "../../../image/test1.png";

function Join() {
  return (
    <div className="p-4">
      <div className="flex flex-row border-2 border-gray-300 rounded-2xl drop-shadow-sm">

        <div className="flex w-2/12 items-center border-r-2 border-gray-300 rounded-l-2xl overflow-hidden">
            <img
                className=""
                src = {test1}
                alt = ""
            />
        </div>

        <div className="flex flex-col w-8/12 justify-center items-center">
          <div className="flex flex-row m-2 text-base">
            <p className="font-bold">종교</p>
            <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-300" />
            <p>모집 5명</p>
            <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-300" />
            <p>D-32</p>
          </div>
          <div className="flex justify-center items-center font-bold text-xl">
            <p>총동연 임원진 모집</p>
          </div>
        </div>


        <div className="w-1 h-20 rounded-full drop-shadow-2xl bg-gray-300" />

        <div className="w-2/12">

        </div>
      </div>
    </div>
  );
}

export default Join;
