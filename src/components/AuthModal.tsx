/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, CheckCircle, Smartphone, Globe, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
}

export default function AuthModal({ isOpen, initialMode, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [accountType, setAccountType] = useState<'personal' | 'business'>('personal');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [isAgreed, setIsAgreed] = useState(false);
  
  // Simulation states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sync mode if initialMode changes
  React.useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API authorization handshake
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setIsAgreed(false);
    setSuccess(false);
    onClose();
  };

  return (
    /* ==========================================
       AUTHENTICATION MODAL MODULE (LOGIN & SIGN UP)
       ========================================== */
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Dark overlay with background blur */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-brand-purple/95 border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white z-10">
        
        {/* Glow Effects */}
        <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-cyan/20 blur-xl" />
        <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-brand-green/20 blur-xl" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white rounded-lg p-1.5 hover:bg-white/5 transition-all cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          /* SUCCESS STATE PANEL */
          <div className="text-center py-8 space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green border border-brand-green/20 animate-bounce">
              <CheckCircle className="h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {mode === 'login' ? 'Welcome Back!' : 'Account Created Successfully!'}
              </h3>
              <p className="text-sm text-slate-300">
                {mode === 'login' 
                  ? 'Your identity session has been verified securely.' 
                  : 'Congratulations, your Taaj Nigeria account is ready for transfers.'}
              </p>
            </div>

            {/* Quick Promo box for first senders */}
            {mode === 'signup' && (
              <div className="rounded-2xl bg-white/5 p-4 border border-white/5 max-w-sm mx-auto flex items-start gap-3 text-left">
                <Sparkles className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-brand-cyan block">First Transfer Fee Waiver Activated!</span>
                  Your primary money transfer is marked with 100% zero fees. Use the rate calculator to proceed.
                </div>
              </div>
            )}

            <button
              onClick={resetForm}
              className="w-full py-3.5 rounded-xl font-bold text-brand-navy bg-gradient-to-r from-brand-cyan to-brand-green shadow-lg shadow-brand-cyan/20 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          /* FORM ENTRY STATE */
          <div className="space-y-6">
            
            {/* Header: Mode Toggle */}
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {mode === 'login' ? 'Access Your Account' : 'Open a Free Account'}
              </h3>
              <p className="text-xs text-slate-400">
                {mode === 'login' 
                  ? 'Sign in to access your dashboard, saved recipients, and history.' 
                  : 'Zero opening fee. Sign up in under 30 seconds.'}
              </p>
            </div>

            {/* Account Type Pills (only on registration mode) */}
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setAccountType('personal')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    accountType === 'personal' 
                      ? 'bg-brand-navy text-brand-cyan border border-brand-cyan/20' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Personal Account
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('business')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    accountType === 'business' 
                      ? 'bg-brand-navy text-brand-cyan border border-brand-cyan/20' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Business Account
                </button>
              </div>
            )}

            {/* Main Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Sign up details */}
              {mode === 'signup' && (
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl bg-white/5 border border-white/10 pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Email address field */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>
              </div>

              {/* Phone number & Country fields (only for sign up) */}
              {mode === 'signup' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7911 123456"
                        className="w-full rounded-xl bg-white/5 border border-white/10 pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Residence</label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-xl bg-brand-navy border border-white/10 pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
                      >
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Europe">Europe (Eurozone)</option>
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Password field */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure Password</label>
                  {mode === 'login' && (
                    <button type="button" className="text-[10px] text-brand-cyan font-bold hover:underline">
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl bg-white/5 border border-white/10 pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>
              </div>

              {/* Sign up terms check or remember check */}
              {mode === 'signup' ? (
                <label className="flex items-start gap-2.5 py-1 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="mt-0.5 rounded border-white/10 bg-white/5 text-brand-cyan focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-[10px] text-slate-400 leading-tight">
                    I represent that I am 18+ and agree to the Taaj Nigeria <span className="text-brand-cyan hover:underline">User Agreement</span>, <span className="text-brand-cyan hover:underline">Compliance Disclosure</span> & <span className="text-brand-cyan hover:underline">Cookie Policy</span>.
                  </span>
                </label>
              ) : (
                <label className="flex items-center gap-2 cursor-pointer py-1">
                  <input
                    type="checkbox"
                    className="rounded border-white/10 bg-white/5 text-brand-cyan focus:ring-0"
                  />
                  <span className="text-[10px] text-slate-400">Keep me logged in securely on this device</span>
                </label>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative py-3 rounded-xl font-bold text-xs sm:text-sm text-brand-navy bg-gradient-to-r from-brand-cyan to-brand-green shadow-lg shadow-brand-cyan/20 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-brand-navy border-t-transparent" />
                    Securely Authorizing...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4.5 w-4.5 fill-current" />
                    {mode === 'login' ? 'Login Securely' : 'Create Free Account'}
                  </>
                )}
              </button>

            </form>

            {/* Mode swapper link */}
            <div className="text-center pt-2 border-t border-white/5">
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-xs text-slate-400 hover:text-white"
              >
                {mode === 'login' ? (
                  <>Don't have an account? <span className="text-brand-cyan font-bold hover:underline">Sign Up Free</span></>
                ) : (
                  <>Already have a verified account? <span className="text-brand-cyan font-bold hover:underline">Login here</span></>
                )}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
