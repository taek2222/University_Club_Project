import React from "react";

import SwiperImage from "./swiperimage";

import image1 from "../../../../image/Testi1.JPG";
import image2 from "../../../../image/Testi2.JPG";
import image3 from "../../../../image/Testi3.JPG";

const ModalContents = ({ clubName, imageUrl, tags }) => {
  const images = [image1, image2, image3];

  const description = `안녕하세요, 대학교 동아리 연합회입니다! 우리 캠퍼스의 다양한 동아리들을 한눈에 볼 수 있는 특별한 기회, 동아리 부스 행사가 곧 열립니다! 새학기를 맞이하여, 새로운 사람들을 만나고, 다양한 동아리를 경험하고 싶은 분들을 위한 완벽한 기회입니다. 🎈\n\n <strong>📅 행사 일시:</strong> \n2024년 3월 15일 (금) 10:00 ~ 16:00\n\n <strong>📍장소:</strong> 대학교 중앙 광장\n\n <strong>🎪 행사 내용:</strong>\n\n동아리 소개 부스: 각 동아리의 활동 내용, 연간 계획, 가입 방법 등을 소개합니다.\n라이브 공연: 음악, 댄스, 극단 동아리들의 생동감 넘치는 라이브 공연을 즐길 수 있습니다.\n체험 활동: 다양한 동아리가 준비한 체험 활동을 통해 새로운 취미와 재능을 발견해 보세요.\nQ&A 세션: 동아리 회원들과 직접 대화하며 궁금한 점을 해소할 수 있습니다.\n\n<strong>👥 참가 방법:</strong>\n\n사전 등록: 행사 참여를 원하시는 분들은 사전에 대학교 동아리 연합회 홈페이지를 통해 등록해 주세요. 사전 등록자에게는 소정의 기념품을 드립니다!\n현장 참여: 사전 등록 없이 행사 당일 현장을 방문하여 참여할 수도 있습니다.\n\n<strong>🎁 특별 이벤트:</strong>\n\n인스타그램 이벤트: 행사 당일 #대학교동아리연합회 해시태그와 함께 인스타그램에 사진을 올리면 추첨을 통해 소정의 상품을 드립니다.\n스탬프 랠리: 행사 참여 동아리 부스를 방문하고 스탬프를 모으세요! 모든 스탬프를 모은 참가자에게는 특별한 선물이 기다립니다.\n\n<strong>🔔 주의 사항:</strong>\n\n모든 참가자는 행사장 내에서 마스크 착용을 비롯한 코로나19 방역 수칙을 준수해 주시기 바랍니다.\n행사장 내에서는 음식물 섭취가 제한됩니다.\n\n이번 동아리 부스 행사는 여러분이 새로운 사람들을 만나고, 관심 있는 분야를 탐색할 수 있는 절호의 기회입니다. 다양한 동아리와 그 멤버들과의 만남을 통해 대학 생활을 더욱 풍부하게 만들어 보세요! 우리 모두 그날 광장에서 만나요! 🎊`;

  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
      {/* 이미지 슬라이드 */}
      <div className="">
        <SwiperImage data={images} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-lg text-center font-bold mt-3">
        🌟 총동아리 연합회 🌟
      </p>

      {/* 부스 (내용) */}
      <p
        className="text-sm text-left mt-2 p-3"
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
      />

      {/* 하단 태그 */}
      <div className="ml-3 text-left">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-1 text-sm font-semibold text-blue-700 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-center space-x-3 mt-2 mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full">
          부스 위치
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-9 rounded-full">
          부원 모집
        </button>
      </div>
    </div>
  );
};

export default ModalContents;
