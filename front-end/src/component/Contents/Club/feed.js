// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useEffect, useState } from "react";
import apiClient from 'api';
import Loader from 'component/Recycle/loader.js';

import Card from "./Feed/card.js";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fixedClubId = 1; // ClubId 1번은 자리 고정

  useEffect(() => {
    setIsLoading(true);
      apiClient.get(`/clubs/${category}`)
      .then((Response) => {
        const fixedData = Response.data.filter(club => club.clubId === fixedClubId);
        const restData = Response.data.filter(club => club.clubId !== fixedClubId);

        const shuffledRestData = shuffleArray(restData);
        const finalData = [...fixedData, ...shuffledRestData];

        setData(finalData);
        setIsLoading(false);
      })
      .catch((Error) => {
        console.log("네트워크 오류 [Feed]", Error);
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) {
    return <Loader/>;
  }

  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        {/* 반응형 그리드 레이아웃을 설정합니다. */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* 최소 2개 ~ 최대 5개 */}
          {data.map((club) => (
            <Card
              clubId={club.clubId} // 동아리 순서
              clubName={club.clubName} // 동아리 이름
              tags={club.tags} // 태그
              initialLikes={club.initialLikes} // 좋아요 수
              imageUrl={require(`image/club_image/feed/${club.imageUrl}`)} // 상단 이미지
              iconUrl={require(`image/club_image/feed/${club.iconUrl}`)} // 아이콘 이미지
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
