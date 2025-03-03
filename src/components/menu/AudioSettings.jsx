import React from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import ShortUniqueId from 'short-unique-id'
import soundData from '../../database/soundData.js'
import { useConfig } from '../../hooks/stateManager.jsx'
import { useAudio } from '../../hooks/useAudio.jsx'
import VolumeSlider from './VolumeSlider.jsx'

const AudioSettings = ({ formLabel, placeholderText, audioType, styles }) => {
  const { selectedStyles, selectStyles, optionsStyles } = styles
  const uid = new ShortUniqueId({ length: 5 })
  const { loading, config, setConfigValue } = useConfig()
  const { playAudio } = useAudio()

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span className='optionsLabel'>{formLabel ? formLabel : 'Audio'}</span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16
        }}
      >
        <Select
          variant='plain'
          placeholder={
            placeholderText ? placeholderText : 'Seleccionar audio de respawn'
          }
          sx={[
            { width: '50% !important' },
            selectStyles,
            Boolean(config[audioType + 'File']) ? selectedStyles : {}
          ]}
          onChange={(event, value) => {
            setConfigValue(audioType + 'File', value)
          }}
          value={config[audioType + 'File']}
        >
          {soundData[audioType].map((offset) => {
            return (
              <Option key={uid.rnd()} value={offset.value} sx={optionsStyles}>
                {offset.label}
              </Option>
            )
          })}
        </Select>

        <VolumeSlider audioType={audioType} />

        <button
          className='formButtons cancelButton'
          style={{
            width: '15%',
            maxHeight: 30,
            minHeight: 30,
            fontSize: 17
          }}
          type='button'
          onClick={() => {
            playAudio(audioType)
          }}
        >
          Probar
        </button>
      </div>
    </div>
  )
}

export default AudioSettings
