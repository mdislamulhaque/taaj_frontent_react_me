/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API form post
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-navy overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-cyan/10 px-4 py-1.5 text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 border border-brand-cyan/25">
            <Sparkles className="h-3.5 w-3.5" />
            Support Center
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get in Touch <span className="text-brand-cyan">With Us</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Have questions about real-time rates, transfer times, or business corridors? Our global support team is available 24/7 to assist you.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Office Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 rounded-3xl glass-card p-8 border border-white/10 bg-brand-purple/20 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-cyan/10 blur-xl" />
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">Taaj Nigeria Headquarters</h3>
                <p className="text-xs text-slate-400">
                  Our regional operational headquarters in West Africa, coordinating clearing and commercial channels.
                </p>
              </div>

              {/* Specific info points */}
              <div className="space-y-6">
                
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0 border border-brand-cyan/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Corporate Office</h4>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      Plot 14, Admiralty Way,<br />
                      Lekki Phase 1, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0 border border-brand-cyan/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email support</h4>
                    <a 
                      href="mailto:info@taajnigeria.com"
                      className="text-sm font-semibold text-brand-cyan hover:text-white transition-colors"
                    >
                      info@taajnigeria.com
                    </a>
                  </div>
                </div>

                {/* Phone Line */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0 border border-brand-cyan/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Call Center</h4>
                    <p className="text-sm font-semibold text-white">
                      +234 (1) 234-5678
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0 border border-brand-cyan/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-sm font-semibold text-white">
                      Mon - Fri: 9:00 AM - 5:00 PM (GMT+1)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Regulatory and Security reassurance block */}
            <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                <span className="font-bold text-white uppercase tracking-wider block mb-1">Direct clearing lines</span>
                Our technical customer support desk assists with real-time settlement tracking across mobile wallets and standard commercial bank deposits.
              </p>
            </div>

          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 rounded-3xl glass-card p-8 border border-white/10 bg-white/5 relative">
            
            {submitSuccess ? (
              /* Success Panel */
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green border border-brand-green/20">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Message Dispatched!</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Thank you for reaching out to Taaj Nigeria. We have received your inquiry and our support desk will respond shortly at your provided email address.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* Actual Interactive Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kolawole Adebayo"
                      className="w-full rounded-xl bg-brand-navy border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. customer@domain.com"
                      className="w-full rounded-xl bg-brand-navy border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Transaction settlement issue / Corporate corridor partnership"
                    className="w-full rounded-xl bg-brand-navy border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition-all"
                  />
                </div>

                {/* Message text area */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please type detailed message here..."
                    className="w-full rounded-xl bg-brand-navy border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-base text-brand-navy bg-gradient-to-r from-brand-cyan to-brand-green shadow-lg shadow-brand-cyan/20 hover:scale-[1.01] hover:shadow-xl hover:shadow-brand-cyan/45 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-brand-navy border-t-transparent" />
                      Submitting Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 fill-current" />
                      Transmit Message
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
