import React, { useState } from 'react'
import MainButton from './menu/MainButton.jsx'
import Drawer from '@mui/joy/Drawer'
import Sheet from '@mui/joy/Sheet'
import DialogTitle from '@mui/joy/DialogTitle'
import ModalClose from '@mui/joy/ModalClose'

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
      <Drawer open={open} onClose={toggleDrawer(false)} size='lg'>
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
            backgroundColor: '#1a1a1a',
            color: '#ABABAB'
          }}
        >
          <ModalClose />
          <DialogTitle>Opciones</DialogTitle>
        </Sheet>
      </Drawer>
    </>
  )
}

export default MenuContainer
