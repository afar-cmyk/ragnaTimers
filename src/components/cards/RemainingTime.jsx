import React, { useState, useEffect } from 'react'

const RemainingTime = ({ sRespawn, sVariable }) => {
  const [respawn, setRespawn] = useState(sRespawn)
  const [variable, setVariable] = useState(sVariable)
  
  const [currentTiming, setCurrentTiming] = useState(null)
  const [currentColor, setCurrentColor] = useState('#DDDDDD')


  useEffect(() => {    
    if (respawn > 0 || variable > 0) {
      let interval;
      if (respawn > 0) {
        setCurrentTiming(respawn)
        interval = setInterval(() => setRespawn((prevSeconds) => prevSeconds - 1), 1000)
      } else {
        setCurrentColor('#c56d82')
        setCurrentTiming(variable)
        interval = setInterval(() => setVariable((prevSeconds) => prevSeconds - 1), 1000)
      }
      return () => clearInterval(interval)
    } else if (respawn === 0) {
      setCurrentTiming(variable)
    } 

    if (variable == 0) {
      setCurrentColor('#666666')
    }
  }, [respawn, variable])


  const formatTime = time => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const remainingSeconds = time % 60
    return [hours, minutes, remainingSeconds].map(unit => unit < 10 ? `0${unit}` : unit).join(':')
  }

  return(
    <span style={{...styles, color: currentColor}}>{formatTime(currentTiming)}</span>
  )
}

export default RemainingTime

const styles = {
  textAlign: 'center',
  fontFamily: 'Roboto Flex',
  fontSize: '44px',
  fontWeight: 700,
  lineHeight: '36px',
  letterSpacing: '2.2px',
  margin: '25px 0 29px 0',
  userSelect: 'none'
}
