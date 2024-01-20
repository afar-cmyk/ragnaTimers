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
