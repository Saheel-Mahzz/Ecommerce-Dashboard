"use client";
import { useCartStore } from "@/stores/useCartStore";
import { Product } from "../types/product.types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AddToCartButton({ product }: { product: Product }) {
  const { products, addProduct } = useCartStore();
  const cartProductIds = new Set(products.map((p) => p.id));
  const isInCart = cartProductIds.has(product.id);

  return (
    <div className={isInCart ? "cursor-not-allowed" : ""}>
      <Button
        disabled={isInCart}
        className="w-full cursor-pointer"
        onClick={() => {
          addProduct(product);
          toast.success(`${product.title} added to cart!`);
        }}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </Button>
    </div>
  );
}
