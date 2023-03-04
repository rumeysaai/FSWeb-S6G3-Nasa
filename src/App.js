import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  
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


  return (
    <div className="App">

      <Layout appContent={info} date={date} />

    </div>

  );
}

export default App;

