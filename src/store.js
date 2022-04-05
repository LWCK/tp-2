import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set) => ({
    panier: 0,
    increasePanier: () => set((state) => ({ panier: state.panier + 1 })),
    decreasePanier: () => set((state) => ({ panier: state.panier - 1 })),
    removeAllPanier: () => set((state) => ({ panier: 0 })),
    id_product: 0,
  }))
);

export default useStore;
