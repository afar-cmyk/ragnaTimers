import React, { useEffect, useState } from 'react'
import { format, toZonedTime } from 'date-fns-tz'
import { useAtom } from 'jotai'
import { useLiveQuery } from 'dexie-react-hooks'
import { timeZoneAtom } from '../../hooks/stateManager.jsx'
import { db } from '../../database/db.js'

const ClockContainer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [pressed, setPressed] = useState(false)
  const [timeZone, setTimeZone] = useAtom(timeZoneAtom)

  const dbTimeZone = useLiveQuery(async () => {
    return await db.config.get(1)
  })

  const getCurrentGMT = () => {
    const gmtOffset = new Date().getTimezoneOffset()
    const gmtNumber = (gmtOffset >= 0 ? '+' : '-') + Math.abs(gmtOffset / 60)
    return `Etc/GMT${gmtNumber}`
  }

  useEffect(() => {
    const initializeTimeZone = async () => {
      if (!timeZone) {
        setTimeZone(getCurrentGMT())
      }

      const existingConfig = await db.config.toArray()

      if (existingConfig.length === 0) {
        await db.config.add({ timeZone: getCurrentGMT() })
        setTimeZone(getCurrentGMT())
      }
    }

    initializeTimeZone()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const zonedTime = toZonedTime(currentTime, dbTimeZone?.timeZone)
  const localTime = format(currentTime, 'hh:mm a')
  const formattedTime = format(zonedTime, 'hh:mm a')

  return (
    <div className='clockContainer' onMouseDown={() => setPressed(!pressed)}>
      {pressed ? (
        <>
          <span className='clockTitle'>Hora servidor</span>
          <span className='clockTime'>
            <span style={{ marginRight: '3px' }}>
              {formattedTime.slice(0, 2)}
            </span>
            <span className='clockSeparator'>:</span>
            <span style={{ marginLeft: '3px' }}>{formattedTime.slice(3)}</span>
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
