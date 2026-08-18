'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import InquiryModal from '@/components/InquiryModal';
import ContactMap from '@/components/ContactMap';
import { companyProfile } from '@/lib/db';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { InquiryType } from '@/types';

export default function ContactPage() {
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
        {/* Contact Hero */}
        <section className="bg-[#F7F6F2] py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  START A CONVERSATION
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Hubungi Tim BuildDeva
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                Diskusikan rencana pembangunan, kebutuhan survei lokasi, atau peluang kemitraan langsung bersama tim profesional kami.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Direct Action */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Office Details */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div>
                  <h2 className="font-heading font-extrabold text-2xl text-charcoal mb-4">
                    Kantor Pusat & Workshop
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                    Kami menyambut baik kunjungan langsung untuk diskusi teknis dan peninjauan sampel material di kantor kami.
                  </p>
                </div>

                <div className="flex flex-col gap-6 bg-[#EFECE6] p-6 border border-[#E2DFD7]">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-olive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase text-charcoal">Alamat Kantor</h4>
                      <p className="text-xs text-muted-charcoal font-body leading-relaxed mt-1">
                        {companyProfile.address}<br />
                        {companyProfile.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-brand-olive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase text-charcoal">Telepon & WhatsApp</h4>
                      <p className="text-xs text-muted-charcoal font-body mt-1">
                        {companyProfile.phone}
                      </p>
                      <a href={companyProfile.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="text-xs font-heading font-bold uppercase text-brand-olive hover:underline inline-block mt-1">
                        Chat WhatsApp Resmi →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-olive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase text-charcoal">Email Inquiry</h4>
                      <p className="text-xs text-muted-charcoal font-body mt-1">
                        {companyProfile.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-brand-olive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase text-charcoal">Jam Operasional</h4>
                      <p className="text-xs text-muted-charcoal font-body mt-1">
                        {companyProfile.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Form Box Trigger */}
              <div className="lg:col-span-7 bg-[#EFECE6] p-8 sm:p-10 border border-[#E2DFD7] flex flex-col justify-between">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                    ONLINE INQUIRY PORTAL
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-charcoal mb-4">
                    Kirimkan Kebutuhan Proyek Anda
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed mb-8">
                    Isi formulir online untuk membuka tiket komunikasi langsung dengan Principal Structural Engineer dan Project Manager kami. Respon dijamin dalam 1x24 jam kerja.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleOpenInquiry('client')}
                    className="btn-primary w-full py-4 text-xs font-extrabold uppercase tracking-widest"
                  >
                    <span>BUKA FORMULIR KONSULTASI KLIEN</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleOpenInquiry('partner')}
                    className="btn-secondary w-full py-3.5 text-xs font-bold uppercase tracking-widest"
                  >
                    <span>FORMULIR PROPOSAL VENDOR / PARTNER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Geographic Mobilization & Industrial Zones Map */}
        <section className="py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactMap />
          </div>
        </section>

        {/* Integrated Calculator Section */}
        <ROICalculator onOpenInquiry={handleOpenInquiry} />
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
