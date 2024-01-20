import React from 'react'

const MainButton = ({ toggleDrawer }) => {
  return (
    <>
      <div className='menu-button' onClick={() => toggleDrawer(true)}>
        <div className='menu-button__bar' />
        <div className='menu-button__bar' />
        <div className='menu-button__bar' />
      </div>
    </>
  )
}

export default MainButton
