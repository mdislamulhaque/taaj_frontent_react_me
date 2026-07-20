/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShieldCheck, Award, Lock, FileCheck } from 'lucide-react';
import { Review } from '../types';

const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Chidi Okonjo',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    comment: 'Sending money to my parents in Lagos used to be a headache with traditional bank markup rates. TAAJ changed everything—rates are transparent, fees are non-existent or tiny, and it arrives in minutes on their OPay wallet!',
    countryFlag: '🇳🇬',
    date: '3 hours ago',
  },
  {
    id: 'rev-2',
    name: 'Priya Sharma',
    role: 'Financial Analyst',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    comment: 'I send funds back to Kolkata monthly. TAAJ guarantees their live exchange rate when I pay. No surprises or deductions on the receiving end. Best platform I have used so far.',
    countryFlag: '🇮🇳',
    date: 'Yesterday',
  },
  {
    id: 'rev-3',
    name: 'Mohammed Rahman',
    role: 'Restaurateur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    comment: 'Amazing real-time rates. Transferred £2,500 to my cousin in Bangladesh for his medical expenses. It arrived literally while I was still on the phone with him. Highly recommended.',
    countryFlag: '🇧🇩',
    date: '2 days ago',
  },
];

export default function TrustSection() {
  return (
    /* ==========================================
       TRUST, REVIEWS, & COMPLIANCE BADGES SECTION
       ========================================== */
    <section id="reviews" className="relative py-20 bg-brand-purple/20">
      
      {/* Decorative gradient light overlays */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-cyan/5 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full flex items-center justify-center gap-1.5 mx-auto w-fit">
            <Star className="h-4 w-4 fill-brand-cyan text-brand-cyan" />
            Rated 4.9/5 by 12,000+ Senders
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-slate-300 font-medium leading-relaxed">
            Do not just take our word for it. Here is what real customers in our sending and receiving corridors say about their financial transfers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {CUSTOMER_REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="glass-card p-6 rounded-3xl border border-white/5 bg-brand-navy/20 relative flex flex-col justify-between"
            >
              
              {/* Star Rating & Flag */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <span className="text-xl" title="Receiving Corridor Flag">
                  {review.countryFlag}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs text-slate-300 italic leading-relaxed mb-6">
                "{review.comment}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {review.name}
                  </h4>
                  <div className="flex items-center justify-between gap-4 mt-0.5">
                    <span className="text-[10px] text-slate-400 font-medium">{review.role}</span>
                    <span className="text-[10px] text-brand-cyan font-bold">{review.date}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ==========================================
           REGULATORY COMPLIANCE & BADGES SECTION
           ========================================== */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Global Compliance & Security Standards
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 items-center justify-items-center">
            
            {/* Badge 1: CBN License */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 w-full hover:border-brand-cyan/20 transition-all">
              <FileCheck className="h-8 w-8 text-brand-cyan mb-2" />
              <span className="text-xs font-extrabold text-white text-center">CBN Licensed</span>
              <span className="text-[10px] text-slate-400 text-center mt-0.5">Central Bank Nigeria</span>
            </div>

            {/* Badge 2: FCA Compliant */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 w-full hover:border-brand-green/20 transition-all">
              <Award className="h-8 w-8 text-brand-green mb-2" />
              <span className="text-xs font-extrabold text-white text-center">FCA Regulated</span>
              <span className="text-[10px] text-slate-400 text-center mt-0.5">Financial Conduct UK</span>
            </div>

            {/* Badge 3: PCI-DSS Compliant */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 w-full hover:border-brand-orange/20 transition-all">
              <Lock className="h-8 w-8 text-brand-orange mb-2" />
              <span className="text-xs font-extrabold text-white text-center">PCI-DSS Secure</span>
              <span className="text-[10px] text-slate-400 text-center mt-0.5">Payment Card Industry</span>
            </div>

            {/* Badge 4: FinCEN Registered */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 w-full hover:border-brand-cyan/20 transition-all">
              <ShieldCheck className="h-8 w-8 text-brand-cyan mb-2" />
              <span className="text-xs font-extrabold text-white text-center">FinCEN Active</span>
              <span className="text-[10px] text-slate-400 text-center mt-0.5">Treasury Dept. USA</span>
            </div>

            {/* Badge 5: 256-bit SSL */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 w-full hover:border-brand-green/20 transition-all col-span-2 sm:col-span-1">
              <Lock className="h-8 w-8 text-brand-green mb-2" />
              <span className="text-xs font-extrabold text-white text-center">SSL Secure</span>
              <span className="text-[10px] text-slate-400 text-center mt-0.5">256-bit Encrypted</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
