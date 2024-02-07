import React from "react";

import Event from '../Event/event';

import TestImage from '../../../image/test1.png';
import gwnuLogo from "../../../image/content_image/gwnu.jpg"

const events = [
    {
        eventTitle: 'Part 1.',
        clubNames: ['페르마타', '루시우스'],
        tags: ['#밴드', '#댄스'],
        eventTimes: ['03:00 PM ~ 04:30 PM', '04:30 PM ~ 06:00 PM'],
        iconUrls: [TestImage, TestImage]
    },
    {
        eventTitle: 'Part 2.',
        clubNames: ['프레이즈', '뉴를리'],
        tags: ['#밴드', '#댄스'],
        eventTimes: ['07:00 PM ~ 08:30 PM', '08:30 PM ~ 09:00 PM'],
        iconUrls: [TestImage, TestImage]
    },
];

function Schedule() {
    const FESTIVAL_YEAR = new Date().getFullYear().toString() + " 축제 일정";
    const LOGO_ALT_TEXT = "gwnu Logo";

    return(
        <>
            <div className="m-5 mt-7 flex">
                <img
                    className="w-11 h-11"
                    src={gwnuLogo}
                    alt={LOGO_ALT_TEXT}
                />
                <div className="mx-3 mt-1 text-3xl font-bold">{FESTIVAL_YEAR}</div>
            </div>
            <div className="mt-10">
                {events.map((event, index) => (
                    <Event
                        key={index}
                        event = {event}
                    />
                ))}
            </div>
        </>
    )
}

export default Schedule;