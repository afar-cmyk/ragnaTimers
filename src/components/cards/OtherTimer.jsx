import React, { useState, useEffect } from "react";
import { TimerRenderer, useTimer } from "react-use-precision-timer";
import { removeTiming } from "../../database/dbService.js";

const OtherTimer = ({ respawn, variable, id }) => {
  let firstDate = newDate(respawn)
  let nextDate = newDate(variable)

  const myTimer = useTimer({ delay: 1000 });
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [currentColor, setCrrentColor] = useState("#DDDDDD");
  const [countRenders, setCountRenders] = useState(0);

  useEffect(() => {
    myTimer.start(firstDate);
  }, [myTimer, firstDate]);

  useEffect(() => {
    const checkTime = () => {
      if (myTimer.getRemainingTime() <= 2) {
        myTimer.stop();
        setIsCountingDown(false);
        if (!isCountingDown) {
          myTimer.start(nextDate);
        }
        if (myTimer.getRemainingTime() <= 0) {
          setCountRenders(countRenders + 1);
        }
      }
    };
    const intervalId = setInterval(checkTime, 10);
    return () => clearInterval(intervalId);
  }, [myTimer, isCountingDown]);

  useEffect(() => {
    const checkState = () => {
      console.log('numero de veces que ha sido 0', countRenders);
      if (countRenders >= 2) {
        setTimeout(() => {
          removeTiming(id);
        }, 5000);
      }
    }

    if (countRenders === 1) {
      setCrrentColor("#c56d82");
    }

    const intervalId = setInterval(checkState, 1000);
    return () => clearInterval(intervalId);
  }, [countRenders]);

  return (
    <span style={{ ...styles, color: currentColor }}>
      <TimerRenderer
        timer={myTimer}
        render={(t) => <>{formatMilliseconds(t.getRemainingTime())}</>}
        renderRate={10}
      />
    </span>
  );
};

export default OtherTimer;

function formatMilliseconds(ms) {
  let currentColor = "inherit";
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    currentColor = "#666666";
  }

  return (
    <span
      style={{
        transition: "color 1s",
        transitionDelay: "0.1s",
        color: currentColor,
      }}
    >{`${hours.toString().padStart(2, "0")}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</span>
  );
}

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

const newDate = (date) => {
  return new Date(date).getTime()
}
