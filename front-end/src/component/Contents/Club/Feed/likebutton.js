// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React from "react";

const LikeButton = ({ isLiked, likes, toggleLike }) => {

  const handleClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    toggleLike();
  };

  return (
    <button onClick={handleClick} className="flex items-center focus:outline-none">
      {isLiked ? (
        <span className="text-red-500 text-2xl">♥</span>
      ) : (
        <span className="text-gray-400 text-2xl">♡</span>
      )}
      <span className="text-gray-700 text-sm font-semibold ml-1">{likes}</span>
    </button>
  );
};

export default LikeButton;
