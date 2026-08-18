'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import ServicesGrid from '@/components/ServicesGrid';
import { InquiryType } from '@/types';

export default function ServicesPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('client');

  const handleOpenInquiry = (type: InquiryType = 'client') => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="grow pt-28 pb-16">
        {/* Services Hero */}
        <section className="bg-[#F7F6F2] py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  BUILDDEVA EXPERTISE & SERVICES
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Specialized Divisions Delivering Structural Precision
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                Dari hunian privat eksklusif, pergudangan logistik bentang lebar, hingga gedung perkantoran dan renovasi struktur komersial.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section with Scroll Animations */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesGrid onOpenInquiry={handleOpenInquiry} />
          </div>
        </section>

        <CTABanner onOpenInquiry={handleOpenInquiry} />
      </main>

      <Footer />
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialType={inquiryType}
      />
    </div>
  );
}
