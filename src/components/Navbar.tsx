/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ShieldCheck, ArrowRight, Lock, UserPlus, Mail,  } from 'lucide-react';


interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Taaj', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    /* ==========================================
       NAVBAR HEADER MODULE
       ========================================== */
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-purple/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        < a href="/" className="flex items-center space-x-2 focus:outline-none">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-green p-0.5 shadow-lg shadow-brand-cyan/20">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-brand-purple">
              <span className="font-sans text-xl font-extrabold tracking-wider text-white">T</span>
              <span className="font-sans text-xl font-extrabold tracking-wider text-brand-cyan">a</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white leading-none">
              TAAJ <span className="text-brand-cyan">NIGERIA</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-brand-green uppercase">
              Money Transfer
            </span>
          </div> */}
         < img src="https://i.ibb.co.com/Q3LV8Q8v/logo.png" alt="Taaj Nigeria Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="mailto:info@taajnigeria.com"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-300 hover:text-brand-cyan transition-colors duration-200"
            title="Email: info@taajnigeria.com"
          >
            <Mail className="h-4 w-4 text-brand-cyan" />
            <span className="hidden lg:inline text-xs">info@taajnigeria.com</span>
          </a>

          <a
            href="https://taajnigeria.com/admin/login"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-5 py-2.5 text-sm font-bold text-brand-navy shadow-lg shadow-brand-cyan/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-cyan/40 active:scale-[0.98]"
          >
            <Lock className="h-4 w-4" />
            Login
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ==========================================
         MOBILE DRAWER NAVIGATION MODULE
         ========================================== */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-brand-purple px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-brand-cyan transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="border-t border-white/10 pt-4 flex flex-col space-y-3">
            <a
              href="https://taajnigeria.com/admin/login"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-4 py-3 text-base font-bold text-brand-navy shadow-lg shadow-brand-cyan/25"
            >
              <Lock className="h-5 w-5" />
              Login 
            </a>
            
            <a
              href="mailto:info@taajnigeria.com"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-base font-bold text-white hover:bg-white/5 transition-all"
            >
              <Mail className="h-5 w-5 text-brand-cyan" />
              info@taajnigeria.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
