import { create } from "zustand";

export const useHumanStore = create((set) => ({
  humans: [],
  pickedHuman: '',
  setHumans: (data) => set(() => { 
    return ({ humans: data });
  }),
  setPickedHuman: (number) => set((state) => {

    const pickedNumber = Math.floor(Math.random() * number)
    const pickedHuman = state.humans[pickedNumber]

    return ({pickedHuman: pickedHuman})
  }),
}));