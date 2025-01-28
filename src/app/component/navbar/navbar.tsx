"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0047CC] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-white.svg"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="ml-2 -mr-2 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link href="/" className="text-white hover:text-blue-200">
              HOME
            </Link>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-blue-200">
                DOCUMENTATION
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-blue-200">
                HELP CENTER
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-blue-200">
                PAGES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link href="/docs" className="text-white hover:text-blue-200">
              DOCS
            </Link>
            <Link href="/changelog" className="text-white hover:text-blue-200">
              CHANGELOG
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-white hover:bg-blue-800"
          >
            HOME
          </Link>
          <button className="flex w-full items-center rounded-md px-3 py-2 text-white hover:bg-blue-800">
            DOCUMENTATION
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <button className="flex w-full items-center rounded-md px-3 py-2 text-white hover:bg-blue-800">
            HELP CENTER
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <button className="flex w-full items-center rounded-md px-3 py-2 text-white hover:bg-blue-800">
            PAGES
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <Link
            href="/docs"
            className="block rounded-md px-3 py-2 text-white hover:bg-blue-800"
          >
            DOCS
          </Link>
          <Link
            href="/changelog"
            className="block rounded-md px-3 py-2 text-white hover:bg-blue-800"
          >
            CHANGELOG
          </Link>
        </div>
      </div>
    </nav>
  );
}
