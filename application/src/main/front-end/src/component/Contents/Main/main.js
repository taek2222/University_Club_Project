/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ImageSwiper from "./image_swiper";
import cheerLogo from "../../../image/content_image/notes.png"
import Memo from "./memo";
import Modal from "./Modal/modal";

import Banner from "image/content_image/banner.png";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CHEER_TITLE = "응원 문구"
  const CHEER_ALT_TEXT = "cheer logo"

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return(
    <>
      <img
        className="w-full min-h-24 object-cover"
        src={Banner}
        alt="Banner"
      />
      <ImageSwiper />

      <div className="m-5 mt-16 flex">
        <img
            className="w-10 h-10"
            src={cheerLogo}
            alt={CHEER_ALT_TEXT}
        />
        <div className="mx-3 mt-1 text-3xl md:text-4xl font-bold" style={{fontFamily:"Gaegu"}}>{CHEER_TITLE}</div>
        <div 
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full hover:cursor-pointer text-md md:text-lg"
          style={{fontFamily:"Gaegu"}}
          onClick={openModal}
        >
          + 응원글 남기기
        </div>
      </div>
      <Memo />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Main;