import React from 'react';
import BenefitSection from '../components/benefits/BenefitSection';
import { clinicalBenefits, operationalBenefits, securityBenefits } from '../data/benefits';

export default function Benefits() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-blue-600">MedCare EMR</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your healthcare practice with our comprehensive EMR solution designed to enhance patient care, streamline operations, and ensure security.
          </p>
        </div>

        {/* Benefits Sections */}
        <BenefitSection
          title="Clinical Excellence"
          description="Enhance your clinical workflow and improve patient outcomes"
          benefits={clinicalBenefits}
        />

        <BenefitSection
          title="Operational Efficiency"
          description="Streamline your practice operations and save valuable time"
          benefits={operationalBenefits}
        />

        <BenefitSection
          title="Security & Compliance"
          description="Keep your patient data secure and maintain compliance"
          benefits={securityBenefits}
        />
      </div>
    </div>
  );
}