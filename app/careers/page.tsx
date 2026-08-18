'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import { careersData } from '@/lib/db';
import { Briefcase, MapPin, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { InquiryType } from '@/types';

export default function CareersPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('talent');

  const handleOpenInquiry = (type: InquiryType = 'talent') => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="grow pt-28 pb-16">
        {/* Careers Hero */}
        <section className="bg-[#F7F6F2] py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  BUILDDEVA CAREERS & TALENT
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Bergabung Bersama Profesional Konstruksi Berdedikasi High-Standard
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                Kami membangun lingkungan kerja yang menghargai integritas, disiplin eksekusi teknis, keselamatan kerja tanpa kompromi, dan pengembangan profesional berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        {/* Culture & Employee Value Proposition */}
        <section className="py-16 bg-[#EFECE6] border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-[#E2DFD7]">
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Budaya Presisi & Integritas</h3>
                <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                  Kami mengedepankan objektivitas data, kepatuhan lisensi, dan kejujuran spesifikasi dalam setiap pengerjaan.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#E2DFD7]">
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Peluang Proyek Strategis</h3>
                <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                  Kesempatan terlibat langsung pada gedung perkantoran bertingkat tinggi, pusat logistik luas, dan hunian mewah.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#E2DFD7]">
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Sertifikasi & K3 Didukung</h3>
                <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                  Dukungan pelatihan sertifikasi SKK Konstruksi, K3 Kemnaker, dan pemodelan BIM Revit berkala.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Listing */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                POSISI DIBUKA CURRENT OPENINGS
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-charcoal">
                Lowongan Pekerjaan Terverifikasi
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {careersData.map((job) => (
                <div key={job.id} className="bg-[#EFECE6] p-8 border border-[#E2DFD7] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex flex-col gap-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-charcoal text-white font-heading text-[10px] font-bold uppercase px-3 py-1">
                        {job.department}
                      </span>
                      <span className="text-xs font-heading font-bold text-brand-olive flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="text-xs font-heading font-bold text-muted-charcoal flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type} • {job.experienceLevel}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-charcoal mt-1">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                      {job.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenInquiry('talent')}
                    className="bg-charcoal text-white hover:bg-brand-olive font-heading text-xs font-bold uppercase tracking-widest py-3.5 px-6 border border-charcoal transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>LAMAR POSISI INI</span>
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
