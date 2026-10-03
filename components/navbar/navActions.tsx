"use client";
import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useCartStore } from "@/stores/useCartStore";
import { Badge } from "../ui/badge";
import { useState } from "react";
import Model from "../Model";
import LoginForm from "@/modules/auth/loginForm";
import { Button } from "../ui/button";

export function NavUserActions() {
  const { isLoggedIn } = useAuthStore();
  const { products } = useCartStore();
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const productCount = products.reduce(
    (acc, item) => acc + Number(item.quantity || 1),
    0,
  );
  const handleAuthentication = () => {
    if (!isLoggedIn) {
      setOpenAuth(true);
      return;
    }
  };
  const onAuthSuccess = () => {
    setOpenAuth(false);
  };
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/shopping-cart"
        className="relative p-2 text-muted-foreground hover:text-foreground"
      >
        <ShoppingBag className="w-6 h-6" />

        <Badge
          variant="destructive"
          className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-[14px] font-bold"
        >
          {productCount}
        </Badge>
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
            <User className="w-4 h-4 text-foreground" />
          </div>
        </div>
      ) : (
        <Button
          className="cursor-pointer"
          onClick={() => handleAuthentication()}
        >
          Login
        </Button>
      )}
      <Model
        description="Please enter your credentials details!"
        isOpen={openAuth}
        onOpenChange={setOpenAuth}
        title="Login"
      >
        <LoginForm onAuthSuccess={onAuthSuccess} />
      </Model>
    </div>
  );
}
