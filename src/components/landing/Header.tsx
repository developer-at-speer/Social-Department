"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "~/components/common/Logo";
import { Button } from "~/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "/demo", label: "Demo" },
    { href: "https://github.com/developer-at-speer/T3-boilerplate", label: "GitHub", target: "_blank" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="h-7 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              className="font-medium text-white transition-colors hover:text-yellow-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" className="text-black border-white hover:bg-white/20" asChild>
            <Link href="/sign-in" className="text-black">Sign In</Link>
          </Button>
          <Button variant="default" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
        
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-accent hover:text-accent-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-yellow-400 hover:text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border/40 pt-4 space-y-2">
               <Button variant="outline" className="w-full text-white border-white hover:bg-white/20" asChild>
                  <Link href="/sign-in" className="text-white">Sign In</Link>
               </Button>
               <Button variant="default" className="w-full bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                  <Link href="/sign-up">Get Started</Link>
               </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
