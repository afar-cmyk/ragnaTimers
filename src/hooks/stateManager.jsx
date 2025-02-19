import { useEffect, useState } from 'react'
import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { updateSettings } from '../database/dbService'

export const timeZoneAtom = atom('')
export const switchStateAtom = atom('')

export const respawnSoundAtom = atom('')
export const variableSoundAtom = atom('')

export const respawnVolumeAtom = atom('')
export const variableVolumeAtom = atom('')

export const configAtom = atomWithStorage('config', {})

// dbConfig hook
export const useConfig = () => {
  const [config, setConfig] = useAtom(configAtom)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (Object.keys(config).length > 0) {
      setLoading(false)
    }
  }, [config])

  const setConfigValue = async (key, value) => {
    try {
      await updateSettings({ [key]: value })
      setConfig((prevConfig) => ({ ...prevConfig, [key]: value }))
    } catch (error) {
      console.error(`Error updating ${key}:`, error)
    }
  }

  const setConfigValues = async (newValues) => {
    try {
      await updateSettings(newValues)
      setConfig((prevConfig) => ({ ...prevConfig, ...newValues }))
    } catch (error) {
      console.error('Error updating multiple config values:', error)
    }
  }

  return { config, loading, setConfigValue, setConfigValues }
}
