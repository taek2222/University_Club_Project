import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperImage = ({ modalImage = [] }) => {
  const ref = useRef(null);
  
  const [imageList] = useState([
    modalImage[modalImage.length - 1],
    ...modalImage,
    modalImage[0],
  ]);

  const [currentImgIndex, setCurrentImgIndex] = useState(1);
  const [touch, setTouch] = useState({
    start: 0,
    end: 0,
  });

  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const nextSlide = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const prevSlide = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setStyle({
      transform: `translateX(-${currentImgIndex - 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  useEffect(() => {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imageList.length - 2);
      setTimeout(function () {
        setStyle({
          transform: `translateX(-${imageList.length - 2}00%)`,
          transition: "0ms",
        });
      }, 500);
    } else if (currentImgIndex >= imageList.length - 1) {
      setCurrentImgIndex(1);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${1}00%)`,
          transition: "0ms",
        });
      }, 500);
    }
  }, [currentImgIndex, imageList.length]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden w-full bg-black sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        onTouchStart={(e) => {
          setTouch({
            ...touch,
            start: e.touches[0].pageX,
          });
        }}
        onTouchMove={(e) => {
          if (ref.current) {
            const current = ref.current.clientWidth * currentImgIndex;
            const result = -current + (e.targetTouches[0].pageX - touch.start);
            setStyle({
              transform: `translate3d(${result}px, 0, 0)`,
              transition: "0ms",
            });
          }
        }}
        onTouchEnd={(e) => {
          const end = e.changedTouches[0].pageX;
          if (touch.start > end + 5) {
            nextSlide();
          } else if (touch.start < end - 5) {
            prevSlide();
          }
          setTouch({
            ...touch,
            end,
          });
        }}
      >
        <div ref={ref} style={style} className="flex">
          {imageList.map((el, i) => (
            <img
              key={i}
              src={require(`image/join_image/modal/${el}`)}
              alt={`Slide ${i}`}
              className="w-auto h-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* 사진 다음, 이전 (화살표) */}
      <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
        <button className="text-white text-3xl ml-1" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button className="text-white text-3xl mr-1" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>

      {/* 사진 하단 갯수 (점) */}
      <div className="mt-2 text-center flex justify-center">
        {modalImage.map((el, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 mx-0.5 rounded-full ${
              i + 1 === currentImgIndex ? "bg-black" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwiperImage;
