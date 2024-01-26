/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import Category from "../../Recycle/category";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import "./main.css";

function Main() {
  const [value, onChange] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    // 토요일인 경우 클래스 추가
    if (view === 'month' && date.getDay() === 6) {
      return 'custom-saturday';
    }

    // 선택된 날짜인 경우 클래스 추가
    if (moment(date).isSame(value, 'day')) {
      return 'custom-selected';
    }

    return null;
  };

    return(
        <>
          <Category />
          <div className="flex flex-col items-center">
            <Calendar
              onChange={onChange}
              value={value}
              className="custom-calendar"
              calendarType="US"
              tileClassName={tileClassName}
            />
            <div className="text-gray-500 mt-4">
              {moment(value).format("YYYY년 MM월 DD일")}
            </div>
          </div>
        </>
    )
}

export default Main;