"use client";

import { MobileNav } from "./mobileNav";
import { NavUserActions } from "./navActions";
import { NavLinks } from "./navLinks";
import { NavLogo } from "./navLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLogo />

        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <NavUserActions />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
