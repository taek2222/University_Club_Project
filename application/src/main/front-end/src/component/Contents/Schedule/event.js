import React, {useEffect, useState} from "react";
import Modal from "./Modal/modal.js";

function Event({ schedule, iconUrl }) {
    const [isTimeConflict, setIsTimeConflict] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const formatEventTime = () => {
        const dateObject = new Date(schedule.eventTime);
        const formattedTime = `${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}`;
        return formattedTime;
    };

    const formatEventEndTime = () => {
        const dateObject = new Date(schedule.eventTime);
        dateObject.setMinutes(dateObject.getMinutes() + 30);
        const formattedTime = `${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}`;
        return formattedTime;
    };

    useEffect(() => {
        const currentTime = new Date();
    
        const eventStartTime = new Date(schedule.eventTime);
        const eventEndTime = new Date(schedule.eventTime);
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 30);
    
        const isTimeConflict = currentTime >= eventStartTime && currentTime <= eventEndTime;
    
        setIsTimeConflict(isTimeConflict);
      }, [schedule]);

    return(
        <>
            <div className="mx-3 my-5">
                <div className="flex">
                    {isTimeConflict && (
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
                    {!isTimeConflict && (
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
                        <div className="mt-1 font-bold">{schedule.clubName}</div>
                        <div className="mb-4">{formatEventTime()} ~ {formatEventEndTime()}</div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    )
}

export default Event;