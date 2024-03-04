import React, { useState } from "react";
import apiClient from 'api.js';

const Modal = ({ isOpen, onClose }) => {

  const initialFormData = {
    major: "간호학과",
    classOf: "",
    name: "",
    content: "",
    color: ""
  };

  const majors = ["간호학과", "기계공학과", "다문화학과", "멀티미디어공학과", "사회복지학과", "산업경영공학과", "유아교육과", "자동차공학과", "전기공학과", "정보통신공학과", "컴퓨터공학과"];
  const colors = ['bg-red-200', 'bg-yellow-100', 'bg-orange-200', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-indigo-200', 'bg-violet-200',
                    'bg-purple-200', 'bg-fuchsia-200', 'bg-pink-200', 'bg-rose-100', ];

  const [formData, setFormData] = useState(initialFormData);
  const [isAnonymous, setIsAnonymous] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnonymousCheckboxChange = (e) => {
    setIsAnonymous(e.target.checked);
    if (e.target.checked) {
      setFormData({
        ...formData,
        studentName: "익명",
      });
    } else {
      setFormData({
        ...formData,
        studentName: "",
      });
    }
  };

  const handleVisible = () => {
    return isAnonymous ? { display: "none" } : {};
  };

  const handleBackgroundClick = (e) => { // 배경 클릭 시 닫기
    e.stopPropagation();
    setFormData(initialFormData);
    if (isAnonymous) {
      setIsAnonymous(false);
    }
    onClose(); 
  };

  const handleSaveClick = async () => {
    try {
      const memoDTO = {
        major: formData.major,
        classOf: formData.classOf,
        studentName: formData.studentName,
        content: formData.content,
        color: formData.color,
      };

      const response = await apiClient.post('http://localhost:8080/memos/memo', memoDTO);

      console.log('Memo saved successfully', response.data);
      setFormData(initialFormData);
      if (isAnonymous) {
        setIsAnonymous(false);
      }
      onClose();
    } catch (error) {
      console.error('Error saving memo:', error);
    }
  };

  const handleCancelClick = () => {
    setFormData(initialFormData);
    if (isAnonymous) {
      setIsAnonymous(false);
    }
    onClose();
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
                    <label className="flex text-lg font-bold mt-3">
                      색상 : 
                      {colors.map((color, index) => (
                        <div className="flex ml-1">
                          <input 
                            type="radio"
                            name="color"
                            value={`${color}`}
                            id={`color${index}`}
                            checked={formData.color === color}
                            onChange={handleInputChange}
                          />
                          <div className={`${color} w-7 h-7 ml-1`}></div>
                        </div>
                      ))}
                    </label>
                    <p className="mt-3" />
                    <label className="text-lg text-left font-bold">
                      학과 :
                      <select name="major" value={formData.major} onChange={handleInputChange} className="ml-3 font-normal border-2">
                        {majors.map((major) => (
                          <option value={`${major}`}>{major}</option>
                        ))}
                      </select>
                      <br />
                    </label>

                    <label className="text-lg text-left font-bold mt-3">
                      학번 :
                      <input type="text" name="classOf" value={formData.classOf} onChange={handleInputChange} className="w-full border-2 border-inherit p-2 h-12 font-normal" />
                    </label>

                    <label className="text-lg text-left font-bold mt-3">
                      이름 :
                      <label className="ml-[530px]">익명</label>
                      <input type="checkbox" name="studentName" value={formData.studentName} onChange={handleAnonymousCheckboxChange} className="ml-3" />
                      <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} style={handleVisible()} className="w-full border-2 border-inherit p-2 h-12 font-normal" />
                    </label>

                    <label className="text-lg font-bold mt-3">
                      내용 :
                      <textarea type="text" name="content" placeholder="글자 수 100자 이하로 작성" value={formData.content} onChange={handleInputChange} className="min-h-28 w-full border-2 border-inherit p-2 font-normal" />
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
              onClick={handleCancelClick}
            >
                취소
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
