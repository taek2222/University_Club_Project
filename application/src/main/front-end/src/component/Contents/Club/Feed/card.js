import React, { useState, useEffect } from "react";

import Modal from "../Modal/modal"; // 모달 창
import ModalContents from "../Modal/modalcontent"; // 모달 내용
import LikeButton from "./likebutton"; // 좋아요

const Card = ({
  clubName,
  tags,
  initialLikes,
  imageUrl,
  iconUrl,
  modalImage,
  modalTitle,
  modalContents,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartBurst, setHeartBurst] = useState(false);

  useEffect(() => {
    setLikes(initialLikes);
  }, [initialLikes]);
  
  // 하트 (좋아요)
  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setTimeout(() => setHeartBurst(false), 0);
    } else {
      setLikes(likes + 1);
      setHeartBurst(true); // 애니메이션 START
      setTimeout(() => setHeartBurst(false), 1400); // 애니메이션 종료 후 상태 리셋
    }
    setIsLiked(!isLiked);
  };

  // 모달 창
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-400"
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
        {tags && tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 좋아요 버튼 */}
      {heartBurst && (
        <div className="custom-heartBurst-position text-red-500 text-6xl animate-heartBurst">
          ♥
        </div>
      )}

      <div className="px-5 pb-2 -mt-1 ">
        <LikeButton isLiked={isLiked} likes={likes} toggleLike={toggleLike} />
      </div>

      {/* 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        iconUrl={iconUrl}
        clubName={clubName}
      >
        <ModalContents
          modalImage={modalImage}
          modalTitle={modalTitle}
          modalContents={modalContents}
          tags={tags}
        />
      </Modal>
    </div>
  );
};

export default Card;
