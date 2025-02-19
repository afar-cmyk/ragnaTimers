import { configDb } from '../database/db'
import { updateSettings } from '../database/dbService'
import { useConfig } from './stateManager.jsx'

export const defaultSettings = {
  timeZone: 'Etc/GMT+5',
  respawnFile: 'respawn_1',
  respawnVolume: '1',
  variableFile: 'variable_1',
  variableVolume: '1'
}

export const useDefaultSettings = () => {
  const { setConfigValues } = useConfig()

  const setDefaultSettings = async () => {
    const dbSettings = await configDb.settings.toArray()
    if (dbSettings.length === 0) {
      await updateSettings(defaultSettings)
      console.log('DB: Default settings added')
    }
    if (localStorage.length === 0) {
      await setConfigValues(defaultSettings)
      console.log('Atom: Default settings added')
    }
  }

  return { setDefaultSettings }
}
