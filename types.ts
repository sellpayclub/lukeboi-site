import React from 'react';

export interface Product {
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon?: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}