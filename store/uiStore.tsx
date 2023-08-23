import { create } from "zustand";

interface Product {
  id: string | undefined;
  title: string;
  price: string;
  img: string;
  category: string;
  link: string;
}

interface Category {
  title: string;
}

interface uiState {
  popup: Product | null;
  products: Product[];
  categories: Category[];
  categorySelected: string;
  selectPopup: (productSelected: Product | null) => void;
  setProducts: (products: Product[]) => void;
  getCategoties: () => void;
  setCategoty: (categorySelected: string) => void;
}

export const useUIStore = create<uiState>((set) => ({
  popup: null,
  products: [],
  categories: [],
  categorySelected: "Javascript",
  selectPopup: (productSelected) =>
    set((state) => ({ popup: productSelected })),
  setProducts: (products) => set((state) => ({ products })),
  getCategoties: () =>
    set((state) => ({
      ...state,
      categories: state.products
        .map((product) => ({ title: product.category }))
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        }),
    })),
  setCategoty: (categorySelected) => set((state) => ({ categorySelected })),
}));
