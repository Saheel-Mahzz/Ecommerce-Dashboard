"use client";
import { useCartStore } from "@/stores/useCartStore";
import { Product } from "../types/product.types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import Model from "@/components/Model";
import LoginForm from "@/modules/auth/loginForm";

export default function AddToCartButton({ product }: { product: Product }) {
  const { products, addProduct } = useCartStore();
  const { isLoggedIn } = useAuthStore();
  const cartProductIds = new Set(products.map((p) => p.id));
  const isInCart = cartProductIds.has(product.id);
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast.error("Please login to access your cart!");
      setOpenAuth(true);
      return;
    }
    addProduct(product);
    toast.success(`${product.title} added to cart!`);
  };
  const onAuthSuccess = () => {
    setOpenAuth(false);
  };
  return (
    <>
      <div className={isInCart ? "cursor-not-allowed" : ""}>
        <Button
          disabled={isInCart}
          className="w-full cursor-pointer"
          onClick={() => {
            handleAddToCart();
          }}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </div>
      <Model
        description="Please enter your credentials details!"
        isOpen={openAuth}
        onOpenChange={setOpenAuth}
        title="Login"
      >
        <LoginForm onAuthSuccess={onAuthSuccess} />
      </Model>
    </>
  );
}
