import React, { useState, useEffect, useRef } from 'react'
import { TimerRenderer, useTimer } from 'react-use-precision-timer'
import { removeTiming } from '../../../database/dbService.js'
import { getTime, formatTime } from '../../cards/RemainingTime.jsx'
import { useAudio } from '../../../hooks/useAudio.jsx'

const VariableTimer = ({ variableTime, id, setCardState }) => {
  const [currentColor, setCurrentColor] = useState('#c56d82')
  const [isDone, setIsDone] = useState(false)
  const timer = useTimer({ delay: 10 }, null)
  const { playAudio } = useAudio()
  const isDoneRef = useRef(false)
  const soundTimeoutRef = useRef(null) // Ref para el timeout del debounce

  useEffect(() => {
    timer.start(getTime(variableTime))
  }, [variableTime, timer])

  useEffect(() => {
    if (isDone) {
      if (!isDoneRef.current) {
        isDoneRef.current = true
        playAudio('variable')
        setCurrentColor('#666666')
        setCardState('disabled')
        setTimeout(() => {
          setTimeout(() => {
            removeTiming(id)
          }, 1850)
        }, 0)
      }
    }
  }, [isDone, playAudio, id, setCardState])

  useEffect(() => {
    const checkTimer = () => {
      if (timer.getRemainingTime() <= 0 && !isDone) {
        setIsDone(true)
      }
    }

    const intervalId = setInterval(checkTimer, 10)

    return () => {
      clearInterval(intervalId)
      timer.stop()
      isDoneRef.current = false
      clearTimeout(soundTimeoutRef.current) // Limpia el timeout en desmontaje
      soundTimeoutRef.current = null
    }
  }, [timer, isDone])

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
