/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export interface ReceivingCountry {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  flag: string;
  ratePerUSD: number; // base exchange rate relative to USD
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  countryFlag: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'transfer' | 'security' | 'account';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Map to Lucide icon string
}
