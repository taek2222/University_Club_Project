import React, {useState, useEffect} from "react";
import Event from "./event";

function Club({ schedule, clubsData }) {
    const [minClubId, setMinClubId] = useState(null);
    const [maxClubId, setMaxClubId] = useState(null);

    const getIconUrl = (iconUrl) => {
        try {
          return require(`image/club_image/modal/${iconUrl}`);
        } catch (error) {
          console.error("Error loading image:", error);
        }
    };

    useEffect(() => {
        if (clubsData.length > 0) {
            const clubIds = clubsData.map((club) => club.clubId);
            const minId = Math.min(...clubIds);
            const maxId = Math.max(...clubIds);
            setMinClubId(minId);
            setMaxClubId(maxId);
        }
    }, [clubsData]);

    return(
        <div>
            <div>
                {schedule.clubId>=minClubId&&schedule.clubId<=maxClubId
                ? 
                    <Event 
                        schedule={schedule}
                        iconUrl={getIconUrl(schedule.iconUrl)}
                    />
                :
                    ''
                }
            </div>
        </div>
    )
}

export default Club;