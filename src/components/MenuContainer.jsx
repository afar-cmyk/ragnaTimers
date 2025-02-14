import React, { useState, useEffect } from 'react'
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
import {
  timeZoneAtom,
  respawnSoundAtom,
  variableSoundAtom
} from '../hooks/stateManager.jsx'
import ShortUniqueId from 'short-unique-id'
import {
  addRespawnSound,
  addVariableSound,
  editTimeZone,
  editRespawnSound,
  editVariableSound
} from '../database/dbService.js'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../database/db.js'
import gmtData from '../database/gmtData.js'
import soundData from '../database/soundData.js'

const MenuContainer = () => {
  const [open, setOpen] = useState(false)
  const [timeZone] = useAtom(timeZoneAtom)
  const [respawnSound, setRespawnSound] = useAtom(respawnSoundAtom)
  const [variableSound, setVariableSound] = useAtom(variableSoundAtom)
  const defaultRespawnSound = { respawnFile: 'respawn_1', volume: 1 }
  const defaultVariableSound = { variableFile: 'variable_1', volume: 1 }

  const uid = new ShortUniqueId({ length: 5 })

  const dbConfig = useLiveQuery(async () => {
    return await db.config.toArray()
  }, [])

  const dbTimeZone = dbConfig?.find((item) => item.id === 1)
  const dbRespawnSound = dbConfig?.find((item) => item.id === 2)
  const dbVariableSound = dbConfig?.find((item) => item.id === 3)

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(inOpen)
  }

  useEffect(() => {
    const initializeRespawnSound = async () => {
      if (!respawnSound) {
        setRespawnSound(defaultRespawnSound)
        setVariableSound(defaultVariableSound)
      }

      if (dbConfig?.length === 1) {
        await addRespawnSound(defaultRespawnSound)
      }

      if (dbConfig?.length === 2) {
        await addVariableSound(defaultVariableSound)
      }
    }

    initializeRespawnSound()
  }, [dbConfig])

  async function handleAudio(audioClass) {
    const audioContext = require.context('../sounds/', true, /\.mp3$/)
    let audioPath =
      audioClass === 'respawn'
        ? await audioContext(`./${dbRespawnSound?.respawnFile}.mp3`)
        : await audioContext(`./${dbVariableSound?.variableFile}.mp3`)

    let audio = new Audio(audioPath)

    audio.play()
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
            <span className='optionsLabel'>Zona horaria del servidor:</span>
            <Select
              variant='plain'
              placeholder='Seleccionar Zona Horaria'
              sx={[selectStyles, Boolean(timeZone) ? selectedStyles : {}]}
              onChange={(event, value) => {
                editTimeZone(value)
              }}
              value={dbTimeZone?.timeZone || timeZone}
            >
              {gmtData.map((offset) => {
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

          <div>
            <span className='optionsLabel'>Audio de respawn:</span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
                gap: 16
              }}
            >
              <Select
                variant='plain'
                placeholder='Seleccionar audio de respawn'
                sx={[
                  { width: '50% !important' },
                  selectStyles,
                  Boolean(respawnSound) ? selectedStyles : {}
                ]}
                onChange={(event, value) => {
                  editRespawnSound(value, 1)
                  setRespawnSound({ respawnFile: value, volume: 1 })
                }}
                value={
                  dbRespawnSound?.respawnFile ||
                  respawnSound?.respawnFile ||
                  defaultRespawnSound.respawnFile
                }
              >
                {soundData['respawn'].map((offset) => {
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

              <button
                className='formButtons cancelButton'
                style={{
                  width: '15%',
                  maxHeight: 31,
                  minHeight: 31,
                  fontSize: 17
                }}
                type='button'
                onClick={() => {
                  handleAudio('respawn')
                }}
              >
                Probar
              </button>
            </div>
          </div>

          <div>
            <span className='optionsLabel'>Audio de respawn variable:</span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
                gap: 16
              }}
            >
              <Select
                variant='plain'
                placeholder='Seleccionar audio de respawn variable'
                sx={[
                  { width: '50% !important' },
                  selectStyles,
                  Boolean(variableSound) ? selectedStyles : {}
                ]}
                onChange={(event, value) => {
                  editVariableSound(value, 1)
                  setVariableSound({ variableFile: value, volume: 1 })
                }}
                value={
                  dbVariableSound?.variableFile ||
                  variableSound?.variableFile ||
                  defaultVariableSound.variableFile
                }
              >
                {soundData['variable'].map((offset) => {
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

              <button
                className='formButtons cancelButton'
                style={{
                  width: '15%',
                  maxHeight: 31,
                  minHeight: 31,
                  fontSize: 17
                }}
                type='button'
                onClick={() => {
                  handleAudio('variable')
                }}
              >
                Probar
              </button>
            </div>
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
