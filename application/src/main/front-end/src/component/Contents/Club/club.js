/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Feed from "./feed";

function Club() { // 동아리 소개 컴포넌트

    // 선택된 분류 추적
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    // 분류 선택 핸들러
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };

  return (
    <>
      <div className="flex justify-center space-x-3 text-lg mb-1 mt-5">
        {["ALL", "공연", "체육", "취미", "종교", "봉사"].map((category, index) => (
          <React.Fragment key={category}>
            {index > 0 && <div>|</div>}
            <div
              className={selectedCategory === category ? "font-bold" : ""}
              onClick={() => handleCategorySelect(category)}
              style={{ cursor: 'pointer' }}
            >
              {category}
            </div>
          </React.Fragment>
        ))}
      </div>

      <Feed category={selectedCategory} />
    </>
  );
}

export default Club;
