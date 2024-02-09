/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ImageSwiper from "./image_swiper";
import gwnuLogo from "../../../image/content_image/gwnu.jpg"
import Memo from "./memo";

function Main() {
  const FESTIVAL_YEAR = new Date().getFullYear().toString() + " 축제";
  const LOGO_ALT_TEXT = "gwnu Logo";

  return(
    <>
      <div className="m-5 mt-7 flex">
        <img
            className="w-11 h-11"
            src={gwnuLogo}
            alt={LOGO_ALT_TEXT}
        />
        <div className="mx-3 mt-1 text-3xl font-bold">{FESTIVAL_YEAR}</div>
      </div>
      <ImageSwiper />
      <Memo />
    </>
  )
}

export default Main;