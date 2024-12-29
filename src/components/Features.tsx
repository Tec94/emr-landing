import React from 'react';
import { ClipboardList, Calendar, FileText, BarChart3, MessageSquare, Lock, Shield, Clock, Users } from 'lucide-react';
import FeatureCard from './features/FeatureCard';
import FeatureHighlight from './features/FeatureHighlight';

const features = [
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Electronic Health Records",
    description: "Comprehensive patient records with easy access and updates",
    benefits: [
      "Secure digital storage",
      "Quick access to patient history",
      "Customizable templates"
    ]
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Appointment Scheduling",
    description: "Smart scheduling system with automated reminders",
    benefits: [
      "Online booking",
      "Automated reminders",
      "Calendar integration"
    ]
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documentation",
    description: "Streamlined clinical documentation and note-taking",
    benefits: [
      "Voice-to-text",
      "Custom templates",
      "Quick charting"
    ]
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics & Reporting",
    description: "Detailed insights and performance metrics",
    benefits: [
      "Custom reports",
      "Financial analytics",
      "Practice insights"
    ]
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Patient Portal",
    description: "Secure communication and information sharing",
    benefits: [
      "Secure messaging",
      "Lab results access",
      "Appointment requests"
    ]
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Security",
    description: "Advanced security measures and compliance features",
    benefits: [
      "HIPAA compliant",
      "Data encryption",
      "Access controls"
    ]
  }
];

const highlights = [
  {
    title: "Streamlined Patient Care",
    description: "Our intuitive interface helps healthcare providers focus on what matters most - patient care. With quick access to patient records, automated workflows, and smart features, you can spend more time with patients and less time on paperwork.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  },
  {
    title: "Data-Driven Decisions",
    description: "Transform your practice with powerful analytics and reporting tools. Gain insights into patient trends, operational efficiency, and financial performance to make informed decisions for your practice.",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
    reverse: true
  }
];

const stats = [
  { icon: <Users className="h-6 w-6" />, value: "10,000+", label: "Healthcare Providers" },
  { icon: <Shield className="h-6 w-6" />, value: "100%", label: "HIPAA Compliant" },
  { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Support Available" }
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive EMR Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your practice efficiently and provide excellent patient care
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="space-y-20">
          {highlights.map((highlight, index) => (
            <FeatureHighlight key={index} {...highlight} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}