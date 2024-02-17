import React, { useState } from "react";
import axios from 'axios';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const initialFormData = {
    major: "",
    classOf: "",
    name: "",
    content: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBackgroundClick = (e) => { // 배경 클릭 시 닫기
    e.stopPropagation();
    onClose(); 
  };

  const handleSaveClick = async () => {
    try {
      const memoDTO = {
        major: formData.major,
        classOf: formData.classOf,
        studentName: formData.studentName,
        content: formData.content
      };

      const response = await axios.post('http://localhost:8080/memos/memo', memoDTO);

      console.log('Memo saved successfully', response.data);
      onClose();
    } catch (error) {
      console.error('Error saving memo:', error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-20"
      onClick={handleBackgroundClick}
    >

      {/* 모달 창 크기 및 디자인 */}
      <div
        className="w-full pt-4 rounded-lg bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* 제목 */}
        <div className="flex pb-3 items-center justify-between"> 
          <div className="flex items-center">


          </div>
          <button onClick={onClose} className="text-lg font-bold mr-5">닫기</button>
        </div>

        <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
            <div className="text-left mx-3">
                <form>
                    <p className="text-xs text-left font-bold text-red-600">
                        해당 정보는 관리자의 승인을 통해 홈페이지에 반영됩니다.
                    </p>
                    <label className="text-lg text-left font-bold mt-3">
                        학과 :
                        <input type="text" name="major" value={formData.major} onChange={handleInputChange} className="w-full border-2 border-inherit p-2 h-12" />
                    </label>

                    <label className="text-lg text-left font-bold mt-3">
                        학번 :
                        <input type="text" name="classOf" value={formData.classOf} onChange={handleInputChange} className="w-full border-2 border-inherit p-2 h-12" />
                    </label>

                    <label className="text-lg text-left font-bold mt-3">
                        이름 :
                        <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} className="w-full border-2 border-inherit p-2 h-12" />
                    </label>

                    <label className="text-lg font-bold mt-3">
                        내용 :
                        <textarea type="text" name="content" value={formData.content} onChange={handleInputChange} className="min-h-28 w-full border-2 border-inherit p-2" />
                    </label>
                </form>
            </div>
        </div>

        <div className="flex justify-center space-x-3 mt-2 mb-4">
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full hover:cursor-pointer"
              onClick={handleSaveClick}
            >
                저장
            </div>
            <div 
              className="bg-slate-200 hover:bg-slate-300 text-white font-bold py-2 px-9 rounded-full hover:cursor-pointer"
              onClick={onClose}
            >
                취소
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
