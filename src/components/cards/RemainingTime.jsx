import React, { useState, useEffect } from "react";
import { removeTiming } from "../../database/dbService.js";
import OtherTimer from "./OtherTimer.jsx";
import { useTimer } from "react-timer-hook";

const RemainingTime = ({ id, respawn, variable }) => {
  const [currentTimestamp, setCurrentTimestamp] = useState(respawn);
  const [currentColor, setCurrentColor] = useState("#DDDDDD");

  const { seconds, minutes, hours, start, restart, isRunning, totalSeconds } =
    useTimer({
      expiryTimestamp: currentTimestamp,
      onExpire: () => {
        if (currentTimestamp.getTime() === variable.getTime()) {
          setTimeout(() => {
            removeTiming(id);
          }, 4000);
        }
        setCurrentColor("#c56d82");
        setCurrentTimestamp(variable);
      },
    });

  useEffect(() => {
    start();
  });

  //TODO VERIFICAR PORQUE SE PROPAGA EL COLOR ROJO A LOS COMPONENTES CUANDO SE DESMONTA

  useEffect(() => {
    if (!isRunning) {
      restart(variable);
    } else if (totalSeconds === 0) {
      setCurrentColor("#666666");
    }
  }, [variable, isRunning, totalSeconds]);

  return (
    <span
      style={{
        ...styles,
        transition: "color 1s",
        transitionDelay: "0.1s",
        color: currentColor,
      }}
    >
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </span>
  );
};

export default RemainingTime;

const styles = {
  textAlign: "center",
  fontFamily: "Roboto Flex",
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: "36px",
  letterSpacing: "2.2px",
  margin: "25px 0 29px 0",
  userSelect: "none",
};
