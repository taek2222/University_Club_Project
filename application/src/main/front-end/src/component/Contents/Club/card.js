import React, { useState } from "react";

import Modal from "./modal";
import ModalContents from "./modalcontent";
import LikeButton from "./likebutton";

const Card = ({ clubName, tags, initialLikes, imageUrl, iconUrl }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 하트를 클릭할 때 호출되는 함수입니다.
  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1); // 좋아요 감소
    } else {
      setLikes(likes + 1); // 좋아요 증가
    }
    setIsLiked(!isLiked); // 좋아요 상태를 토글
  };

  // 모달 열고 닫는 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-400"
      onDoubleClick={toggleLike}
      onClick={openModal}
    >
      <div className="max-h-48 bg-gray-200 border-b border-gray-400">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`Club ${clubName}`}
        />
      </div>
      <div className="px-4 py-3 flex items-center">
        <img
          className="w-8 h-8 rounded-full border border-gray-500"
          src={iconUrl}
          alt="Club Icon"
        />
        <div className="font-bold text-xl flex-grow text-center -ml-5">
          {clubName}
        </div>
      </div>
      <div className="text-left px-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 좋아요 버튼 */}
      <div className="px-5 pb-2 -mt-1 ">
        <LikeButton isLiked={isLiked} likes={likes} toggleLike={toggleLike} />
      </div>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContents clubName={clubName} imageUrl={imageUrl} tags={tags} />
      </Modal>
    </div>
  );
};

export default Card;
