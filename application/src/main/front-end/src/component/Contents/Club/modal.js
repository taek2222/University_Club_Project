import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => { // 하트 이벤트 및 닫기 이벤트 버블링 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    onClose(); // 배경 클릭 시 닫기
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleBackgroundClick}>
      <div className="bg-white p-5 rounded" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="float-right font-bold">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
