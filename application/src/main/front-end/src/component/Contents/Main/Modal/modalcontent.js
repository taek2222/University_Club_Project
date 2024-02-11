import React from "react";

const ModalContents = () => {
  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
        <div className="text-left mx-3">
            <p className="text-xs text-left font-bold text-red-600">
                해당 정보는 관리자의 승인을 통해 홈페이지에 반영됩니다.
            </p>
            <p className="text-lg text-left font-bold mt-3">
                학과 :
            </p>
            <textarea className="w-full border-2 border-inherit" />

            <p className="text-lg font-bold mt-3">
                학번 :
            </p>
            <textarea className="w-full border-2 border-inherit" />

            <p className="text-lg font-bold mt-3">
                이름 :
            </p>
            <textarea className="w-full border-2 border-inherit" />

            <p className="text-lg font-bold mt-3">
                내용 :
            </p>
            <textarea className="min-h-28 w-full border-2 border-inherit" />
        </div>
    </div>
  );
};

export default ModalContents;
