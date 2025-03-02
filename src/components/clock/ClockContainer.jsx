import React, { useEffect, useState } from 'react'
import { format, toZonedTime } from 'date-fns-tz'
import { useConfig } from '../../hooks/stateManager.jsx'

const ClockContainer = () => {
  let { config } = useConfig()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const computeTime = (timeZone) => {
    const zonedTime = toZonedTime(currentTime, timeZone)
    const formattedTime = format(zonedTime, 'hh:mm a')
    return formattedTime
  }

  let localTime = computeTime(config['localTimeZone'])
  let serverTime = computeTime(config['serverTimeZone'])

  return (
    <div className='clockContainer' onMouseDown={() => setPressed(!pressed)}>
      {pressed ? (
        <>
          <span className='clockTitle'>Hora servidor</span>
          <span className='clockTime'>
            <span style={{ marginRight: '3px' }}>{serverTime.slice(0, 2)}</span>
            <span className='clockSeparator'>:</span>
            <span style={{ marginLeft: '3px' }}>{serverTime.slice(3)}</span>
          </span>
        </>
      ) : (
        <>
          <span className='clockTitle'>Hora local</span>
          <span className='clockTime'>
            <span style={{ marginRight: '3px' }}>{localTime.slice(0, 2)}</span>
            <span className='clockSeparator'>:</span>
            <span style={{ marginLeft: '3px' }}>{localTime.slice(3)}</span>
          </span>
        </>
      )}
    </div>
  )
}

export default ClockContainer
