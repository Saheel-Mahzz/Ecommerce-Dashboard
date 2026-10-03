"use client";

import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavUserActions } from "./NavUserActions";

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
