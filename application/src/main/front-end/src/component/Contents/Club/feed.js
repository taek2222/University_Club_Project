/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import axios from "axios";

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

  return (
    <>
      <section className="grid grid-cols-3 gap-5 p-5">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="event-card rounded p-6 text-center shadow-md">
            <div className="mb-4">
              <img
                src={`https://placehold.co/150`}
                alt={`Placeholder image for Event ${i + 1}`}
                className="mx-auto"
              />
            </div>
            <h3 className="font-bold">
              {data}
            </h3>
            <p>Description of Event {i + 1}</p>
          </div>
        ))}
        ㄱ
      </section>
    </>
  );
}

export default Feed;
