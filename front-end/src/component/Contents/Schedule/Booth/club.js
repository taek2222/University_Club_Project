import React, { useState, useEffect } from "react";
import Event from "./event";

function Club({ schedule, clubsData }) {
    const [clubIds, setClubIds] = useState([]);

    useEffect(() => {
        if (clubsData.length > 0) {
            const extractedClubIds = clubsData.map((club) => club.clubId);
            setClubIds(extractedClubIds);
        }
    }, [clubsData]);

    const getIconUrl = (iconUrl) => {
        try {
          return require(`image/club_image/feed/${iconUrl}`);
        } catch (error) {
          
        }
    };

    return (
        <div>
            {clubIds.includes(schedule.clubId) && (
                <div>
                    <Event
                        schedule={schedule}
                        iconUrl={getIconUrl(schedule.iconUrl)}
                    />
                </div>
            )}
        </div>
    );
}

export default Club;
