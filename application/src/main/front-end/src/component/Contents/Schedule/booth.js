import React, {useState, useEffect} from "react";
import apiClient from 'api';

function Booth({ category }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiClient.get(`/clubs/${category}`)
        .then((Response) => {
          setData(Response.data);
        })
        .catch((Error) => {
          console.log(Error);
        });
    }, [category]);

    return(
        <div>
            {data.map((club, index) => (
                <div>{club.clubId}</div>
            ))}
        </div>
    )
}

export default Booth;