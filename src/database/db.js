import Dexie from 'dexie'

export const db = new Dexie('localDB')
db.version(2).stores({
  userSelection: '++id, mvpName, mapName, selectedDate, timing',
  customMVP: '++id, mvpName, mapName, customRespawn, customVariable'
})
