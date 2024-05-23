import React, { useState } from 'react'
import MainButton from './menu/MainButton.jsx'
import Drawer from '@mui/joy/Drawer'
import Sheet from '@mui/joy/Sheet'
import DialogTitle from '@mui/joy/DialogTitle'
import ModalClose from '@mui/joy/ModalClose'
import FavoritesBar from './favorites/FavoritesBar.jsx'
import ClockContainer from './clock/ClockContainer.jsx'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import { useAtom } from 'jotai'
import { timeZoneAtom } from '../hooks/stateManager.jsx'
import ShortUniqueId from 'short-unique-id'

const MenuContainer = () => {
  const [open, setOpen] = useState(false)
  const [timeZone, setTimeZone] = useAtom(timeZoneAtom)

  const uid = new ShortUniqueId({ length: 5 })

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
          <div>
            <span className='optionsLabel'>Zona Horaria del servidor:</span>
            <Select
              variant='plain'
              placeholder='Seleccionar Zona Horaria'
              sx={[selectStyles, Boolean(timeZone) ? selectedStyles : {}]}
              onChange={(event, value) => {
                setTimeZone(value)
              }}
              value={timeZone || ''}
              required
            >
              {gmtOffsets.map((offset) => {
                return (
                  <Option
                    key={uid.rnd()}
                    value={offset.value}
                    sx={optionsStyles}
                  >
                    {offset.label}
                  </Option>
                )
              })}
            </Select>
          </div>
        </Sheet>
      </Drawer>
    </>
  )
}

export default MenuContainer

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
  marginTop: '4px',
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
  border: '1px solid #ededed26',
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

const gmtOffsets = [
  { label: 'GMT-12:00 (Baker Island, Howland Island)', value: 'Etc/GMT+12' },
  { label: 'GMT-11:00 (Niue, Pago Pago)', value: 'Etc/GMT+11' },
  { label: 'GMT-10:00 (Hawaii)', value: 'Etc/GMT+10' },
  { label: 'GMT-09:00 (Alaska)', value: 'Etc/GMT+9' },
  { label: 'GMT-08:00 (Pacific Time, Los Angeles)', value: 'Etc/GMT+8' },
  { label: 'GMT-07:00 (Mountain Time, Denver)', value: 'Etc/GMT+7' },
  { label: 'GMT-06:00 (Central Time, Chicago)', value: 'Etc/GMT+6' },
  { label: 'GMT-05:00 (Eastern Time, New York)', value: 'Etc/GMT+5' },
  { label: 'GMT-04:00 (Atlantic Time, Chile)', value: 'Etc/GMT+4' },
  { label: 'GMT-03:00 (Argentina, Buenos Aires)', value: 'Etc/GMT+3' },
  { label: 'GMT-02:00 (South Georgia/Sandwich Is.)', value: 'Etc/GMT+2' },
  { label: 'GMT-01:00 (Azores, Cape Verde)', value: 'Etc/GMT+1' },
  { label: 'GMT+00:00 (UTC, London)', value: 'Etc/GMT' },
  { label: 'GMT+01:00 (Central European Time, Berlin)', value: 'Etc/GMT-1' },
  { label: 'GMT+02:00 (Eastern European Time, Cairo)', value: 'Etc/GMT-2' },
  { label: 'GMT+03:00 (Moscow, Nairobi)', value: 'Etc/GMT-3' },
  { label: 'GMT+04:00 (Dubai, Samara)', value: 'Etc/GMT-4' },
  { label: 'GMT+05:00 (Pakistan, Karachi)', value: 'Etc/GMT-5' },
  { label: 'GMT+06:00 (Bangladesh, Dhaka)', value: 'Etc/GMT-6' },
  { label: 'GMT+07:00 (Thailand, Bangkok)', value: 'Etc/GMT-7' },
  { label: 'GMT+08:00 (China, Beijing)', value: 'Etc/GMT-8' },
  { label: 'GMT+09:00 (Japan, Tokyo)', value: 'Etc/GMT-9' },
  { label: 'GMT+10:00 (Australia, Sydney)', value: 'Etc/GMT-10' },
  { label: 'GMT+11:00 (Solomon Islands, New Caledonia)', value: 'Etc/GMT-11' },
  { label: 'GMT+12:00 (Fiji, New Zealand)', value: 'Etc/GMT-12' },
  { label: 'GMT+13:00 (Tonga, Apia)', value: 'Etc/GMT-13' },
  { label: 'GMT+14:00 (Line Islands, Kiritimati)', value: 'Etc/GMT-14' }
]
