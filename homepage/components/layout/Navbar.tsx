'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0d3b1a] text-white text-sm py-2.5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="hidden sm:inline">✓ ISO 9001:2015 & 14001:2015 Certified</span>
            <span className="text-[#d4a039] font-medium">|</span>
            <span>🇮🇳 Proudly Made in India</span>
          </p>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="tel:+91" className="hover:text-[#d4a039] transition">📞 Contact</a>
            <a href="#" className="hover:text-[#d4a039] transition">🏪 Find Store</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative">
                <span className="text-3xl font-bold text-[#0d3b1a] tracking-tight">
                  EAPRO
                </span>
                <span className="absolute -bottom-1 left-0 text-[8px] text-[#d4a039] font-semibold tracking-widest uppercase">
                  Innovating Technology
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 font-medium hover:text-[#0d3b1a] transition relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a039] transition-all group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button className="text-gray-700 font-medium hover:text-[#0d3b1a] transition flex items-center gap-1">
                  Solutions
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-100">
                  <Link href="/products/home" className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0d3b1a]">
                    <span className="font-medium">For Your Home</span>
                    <p className="text-xs text-gray-500 mt-0.5">Residential power solutions</p>
                  </Link>
                  <Link href="/products/solar" className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0d3b1a]">
                    <span className="font-medium">Solar Systems</span>
                    <p className="text-xs text-gray-500 mt-0.5">Harness the sun</p>
                  </Link>
                  <Link href="/products/inverters" className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0d3b1a]">
                    <span className="font-medium">Smart Inverters</span>
                    <p className="text-xs text-gray-500 mt-0.5">Uninterrupted power</p>
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-gray-700 font-medium hover:text-[#0d3b1a] transition relative group">
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a039] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/impact" className="text-gray-700 font-medium hover:text-[#0d3b1a] transition relative group">
                Impact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a039] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/support" className="text-gray-700 font-medium hover:text-[#0d3b1a] transition relative group">
                Support
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a039] transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2.5 text-gray-700 hover:text-[#0d3b1a] hover:bg-gray-100 rounded-full transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link
                href="/get-started"
                className="bg-[#0d3b1a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a5c2e] transition-all hover:shadow-lg hover:scale-105"
              >
                Power My Home
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 space-y-4 animate-fadeIn">
              <Link href="/" className="block text-gray-700 font-medium py-2">Home</Link>
              <Link href="/products" className="block text-gray-700 font-medium py-2">Solutions</Link>
              <Link href="/about" className="block text-gray-700 font-medium py-2">Our Story</Link>
              <Link href="/impact" className="block text-gray-700 font-medium py-2">Impact</Link>
              <Link href="/support" className="block text-gray-700 font-medium py-2">Support</Link>
              <Link
                href="/get-started"
                className="block bg-[#0d3b1a] text-white px-6 py-3 rounded-full font-medium text-center mt-4"
              >
                Power My Home
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
