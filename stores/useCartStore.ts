import { Product } from "@/modules/products/types/product.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShoppingCart {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct?: (product: Product) => void;
  updateProduct?: (productId: string, quantity: number) => void;
  getAllProducts?: () => void;
  total?: () => number;
}

export const useCartStore = create<ShoppingCart>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),

      removeProduct: (product) =>
        set((state) => ({
          products: state.products.filter((prod) => prod._id !== product._id),
        })),
      updateProduct: (productId, quantity) =>
        set((state) => ({
          products: state.products.map((prod) =>
            prod._id === productId ? { ...prod, quantity: quantity } : prod,
          ),
        })),

      getAllProducts: () => get().products,

      total: () =>
        get().products.reduce(
          (acc, curr) =>
            acc + (Number(curr.price) || 0) * (Number(curr.quantity) || 1),
          0,
        ),
    }),
    {
      name: "shopping-cart",
    },
  ),
);
