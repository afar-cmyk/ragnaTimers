import React, { useState, useEffect, useRef } from "react";
import garm from "../images/garm.gif";

const Timer = ({ time }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(time);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setCount(time);
    stopTimer();
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <h2>Hola Mundo desede Timer.jsx</h2>
      <div className="timer-container">
        <div className="image-container">
          <span className="timer-span">{formatTime(count)}</span>
          <img src={garm} alt="Imagen GIF" />
        </div>
      </div>
      <button onClick={() => (isRunning ? resetTimer() : startTimer())}>
        {isRunning ? "Reset" : "Start"}
      </button>
    </>
  );
};

export default Timer;
