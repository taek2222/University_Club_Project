import React from "react";

import Event from './event';

import TestImage from '../../../image/test1.png';

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
    return(
        <div className="mt-10">
            {events.map((event, index) => (
                <Event
                    key={index}
                    event = {event}
                />
            ))}
        </div>
    )
}

export default Schedule;