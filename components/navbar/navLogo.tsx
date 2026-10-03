"use client";

import Link from "next/link";
import { Store } from "lucide-react";

export function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
    >
      <Store className="w-5 h-5" />
    </Link>
  );
}
