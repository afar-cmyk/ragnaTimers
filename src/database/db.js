import Dexie from 'dexie'

export const db = new Dexie('localDB')
db.version(4).stores({
  userSelection: '++id, mvpName, mapName, selectedDate, timing',
  customMVP: '++id, mvpName, mapName, customRespawn, customVariable',
  config: '++id, timeZone, respawnSound, variableSound'
})

// respawnFile, volume
// VariableFile, volume
