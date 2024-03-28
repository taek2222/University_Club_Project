import React, { useState, useEffect } from "react";
import SaveModal from './save_modal';
import apiClient from 'api.js';
import notes from 'image/content_image/notes.png'

const Modal = ({ isOpen, onClose }) => {

  const initialFormData = {
    major: "간호학과",
    classOf: "",
    anonymous: false,
    studentName: "",
    content: "",
    color: "",
    confirm: false,
  };

  const majors = ["간호학과", "기계공학과", "다문화학과", "멀티미디어공학과", "사회복지학과", "산업경영공학과", "유아교육과", "자동차공학과", "전기공학과", "정보통신공학과", "컴퓨터공학과"];
  const colors = ['bg-red-200', 'bg-yellow-100', 'bg-orange-200', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-indigo-200', 'bg-violet-200',
                    'bg-purple-200', 'bg-fuchsia-200', 'bg-pink-200', 'bg-rose-100', ];

  const [formData, setFormData] = useState(initialFormData);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [isValidClassOf, setIsValidClassOf] = useState(true);
  const [showSaveModal, setShowSaveModal] = useState(false);

  useEffect(() => {
    setIsSaveEnabled(formData.content.trim() !== "" && isValidClassOf);
  }, [formData.content, isValidClassOf]);

  if (!isOpen) return null;

  const openModal = () => setShowSaveModal(true);
  const closeModal = () => setShowSaveModal(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
  
    if (inputName === "content") {
      if (inputValue.length <= 50) {
        setFormData({
          ...formData,
          [inputName]: inputValue,
        });
        setCharCount(inputValue.length);
      } else {
        e.preventDefault();
      }
    } else if (inputName === "classOf") {
      const isValid = inputValue.length === 8;
      setIsValidClassOf(isValid);
      setFormData({
        ...formData,
        [inputName]: inputValue,
      });
    } else {
      setFormData({
        ...formData,
        [inputName]: inputValue,
      });
    }
  };
  

  const handleAnonymousCheckboxChange = (e) => {
    setIsAnonymous(e.target.checked);
    setFormData({
      ...formData,
      anonymous: e.target.checked,
    });
  };

  const handleBackgroundClick = (e) => { // 배경 클릭 시 닫기
    e.stopPropagation();
    setFormData(initialFormData);
    setIsAnonymous(false);
    onClose(); 
  };

  const handleSaveClick = async () => {
    try {
      const memoDTO = {
        major: formData.major,
        classOf: formData.classOf,
        anonymous: formData.anonymous,
        studentName: formData.studentName,
        content: formData.content,
        color: formData.color,
        confirm: formData.confirm,
      };

      const response = await apiClient.post('/memos/memo', memoDTO);

      console.log('Memo saved successfully', response.data);
      setFormData(initialFormData);
      setIsAnonymous(false);
      openModal();

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error saving memo:', error);
    }
  };

  const handleCancelClick = () => {
    setFormData(initialFormData);
    setIsAnonymous(false);
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
          <div className="flex ml-3">
            <img src={notes} alt="notes" className="w-7 h-7" />
            <div className="flex items-center ml-3 text-lg font-bold">
              응원글 남기기
            </div>
          </div>
          <button onClick={onClose} className="text-md font-bold mr-5">닫기</button>
        </div>

        <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
            <div className="text-left mx-3">
                <form>
                    <p className="text-xs text-left font-bold text-red-600">
                      해당 정보는 관리자의 승인을 통해 홈페이지에 반영됩니다.
                    </p>
                    <label className="text-lg font-bold mt-3">
                      색상 : 
                      <div className="flex flex-wrap">
                        {colors.map((color, index) => (
                          <div key={index} className={`flex items-center ml-1 mb-2`}>
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
                      </div>
                    </label>
                    <p className="mt-2" />
                    <label className="text-lg text-left font-bold">
                      학과 :
                      <select name="major" value={formData.major} onChange={handleInputChange} className="ml-3 font-normal border-2">
                        {majors.map((major, index) => (
                          <option key={index} value={`${major}`}>{major}</option>
                        ))}
                      </select>
                      <br />
                    </label>
                    <p className="mt-2" />
                    <label className="text-lg text-left font-bold mt-3">
                      학번 :
                      <input type="text" name="classOf" value={formData.classOf} onChange={handleInputChange} className={`w-full border-2 border-inherit p-2 h-12 font-normal ${isValidClassOf ? '' : 'border-red-500'}`} />
                      {!isValidClassOf && <p className="text-xs text-red-500 mt-1">학번은 8자리여야 합니다.</p>}
                    </label>
                    <p className="mt-2" />
                    <label className="text-lg text-left font-bold mt-3">
                      이름 :
                      <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} className="w-full border-2 border-inherit p-2 h-12 font-normal" />
                      <label className="">익명</label>
                      <input type="checkbox" name="anonymous" checked={isAnonymous} onChange={handleAnonymousCheckboxChange} className="ml-3" />
                      <p className="text-xs text-left font-bold text-blue-600">
                        익명 ✔️체크 시 응원글이 홈페이지에 익명으로 표시됩니다.
                      </p>
                      <p className="text-xs mt-2 text-left font-bold text-blue-600">
                        📣 상품 추첨을 위해 익명 체크 시에도 이름, 학번 작성부탁드리겠습니다.
                      </p>
                    </label>
                    <p className="mt-2" />
                    <label className="text-lg font-bold mt-3">
                      내용 :
                      <p className={`text-sm ${charCount===50?'text-red-500':''}`}>{charCount}/50</p>
                      <textarea type="text" name="content" placeholder="글자 수 50자 이하로 작성" value={formData.content} onChange={handleInputChange} className="min-h-28 w-full border-2 border-inherit p-2 font-normal" />
                    </label>
                </form>
            </div>
        </div>

        <div className="flex justify-center space-x-3 mt-2 mb-4">
            <div
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full hover:cursor-pointer ${isSaveEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
              onClick={isSaveEnabled ? handleSaveClick : null}
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
        <SaveModal isOpen={showSaveModal} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
