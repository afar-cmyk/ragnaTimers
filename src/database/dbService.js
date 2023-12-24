import { db } from './db'

export const addData = async (mvpName, mapName, selectedDate) => {
  try {
    await db.userSelection.add({
      mvpName,
      mapName,
      selectedDate
    })
    console.log(`added data: ${mvpName}, ${mapName}, ${selectedDate}`)
  } catch (error) {
    console.error(error, `failed to add data: ${mvpName}, ${mapName}, ${selectedDate}`)
  }
}