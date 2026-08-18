import { z } from 'zod';

export const InquirySchema = z.object({
  type: z.enum(['client', 'partner', 'talent'], {
    message: 'Pilih jenis hubungan/inquiry',
  }),
  fullName: z.string().min(2, 'Nama lengkap minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().min(9, 'Nomor telepon minimal 9 digit'),
  companyName: z.string().optional(),
  projectType: z.string().optional(),
  estimatedBudget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, 'Pesan minimal 10 karakter untuk kejelasan tim kami'),
  source: z.string().optional().default('Website Direct'),
});

export type InquiryFormValues = z.infer<typeof InquirySchema>;

export const CostEstimatorSchema = z.object({
  projectType: z.enum(['Residential', 'Warehouse & Industrial', 'Commercial', 'Renovation']),
  areaSqm: z.number().min(20, 'Luas area minimal 20 m²').max(100000, 'Luas area maksimal 100.000 m²'),
  qualityGrade: z.enum(['Standard', 'Premium', 'Luxury Architectural']),
  locationZone: z.enum(['Jabodetabek', 'Java Outer', 'Outside Java']),
});

export type CostEstimatorValues = z.infer<typeof CostEstimatorSchema>;

export const CareerApplicationSchema = z.object({
  jobId: z.string(),
  jobTitle: z.string(),
  fullName: z.string().min(2, 'Nama lengkap wajib diisi'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(9, 'Nomor telepon tidak valid'),
  portfolioUrl: z.string().url('URL portofolio/LinkedIn tidak valid').optional().or(z.literal('')),
  coverLetter: z.string().min(20, 'Harap sertukan deskripsi singkat pengalaman Anda (minimal 20 karakter)'),
});

export type CareerApplicationValues = z.infer<typeof CareerApplicationSchema>;

export const PartnershipInquirySchema = z.object({
  category: z.enum(['Suppliers/Vendors', 'Architects/Consultants', 'Business Partners', 'Construction Professionals']),
  companyName: z.string().min(2, 'Nama perusahaan/entitas wajib diisi'),
  contactPerson: z.string().min(2, 'Nama kontak person wajib diisi'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(9, 'Nomor telepon tidak valid'),
  offeringDescription: z.string().min(15, 'Jelaskan profil dan penawaran kemitraan secara singkat (minimal 15 karakter)'),
  websiteUrl: z.string().url('URL website tidak valid').optional().or(z.literal('')),
});

export type PartnershipInquiryValues = z.infer<typeof PartnershipInquirySchema>;
