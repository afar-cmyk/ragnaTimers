import { create } from 'zustand'

export const useGlobalState = create((set) => ({
  globalSwitchState: 'mvp',
  setGlobalSwitchState: (state) => set({ globalSwitchState: state })
}))
