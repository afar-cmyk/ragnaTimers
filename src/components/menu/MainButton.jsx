import React from 'react'

const MainButton = () => {
  return (
    <>
      <div style={mainButtonStyle}>
        <div style={horizontalBarStyle} />
        <div style={horizontalBarStyle} />
        <div style={horizontalBarStyle} />
      </div>
    </>
  )
}

const mainButtonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'nowrap',
  width: '56px',
  height: '56px',
  alignItems: 'center',
  gap: '3px',
  background: '#EEEEEE29',
  borderRadius: 6
}

const horizontalBarStyle = {
  width: 14,
  height: 2,
  background: '#ABABAB'
}

export default MainButton
