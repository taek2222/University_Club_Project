import React, { useState, useEffect } from 'react';
import Modal from "../Modal/modal.js";

function Event({ schedule, iconUrl }) {
    const [isTimeConflict, setIsTimeConflict] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState('오프라인');
    const [statusBgColor, setStatusBgColor] = useState('bg-red-600');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const formatEventTime = () => {
        const dateObject = new Date(schedule.eventTime);
        const formattedTime = `${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}`;
        return formattedTime;
    };

    const formatEventEndTime = () => {
        const dateObject = new Date(schedule.eventEndTime);
        const formattedTime = `${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}`;
        return formattedTime;
    };

    const getImageUrl = (imageUrl) => {
        try {
            return require(`image/content_image/${imageUrl}`);
        } catch (error) {
            console.error("Error loading image:", error);
        }
    };

    useEffect(() => {
        const currentTime = new Date();
        const eventStartTime = new Date(schedule.eventTime);
        const eventEndTime = new Date(schedule.eventEndTime);
        const isTimeConflict = currentTime >= eventStartTime && currentTime <= eventEndTime;
        setIsTimeConflict(isTimeConflict);

        if (schedule.status === '운영중') {
            setStatus('운영중');
            setStatusBgColor('bg-green-500');
        }
        else if (schedule.status === '종료') {
            setStatus('종료');
            setStatusBgColor('bg-gray-500');
        } else if (schedule.status === '혼잡') {
            setStatus('혼잡');
            setStatusBgColor('bg-red-500');
        }
        else if (schedule.status === '조기마감') {
            setStatus('조기마감');
            setStatusBgColor('bg-orange-500');
        } else if (schedule.status === '일시중지') {
            setStatus('일시중지');
            setStatusBgColor('bg-yellow-300');
        }
      }, [schedule]);

    return(
        <>
            <div className="mx-3 my-5">
                <div className="flex border-b-2 border-b-slate-300">
                    <div className={`rounded-full ${statusBgColor} w-3 h-3 mt-1 mr-1 mb-2`}>
                    </div>
                    <p className="text-sm font-bold">{status}</p>
                </div>
                <div className="flex mt-1">
                    {(schedule.imageUrl!=='') && (
                        <div className="flex flex-col items-center hover:cursor-pointer" onClick={openModal}>
                            <div className={`rounded-full p-[1.8px] mt-2 mb-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-600 transform transition-transform`}>
                                <div className="rounded-full bg-white w-9 h-9 overflow-hidden flex justify-center items-center">
                                    <div className="flex w-[2.6rem] h-[2.6rem] border-0 rounded-full justify-center items-center">
                                        <img
                                            src={iconUrl}
                                            alt="Club Icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {(schedule.imageUrl==='') && (
                        <div className="rounded-full bg-white w-10 h-10 mt-2 overflow-hidden flex justify-center items-center">
                            <div className="flex w-[2.6rem] h-[2.6rem] border-0 rounded-full justify-center items-center">
                                <img
                                    src={iconUrl}
                                    alt="Club Icon"
                                />
                            </div>
                        </div>
                    )}
                    <div className={`flex flex-col mx-3 ${isTimeConflict ? 'animate-pulse' : ''}`}>
                        <div className="flex mt-1 font-bold">
                            <div>{schedule.clubName}</div>
                            <div className={`ml-2 p-1 rounded-full text-xs ${schedule.location==='체육관' ? 'bg-green-200 border border-green-700 text-green-700' : 'bg-red-200 border border-red-700 text-red-700'}`}>{schedule.location}</div>
                        </div>
                        <div className="mb-4">{formatEventTime()} ~ {formatEventEndTime()}</div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageUrl={getImageUrl(schedule.imageUrl)}
            />
        </>
    )
}

export default Event;