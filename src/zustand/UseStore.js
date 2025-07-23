import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  carCards: [],
  inc: () => set((state) => ({ count: state.count + 1 })),
  createCar: (payload) =>
    set((state) => {
      return { carCards: [...state.carCards, payload] };
    }),
  removeItem: (payload) => set((state) => {
    return {carCards: state.carCards.filter((item) => item.id !== payload.id)}
  })
 
  
}));
