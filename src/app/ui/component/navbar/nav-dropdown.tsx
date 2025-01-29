"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const NavDropdown = ({
  label,
  items,
  isOpen,
  setOpenDropdown,
}: {
  label: string;
  items: { href: string; label: string }[];
  isOpen: boolean;
  setOpenDropdown: (dropdown: string | null) => void;
}) => {
  return (
    <li className="relative dropdown">
      {/* Dropdown Toggle Button */}
      <button
        className="text-white hover:text-white/90 focus:outline-none flex items-center transition-colors group"
        onClick={() => setOpenDropdown(isOpen ? null : label)}
      >
        {label}
        <ChevronDown />
        <span className="absolute inset-x-0 -top-5 h-[1px] bg-white scale-x-0 transition-transform group-hover:scale-x-100" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-[#ffff] rounded-sm shadow-lg z-10">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setOpenDropdown(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
