import React, { useState ,useEffect } from "react";
import apiClient from 'api';
import JoinRecycle from "./joinrecycle";
import Banner from "component/Recycle/banner";

function Join() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient.get(`/joins/all`)
    .then((Response) => {
      setData(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* 배너 */}
      <Banner
        title="📩 동아리 가입 신청"
        subtitle="관심있는 동아리를 클릭해 지원하자! ✔️"
      />

      <div className="relative flex flex-col justify-center w-full max-w-xl mx-auto px-3 mt-10">
        {data.map((join, index) => (
          <JoinRecycle
            clubId={join.clubId}
            iconImage={require(`image/join_image/icon/${join.iconImage}`)}
            title={join.title}
            details={[join.clubName, join.field, join.eventDate]}
            paths={join.paths}
          />
        ))}
      </div>
    </div>
  );
}

export default Join;
