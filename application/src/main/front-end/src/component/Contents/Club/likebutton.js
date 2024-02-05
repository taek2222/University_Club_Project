import React from 'react';

const LikeButton = ({ isLiked, likes, toggleLike }) => {
  return (
    <button onClick={toggleLike} className="flex items-center focus:outline-none">
      {isLiked ? (
        <span className="text-red-500 text-2xl">♥</span>
      ) : (
        <span className="text-gray-400 text-2xl">♡</span>
      )}
      <span className="text-gray-700 text-base font-semibold ml-1">{likes}</span>
    </button>
  );
};

export default LikeButton;
