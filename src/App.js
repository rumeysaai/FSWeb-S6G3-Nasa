import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  const sampleInitialData = {
    "copyright": "",
    "date": "",
    "explanation": "",
    "hdurl": "",
    "media_type": "",
    "service_version": "",
    "title": "",
    "url": ""
  };

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

  // const handleDateSubmission = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value)

  // }
  // const handleDateChange = (event) => {
  //   event.preventDefault();
  //   setDate(event.target.value)

  // }


  return (
    <div className="App">
      {/* <div className="app-content">
      <div className="date-picker">
        <form onSubmit={(e) => handleDateSubmission(e)}>
          <label htmlFor="datePicker">Doğum gününde gökyüzü nasıldı? </label>
          <input
            onChange={(e) => handleDateChange(e)}
            type="date"
            name="datePicker"
            value={date}
          />
        </form>
      </div> */}
        {/* {info && (
          <Content appContent={info} />
        )} */}
      {/* </div> */}
      
      {/* <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
        İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    <Layout appContent = {info} date={date} />
    </div>

  );
}

export default App;

