import React, { useState, useEffect } from "react";
import garm from "../images/garm.gif";

const Timer = ({ time }) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(time);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const startTimer = () => {
    setIsActive(true);
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
      <button onClick={startTimer}>Iniciar timer</button>
    </>
  );
};

export default Timer;
