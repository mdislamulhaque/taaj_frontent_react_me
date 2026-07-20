/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Mail, Send, ExternalLink, Globe, Star } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    /* ==========================================
       FOOTER MODULE
       ========================================== */
    <footer className="relative bg-brand-navy border-t border-white/10 pt-16 pb-8 text-slate-300">
      
      {/* Footer Top Links & Widgets */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">
          
          {/* Logo & Pitch */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="flex items-center space-x-2 focus:outline-none">
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
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Taaj Nigeria is a leading global remittance and digital payments platform providing instant, secure, and low-cost money transfer services. Regulated under international banking laws.
            </p>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Support & Inquiries</span>
              <a 
                href="mailto:info.taajnigeria@gmail.com" 
                className="text-sm font-semibold text-brand-cyan hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-brand-cyan" />
                info.taajnigeria@gmail.com
              </a>
            </div>

            {/* Live Security indicator */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 border border-white/5 max-w-sm">
              <ShieldCheck className="h-5 w-5 text-brand-green shrink-0" />
              <div className="text-[10px] text-slate-400">
                <span className="font-bold text-white uppercase tracking-wider block mb-0.5">256-bit Secure Banking</span>
                Protected by premium security tokens & direct CBN clearing channels.
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#rates" className="hover:text-brand-cyan transition-colors">Real-Time Calculator</a></li>
                <li><a href="#why-us" className="hover:text-brand-cyan transition-colors">Send Money to Nigeria</a></li>
                <li><a href="#why-us" className="hover:text-brand-cyan transition-colors">Send Money to Bangladesh</a></li>
                <li><a href="#why-us" className="hover:text-brand-cyan transition-colors">Mobile Wallets (OPay/bKash)</a></li>
                <li><a href="#why-us" className="hover:text-brand-cyan transition-colors">Cash Pickups</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company & Legal</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#why-us" className="hover:text-brand-cyan transition-colors">About Taaj Nigeria</a></li>
                <li><a href="#reviews" className="hover:text-brand-cyan transition-colors">Client Testimonials</a></li>
                <li><a href="#faqs" className="hover:text-brand-cyan transition-colors">Security Standards</a></li>
                <li><a href="#faqs" className="hover:text-brand-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="#faqs" className="hover:text-brand-cyan transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Join our Newsletter</h4>
            <p className="text-xs text-slate-400">
              Receive live rate alerts, regulatory news, and promo fee discounts directly in your inbox.
            </p>

            {subscribed ? (
              <div className="rounded-xl bg-brand-green/10 p-3 border border-brand-green/25 text-xs text-brand-green font-semibold">
                ✓ Thank you! You have subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1.5 h-7 w-7 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-green text-brand-navy flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    <Send className="h-3 w-3 fill-current" />
                  </button>
                </div>
              </form>
            )}

            {/* Quick trust snippet */}
            <div className="flex items-center gap-1.5 text-xs text-brand-cyan font-bold">
              <Globe className="h-4 w-4" />
              <span>Available in 12+ Countries</span>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosure & copyright footer bottom */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2 max-w-4xl">
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Regulatory Disclosure: Taaj Nigeria is a trademark of TAAJ Money Transfer Solutions Ltd. Registered under standard corporate governance. Regulatory licenses are provisioned by local monetary authorities including the Central Bank of Nigeria (CBN). Payment services are cleared and validated through authorized dealer banks.
            </p>
            <p className="text-[10px] text-slate-600">
              © {new Date().getFullYear()} TAAJ NIGERIA. All Rights Reserved. Crafted for seamless global remittances.
            </p>
          </div>

          {/* Language / Corridor Indicator */}
          <div className="flex items-center gap-2 shrink-0 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5">
            <span className="text-[10px] font-bold text-white tracking-wider uppercase">Active corridor:</span>
            <span className="text-xs font-bold text-brand-cyan">Europe ➔ Nigeria</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
