'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MetricsBar from '@/components/MetricsBar';
import ProcessSection from '@/components/ProcessSection';
import DisciplinesSection from '@/components/DisciplinesSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ROICalculator from '@/components/ROICalculator';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { projectsData, testimonialsData, companyProfile } from '@/lib/db';
import { InquiryType } from '@/types';

export default function HomePage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('client');
  const [modalDefaults, setModalDefaults] = useState<Record<string, string>>({});

  const handleOpenInquiry = (type: InquiryType = 'client', defaults: Record<string, string> = {}) => {
    setInquiryType(type);
    setModalDefaults(defaults);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body selection:bg-brand-olive selection:text-white">
      {/* Sticky Header */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <HeroSection onOpenInquiry={handleOpenInquiry} />

        {/* Metrics Bar ("The Standard of Excellence") */}
        <MetricsBar metrics={companyProfile.metrics} />

        {/* Disciplines Section / Services Overview ("— DISCIPLINES") */}
        <DisciplinesSection />

        {/* Featured Projects ("— SELECTED WORKS") */}
        <FeaturedProjects projects={projectsData} />

        {/* Process Section ("— HOW WE WORK") */}
        <ProcessSection />

        {/* Project Cost & Timeline Calculator */}
        <ROICalculator onOpenInquiry={handleOpenInquiry} />

        {/* Testimonials & Verified Proof */}
        <TestimonialsSection testimonials={testimonialsData} />

        {/* Final Call To Action Banner */}
        <CTABanner onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialType={inquiryType}
        defaultValues={modalDefaults}
      />
    </div>
  );
}
