import React, { useState } from "react";
import ApplicationPaths from "./applicationpaths";

import Modal from "./Modal/modal";
import ModalContents from "./Modal/modalcontent";

import Naver from "image/join_image/naver.png";
import Google from "image/join_image/google.png";
import Kakao from "image/join_image/kakao.png";
import Instagram from "image/join_image/instagram.png";

const Join_Recycle = ({
  clubId,
  iconImage,
  title,
  details,
  paths
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const pathsIcons = [Naver, Google, Kakao, Instagram];

  const titleLines = title.split('\\n').map((line, index) => (
    <p key={index} className="flex justify-center items-center font-bold drop-shadow-md text-base sm:text-base md:text-lg">
      {line}
    </p>
  ));

  return (
    <>
      <div onClick={openModal}>
        <div className="flex flex-row w-full h-20 border-2 border-gray-400 rounded-2xl drop-shadow-sm mb-4">
          {/* [왼쪽] 동아리 이미지 */}
          <div className="flex w-2/12 border-r-2 justify-center border-gray-400 rounded-l-2xl overflow-hidden">
            <img className="object-contain" src={iconImage} alt="Club_Image" />
          </div>

          {/* [중간] 동아리 홍보 상세 정보 */}
          <div className="flex flex-col w-7/12 justify-center items-center">
            {/* [중간] 상단 큰 제목 */}
          <div>{titleLines}</div>

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
              icons={pathsIcons}
              activeStates={paths}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ModalContents
          clubId={clubId}
          title={title}
          pathsIcons={pathsIcons}
          paths={paths}
        />
      </Modal>
    </>
  );
};

export default Join_Recycle;