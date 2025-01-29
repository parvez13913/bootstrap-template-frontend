"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItem = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative">
      <Link
        href={href}
        className="text-white hover:text-white/90 transition-colors group"
      >
        {label}
        <span
          className={`absolute inset-x-0 -top-5 h-[1px] bg-white transition-transform ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>
    </li>
  );
};
