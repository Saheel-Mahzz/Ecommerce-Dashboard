"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { NavLinks } from "./navLinks";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-left mb-6">
          <SheetTitle className="font-bold text-lg">Navigation</SheetTitle>
        </SheetHeader>
        <NavLinks
          className="flex flex-col gap-4 text-lg"
          onItemClick={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
