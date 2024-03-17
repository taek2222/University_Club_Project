import React, {useState} from "react";
import Club from "./club";

function Booth({ category, groupedEvents }) {
    const [selectedClubCategory, setSelectedClubategory] = useState("전체");
    const clubCategories = ["전체", "체육", "취미", "종교", "봉사"];
    const clubCategoryMapping = {
      "전체": "all",
      "공연": "1",
      "체육": "2",
      "취미": "3",
      "종교": "4",
      "봉사": "5"
    };
    

    return(
        <>
            <div className="flex justify-center space-x-1.5 mb-1">
                {clubCategories.map((category) => (
                    // 선택X
                    <div
                    key={category}
                    className={`relative text-center cursor-pointer px-3 py-2 ${
                        selectedClubCategory === category ? "font-bold text-lg" : "text-lg text-gray-500"
                    }`}
                    onClick={() => (setSelectedClubategory(category))}
                    >
                    {category}

                    {/* 선택 O */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 h-1 mx-auto w-full ${
                        selectedClubCategory === category ? "bg-black" : "bg-transparent"
                        }`}
                        style={{ marginBottom: "-1px" }}
                    />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-between border rounded-lg mx-5 my-3 px-5 shadow-lg min-w-64 max-w-[500px] min-h-20">
                    <div className="mx-3 my-5">
                        {groupedEvents.map((events, index) => (
                            <div key={index}>
                            {events
                            .filter(
                                (schedule) =>
                                schedule.eventTime &&
                                schedule.eventTime.startsWith(
                                    category
                                )
                            )
                            .map((schedule) => (
                                <Club schedule={schedule} category={clubCategoryMapping[selectedClubCategory] || selectedClubCategory} />
                            ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booth;