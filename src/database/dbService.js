import { db } from './db'

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
    await db.config.add({ respawnSound })
    console.log(`config respawn audio added: ${respawnSound}`)
  } catch (error) {
    console.error(error, `failed to add respawn audio data: ${respawnSound}`)
  }
}

export const editRespawnSound = async (selectedFile, selectedVolume) => {
  await db.config.update(2, {
    respawnSound: selectedFile,
    volume: selectedVolume
  })
}
