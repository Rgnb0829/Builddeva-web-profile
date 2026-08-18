'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import { partnershipsData } from '@/lib/db';
import { Handshake, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { InquiryType } from '@/types';

export default function PartnershipPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('partner');

  const handleOpenInquiry = (type: InquiryType = 'partner') => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="grow pt-28 pb-16">
        {/* Partnership Hero */}
        <section className="bg-[#F7F6F2] py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  RELATIONSHIP ECOSYSTEM
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Kemitraan Strategis & Ekosistem Saling Menguntungkan
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                BuildDeva membangun hubungan jangka panjang bersama produsen material, studio arsitek, pengembang properti, dan kontraktor spesialis di seluruh Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipsData.map((part) => (
                <div key={part.id} className="bg-[#EFECE6] p-8 border border-[#E2DFD7] flex flex-col justify-between">
                  <div>
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                      {part.targetGroup}
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl text-charcoal mb-3">
                      {part.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed mb-6">
                      {part.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-xs uppercase text-charcoal mb-2">Kriteria Kualifikasi:</h4>
                      <ul className="flex flex-col gap-1.5">
                        {part.criteria.map((c, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-charcoal">
                            <CheckCircle2 className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenInquiry('partner')}
                    className="w-full bg-charcoal text-white hover:bg-brand-olive font-heading text-xs font-bold uppercase tracking-widest py-3 px-4 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>AJUKAN PROPOSAL KEMITRAAN</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
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
