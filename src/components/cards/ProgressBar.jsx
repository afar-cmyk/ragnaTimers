import React from 'react'

export const ProgressBar = ({ computedSeconds }) => {
  return (
    <span style={progressBar}>
      <span style={progressBarFill(computedSeconds)} />
    </span>
  )
}

const progressBar = {
  height: '11px',
  width: '100%',
  backgroundColor: '#EEEEEE66',
  borderRadius: '0px 0px 2px 2px',
  alignSelf: 'flex-end',
  display: 'flex',
}

const progressBarFill = (computedSeconds) => ({
  height: '100%',
  width: '100%',
  backgroundColor: '#2BB65280',
  borderRadius: '0px 0px 0px 3px',
  animation: `fillAnimation ${computedSeconds}s linear forwards`,
})
