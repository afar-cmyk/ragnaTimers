import { configDb } from '../database/db'
import { updateSettings } from '../database/dbService'
import { useConfig } from './stateManager.jsx'

export const useDefaultSettings = () => {
  const { setConfigValues } = useConfig()

  const getCurrentGMT = () => {
    const gmtOffset = new Date().getTimezoneOffset()
    const gmtNumber = (gmtOffset >= 0 ? '+' : '-') + Math.abs(gmtOffset / 60)
    return `Etc/GMT${gmtNumber}`
  }

  const defaultSettings = {
    localTimeZone: getCurrentGMT(),
    serverTimeZone: getCurrentGMT(),
    respawnFile: 'respawn_1',
    respawnVolume: '1',
    variableFile: 'variable_1',
    variableVolume: '1'
  }

  const setDefaultSettings = async () => {
    const dbSettings = await configDb.settings.toArray()
    if (dbSettings.length === 0) {
      await updateSettings(defaultSettings)
      localStorage.clear()
      console.log('DB: Default settings added')
    }
    if (localStorage.length === 0) {
      await setConfigValues(defaultSettings)
      console.log('Atom: Default settings added')
    }
  }

  return { setDefaultSettings }
}
