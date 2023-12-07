import React, { useState, useEffect } from "react";
import Timer from "./Timer";

import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

export default function CountDownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
      }, 10);
    }

    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning]);

  // Start Pause & Stop functions

  // Start
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
    } else {
      window.alert("Add Time.");
    }
  }

  // Pause
  function pauseTimer() {
    setIsRunning(false);
  }

  // Stop
  function stopTimer() {
    resetTimer();
  }

  function resetTimer() {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  // Handlers
  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  return (
    <div className="main-container">
      <h1>CountDown Timer</h1>
      <Timer
        milliseconds={milliseconds}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeSeconds={changeSeconds}
        changeMinutes={changeMinutes}
        changeHours={changeHours}
      />
      <br />
      {!isRunning && (
        <button className="start-button" onClick={startTimer}>
          <BsFillPlayFill size={30}/>
        </button>
      )}
      {isRunning && (
        <button className="pause-button" onClick={pauseTimer}>
          <BsPauseFill size={30}/>
        </button>
      )}{" "}
      <button className="stop-button" onClick={stopTimer}>
        <BsStopFill size={30}/>
      </button>
    </div>
  );
}
