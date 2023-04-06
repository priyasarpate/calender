import React, { useState, useEffect } from "react";
import style from "../styles/Clock.module.css";

const Clock = () => {
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      let now = new Date();
      setDate(now.getDate());
      setDay(days[now.getDay()]);
      setMonth(months[now.getMonth()]);
      setYear(now.getFullYear());
    }, 1000);

    // setTimeout(() => {
    //   document.getElementById("two").style.height = "260px";
    //   document.getElementById("box").style.color = "gainsboro";
    // }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <div className={style.balls}></div>
      <div className={style.balls}></div>
      <div className={style.box}>
        <div className={style.month}>{month}</div>
        <div className={style.two}>
          <div className={style.date}>{date}</div>
          <div className={style.day}>{day}</div>
          <div className={style.year}>{year}</div>
        </div>
      </div>
    </>
  );
};

export default Clock;
