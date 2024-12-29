import { 
  Shield, 
  Zap, 
  Heart, 
  Sparkles, 
  Clock, 
  LineChart, 
  Users, 
  Lock, 
  Cloud 
} from 'lucide-react';
import { BenefitType } from '../types/benefits';

export const clinicalBenefits: BenefitType[] = [
  {
    icon: Heart,
    title: "Enhanced Patient Care",
    description: "Improve patient outcomes with comprehensive health records and clinical decision support."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce administrative burden with streamlined workflows and automated processes."
  },
  {
    icon: LineChart,
    title: "Clinical Insights",
    description: "Make informed decisions with data-driven analytics and reporting tools."
  }
];

export const operationalBenefits: BenefitType[] = [
  {
    icon: Zap,
    title: "Streamlined Operations",
    description: "Optimize practice workflow with integrated scheduling and billing systems."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Improve communication and coordination across your healthcare team."
  },
  {
    icon: Cloud,
    title: "Accessibility",
    description: "Access patient information securely from anywhere, anytime."
  }
];

export const securityBenefits: BenefitType[] = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Maintain patient privacy with built-in security features and compliance tools."
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Keep patient data secure with enterprise-grade encryption and access controls."
  },
  {
    icon: Sparkles,
    title: "Regular Updates",
    description: "Stay current with automatic updates and security patches."
  }
];