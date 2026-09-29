import { Product } from "@/modules/products/types/product.types";
import { create } from "zustand";

interface ShoppingCart {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct?: (product: Product) => void;
  updateProduct?: (product: Product) => void;
  getAllProducts?: () => void;
  total?: () => number;
}

export const useCardStore = create<ShoppingCart>((set, get) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  // removeProduct:(product)=>set((state)=>({
  //     const productId = product._id
  //     const newProductList = state.products.filter((prod) => prod._id !== productId),
  //     products:[...newProductList]
  // }))
  removeProduct: (product) =>
    set((state) => ({
      products: state.products.filter((prod) => prod._id !== product._id),
    })),
  getAllProducts: () => get().products,
  //   total: get().products.reduce((acc, curr) => {
  //     return acc + Number(curr[price] || 0);
  //   }, 0),

  total: () =>
    get().products.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0),
}));
