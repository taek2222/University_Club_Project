/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import axios from "axios";

import Card from "./Feed/card.js";

import TestImage from '../../../image/test.JPG' // 테스트 이미지
import TestImage2 from '../../../image/test1.png' // 테스트 이미지

function Feed({ category }) {
  const [data, setData] = useState([]); // API 데이터 값

  useEffect(() => {
    axios
      .get(`http://192.168.200.163:8080/club/contents/${category}`)
      .then((Response) => {
        setData(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [category]);

  const clubs = [ // api 형식으로 받아오기 해야함
    {
      clubName: '총동연',
      tags: ['총동아리 연합회', '부원 모집'],
      initialLikes: 27,
      imageUrl: TestImage,
      iconUrl: TestImage2
    },
    {
      clubName: '프레이즈',
      tags: ['strategy', 'boardgames'],
      initialLikes: 42,
      imageUrl: TestImage,
      iconUrl: TestImage2
    }
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        {/* 반응형 그리드 레이아웃을 설정합니다. */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* 최소 2개 ~ 최대 5개 */}
          {clubs.map((club, index) => (
            <Card
              key={index}
              clubName={club.clubName} // 동아리 이름
              tags={club.tags} // 동아리 태그
              initialLikes={club.initialLikes} // 동아리 좋아요 수
              imageUrl={club.imageUrl} // 상단 이미지
              iconUrl={club.iconUrl} // 동아리 아이콘 이미지
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
