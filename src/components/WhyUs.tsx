/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldAlert, 
  TrendingUp, 
  Navigation, 
  Smartphone, 
  CreditCard, 
  CheckCircle, 
  UsersRound, 
  Fingerprint 
} from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      id: 'pillar-1',
      title: 'Iron-Clad Security',
      description: 'Your security is our absolute priority. We utilize bank-grade 256-bit SSL data encryption, multi-factor authentication, and biometrics to safeguard your transactions.',
      icon: Fingerprint,
      accent: 'border-brand-cyan/20 text-brand-cyan hover:shadow-brand-cyan/10',
      badge: 'Secure Protocol'
    },
    {
      id: 'pillar-2',
      title: 'Guaranteed Live Rates',
      description: 'Avoid tricky bank markups. We stream the actual mid-market exchange rates in real-time, locking your rate upon submission so you get exactly what you expect.',
      icon: TrendingUp,
      accent: 'border-brand-green/20 text-brand-green hover:shadow-brand-green/10',
      badge: 'Zero Markup'
    },
    {
      id: 'pillar-3',
      title: 'Ultra-Simple Navigation',
      description: 'Designed for effortless mobile and desktop use. Send money to any recipient in under 60 seconds with our highly intuitive 3-step payment workflow.',
      icon: Navigation,
      accent: 'border-brand-purple-light/40 text-brand-cyan hover:shadow-brand-purple-light/20',
      badge: 'One-Click Send'
    },
    {
      id: 'pillar-4',
      title: 'Flexible Delivery Methods',
      description: 'Give your recipient immediate access. Choose direct high-speed bank deposit, instant mobile wallets (e.g., OPay, bKash, M-Pesa), or local cash pickups.',
      icon: CreditCard,
      accent: 'border-brand-orange/20 text-brand-orange hover:shadow-brand-orange/10',
      badge: 'Instant Delivery'
    },
  ];

  return (
    /* ==========================================
       WHY US / VALUE PROPOSITIONS SECTION
       ========================================== */
    <section id="why-us" className="relative py-20 bg-brand-navy/30 border-t border-b border-white/5">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-brand-cyan/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full">
            Why Choose Taaj Nigeria
          </span>
          <h2 className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            A Better Way to Send Money Internationally
          </h2>
          <p className="text-slate-300 font-medium leading-relaxed">
            We combined premium financial technology with a customer-centric delivery system to provide a premium money transfer platform that is fairer, faster, and simpler.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between border cursor-pointer ${pillar.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase opacity-85 bg-white/5 px-2.5 py-1 rounded-md text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-extrabold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold hover:opacity-100 transition-opacity text-slate-400">
                  <CheckCircle className="h-4 w-4 text-brand-green" />
                  <span>Fully verified & safe</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Regulatory compliance preview bar */}
        <div className="mt-16 rounded-2xl bg-white/5 p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">Regulated Financial Institution</h4>
              <p className="text-xs text-slate-400">Licensed under top global tier authorities protecting your transfers every step of the way.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Compliant With:</span>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-extrabold text-white bg-brand-navy border border-white/10 rounded-lg px-3 py-1.5">
                CBN
              </span>
              <span className="text-xs font-extrabold text-white bg-brand-navy border border-white/10 rounded-lg px-3 py-1.5">
                SEC
              </span>
              <span className="text-xs font-extrabold text-white bg-brand-navy border border-white/10 rounded-lg px-3 py-1.5">
                FCA Compliant
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
