import React, {useState, useEffect} from "react";
import apiClient from 'api';
import Event from "./event";

function Club({ schedule, category }) {
    const [data, setData] = useState([]);
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
        apiClient.get(`/clubs/${category}`)
        .then((Response) => {
            setData(Response.data);
            if (Response.data.length > 0) {
                const clubIds = Response.data.map(club => club.clubId);
                const minId = Math.min(...clubIds);
                const maxId = Math.max(...clubIds);
                setMinClubId(minId);
                setMaxClubId(maxId);
            }
        })
        .catch((Error) => {
          console.log(Error);
        });
    }, [category]);
    console.log(data);

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