"use client";

import { NavUserActions } from "./navActions";
import { NavLinks } from "./navLinks";
import { NavLogo } from "./navLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLogo />
        <NavLinks />
        <NavUserActions />
      </div>
    </header>
  );
}
