import React, {useEffect} from "react";

const SaveModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (e) => { // 배경 클릭 시 닫기
    e.stopPropagation();
    onClose(); 
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-20"
      onClick={handleBackgroundClick}
    >

      {/* 모달 창 크기 및 디자인 */}
      <div
        className="w-full pt-4 rounded-lg bg-white max-w-xs sm:max-w-sm md:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >

        {/* 제목 */}
        <div className="flex pb-3 items-center justify-between">
        </div>

        <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] text-center">
          <div className="font-bold text-lg">응원 메세지 전송이 완료되었습니다!</div>
          <div className="font-bold text-lg text-blue-500">관리자 승인 후 게시될 예정입니다. 감사합니다!</div>
        </div>
        <div className="flex justify-center space-x-3 mt-2 mb-4">
        </div>
      </div>
    </div>
  );
};

export default SaveModal;
