import React, { useEffect, useState } from 'react'
import { format, toZonedTime } from 'date-fns-tz'
import { useAtom } from 'jotai'
import { timeZoneAtom } from '../../hooks/stateManager.jsx'

const ClockContainer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [timeZone, setTimeZone] = useAtom(timeZoneAtom)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (timeZone === null) {
      const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      setTimeZone(localTimeZone)
    }
  }, [timeZone, setTimeZone])

  const zonedTime = toZonedTime(
    currentTime,
    timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const formattedTime = format(zonedTime, 'hh:mm a')

  console.log(timeZone)

  return (
    <div className='clockContainer'>
      <span className='clockTitle'>Hora servidor</span>
      <span className='clockTime'>
        <span style={{ marginRight: '3px' }}>{formattedTime.slice(0, 2)}</span>
        <span className='clockSeparator'>:</span>
        <span style={{ marginLeft: '3px' }}>{formattedTime.slice(3)}</span>
      </span>
    </div>
  )
}

export default ClockContainer
