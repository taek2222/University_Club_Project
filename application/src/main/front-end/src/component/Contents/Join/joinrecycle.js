import React from "react";
import ApplicationPaths from "./applicationpaths";
import Modal from "./Modal/modal";
import ModalContents from "./Modal/modalcontent";

function Join_Recycle({
  clubImage,
  title,
  details,
  applicationPaths,
  applicationStates,
}) {
  return (
    <div className="flex flex-row w-full border-2 border-gray-400 rounded-2xl drop-shadow-sm">
      {/* [왼쪽] 동아리 이미지 */}
      <div className="flex w-3/12 border-r-2 justify-center border-gray-400 rounded-l-2xl overflow-hidden">
        <img className="h-20" src={clubImage} alt="Club_Image" />
      </div>

      {/* [중간] 동아리 홍보 상세 정보 */}
      <div className="flex flex-col w-6/12 justify-center items-center">
        {/* [중간] 상단 큰 제목 */}
        <div className="flex justify-center items-center font-bold drop-shadow-md text-lg sm:text-lg md:text-xl">
          <p>{title}</p>
        </div>

        {/* [중간] 동아리 상세 정보 */}
        <div className="flex flex-row mt-1 text-gray-500 drop-shadow-none text-sm sm:text-base md:text-lg">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <p>{detail}</p>
              {index < details.length - 1 && (
                <div className="mx-3 w-1 h-full rounded-full drop-shadow-2xl bg-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* [오른쪽] 동아리 신청 경로 */}
      <div className="flex flex-col w-3/12 justify-center items-center border-l-2 border-gray-400 drop-shadow-md">
        <ApplicationPaths
          icons={applicationPaths}
          activeStates={applicationStates}
        />
      </div>
    </div>
  );
}

export default Join_Recycle;
