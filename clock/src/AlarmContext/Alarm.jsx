import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Sound from "../assets/src_assets_mixkit-casino-win-alarm-and-coins-1990.mp3";

const Alarm = new Audio(Sound);
export const AlarmContext = createContext();

function Alarm({ children }) {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let HH = date.getHours();
      let MM = date.getMinutes();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let ampm;

      if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }
      if (HH === 0) {
        HH = 12;
      }
      if (HH < 10) {
        HH = `0${HH}`;
      }
      if (MM < 10) {
        MM = `0${MM}`;
      }
    }, 1000);
  }, []);
  if (alarmTime === `${hourDigital}:${minutesDigital} ${amPm}`) {
    Alarm.play();
    Alarm.loop = true;
  }
  const pauseAlarm = () => {
    Alarm.pause();
    setAlarmTime("");
  };
  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        amPm,
        dayNow,
        monthNow,
        yearNow,
        alarmTime,
        setAlarmTime,
        pauseAlarm,
        hasAlarm,
        setHasAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default Alarm;
