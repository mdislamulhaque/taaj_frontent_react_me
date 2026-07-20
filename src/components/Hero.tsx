/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Zap, Globe, Users, ArrowUpRight, Trophy } from 'lucide-react';
import RateCalculator from './RateCalculator';

interface HeroProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onInitiateTransfer: (details: any) => void;
}

export default function Hero({ onOpenAuth, onInitiateTransfer }: HeroProps) {
  return (
    /* ==========================================
       HERO HERO MODULE SECTION
       ========================================== */
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-purple-light/20 blur-[120px]" />
      <div className="absolute top-40 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-brand-cyan/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: Highly Polished Marketing Hooks */}
          <div className="space-y-8 lg:col-span-12">
            
            {/* Promo banner pills */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-3">
              <span className="rounded-full bg-gradient-to-r from-brand-cyan to-brand-green px-2.5 py-1 text-[10px] font-bold text-brand-navy uppercase tracking-wider">
                New Promotion
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Zero Fees on your very first transfer!
              </span>
            </div>

            {/* High-Contrast Modern H1 */}
            <div className="space-y-4">
              <h1 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-none">
                Fast, Safe & <span className="gradient-text">Borderless</span> Money Transfers
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                Send money from Europe, the UK, USA, and Canada directly to bank accounts, mobile wallets, or cash pickup spots in Nigeria, Bangladesh, and across the globe. Smooth, instant, and trusted by millions.
              </p>
            </div>

            {/* Quick trust metrics grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bank-Grade Security</h4>
                  <p className="text-xs text-slate-400">256-bit SSL secure protocol</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant Delivery</h4>
                  <p className="text-xs text-slate-400">90% of transfers in seconds</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Global Networks</h4>
                  <p className="text-xs text-slate-400">20+ Receiving countries</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">5M+ Customers</h4>
                  <p className="text-xs text-slate-400">Join the smart remittance wave</p>
                </div>
              </div>
            </div>

            {/* Micro-interactive promotional stats tracker */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green" />
                <span className="font-bold text-white">Live exchange updates</span>
              </div>
              <span className="text-slate-500">•</span>
              <div className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-brand-cyan" />
                <span>Best Exchange Rate Provider 2026</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Interactive Widget Container */}
          {/* <div className="lg:col-span-5">
            <RateCalculator onInitiateTransfer={onInitiateTransfer} />
          </div> */}

        </div>
      </div>
    </section>
  );
}
