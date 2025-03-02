import React, { useState, useEffect } from 'react'
import { TbMusicOff } from 'react-icons/tb'
import { useConfig } from '../../hooks/stateManager.jsx'

const VolumeSlider = ({ audioType }) => {
  const { config, setConfigValue } = useConfig()
  const [volume, setVolume] = useState(1)
  const steps = 10
  const startColor = { r: 233, g: 84, b: 118, a: 0.5 }
  const endColor = { r: 43, g: 182, b: 82, a: 0.7 }

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
  }, [])

  const getActiveSteps = React.useCallback(
    () => Math.round(volume * steps),
    [volume, steps]
  )

  const activeStepsCount = getActiveSteps()

  useEffect(() => {
    if (config && config[audioType + 'Volume'] !== undefined) {
      setVolume(config[audioType + 'Volume'])
    }
  }, [config, audioType])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <button
        className='formButtons cancelButton'
        style={{
          width: '30px',
          height: '30px',
          fontSize: 17,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border:
            config[audioType + 'Volume'] <= 0 || volume <= 0
              ? '1px solid #ab2b499c'
              : 'none',
          background:
            config[audioType + 'Volume'] <= 0 || volume <= 0
              ? '#71485166'
              : '#eeeeee29',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
        type='button'
        onClick={() => {
          setConfigValue(`${audioType}Volume`, 0).then(() => setVolume(0))
        }}
      >
        <TbMusicOff
          style={{
            position: 'relative',
            top: '1px',
            fontSize: '18px',
            color:
              config[audioType + 'Volume'] <= 0 || volume <= 0
                ? '#ab2b499c'
                : '#ababab'
          }}
        />
      </button>

      <div
        style={{
          display: 'flex',
          height: '20px',
          borderRadius: '4px',
          background: '#444444',
          overflow: 'hidden',
          width: '200px',
          border:
            config[audioType + 'Volume'] <= 0
              ? '1px solid #333333'
              : '1px solid #ededed26'
        }}
      >
        {Array.from({ length: steps }).map((_, index) => {
          const stepValue = (index + 1) / steps
          const isActive = index < activeStepsCount && volume > 0

          return (
            <div
              key={index}
              onClick={() =>
                setConfigValue(`${audioType}Volume`, stepValue).then(() =>
                  handleStepClick(stepValue)
                )
              }
              style={{
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
                boxSizing: 'border-box'
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default VolumeSlider
