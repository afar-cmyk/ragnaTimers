import React, { useState, useEffect, useRef } from 'react'
import { differenceInSeconds } from 'date-fns'
import LinearProgress from '@mui/joy/LinearProgress'
import Box from '@mui/joy/Box'

export const ProgressBar = (props) => {
  const { selectedRespawn, mvpRespawn, cardState, selectedVariable } = props
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    const calculateInitialProgress = () => {
      const currentDate = new Date()
      let selectedDate
      let totalSeconds

      if (cardState === 'variable') {
        selectedDate = new Date(selectedVariable)
        let baseRespawnDate = new Date(selectedRespawn)
        const variableRespawnDurationSeconds = differenceInSeconds(
          selectedDate,
          baseRespawnDate
        )
        totalSeconds = variableRespawnDurationSeconds
        if (totalSeconds <= 0) {
          selectedDate = new Date(selectedRespawn)
          totalSeconds = mvpRespawn * 60
        }
      } else {
        selectedDate = new Date(selectedRespawn)
        totalSeconds = mvpRespawn * 60
      }

      const secondsRemaining = Math.max(
        0,
        differenceInSeconds(selectedDate, currentDate)
      )

      const progressValue = Math.floor((secondsRemaining / totalSeconds) * 100)
      return Math.min(100, Math.max(0, progressValue))
    }

    const initialProgress = calculateInitialProgress()
    setProgress(initialProgress)

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setProgress(calculateInitialProgress())
    }, 1)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [selectedRespawn, mvpRespawn, cardState, selectedVariable])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        determinate
        value={progress}
        thickness={11}
        sx={{
          borderRadius: '0px 0px 2px 2px',
          bgcolor: colorState[cardState].backgroundBar,
          '&::before': {
            backgroundColor: colorState[cardState].progressBar,
            transition: 'transform 50ms cubic-bezier(0.39, 0.58, 0.57, 1)',
            borderRadius: '0px 0px 0px 3px'
          }
        }}
      />
    </Box>
  )
}

const colorState = {
  respawn: {
    backgroundBar: '#b6b6b63b',
    progressBar: '#2BB65280'
  },
  variable: {
    backgroundBar: 'rgb(113 72 81 / 40%)',
    progressBar: '#ef8fa55c'
  },
  disabled: {
    backgroundBar: '#555555ad',
    progressBar: 'none'
  }
}
