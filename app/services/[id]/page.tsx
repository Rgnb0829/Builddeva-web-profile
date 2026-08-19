'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import { servicesData, projectsData } from '@/lib/db';
import { ArrowUpRight, CheckCircle2, ChevronDown, ArrowLeft } from 'lucide-react';
import { InquiryType } from '@/types';

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('client');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = servicesData.find(
    s => s.id === id || s.slug === id || s.category.toLowerCase() === id.toLowerCase()
  );

  const handleOpenInquiry = (type: InquiryType = 'client') => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F6F2] flex flex-col justify-center items-center p-8">
        <h1 className="font-heading font-bold text-2xl text-charcoal mb-4">Layanan Tidak Ditemukan</h1>
        <Link href="/services" className="bg-charcoal text-white px-6 py-3 font-heading text-xs uppercase font-bold">
          Kembali ke Daftar Layanan
        </Link>
      </div>
    );
  }

  // Find relevant projects
  const relevantProjects = projectsData.filter(p => service.relevantProjectIds.includes(p.id) || p.category === service.category);

  // Generate JSON-LD FAQ Schema for Search Engine SEO
  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body">
      {/* Inject Structured FAQ Schema for SEO */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="grow pt-28 pb-16">
        {/* Breadcrumb & Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-muted-charcoal hover:text-brand-olive">
            <ArrowLeft className="w-4 h-4" />
            <span>Daftar Layanan</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  DIVISI LAYANAN • {service.category.toUpperCase()}
                </span>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                  {service.title}
                </h1>
                <p className="font-heading text-sm font-bold text-muted-charcoal">
                  {service.subtitle}
                </p>
                <p className="text-sm text-muted-charcoal font-body leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => handleOpenInquiry('client')}
                    className="bg-charcoal text-white hover:bg-brand-olive font-heading text-xs font-bold uppercase tracking-widest px-7 py-4 border border-charcoal transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>MINTA PENAWARAN PROYEK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[380px] w-full border border-[#E2DFD7] shadow-lg">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scope of Work */}
        <section className="py-16 bg-[#EFECE6] border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                SCOPE OF WORK
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal">
                Cakupan Pekerjaan Teknis & Eksekusi
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.scopeOfWork.map((item, idx) => (
                <div key={idx} className="bg-white p-6 border border-[#E2DFD7] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-olive shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-heading font-bold text-charcoal leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach & Capabilities */}
        <section className="py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                  OUR APPROACH
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
                  Metodologi & Kontrol Presisi
                </h2>
                <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                  {service.approach}
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.capabilities.map((cap) => (
                  <div key={cap.title} className="bg-[#EFECE6] p-6 border-l-2 border-brand-olive flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-base text-charcoal">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Projects */}
        {relevantProjects.length > 0 && (
          <section className="py-16 border-b border-[#E2DFD7] bg-[#F7F6F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-1">
                    PROOF OF CAPABILITY
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl text-charcoal">
                    Portofolio Terkait Layanan Ini
                  </h2>
                </div>
                <Link href="/projects" className="text-xs font-heading font-bold uppercase tracking-widest text-brand-olive hover:underline">
                  Lihat Semua
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relevantProjects.map((proj) => (
                  <div key={proj.id} className="bg-white border border-[#E2DFD7] overflow-hidden group">
                    <div className="relative h-56 w-full">
                      <Image
                        src={proj.heroImage}
                        alt={proj.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-muted-charcoal font-body mb-4">
                        {proj.location} • {proj.year}
                      </p>
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="text-xs font-heading font-bold uppercase tracking-wider text-brand-olive flex items-center gap-1 hover:underline"
                      >
                        <span>Lihat Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 border-b border-[#E2DFD7]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-1">
                  FAQ LAYANAN
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal">
                  Pertanyaan Yang Sering Diajukan
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#EFECE6] border border-[#E2DFD7]">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left font-heading font-bold text-sm text-charcoal flex items-center justify-between cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180 text-brand-olive' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed border-t border-[#E2DFD7]/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
