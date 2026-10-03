"use client";
import { useCartStore } from "@/stores/useCartStore";
import { Product } from "../types/product.types";
import ProductCard from "./productCard";

export function ProductGrid({ products }: { products: Product[] }) {
  const allProducts = useCartStore((state) => state.products);
  const cartProductIds = new Set(allProducts.map((p) => p.id));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
      {products.map((product) => {
        const isInCart = cartProductIds.has(product.id);
        return (
          <ProductCard key={product.id} product={product} isInCart={isInCart} />
        );
      })}
    </div>
  );
}
