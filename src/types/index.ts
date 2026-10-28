export type CaseCategory = 'all' | 'neck-spine' | 'womens-health' | 'rsi-wrist' | 'corporate-team';

export interface CaseStudy {
  id: string;
  title: string;
  category: CaseCategory;
  categoryLabel: string;
  clientProfile: {
    role: string;
    industry: string;
    age: number | string;
    deskHours: string;
  };
  durationWeeks: number;
  primarySymptoms: string[];
  baselinePainScore: number; // 0-10 VAS
  finalPainScore: number; // 0-10 VAS
  keyMetrics: {
    label: string;
    before: string;
    after: string;
  }[];
  summary: string;
  clinicalDiagnosis: string;
  rootCauses: string[];
  interventions: {
    phase: string;
    title: string;
    actions: string[];
  }[];
  ergonomicChanges: string[];
  outcomeSummary: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  deliverables: string[];
  format: 'Clinic & Virtual' | 'On-Site & Virtual' | 'Corporate Masterclass';
  image: string;
}

export interface BookingFormData {
  serviceType: string;
  consultationFormat: 'virtual' | 'in-clinic' | 'corporate-onsite';
  fullName: string;
  email: string;
  company?: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  primaryConcern: string;
  notes?: string;
}
