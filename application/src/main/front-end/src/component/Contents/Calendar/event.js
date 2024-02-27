import React from "react";

function Event({ event }) {
    return(
        <div className="flex justify-center items-center">
            <div className="flex justify-between border rounded-lg mx-5 my-5 px-5 shadow-lg max-w-[500px]">
                <div className="mx-3 my-5">
                    <div className="mx-3 mt-4 font-bold text-xl">
                        {event.eventTitle}
                    </div>
                    <div className="mx-3 my-5">
                        {event.iconUrls.map((iconUrl, index) => (
                            <div className="flex">
                                <img
                                    key={index}
                                    className="w-8 h-8 mt-3 rounded-full border border-gray-500"
                                    src={iconUrl}
                                    alt="Club Icon"
                                />
                                <div className="flex flex-col mx-3">
                                    <div className="mt-1 font-bold">{event.clubNames[index]}</div>
                                    <div className="mb-4">{event.eventTimes[index]}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Event;