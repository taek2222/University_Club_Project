import React from "react";

import SwiperImage from "./swiperimage";

import image1 from "../../../../image/Testi1.JPG";
import image2 from "../../../../image/Testi2.JPG";
import image3 from "../../../../image/Testi3.JPG";

const ModalContents = ({ clubName, imageUrl, tags }) => {
  const images = [image1, image2, image3];

  return (
    <>
      <div className="mt-3">
        <SwiperImage data={images} />
      </div>
      <h2 className="text-lg font-bold text-center mt-4">{clubName}</h2>
      <p className="text-sm text-center mt-2">
        {clubName}에 대한 자세한 정보...
      </p>
      <div className="mt-4 text-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </>
  );
};

export default ModalContents;
