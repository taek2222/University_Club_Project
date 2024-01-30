/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ImageSwiper from "./image_swiper";
import Schedule from "./schedule";
import gwnuLogo from "../../../image/content_image/gwnu.jpg"

function Main() {

  return(
    <>
      <div className="m-5 mt-7 flex">
        <img
            className="w-11 h-11"
            src={gwnuLogo}
            alt="gwnu Logo"
        />
        <div className="mx-3 mt-1 text-3xl font-bold">2024 축제</div>
      </div>
      <ImageSwiper />
      <Schedule />
    </>
  )
}

export default Main;