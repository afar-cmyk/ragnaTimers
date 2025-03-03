import React from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import { useConfig } from '../../hooks/stateManager.jsx'
import gmtData from '../../database/gmtData.js'
import ShortUniqueId from 'short-unique-id'

const ServerTimezoneSettings = ({ styles }) => {
  const { selectedStyles, selectStyles, optionsStyles } = styles
  let { config, setConfigValue } = useConfig()
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
        sx={[
          selectStyles,
          Boolean(config['serverTimeZone']) ? selectedStyles : {}
        ]}
        onChange={(event, value) => {
          setConfigValue('serverTimeZone', value)
        }}
        value={config['serverTimeZone']}
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

export default ServerTimezoneSettings
