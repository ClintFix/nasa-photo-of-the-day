import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


export default function DateDropdown(props) {
    const { date, setDate } = props;
    const [startDate, setStartDate] = useState(new Date());
  
    function convert(str) {
        const date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }

    return (
        <DatePicker dateFormat = "yyyy/MM/dd" selected={startDate} onChange={date => {
            setStartDate(date);
            setDate(convert(date))
        }} />
    );
}

