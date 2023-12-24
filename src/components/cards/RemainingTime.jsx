import React, { useState, useEffect } from "react"
import { removeTiming } from "../../database/dbService.js"

const RemainingTime = ({ sRespawn, sVariable, id }) => {
  const [respawn, setRespawn] = useState(sRespawn)
  const [variable, setVariable] = useState(sVariable)
  const [currentTiming, setCurrentTiming] = useState(null)
  const [currentColor, setCurrentColor] = useState("#DDDDDD")

  useEffect(() => {
    let interval

    if (respawn <= 0 && variable > 0) {
      const newVariable = variable + respawn
      setVariable(newVariable)
      setRespawn(0)
      setCurrentTiming(newVariable)
      setCurrentColor("#c56d82")
    }

    if (respawn === 0 && variable > 0) {
      setCurrentColor("#c56d82")
      setCurrentTiming(variable)
      interval = setInterval(() => {
        if (variable > 0) {
          setVariable((prevSeconds) => prevSeconds - 1)
        }
      }, 1000)
    } else if (respawn > 0) {
      setCurrentTiming(respawn)
      interval = setInterval(
        () => setRespawn((prevSeconds) => prevSeconds - 1),
        1000
      )
    } else if (respawn === 0 && variable === 0) {
      setCurrentColor("#666666")
      clearInterval(interval)
      setCurrentTiming(0)
      setTimeout(() => {
        removeTiming(id)
      }, 4000)
    } else if (respawn <= 0 && variable <= 0) {
      setCurrentColor("#666666")
      setCurrentTiming(0)
      setTimeout(() => {
        removeTiming(id)
      }, 10000)
    }

    return () => clearInterval(interval)
  }, [respawn, variable])

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const remainingSeconds = time % 60
    return [hours, minutes, remainingSeconds]
      .map((unit) => (unit < 10 ? `0${unit}` : unit))
      .join(":")
  }

  return (
    <span style={{ ...styles, color: currentColor }}>
      {formatTime(currentTiming)}
    </span>
  )
}

export default RemainingTime

const styles = {
  textAlign: "center",
  fontFamily: "Roboto Flex",
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: "36px",
  letterSpacing: "2.2px",
  margin: "25px 0 29px 0",
  userSelect: "none",
}
