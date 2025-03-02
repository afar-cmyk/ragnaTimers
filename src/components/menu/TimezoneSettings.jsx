import React from 'react'
import { useAtom } from 'jotai'
import { useLiveQuery } from 'dexie-react-hooks'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import { db } from '../../database/db.js'
import { editTimeZone } from '../../database/dbService.js'
import { timeZoneAtom } from '../../hooks/stateManager.jsx'
import gmtData from '../../database/gmtData.js'
import ShortUniqueId from 'short-unique-id'

const TimezoneSettings = ({ styles }) => {
  //TODO comunicar el selector de GTM con la base de datos
  // y usar esos datos en el componente del reloj, cambiar la version de la app
  const { selectedStyles, selectStyles, optionsStyles } = styles
  const [timeZone] = useAtom(timeZoneAtom)

  const dbTimeZone = dbConfig?.find((item) => item.id === 1)

  const dbConfig = useLiveQuery(async () => {
    return await db.config.toArray()
  }, [])

  const uid = new ShortUniqueId({ length: 5 })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginBottom: 16
      }}
    >
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
            <Option key={uid.rnd()} value={offset.value} sx={optionsStyles}>
              {offset.label}
            </Option>
          )
        })}
      </Select>
    </div>
  )
}

export default TimezoneSettings
