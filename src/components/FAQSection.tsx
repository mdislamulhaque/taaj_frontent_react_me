/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'transfer',
    question: 'How long does a money transfer with Taaj Nigeria take?',
    answer: 'Most transactions are processed instantly! Direct transfers to Nigerian mobile wallets (like OPay, PalmPay), commercial bank accounts, and Bangladeshi wallets (bKash) typically arrive in under 2 minutes. Bank deposits to certain international banks may take up to 24 hours.',
  },
  {
    id: 'faq-2',
    category: 'security',
    question: 'Is my money completely safe with Taaj Nigeria?',
    answer: 'Absolutely. We are fully licensed by the Central Bank of Nigeria (CBN) and compliant with top-tier global financial regulators (such as FCA in the UK and FinCEN in the US). We secure all transactions using 256-bit SSL bank-grade encryption and do not store sensitive payment details.',
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'Are there any hidden markups or exchange fees?',
    answer: 'None at all. We believe in absolute transparency. The rate you see in our real-time calculator is the guaranteed rate your recipient will receive. Traditional banks often hide a 5% margin in their rates; we provide genuine, highly competitive exchange values with no hidden fees.',
  },
  {
    id: 'faq-4',
    category: 'account',
    question: 'What documentation do I need to verify my account?',
    answer: 'To satisfy strict anti-money laundering (AML) and Know-Your-Customer (KYC) requirements, we require a valid government-issued ID (e.g. international passport, national ID card, or driver’s license) and a quick selfie check when signing up.',
  },
  {
    id: 'faq-5',
    category: 'transfer',
    question: 'Can I track my transfer in real-time?',
    answer: 'Yes! Upon initiating a transfer, you will receive a unique Tracking ID. You can monitor the real-time status of your funds directly in your dashboard or opt-in to free SMS and Email notifications for instant updates.',
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { code: 'all', name: 'Show All' },
    { code: 'general', name: 'General' },
    { code: 'transfer', name: 'Transfers' },
    { code: 'security', name: 'Security & Trust' },
    { code: 'account', name: 'Account Help' },
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    /* ==========================================
       FAQ MODULE WITH ACCORDION TOGGLERS
       ========================================== */
    <section id="faqs" className="relative py-20 bg-brand-navy/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full flex items-center justify-center gap-1.5 mx-auto w-fit">
            <HelpCircle className="h-4 w-4" />
            Got Questions?
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed text-sm">
            Everything you need to know about rates, transfer limits, safety mechanisms, and delivery speeds in our portal.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.code}
              onClick={() => {
                setSelectedCategory(cat.code);
                // Auto open first element of the new list if any
                const firstOfCat = FAQ_ITEMS.find(item => cat.code === 'all' || item.category === cat.code);
                if (firstOfCat) setActiveId(firstOfCat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border ${
                selectedCategory === cat.code
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-green text-brand-navy border-brand-cyan shadow-lg shadow-brand-cyan/10'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-white/5 border-brand-cyan/30 shadow-lg' 
                    : 'bg-brand-navy/20 border-white/5 hover:border-white/10'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`h-6 w-6 shrink-0 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'bg-brand-cyan/20 text-brand-cyan rotate-180' : 'bg-white/5 text-slate-400'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA Callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-purple-light/20 to-brand-navy/30 p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Still have questions?</h4>
              <p className="text-xs text-slate-400">Our customer happiness team is here to assist you 24/7 in English, Yoruba, Hausa, and Bengali.</p>
            </div>
          </div>
          <button
            onClick={() => alert("Connecting to Taaj Live Chat Agent...")}
            className="rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-5 py-2.5 text-xs font-bold text-brand-navy shadow-lg shadow-brand-cyan/25 shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Live Chat
          </button>
        </div>

      </div>
    </section>
  );
}
