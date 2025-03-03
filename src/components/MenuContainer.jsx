import React, { useState } from 'react'
import MainButton from './menu/MainButton.jsx'
import Drawer from '@mui/joy/Drawer'
import Sheet from '@mui/joy/Sheet'
import DialogTitle from '@mui/joy/DialogTitle'
import ModalClose from '@mui/joy/ModalClose'
import FavoritesBar from './favorites/FavoritesBar.jsx'
import ClockContainer from './clock/ClockContainer.jsx'
import AudioSettings from './menu/AudioSettings.jsx'
import ServerTimezoneSettings from './menu/ServerTimezoneSettings.jsx'

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
      <FavoritesBar />
      <ClockContainer />
      <Drawer open={open} onClose={toggleDrawer(false)} size='lg'>
        <Sheet sx={sheetStyles}>
          <ModalClose
            sx={{
              backgroundColor: '#1a1a1a',
              '& .MuiSvgIcon-root': {
                color: '#afafaf'
              },
              ':hover': {
                backgroundColor: '#2f2f2f',
                color: '#cccccc'
              }
            }}
          />
          <DialogTitle>Opciones</DialogTitle>

          <ServerTimezoneSettings
            styles={{ selectedStyles, selectStyles, optionsStyles }}
          />

          <AudioSettings
            formLabel='Audio de respawn:'
            placeholderText='Seleccionar audio de respawn'
            audioType='respawn'
            styles={{ selectedStyles, selectStyles, optionsStyles }}
          />

          <AudioSettings
            formLabel='Audio de respawn variable:'
            placeholderText='Seleccionar audio de respawn variable'
            audioType='variable'
            styles={{ selectedStyles, selectStyles, optionsStyles }}
          />
        </Sheet>
      </Drawer>
    </>
  )
}

export default MenuContainer

const sheetStyles = {
  borderRadius: 'md',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  height: '100%',
  overflow: 'auto',
  backgroundColor: '#1a1a1a',
  color: '#ABABAB',
  userSelect: 'none'
}

const selectStyles = {
  width: '100%',
  borderRadius: 3,
  maxHeight: 30,
  minHeight: 30,
  color: '#666666',
  backgroundColor: '#EEEEEE14',
  fontFamily: 'Roboto Flex',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '700 !important',
  lineHeight: 'normal',
  boxSizing: 'border-box',
  transition: 'border 0.3s',
  border: '1px solid #1d1d1d',
  outline: 'none',
  ':hover': {
    backgroundColor: '#EEEEEE14',
    border: '1px solid #ededed26',
    color: '#ABABAB'
  },
  ':focus-visible': {
    outline: 'none',
    border: '1px solid #ABABAB !important',
    color: '#ABABAB'
  }
}

const selectedStyles = {
  backgroundColor: '#EEEEEE14',
  color: '#ABABAB'
}

const optionsStyles = {
  border: '1px solid #1E1E1E',
  backgroundColor: '#1E1E1E !important',
  fontFamily: 'Roboto Flex',
  fontWeight: 400,
  color: '#ABABAB',
  fontSize: 14,
  ':hover': {
    border: '1px solid #ededed26',
    color: '#ABABAB !important',
    fontWeight: 500
  }
}
