import React from 'react';
import { Shield, Zap, Heart, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Clinical Features",
    features: [
      "Electronic Health Records",
      "Clinical Documentation",
      "E-Prescribing",
      "Lab Integration",
      "Medication Management",
      "Clinical Decision Support"
    ]
  },
  {
    title: "Administrative",
    features: [
      "Appointment Scheduling",
      "Patient Registration",
      "Insurance Verification",
      "Billing & Claims",
      "Document Management",
      "Reporting & Analytics"
    ]
  },
  {
    title: "Patient Engagement",
    features: [
      "Patient Portal",
      "Appointment Reminders",
      "Secure Messaging",
      "Telehealth",
      "Patient Education",
      "Online Bill Pay"
    ]
  }
];

const benefits = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enhanced Security",
    description: "HIPAA-compliant security measures to protect patient data"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Improved Efficiency",
    description: "Streamlined workflows that save time and reduce errors"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Better Patient Care",
    description: "More time with patients, less time with paperwork"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Modern Experience",
    description: "Intuitive interface that requires minimal training"
  }
];

export default function Features() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MedCare EMR?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Complete Feature List</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}