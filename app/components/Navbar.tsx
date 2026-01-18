'use client'; // Required for client-side interactivity (useState)

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="absolute top-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            {/* Simple CSS Icon for Secha */}
            <img src="./images/icon.png" className="w-[28px]" alt="" />
            <span className="font-bold text-3xl tracking-tight">Secha</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="hover:text-blue-200 transition">
              Services
            </Link>
            <Link href="#work" className="hover:text-blue-200 transition">
              Work
            </Link>
            <Link href="#pricing" className="hover:text-blue-200 transition">
              Pricing
            </Link>
            <Link href="#about" className="hover:text-blue-200 transition">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg">Consult Now</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md absolute w-full p-4 flex flex-col space-y-4 shadow-xl">
          <Link href="#services" className="block hover:text-blue-300">
            Services
          </Link>
          <Link href="#work" className="block hover:text-blue-300">
            Work
          </Link>
          <Link href="#pricing" className="block hover:text-blue-300">
            Pricing
          </Link>
          <Link href="#about" className="block hover:text-blue-300">
            About
          </Link>
          <button className="bg-white text-blue-900 w-full py-2 rounded-full font-bold">Consult Now</button>
        </div>
      )}
    </nav>
  );
}
