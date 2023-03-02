import Content from "../components/Content"
import DatePicker from "../components/DatePicker";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ContentPage =() => {
    const [info, setInfo] = useState(null);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  
    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod", {
        params:
        {
          api_key: "rJ6NP3pKWdGlqBuMTDjDFWg7bKurI9I4ECndBU8c",
          date: date
        }
      })
        .then((res) => {
          console.log(res.data);
          setInfo(res.data);
        })
        .catch((err) => {
          console.error("Hata ", err);
        });
    }, [date]);

    return(
        <div>
            <DatePicker date={date} setDate={(dateValue)=>{
                setDate(dateValue);
            }}/>
            {info && <Content content={info} />}
        </div>
    )
}
export default ContentPage;