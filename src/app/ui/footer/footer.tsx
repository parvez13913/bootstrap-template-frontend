"use client";

import { ChevronDown, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <>
      {/* CTA Section */}
      <div className="relative">
        <div className="container mx-auto px-4 relative">
          <div className="bg-[#064cdb] py-16 px-8 rounded-sm relative overflow-hidden -bottom-24 max-w-6xl mx-auto">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
              <ShoppingCart className="w-40 h-40 text-white" />
            </div>
            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Next Level of <strong>Documentation</strong>
              </h2>
              <p className="text-xl opacity-90">
                Purchase Guidebook now, and make documenting your project piece
                of cake.{" "}
                <Link href="#" className="underline hover:no-underline ml-2">
                  Buy Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 mt-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-white.svg"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Content */}
            <div className="md:col-span-6">
              <p className="mb-6 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Product Help
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Training Videos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Integrations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        REST API
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Corporate
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="md:col-span-4 lg:col-span-2 md:ml-auto">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-4 py-2 text-left bg-transparent border border-white/20 rounded flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  {language}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                {isOpen && (
                  <div className="absolute w-full mt-1 bg-black border border-white/20 rounded shadow-lg">
                    <button
                      onClick={() => {
                        setLanguage("French");
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-white/5 transition-colors"
                    >
                      French
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("German");
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-white/5 transition-colors"
                    >
                      German
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
