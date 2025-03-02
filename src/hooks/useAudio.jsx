import { useCallback } from 'react'
import { useConfig } from './stateManager.jsx'

export function useAudio() {
  const { config } = useConfig()
  const audioContext = require.context('../sounds/', true, /\.mp3$/)
  const playAudio = useCallback(
    async (audioClassOrFile) => {
      let audioPath
      let isFileName

      if (audioClassOrFile === 'respawn' || audioClassOrFile === 'variable') {
        isFileName = false
        audioPath = await audioContext(
          `./${config[audioClassOrFile + 'File']}.mp3`
        )
      } else {
        isFileName = true
        audioPath = await audioContext(`./${audioClassOrFile}.mp3`)
      }

      let audio = new Audio(audioPath)
      audio.volume = isFileName ? 1 : config[audioClassOrFile + 'Volume']
      audio.play()
    },
    [config]
  )

  return { playAudio }
}
