import { create } from 'zustand'


interface Product {
  id: string | undefined;
  title: string;
  price: string;
  img: string;
  lang: string
}

interface uiState {
  popup: Product | null
  selectPopup: (productSelected: Product | null) => void
}

export const useUIStore = create<uiState>((set) => ({
  popup: null,
  selectPopup: (productSelected) => set((state) => ({ popup: productSelected })),
}))