import React, { useState, useEffect } from 'react'
import { TbMusicOff } from 'react-icons/tb'
import { useConfig } from '../../hooks/stateManager.jsx'
import { Box } from '@mui/joy'

const VolumeSlider = ({ audioType }) => {
  const { config, setConfigValue } = useConfig()
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(1) // Estado local ya no es necesario para persistencia
  const steps = 10
  const startColor = { r: 233, g: 84, b: 118, a: 0.5 }
  const endColor = { r: 43, g: 182, b: 82, a: 0.7 }
  const mutedRed = '#ab2b499c'
  const mutedRedBackground = '#71485166'
  const normalButtonBackground = '#eeeeee29'
  const normalButtonHoverBackground = '#eeeeee30'
  const normalButtonActiveBackground = '#eeeeee1a'
  const normalButtonTextColor = '#ababab'
  const normalButtonHoverTextColor = '#cccccc'

  const generateColorGradient = React.useMemo(() => {
    const gradientColors = []
    for (let i = 0; i < steps; i++) {
      const ratio = i / (steps - 1)
      const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio)
      const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio)
      const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio)
      const alphaRatio = -4 * (ratio - 0.5) ** 2 + 1
      const a =
        startColor.a + (endColor.a - startColor.a) * ratio + 0.2 * alphaRatio
      const clampedAlpha = Math.min(Math.max(a, startColor.a), 1)
      gradientColors.push(`rgba(${r}, ${g}, ${b}, ${clampedAlpha.toFixed(2)})`)
    }
    return gradientColors
  }, [steps, startColor, endColor])

  const colors = generateColorGradient

  const getStepColor = React.useCallback(
    (stepIndex) =>
      stepIndex < 0 || stepIndex >= colors.length
        ? 'transparent'
        : colors[stepIndex],
    [colors]
  )

  const handleStepClick = React.useCallback((stepValue) => {
    setVolume(stepValue)
    setIsMuted(false) // Unmute when volume is adjusted
  }, [])

  const getActiveSteps = React.useCallback(
    () => Math.round(volume * steps),
    [volume, steps]
  )

  const activeStepsCount = getActiveSteps()

  useEffect(() => {
    if (config && config[audioType + 'Volume'] !== undefined) {
      setVolume(config[audioType + 'Volume'])
      setIsMuted(config[audioType + 'Volume'] === 0)

      // Cargar previousVolume desde la configuración al inicio
      const storedPreviousVolume = config[audioType + 'PreviousVolume']
      if (storedPreviousVolume !== undefined) {
        setPreviousVolume(storedPreviousVolume)
      } else if (config[audioType + 'Volume'] > 0) {
        // Si no hay previousVolume y el volumen inicial es > 0, usar el volumen inicial como previousVolume inicial
        setPreviousVolume(config[audioType + 'Volume'])
      } else {
        setPreviousVolume(1) // Valor por defecto si no hay nada en la configuración y volumen inicial es 0
      }
    }
  }, [config, audioType])

  const handleMuteClick = () => {
    if (isMuted) {
      // Desilenciar: Restaurar previousVolume desde la configuración
      setIsMuted(false)
      setConfigValue(`${audioType}Volume`, previousVolume).then(() => {
        setVolume(previousVolume)
      })
    } else {
      // Silenciar: Guardar volumen actual como previousVolume en la configuración y establecer volumen a 0
      setConfigValue(`${audioType}PreviousVolume`, volume).then(() => {
        // Guardar previousVolume en config
        setPreviousVolume(volume) // Actualizar estado local para consistencia inmediata
        setIsMuted(true)
        setConfigValue(`${audioType}Volume`, 0).then(() => {
          setVolume(0)
        })
      })
    }
  }

  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <button
        className={`mute-button_${isMuted ? 'enabled' : 'default'}`}
        type='button'
        onClick={handleMuteClick}
      >
        <TbMusicOff
          className={`mute-icon_${isMuted ? 'enabled' : 'default'}`}
        />
      </button>

      <Box
        sx={{
          display: 'flex',
          height: '20px',
          borderRadius: '4px',
          background: '#444444',
          overflow: 'hidden',
          width: '200px',
          border: '1px solid #333333',
          ':hover': {
            border: '1px solid #ededed26'
          }
        }}
      >
        {Array.from({ length: steps }).map((_, index) => {
          const stepValue = (index + 1) / steps
          const isActive = index < activeStepsCount && volume > 0

          return (
            <Box
              key={index}
              onClick={() =>
                setConfigValue(`${audioType}Volume`, stepValue).then(() =>
                  handleStepClick(stepValue)
                )
              }
              sx={{
                flex: 1,
                height: '100%',
                backgroundColor: isActive
                  ? getStepColor(index)
                  : config[audioType + 'Volume'] <= 0
                  ? '#1a1a1acc'
                  : '#2e2e2e',
                cursor: 'pointer',
                borderRight:
                  index === steps - 1
                    ? 'none'
                    : config[audioType + 'Volume'] <= 0
                    ? '1px solid #555555'
                    : '1px solid rgba(85, 85, 85, 0.5)',
                boxSizing: 'border-box',
                ':hover': {
                  filter: 'brightness(1.6)'
                }
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default VolumeSlider

// hacer algo al respecto de boton para silenciar en su estado mute para reflejar el hover
