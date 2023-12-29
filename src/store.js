import { create } from 'zustand'

let cardsState = (set) => ({
  variable: false,
  toggleState: () => set((state) => ({ variable: !state.variable }))
})

export const useCardsState = create(cardsState)
