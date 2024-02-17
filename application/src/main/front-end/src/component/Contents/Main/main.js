/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ImageSwiper from "./image_swiper";
import gwnuLogo from "../../../image/content_image/gwnu.jpg"
import cheerLogo from "../../../image/content_image/notes.png"
import Memo from "./memo";
import Modal from "./Modal/modal";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const FESTIVAL_YEAR = new Date().getFullYear().toString() + " 축제";
  const GWNU_ALT_TEXT = "gwnu logo";
  const CHEER_TITLE = "응원 문구"
  const CHEER_ALT_TEXT = "cheer logo"

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return(
    <>
      <div className="m-5 mt-7 flex">
        <img
            className="w-11 h-11"
            src={gwnuLogo}
            alt={GWNU_ALT_TEXT}
        />
        <div className="mx-3 mt-1 text-3xl font-bold">{FESTIVAL_YEAR}</div>
      </div>
      <ImageSwiper />

      <div className="m-5 mt-16 flex">
        <img
            className="w-11 h-11"
            src={cheerLogo}
            alt={CHEER_ALT_TEXT}
        />
        <div className="mx-3 mt-1 text-3xl font-bold">{CHEER_TITLE}</div>
        <div 
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full hover:cursor-pointer"
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