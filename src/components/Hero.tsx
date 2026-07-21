/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Globe, Users, Trophy } from 'lucide-react';

interface HeroProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onInitiateTransfer: (details: any) => void;
}

// ব্যাকগ্রাউন্ড স্লাইডারের জন্য ইমেজের তালিকা
const SLIDE_IMAGES = [
  'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1920&q=80',
];

export default function Hero({ onOpenAuth, onInitiateTransfer }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো-স্লাইড লজিক (প্রতি ৩ সেকেন্ড পর পর ছবি পরিবর্তন হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* ==========================================
       HERO MODULE SECTION WITH BACKGROUND SLIDER
       ========================================== */
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image Slider */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        {SLIDE_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-10000' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>

      {/* 2. Dark Overlay (টেক্সট স্পষ্ট দেখার জন্য) */}
      <div className="absolute inset-0 -z-10 bg-slate-950/70 backdrop-blur-[2px]" />

      {/* Dynamic Background Blurs */}
      <div className="absolute top-20 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-brand-purple-light/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: Marketing Hooks */}
          <div className="space-y-6 lg:col-span-12 text-center sm:text-left">
            
            {/* Promo banner pills (মোবাইলে লুকানো থাকবে) */}
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md p-1 pr-3">
              <span className="rounded-full bg-gradient-to-r from-brand-cyan to-brand-green px-2.5 py-1 text-[10px] font-bold text-brand-navy uppercase tracking-wider">
                New Promotion
              </span>
              <span className="text-xs font-semibold text-slate-200">
                Zero Fees on your very first transfer!
              </span>
            </div>

            {/* H1 Heading (মোবাইল ও ডেক্সটপ দুটিতেই দৃশ্যমান থাকবে) */}
            <div className="space-y-4">
              <h1 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight sm:leading-none">
                Fast, Safe & <span className="gradient-text">Borderless</span> Money Transfers
              </h1>

              {/* Subtitle / Description (মোবাইলে লুকানো থাকবে) */}
              <p className="block max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                Send money from Europe, the UK, USA, and Canada directly to bank accounts, mobile wallets, or cash pickup spots in Nigeria, Bangladesh, and across the globe. Smooth, instant, and trusted by millions.
              </p>
            </div>

            {/* Quick trust metrics grid (মোবাইলে লুকানো থাকবে) */}
            <div className="hidden sm:grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6">
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

            {/* Micro-interactive stats tracker (মোবাইলে লুকানো থাকবে) */}
            <div className="hidden sm:flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse" />
                <span className="font-bold text-white">Live exchange updates</span>
              </div>
              <span className="text-slate-500">•</span>
              <div className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-brand-cyan" />
                <span>Best Exchange Rate Provider 2026</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}