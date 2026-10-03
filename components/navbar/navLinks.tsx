"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "Products", href: "/products" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
