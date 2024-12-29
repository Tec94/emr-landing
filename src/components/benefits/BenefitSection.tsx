import React from 'react';
import BenefitCard from './BenefitCard';
import { BenefitType } from '../../types/benefits';

interface BenefitSectionProps {
  title: string;
  description: string;
  benefits: BenefitType[];
}

export default function BenefitSection({ title, description, benefits }: BenefitSectionProps) {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
}