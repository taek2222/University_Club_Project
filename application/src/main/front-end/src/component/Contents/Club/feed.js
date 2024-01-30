/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import axios from "axios";

import Card from "./card";

import TestImage from '../../../image/test.JPG'
import TestImage2 from '../../../image/test1.png'

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

  const clubs = [
    {
      clubName: '총동연',
      tags: ['조성욱짱', '최준 장발 기원'],
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {clubs.map((club, index) => (
            <Card
              key={index}
              clubName={club.clubName}
              tags={club.tags}
              initialLikes={club.initialLikes}
              imageUrl={club.imageUrl}
              iconUrl={club.iconUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
