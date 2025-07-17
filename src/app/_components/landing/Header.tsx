"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg w-8 h-8 flex items-center justify-center text-white font-bold">T3</div>
            <span className="text-xl font-bold">SaaS</span>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Pricing
          </Link>
          <Link href="/demo" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Demo
          </Link>
          <Link href="https://github.com/developer-at-speer/T3-boilerplate" target="_blank" className="text-sm font-medium hover:text-blue-400 transition-colors">
            GitHub
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="https://github.com/developer-at-speer/T3-boilerplate"
              target="_blank"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </Link>
            <div className="pt-4 pb-3 border-t border-white/10">
              <Link
                href="/sign-in"
                className="block w-full px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="block w-full px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}