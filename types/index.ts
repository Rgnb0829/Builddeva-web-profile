export type ProjectCategory = 'All' | 'Residential' | 'Warehouse & Industrial' | 'Commercial' | 'Renovation';

export interface ProjectMilestone {
  title: string;
  stage: string;
  targetDate: string;
  actualDate: string;
  status: 'completed' | 'in_progress' | 'scheduled';
  summary: string;
  deliverables?: string[];
  varianceNote?: string;
  onTrack: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: number;
  location: string;
  clientName: string;
  heroImage: string;
  gallery: string[];
  areaSize: string; // e.g. "4,500 sqm"
  duration: string; // e.g. "14 Months"
  completionDate: string;
  overview: string;
  challenge: string;
  approach: string;
  result: string;
  isFeatured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  milestones?: ProjectMilestone[];
}

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  heroImage: string;
  scopeOfWork: string[];
  approach: string;
  capabilities: ServiceCapability[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relevantProjectIds: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  projectTitle: string;
  category: string;
  avatarUrl?: string;
  rating: number;
  quote: string;
  date: string;
}

export interface Career {
  id: string;
  slug: string;
  title: string;
  department: 'Engineering' | 'Architecture' | 'Project Management' | 'Operations' | 'Safety';
  location: string;
  type: 'Full-time' | 'Contract';
  experienceLevel: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  isOpen: boolean;
  postedDate: string;
}

export interface PartnershipCategory {
  id: string;
  title: string;
  targetGroup: 'Suppliers/Vendors' | 'Architects/Consultants' | 'Business Partners' | 'Construction Professionals';
  description: string;
  criteria: string[];
  benefits: string[];
}

export type InquiryType = 'client' | 'partner' | 'talent';

export interface Inquiry {
  id: string;
  type: InquiryType;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType?: string;
  estimatedBudget?: string;
  location?: string;
  message: string;
  source?: string;
  createdAt: string;
  status: 'new' | 'in_review' | 'contacted' | 'resolved';
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  workingHours: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
  metrics: {
    yearsExperience: number;
    projectsCompleted: number;
    specializations: number;
    clientSatisfaction: number;
  };
  values: {
    title: string;
    description: string;
  }[];
  team: {
    name: string;
    role: string;
    bio: string;
    image: string;
  }[];
}

export interface MediaAsset {
  id: string;
  title: string;
  url: string;
  category: 'architecture' | 'construction' | 'interior' | 'safety';
  alt: string;
}

export interface CostEstimatorInput {
  projectType: 'Residential' | 'Warehouse & Industrial' | 'Commercial' | 'Renovation';
  areaSqm: number;
  qualityGrade: 'Standard' | 'Premium' | 'Luxury Architectural';
  locationZone: 'Jabodetabek' | 'Java Outer' | 'Outside Java';
}

export interface CostEstimatorResult {
  estimatedCostMin: number;
  estimatedCostMax: number;
  currency: string;
  estimatedDurationMonths: number;
  recommendedConsultationSteps: string[];
  disclaimer: string;
}
