"use client";

import Link from "next/link";
import { ShoppingBag, User, LogOut } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useCartStore } from "@/stores/useCartStore";
// Yedi cart store chhaina bhane itemsCount mock variable use garna sakincha

export function NavUserActions() {
  const { isLoggedIn } = useAuthStore();
  // Cart items count
  //   const cartItems = useCartStore((state) => state.items || []);
  //   const totalCartCount = cartItems.reduce(
  //     (acc, item) => acc + item.quantity,
  //     0,
  //   );

  return (
    <div className="flex items-center gap-4">
      {/* Cart Icon with Red Count Badge */}
      <Link
        href="/cart"
        className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
          {/* {totalCartCount} */} 0
        </span>
      </Link>

      {/* Auth State Switch */}
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          {/* Avatar Icon */}
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
            <User className="w-4 h-4 text-foreground" />
          </div>

          {/* Quick Logout Button */}
        </div>
      ) : (
        <Link
          href="/login"
          className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Login
        </Link>
      )}
    </div>
  );
}
