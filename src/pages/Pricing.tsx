import React, { useState } from 'react';
import PricingToggle from '../components/pricing/PricingToggle';
import PricingCard from '../components/pricing/PricingCard';

const clinicPlans = [
  {
    name: "Basic",
    price: "$45",
    description: "Designed for small solo or group clinics with basic needs.",
    features: [
      "Up to 500 patient records",
      "Basic appointment scheduling",
      "Simple medical records management",
      "Basic billing features",
      "Email support"
    ]
  },
  {
    name: "Standard",
    price: "$100",
    description: "Ideal for growing clinics requiring more tools and insights.",
    popular: true,
    features: [
      "Up to 2,000 patient records",
      "Advanced appointment management",
      "Comprehensive medical records",
      "Full billing & insurance processing",
      "Lab results integration",
      "Priority email & phone support"
    ]
  },
  {
    name: "Advanced",
    price: "$240",
    description: "Tailored for mid-sized clinics needing enhanced features.",
    features: [
      "Up to 5,000 patient records",
      "Advanced scheduling with reminders",
      "Complete medical records with templates",
      "Advanced billing with analytics",
      "Full lab & medication integration",
      "Custom reports & analytics",
      "24/7 phone support"
    ]
  },
  {
    name: "Premium",
    price: "$360",
    description: "For multi-specialty or high-volume clinics.",
    features: [
      "Unlimited patient records",
      "AI-powered scheduling optimization",
      "Advanced templates & workflows",
      "Revenue cycle management",
      "Full system integration capabilities",
      "Custom analytics & reporting",
      "Dedicated support manager"
    ]
  }
];

const hospitalPlans = [
  {
    name: "Essential",
    price: "$600",
    description: "For small hospitals and specialty centers.",
    features: [
      "Up to 10,000 patient records",
      "Multi-department scheduling",
      "Integrated medical records",
      "Basic billing & insurance",
      "Standard lab integration",
      "Basic analytics dashboard",
      "Standard support"
    ]
  },
  {
    name: "Professional",
    price: "$1,200",
    description: "Best for medium-sized hospitals needing advanced tools.",
    popular: true,
    features: [
      "Up to 50,000 patient records",
      "Advanced department management",
      "Complete medical records system",
      "Advanced billing & claims",
      "Full lab & imaging integration",
      "Advanced analytics & reporting",
      "Priority support with SLA"
    ]
  },
  {
    name: "Enterprise",
    price: "$2,400",
    description: "For large hospitals requiring advanced capabilities.",
    features: [
      "Unlimited patient records",
      "Enterprise scheduling system",
      "Custom medical record workflows",
      "Revenue cycle optimization",
      "Full system integration suite",
      "AI-powered analytics",
      "24/7 dedicated support team"
    ]
  },
  {
    name: "Elite",
    price: "$5,000",
    description: "Full-suite solutions for healthcare networks.",
    features: [
      "Multi-hospital management",
      "Network-wide scheduling",
      "Custom system integration",
      "Advanced revenue optimization",
      "Custom AI solutions",
      "White-glove support service",
      "Dedicated success manager"
    ]
  }
];

export default function Pricing() {
  const [selected, setSelected] = useState<'clinics' | 'hospitals'>('clinics');
  const plans = selected === 'clinics' ? clinicPlans : hospitalPlans;

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that best fits your organization</p>
        </div>

        <PricingToggle selected={selected} onChange={setSelected} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600">
          Need a custom plan? <a href="#contact" className="text-blue-600 hover:underline">Contact our sales team</a>
        </div>
      </div>
    </div>
  );
}