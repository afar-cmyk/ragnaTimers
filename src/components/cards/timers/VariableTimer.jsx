import React, { useState, useEffect } from 'react'
import { TimerRenderer, useTimer } from 'react-use-precision-timer'
import { removeTiming } from '../../../database/dbService.js'
import { getTime, formatTime } from '../../cards/RemainingTime.jsx'
import { useAudio } from '../../../hooks/useAudio.jsx'

const VariableTimer = ({ variableTime, id, setCardState }) => {
  const [currentColor, setCurrentColor] = useState('#c56d82')
  const [isDone, setIsDone] = useState(false)
  const timer = useTimer({ delay: 10, runOnce: true }, callback)

  const { playAudio } = useAudio()

  const callback = React.useCallback(() => {
    setIsDone(true)
  }, [timer])

  useEffect(() => {
    timer.start(getTime(variableTime))
  }, [])

  useEffect(() => {
    if (isDone) {
      playAudio('variable')
      setTimeout(() => {
        removeTiming(id)
      }, 5000)
    }
    const check = () => {
      if (timer.getRemainingTime() == 0) {
        setIsDone(true)
        setCurrentColor('#666666')
        setCardState('disabled')
      }
    }

    const intervalId = setInterval(check, 10)
    return () => clearInterval(intervalId)
  }, [timer, currentColor])

  return (
    <span style={{ color: currentColor }}>
      <TimerRenderer
        timer={timer}
        render={(t) => <>{formatTime(t.getRemainingTime())}</>}
        renderRate={10}
      />
    </span>
  )
}

export default VariableTimer
