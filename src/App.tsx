/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  X, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  // Authentication Modal state
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  // Simulated Transfer Modal state (triggered from the Rate Calculator)
  const [transferOpen, setTransferOpen] = useState(false);
  const [transferDetails, setTransferDetails] = useState<{
    sendAmount: number;
    sendCurrency: string;
    receiveCountry: string;
    receiveAmount: number;
  } | null>(null);

  // Recipient entry fields for simulated transfer
  const [recipientName, setRecipientName] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [recipientProvider, setRecipientProvider] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleInitiateTransfer = (details: any) => {
    setTransferDetails(details);
    setTransferOpen(true);
    setTransferSuccess(false);
    // Reset inputs
    setRecipientName('');
    setRecipientAccount('');
    setRecipientProvider(details.receiveCountry === 'Nigeria' ? 'OPay Wallet' : 'Local Bank Transfer');
  };

  const handleConfirmTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate transfer clearance handshake
    setTimeout(() => {
      setIsSending(false);
      setTransferSuccess(true);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen text-white antialiased selection:bg-brand-cyan/30 selection:text-white">
      
      {/* =========================================================================
         NAVBAR MODULE: STICKY HEADER NAVIGATION
         ========================================================================= */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Container */}
      <main>
        
        {/* =========================================================================
           HERO MODULE: MARKETING TAGLINES & EXCHANGE RATE CALCULATOR
           ========================================================================= */}
        <Hero 
          onOpenAuth={handleOpenAuth} 
          onInitiateTransfer={handleInitiateTransfer} 
        />

        {/* =========================================================================
           VALUE PROPOSITION MODULE: SECURITY, RATES & SIMPLE APP NAVIGATION PILLARS
           ========================================================================= */}
        <WhyUs />

        {/* =========================================================================
           ROADMAP MODULE: HOW TAAJ MONEY TRANSFER WORKS (1-2-3 STEP GUIDE)
           ========================================================================= */}
        <HowItWorks />

        {/* =========================================================================
           TRUST & TESTIMONIALS MODULE: DYNAMIC CLIENT REVIEWS & REGULATORY BADGES
           ========================================================================= */}
        <TrustSection />

        {/* =========================================================================
           ACCORDION QUESTIONS MODULE: FREQUENTLY ASKED QUESTIONS (FAQ)
           ========================================================================= */}
        <FAQSection />

        {/* =========================================================================
           SUPPORT MODULE: CONTACT US FORM & OFFICE ADDRESS
           ========================================================================= */}
        <ContactUs />

      </main>

      {/* =========================================================================
         FOOTER MODULE: LEGAL DISCLOSURES, COMPANY DIRECTORIES & NEWSLETTER
         ========================================================================= */}
      <Footer />

      {/* =========================================================================
         AUTH SLIDE-IN MODAL MODULE: LOGIN & REGISTER TRIGGER
         ========================================================================= */}
      <AuthModal 
        isOpen={authOpen} 
        initialMode={authMode} 
        onClose={() => setAuthOpen(false)} 
      />

      {/* =========================================================================
         SIMULATED INSTANT TRANSFER PROCESSING MODAL
         ========================================================================= */}
      {transferOpen && transferDetails && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          
          {/* Overlay blur */}
          <div 
            onClick={() => !isSending && setTransferOpen(false)} 
            className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md" 
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg rounded-3xl bg-brand-purple/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden z-10">
            
            {/* Close */}
            {!isSending && (
              <button 
                onClick={() => setTransferOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white rounded-lg p-1"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            {transferSuccess ? (
              /* TRANSFER CLEARED SUCCESS PANEL */
              <div className="text-center py-6 space-y-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green border border-brand-green/20 animate-bounce">
                  <CheckCircle className="h-9 w-9" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">Transfer Dispatched!</h3>
                  <p className="text-xs text-slate-300 px-4">
                    Your transfer of <span className="text-white font-bold">{transferDetails.sendAmount} {transferDetails.sendCurrency}</span> has been securely authorized and sent to <span className="text-white font-bold">{recipientName}</span>.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-left text-xs space-y-2.5 max-w-sm mx-auto">
                  <div className="flex justify-between text-slate-400">
                    <span>Transaction Reference</span>
                    <span className="font-mono text-brand-cyan">TXN-{Math.floor(Math.random() * 900000 + 100000)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Recipients Gets</span>
                    <span className="font-bold text-brand-green">
                      {transferDetails.receiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {transferDetails.receiveCountry === 'Nigeria' ? 'NGN' : transferDetails.receiveCountry === 'Bangladesh' ? 'BDT' : 'INR'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Payment Corridor</span>
                    <span>{transferDetails.sendCurrency} ➔ {transferDetails.receiveCountry}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Settlement</span>
                    <span className="text-brand-green font-semibold">Under 2 minutes (Instant Channels)</span>
                  </div>
                </div>

                <button
                  onClick={() => setTransferOpen(false)}
                  className="w-full py-3.5 rounded-xl font-bold text-brand-navy bg-gradient-to-r from-brand-cyan to-brand-green cursor-pointer"
                >
                  Done (Calculate Another Send)
                </button>
              </div>
            ) : (
              /* DETAILS ENTRY PANEL */
              <div className="space-y-5">
                
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    Secure Check-Out Sequence
                  </span>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">Confirm Recipient Info</h3>
                </div>

                {/* Transfer Corridor Summary Box */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">You Pay</span>
                    <div className="text-lg font-extrabold text-white">
                      {transferDetails.sendAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })} {transferDetails.sendCurrency}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Recipient Receives</span>
                    <div className="text-lg font-extrabold text-brand-green">
                      {transferDetails.receiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })} {transferDetails.receiveCountry === 'Nigeria' ? 'NGN' : transferDetails.receiveCountry === 'Bangladesh' ? 'BDT' : 'INR'}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleConfirmTransferSubmit} className="space-y-4">
                  
                  {/* Recipient Legal Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recipient Full Legal Name</label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="e.g. Chinelo Obi or Tasnim Ahmed"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  {/* Delivery provider */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Delivery Network Provider</label>
                    <select
                      value={recipientProvider}
                      onChange={(e) => setRecipientProvider(e.target.value)}
                      className="w-full rounded-xl bg-brand-navy border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
                    >
                      {transferDetails.receiveCountry === 'Nigeria' ? (
                        <>
                          <option value="OPay Wallet">OPay Wallet (Instant)</option>
                          <option value="PalmPay Wallet">PalmPay Wallet (Instant)</option>
                          <option value="Access Bank">Access Bank Plc</option>
                          <option value="GTBank">Guaranty Trust Bank (GTB)</option>
                          <option value="Zenith Bank">Zenith Bank Plc</option>
                        </>
                      ) : transferDetails.receiveCountry === 'Bangladesh' ? (
                        <>
                          <option value="bKash Wallet">bKash Wallet (Instant)</option>
                          <option value="Nagad Wallet">Nagad Wallet (Instant)</option>
                          <option value="Islami Bank">Islami Bank Bangladesh Ltd</option>
                          <option value="Dutch-Bangla Bank">Dutch-Bangla Bank</option>
                        </>
                      ) : (
                        <>
                          <option value="Local Bank Transfer">Local Unified Bank Deposit</option>
                          <option value="UPI Wallet">Unified Payments Interface (UPI)</option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* Account / Mobile wallet identifier */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {recipientProvider.includes('Wallet') ? 'Mobile Wallet Phone Number' : 'Bank Account Number'}
                    </label>
                    <input
                      type="text"
                      required
                      value={recipientAccount}
                      onChange={(e) => setRecipientAccount(e.target.value)}
                      placeholder={recipientProvider.includes('Wallet') ? 'e.g. +234 8012345678' : 'e.g. 1012345678 (10 digits)'}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  {/* Anti-fraud notice */}
                  <div className="p-3 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex gap-2 items-start">
                    <AlertCircle className="h-4.5 w-4.5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-[10px] text-slate-400 leading-normal">
                      Security Alert: Verify receiving details carefully. Due to instant settlement, transfers cannot be recalled once dispatched.
                    </span>
                  </div>

                  {/* Submit clearance action */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 rounded-xl font-bold text-brand-navy bg-gradient-to-r from-brand-cyan to-brand-green shadow-lg shadow-brand-cyan/20 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-brand-navy border-t-transparent" />
                        Routing Funds Securely...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4.5 w-4.5 fill-current" />
                        Authorize Instant Transfer
                      </>
                    )}
                  </button>

                </form>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
