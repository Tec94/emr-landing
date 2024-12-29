import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
}

export default function PricingCard({
  name,
  price,
  period = '/month',
  description,
  features,
  popular,
  buttonText = 'Choose Plan'
}: PricingCardProps) {
  return (
    <div className={`relative bg-white p-8 rounded-lg border ${
      popular ? 'border-blue-600 shadow-lg' : ''
    }`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-600">{period}</span>}
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-4 rounded-lg font-medium ${
        popular
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}