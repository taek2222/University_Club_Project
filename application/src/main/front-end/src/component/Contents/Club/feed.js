/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import axios from "axios";

import Card from "./Feed/card.js";

import image1 from "../../../image/Testi1.JPG";
import image2 from "../../../image/Testi2.JPG";
import image3 from "../../../image/Testi3.JPG";

function Feed({ category }) {
  const [data, setData] = useState([]); // API 데이터 값

  useEffect(() => {
    axios
      .get(`http://localhost:8080/1/clubs`)
      .then((Response) => {
        setData(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [category]);

  console.log(data);

  return (
    <>
      <div className="container mx-auto p-4">
        {/* 반응형 그리드 레이아웃을 설정합니다. */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* 최소 2개 ~ 최대 5개 */}
          {data.map((club, index) => (
            <Card
              key={club.clubId} // 동아리 순서
              clubName={club.clubName} // 동아리 이름
              tags={club.tags} // 태그
              initialLikes={club.initialLikes} // 좋아요 수
              imageUrl={require(`../../../image/club_image/feed/${club.imageUrl}`)} // 상단 이미지
              iconUrl={require(`../../../image/club_image/feed/${club.iconUrl}`)} // 아이콘 이미지
              // modalImage={club.modalImage} // 모달 내용 (사진)
              // modalTitle={club.modalTitle} // 모달 내용 (제목)
              // modalContents={club.modalContents} // 모달 내용 (본문)
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
