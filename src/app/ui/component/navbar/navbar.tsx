"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavDropdown } from "./nav-dropdown";
import { NavItem } from "./nav-item";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#0439a4] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/logo-white.svg" width={40} height={40} alt="logo" />
            </Link>

            {/* Desktop Navigation */}
            <div
              className={`lg:flex ${
                isOpen ? "block" : "hidden"
              } absolute lg:relative top-full left-0 right-0 bg-gray-800 lg:bg-transparent`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
                <NavItem href="/" label="Home" />
                <NavDropdown
                  label="Documentation"
                  items={[
                    { href: "/docs/layout-1", label: "Layout 1" },
                    { href: "/docs/layout-2", label: "Layout 2" },
                    { href: "/docs/layout-3", label: "Layout 3" },
                    { href: "/docs/layout-4", label: "Layout 4" },
                  ]}
                  isOpen={openDropdown === "Documentation"}
                  setOpenDropdown={setOpenDropdown}
                />
                <NavDropdown
                  label="Help Center"
                  items={[
                    { href: "/help/homepage-1", label: "Homepage 1" },
                    { href: "/help/homepage-2", label: "Homepage 2" },
                    { href: "/help/homepage-3", label: "Homepage 3" },
                    { href: "/help/category", label: "Category" },
                    { href: "/help/category-inner", label: "Category Inner" },
                    { href: "/help/article-1", label: "Article 1" },
                    { href: "/help/article-2", label: "Article 2" },
                    { href: "/help/tutorial", label: "Tutorial" },
                  ]}
                  isOpen={openDropdown === "Help Center"}
                  setOpenDropdown={setOpenDropdown}
                />
                <NavDropdown
                  label="Products"
                  items={[
                    {
                      href: "/interview-question",
                      label: "Interview Question",
                    },
                    { href: "job-match", label: "Job Match Summary" },
                    { href: "interview-lists", label: "Interview Lists" },
                    { href: "candidate-lists", label: "Candidate Lists" },
                  ]}
                  isOpen={openDropdown === "Products"}
                  setOpenDropdown={setOpenDropdown}
                />
              </ul>
            </div>
          </div>

          {/* Right Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 text-sm">
            <ul className="flex flex-row items-center space-x-4 p-4 lg:p-0">
              <NavItem href="/contact" label="Contact Us" />
              <NavItem href="/about" label="About Us" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
