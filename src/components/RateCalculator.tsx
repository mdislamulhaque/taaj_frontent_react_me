/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpDown, 
  HelpCircle, 
  Check, 
  Sparkles, 
  Coins, 
  TrendingUp, 
  Zap, 
  ShieldAlert 
} from 'lucide-react';
import { Currency, ReceivingCountry } from '../types';

interface RateCalculatorProps {
  onInitiateTransfer: (details: {
    sendAmount: number;
    sendCurrency: string;
    receiveCountry: string;
    receiveAmount: number;
  }) => void;
}

// Sending Currencies
const SEND_CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
];

// Receiving Countries with base rates relative to 1 USD
const RECEIVE_COUNTRIES: ReceivingCountry[] = [
  { code: 'NG', name: 'Nigeria', currency: 'NGN', symbol: '₦', flag: '🇳🇬', ratePerUSD: 1580 },
  { code: 'BD', name: 'Bangladesh', currency: 'BDT', symbol: '৳', flag: '🇧🇩', ratePerUSD: 118.5 },
  { code: 'IN', name: 'India', currency: 'INR', symbol: '₹', flag: '🇮🇳', ratePerUSD: 83.6 },
  { code: 'KE', name: 'Kenya', currency: 'KES', symbol: 'KSh', flag: '🇰🇪', ratePerUSD: 131.2 },
  { code: 'GH', name: 'Ghana', currency: 'GHS', symbol: 'GH₵', flag: '🇬🇭', ratePerUSD: 15.2 },
];

// USD multipliers for sending currencies (1 Unit of sending currency = X USD)
const SEND_TO_USD_RATES: Record<string, number> = {
  USD: 1.0,
  GBP: 1.28,
  EUR: 1.09,
  CAD: 0.73,
};

export default function RateCalculator({ onInitiateTransfer }: RateCalculatorProps) {
  const [sendAmount, setSendAmount] = useState<number>(1000);
  const [sendCurrency, setSendCurrency] = useState<string>('GBP');
  const [receiveCountryCode, setReceiveCountryCode] = useState<string>('NG');
  const [isFirstTransferFree, setIsFirstTransferFree] = useState<boolean>(true);
  
  // Calculated states
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [transferFee, setTransferFee] = useState<number>(0);
  const [amountToConvert, setAmountToConvert] = useState<number>(0);
  const [receiveAmount, setReceiveAmount] = useState<number>(0);

  // Selected details
  const selectedSend = SEND_CURRENCIES.find(c => c.code === sendCurrency) || SEND_CURRENCIES[0];
  const selectedReceive = RECEIVE_COUNTRIES.find(c => c.code === receiveCountryCode) || RECEIVE_COUNTRIES[0];

  useEffect(() => {
    // 1. Calculate rate from send currency to receive currency
    // Send -> USD -> Receive
    const sendInUSD = SEND_TO_USD_RATES[sendCurrency]; // E.g. GBP is 1.28 USD
    const receiveRateInUSD = selectedReceive.ratePerUSD; // E.g. NGN is 1580 NGN per USD
    
    // How many units of Receive per 1 unit of Send
    const calculatedRate = sendInUSD * receiveRateInUSD;
    setExchangeRate(calculatedRate);

    // 2. Determine transfer fee (flat fee of 2.99 of send currency, or 0 if first transfer is free)
    const baseFee = isFirstTransferFree ? 0 : 2.99;
    setTransferFee(baseFee);

    // 3. Amount to convert
    const netConvert = Math.max(0, sendAmount - baseFee);
    setAmountToConvert(netConvert);

    // 4. Calculate final receive amount
    const finalReceive = netConvert * calculatedRate;
    setReceiveAmount(finalReceive);
  }, [sendAmount, sendCurrency, receiveCountryCode, isFirstTransferFree, selectedReceive]);

  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setSendAmount(isNaN(val) ? 0 : val);
  };

  const handleSwapCurrencies = () => {
    // Just a placeholder/fun toggler for dynamic rate testing
    // Since we only send from West (GBP/USD/EUR) to emerging markets (NGN/BDT), we can cycle the sending currencies
    const currentIndex = SEND_CURRENCIES.findIndex(c => c.code === sendCurrency);
    const nextIndex = (currentIndex + 1) % SEND_CURRENCIES.length;
    setSendCurrency(SEND_CURRENCIES[nextIndex].code);
  };

  // Comparative savings (with traditional banks)
  const bankExchangeRate = exchangeRate * 0.94; // banks usually hide 5-6% markup in exchange rate
  const bankFee = 9.99;
  const bankReceiveAmount = Math.max(0, (sendAmount - bankFee) * bankExchangeRate);
  const totalSavings = Math.max(0, receiveAmount - bankReceiveAmount);

  return (
    /* ==========================================
       REAL-TIME RATE CALCULATOR SECTION
       ========================================== */
    <div id="rates" className="w-full rounded-3xl glass-card p-6 border border-white/10 shadow-2xl relative overflow-hidden">
      
      {/* Decorative gradient corner glows */}
      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-cyan/20 blur-xl" />
      <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-brand-green/20 blur-xl" />

      {/* Calculator Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-cyan/10">
            <TrendingUp className="h-4.5 w-4.5 text-brand-cyan" />
          </div>
          <span className="font-sans text-sm font-bold tracking-wide uppercase text-slate-200">
            Real-Time Calculator
          </span>
        </div>
        
        {/* Toggle for first transfer free discount */}
        <button
          onClick={() => setIsFirstTransferFree(!isFirstTransferFree)}
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
            isFirstTransferFree 
              ? 'bg-brand-green/15 text-brand-green border border-brand-green/30' 
              : 'bg-white/5 text-slate-400 hover:bg-white/10'
          }`}
        >
          <Sparkles className="h-3 w-3" />
          First Transfer Free: {isFirstTransferFree ? 'ON' : 'OFF'}
        </button>
      </div>

      <div className="space-y-4">
        
        {/* INPUT: Send Amount */}
        <div className="relative rounded-2xl bg-white/5 p-4 border border-white/5 focus-within:border-brand-cyan/40 transition-all">
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">You Send</label>
            <span className="text-xs text-brand-green font-medium">Daily Limit: $50,000</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={sendAmount === 0 ? '' : sendAmount}
              onChange={handleSendAmountChange}
              min="10"
              className="w-1/2 bg-transparent text-2xl font-bold text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0.00"
            />
            
            {/* Static Sending Currency Display (Hidden Selector) */}
            <div className="flex items-center gap-2 bg-brand-navy border border-white/10 rounded-xl px-4 py-2 text-sm font-bold text-white">
              <span>{selectedSend.flag}</span>
              <span>{selectedSend.code}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Transfer Details Connector */}
        <div className="relative pl-6 py-2 space-y-3.5 border-l-2 border-dashed border-white/10 ml-8 my-1">
          
          {/* Swap visual trigger hidden to prevent currency changes */}

          {/* Fee item */}
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-slate-400 flex items-center gap-1">
              Transfer Fee
              <HelpCircle className="h-3 w-3 text-slate-500 cursor-help" title="No hidden charges. Flat rates apply." />
            </span>
            <span className={isFirstTransferFree ? 'text-brand-green font-bold flex items-center gap-1' : 'text-slate-200'}>
              {isFirstTransferFree ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  FREE (Promo applied)
                </>
              ) : (
                `${selectedSend.symbol}${transferFee.toFixed(2)}`
              )}
            </span>
          </div>

          {/* Amount to convert */}
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-slate-400">Amount to Convert</span>
            <span className="text-slate-200">
              {selectedSend.symbol}{amountToConvert.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          {/* Dynamic Exchange Rate */}
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-brand-cyan flex items-center gap-1">
              Guaranteed Rate
              <Zap className="h-3 w-3 fill-current" />
            </span>
            <span className="text-brand-cyan">
              1 {selectedSend.code} = {exchangeRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {selectedReceive.currency}
            </span>
          </div>
        </div>

        {/* INPUT: Receive Amount */}
        <div className="relative rounded-2xl bg-white/5 p-4 border border-white/5 focus-within:border-brand-cyan/40 transition-all">
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recipient Gets</label>
            <span className="text-xs text-brand-cyan font-semibold flex items-center gap-1">
              Instant Delivery
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white leading-none">
              {receiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            
            {/* Receiving Country Select */}
            <div className="flex items-center space-x-2">
              <select
                value={receiveCountryCode}
                onChange={(e) => setReceiveCountryCode(e.target.value)}
                className="bg-brand-navy border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none cursor-pointer hover:border-brand-cyan/50 transition-all"
              >
                {RECEIVE_COUNTRIES.map((country) => (
                  <option key={country.code} value={country.code} className="bg-brand-navy text-white font-bold">
                    {country.flag} {country.name} ({country.currency})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Savings comparison callout */}
        {receiveAmount > 0 && (
          <div className="rounded-xl bg-brand-green/10 p-3 border border-brand-green/20 flex items-start gap-2.5">
            <Coins className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-brand-green">You save up to {selectedReceive.symbol}{totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> compared to high-street banks and retail agents. We lock your rates instantly.
            </div>
          </div>
        )}

        {/* MAIN SEND CALL TO ACTION */}
        <button
          onClick={() => onInitiateTransfer({
            sendAmount,
            sendCurrency: selectedSend.code,
            receiveCountry: selectedReceive.name,
            receiveAmount,
          })}
          className="w-full relative py-4 rounded-2xl font-bold text-base text-brand-navy bg-gradient-to-r from-brand-cyan to-brand-green transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl hover:shadow-brand-cyan/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          <Zap className="h-5 w-5 fill-current" />
          Send Money Instantly
        </button>

        {/* Fast Compliance Statement */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 mt-2">
          <Check className="h-3 w-3 text-brand-green" />
          Fully regulated by CBN & compliant with AML guidelines.
        </div>
      </div>
    </div>
  );
}
