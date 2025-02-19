import Dexie from 'dexie'

export const db = new Dexie('localDB')
db.version(6).stores({
  userSelection: '++id, mvpName, mapName, selectedDate, timing',
  customMVP: '++id, mvpName, mapName, customRespawn, customVariable',
  config: '++id, timeZone'
})

export const configDb = new Dexie('configDB')
configDb.version(1).stores({ settings: 'key,value' })
