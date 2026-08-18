'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import { companyProfile } from '@/lib/db';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { InquiryType } from '@/types';

export default function AboutPage() {
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
        {/* Page Hero */}
        <section className="bg-[#F7F6F2] py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  ABOUT BUILDDEVA
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Building Digital & Physical Trust Through Absolute Clarity
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                {companyProfile.positioning}
              </p>
            </div>
          </div>
        </section>

        {/* Story & Philosophy */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  OUR PHILOSOPHY
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">
                  Membangun Tanpa Ketidakpastian
                </h2>
                <p className="text-sm sm:text-base text-muted-charcoal font-body leading-relaxed">
                  Dalam industri konstruksi, kegagalan terbesar sering kali berakar dari kurangnya komunikasi dan ambiguitas spesifikasi. Di BuildDeva, kami memotong rantai keraguan tersebut dengan pendekatan data-driven dan dokumentasi teknis harian yang transparan.
                </p>
                <p className="text-sm sm:text-base text-muted-charcoal font-body leading-relaxed">
                  Setiap meter persegi pengerjaan dikontrol oleh tim engineer bersertifikat IPM, didukung oleh sistem pengawasan K3 ISO 4501, dan dilaporkan secara real-time.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#EFECE6] p-4 border-l-2 border-brand-olive">
                    <span className="font-heading font-extrabold text-2xl text-charcoal block">15+ Tahun</span>
                    <span className="text-xs text-muted-charcoal font-body">Rekam Jejak Lapangan</span>
                  </div>
                  <div className="bg-[#EFECE6] p-4 border-l-2 border-brand-olive">
                    <span className="font-heading font-extrabold text-2xl text-charcoal block">100%</span>
                    <span className="text-xs text-muted-charcoal font-body">Kepatuhan Lisensi SNI</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-[450px] border border-[#E2DFD7] shadow-lg">
                <Image
                  src="https://picsum.photos/seed/aboutbuilddeva/1000/800"
                  alt="BuildDeva Leadership and Structural Engineers"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Core Values */}
        <section className="bg-dark-green text-offwhite py-20 border-b border-[#2A372B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-cta-yellow block mb-2">
                NILAI UTAMA PERUSAHAAN
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-offwhite">
                Prinsip Yang Mengatur Setiap Keputusan Teknis
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyProfile.values.map((val, idx) => (
                <div key={val.title} className="bg-[#2A372B] p-6 border border-white/10 flex flex-col gap-3">
                  <span className="font-heading text-xs font-bold text-cta-yellow uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-offwhite">
                    {val.title}
                  </h3>
                  <p className="text-xs text-offwhite/70 font-body leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                HUMAN TRUST & LEADERSHIP
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">
                Kepemimpinan & Tim Engineering Utama
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyProfile.team.map((member) => (
                <div key={member.name} className="bg-[#EFECE6] border border-[#E2DFD7] overflow-hidden group">
                  <div className="relative h-[320px] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-charcoal">
                      {member.name}
                    </h3>
                    <p className="font-heading text-xs font-bold uppercase text-brand-olive mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
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
