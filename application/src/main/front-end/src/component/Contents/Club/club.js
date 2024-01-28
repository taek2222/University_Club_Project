/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Feed from "./feed";

function Club() {
  // 동아리 소개 컴포넌트

  const [selectedCategory, setSelectedCategory] = useState("전체"); // 초기 선택 분류

  const categories = ["전체", "공연", "체육", "취미", "종교", "봉사"]; // 분류 목록

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-1.5 mb-1">
        {categories.map((category) => (
          <div
            key={category}
            className={`relative text-center cursor-pointer px-3 py-2 ${
              selectedCategory === category ? "font-bold text-lg" : "text-lg text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 mx-auto w-full ${
                selectedCategory === category ? "bg-black" : "bg-transparent"
              }`}
              style={{ marginBottom: "-1px" }}
            />
          </div>
        ))}
      </div>
      <Feed category={selectedCategory} /> {/* 선택 시 계속 재랜더링 */}
    </div>
  );
}
export default Club;
