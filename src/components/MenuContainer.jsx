import React, { useState } from 'react'
import MainButton from './menu/MainButton.jsx'
import Drawer from '@mui/joy/Drawer'

const MenuContainer = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(inOpen)
  }

  return (
    <>
      <MainButton toggleDrawer={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {/* Drawer content */}
      </Drawer>
    </>
  )
}

export default MenuContainer
