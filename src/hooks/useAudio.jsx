import { useCallback } from 'react'
import { useConfig } from './stateManager.jsx'

export function useAudio() {
  const { config } = useConfig()
  const audioContext = require.context('../sounds/', true, /\.mp3$/)
  const playAudio = useCallback(
    async (audioClassOrFile) => {
      let audioPath

      if (audioClassOrFile === 'respawn' || audioClassOrFile === 'variable') {
        audioPath = await audioContext(
          `./${config[audioClassOrFile + 'File']}.mp3`
        )
      } else {
        audioPath = await audioContext(`./${audioClassOrFile}.mp3`)
      }

      let audio = new Audio(audioPath)
      audio.play()
    },
    [config]
  )

  return { playAudio }
}
