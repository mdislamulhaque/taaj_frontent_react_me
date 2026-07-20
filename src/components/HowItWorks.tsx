/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UserPlus, FormInput, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Register in 30 Seconds',
      description: 'Sign up for a free account with your email or phone number. Complete our fast identity verification to ensure maximum transaction safety.',
      icon: UserPlus,
      color: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20',
    },
    {
      step: '02',
      title: 'Choose Amount & Recipient',
      description: 'Enter your sending amount, check our guaranteed exchange rates instantly, and enter your recipient’s local bank or mobile wallet details.',
      icon: FormInput,
      color: 'text-brand-green bg-brand-green/10 border-brand-green/20',
    },
    {
      step: '03',
      title: 'Confirm & Send Money',
      description: 'Select your preferred payment method (Debit/Credit Card, Bank Transfer, Apple Pay) and hit send. Track your payment in real-time in your dashboard.',
      icon: Send,
      color: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20',
    },
  ];

  return (
    /* ==========================================
       HOW IT WORKS SECTION MODULE
       ========================================== */
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple-light/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3.5 py-1.5 rounded-full">
            Simple 3-Step Process
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="text-slate-300 font-medium leading-relaxed">
            Sending money shouldn’t feel like complex math. We have streamlined the remittance lifecycle down to its absolute simplest form.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 relative">
          
          {/* Decorative Connection Line (only visible on large screens) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan/20 via-brand-green/20 to-brand-orange/20 -translate-y-12 -z-10" />

          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                className="group relative rounded-2xl glass-card p-8 border border-white/5 bg-brand-purple/20 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step counter badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black tracking-tighter text-white/15 group-hover:text-white/20 transition-colors leading-none">
                      {item.step}
                    </span>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mt-4 border-t border-white/5 pt-4">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    Secure & Compliant
                  </span>
                  
                  {index < steps.length - 1 && (
                    <span className="text-brand-cyan group-hover:translate-x-1.5 transition-transform duration-300 hidden lg:block">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Trust banner CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-slate-300 mb-4">
            Need customized aid or assistance? We’re active 24/7.
          </p>
          <a
            href="#rates"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-brand-cyan border border-brand-cyan/20 hover:border-brand-cyan/50 transition-all"
          >
            Calculate Your Transfer Savings
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
