import React, { useState, useEffect } from "react";
// import axios from 'axios';

import Modal from "../Modal/modal"; // 모달 창
import ModalContents from "../Modal/modalcontent"; // 모달 내용
import LikeButton from "./likebutton"; // 좋아요

const Card = ({
  clubId,
  clubName,
  tags,
  initialLikes,
  imageUrl,
  iconUrl,
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

  // const toggleLike = async () => {
  //   setIsLiked(!isLiked);
  //   const newLikes = isLiked ? likes - 1 : likes + 1;
  //   setLikes(newLikes);
  //   setHeartBurst(!isLiked);
  
  //   try {
  //     await axios.patch(`/api/likes/${clubId}`, {
  //       isLiked: !isLiked
  //     });
  //   } catch (error) {
  //     console.error('Error toggling like status:', error);
  //     setIsLiked(isLiked);
  //     setLikes(likes);
  //   } finally {
  //     setTimeout(() => setHeartBurst(false), 1400);
  //   }
  // };

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
          className="w-full max-h-32 object-cover"
          src={imageUrl}
          alt={`Club ${clubName}`}
        />
      </div>

      <div className="px-4 py-3 flex items-center">
        <img
          className="w-7 h-7 rounded-full border border-gray-500"
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

      <div className="px-5 pb-2 -mt-1">
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
          clubId={clubId}
          tags={tags}
        />
      </Modal>
    </div>
  );
};

export default Card;