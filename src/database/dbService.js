import { db, configDb } from './db'

export const addData = async (mvpName, mapName, selectedDate, timing) => {
  try {
    await db.userSelection.add({
      mvpName,
      mapName,
      selectedDate,
      timing
    })
    console.log(
      `added data: ${mvpName}, ${mapName}, ${selectedDate}, ${timing}`
    )
  } catch (error) {
    console.error(
      error,
      `failed to add data: ${mvpName}, ${mapName}, ${selectedDate}, ${timing}`
    )
  }
}

export const removeTiming = async (id) => {
  await db.userSelection.update(id, { timing: 'false' })
}

export const deleteData = async (id) => {
  await db.userSelection.delete(id)
}

export const addCustomMVP = async (
  mvpName,
  mapName,
  customRespawn = 0,
  customVariable = 0
) => {
  try {
    await db.customMVP.add({ mvpName, mapName, customRespawn, customVariable })
    console.log(
      `added custom MVP: ${mvpName}, ${mapName}, ${customRespawn}, ${customVariable}`
    )
  } catch (error) {
    console.error(
      error,
      `failed to add custom MVP: ${mvpName}, ${mapName}, ${customRespawn}, ${customVariable}`
    )
  }
}

export const addTimeZone = async (timeZone) => {
  try {
    await db.config.add({ timeZone })
    console.log(`config server time zone added: ${timeZone}`)
  } catch (error) {
    console.error(error, `failed to add config: ${timeZone}`)
  }
}

export const editTimeZone = async (value) => {
  await db.config.update(1, { timeZone: value })
}

export const addRespawnSound = async (respawnSound) => {
  try {
    await db.config.add(respawnSound)
    console.log(`DB: default Respawn audio data added.`)
  } catch (error) {
    console.error(error, `DB: failed to add default Respawn audio data.`)
  }
}

export const editRespawnSound = async (selectedFile, selectedVolume) => {
  await db.config.update(2, {
    respawnFile: selectedFile,
    volume: selectedVolume
  })
}

export const addVariableSound = async (variableSound) => {
  try {
    await db.config.add(variableSound)
    console.log(`DB: default Variable audio data added.`)
  } catch (error) {
    console.error(error, `DB: failed to add default Variable audio data.`)
  }
}

export const editVariableSound = async (selectedFile, selectedVolume) => {
  await db.config.update(3, {
    variableFile: selectedFile,
    volume: selectedVolume
  })
}

///////////////    Config DB   ////////////////

export const getSettings = async () => {
  return (await configDb.settings.toArray()).reduce((obj, { key, value }) => {
    obj[key] = value
    return obj
  }, {})
}

export const updateSettings = async (updates) => {
  const entries = Object.entries(updates).map(([key, value]) => ({
    key,
    value
  }))
  await configDb.settings.bulkPut(entries)
}
