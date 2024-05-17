import { create } from 'zustand'

export const useGlobalState = create((set) => ({
  globalSwitchState: '',
  setMvpState: () => set({ globalSwitchState: 'mvp' }),
  setMiniState: () => set({ globalSwitchState: 'mini' })
  // setGlobalSwitchState: (state) => set({ globalSwitchState: state })
}))
