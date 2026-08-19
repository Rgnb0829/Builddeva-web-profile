'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import ProjectTimeline from '@/components/ProjectTimeline';
import { projectsData } from '@/lib/db';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building, Calendar, MapPin, UserCheck, ShieldCheck } from 'lucide-react';
import { InquiryType } from '@/types';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('client');

  const project = projectsData.find(
    p => p.id === id || p.slug === id
  );

  const handleOpenInquiry = (type: InquiryType = 'client') => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F7F6F2] flex flex-col justify-center items-center p-8">
        <h1 className="font-heading font-bold text-2xl text-charcoal mb-4">Proyek Tidak Ditemukan</h1>
        <Link href="/projects" className="bg-charcoal text-white px-6 py-3 font-heading text-xs uppercase font-bold">
          Kembali ke Daftar Proyek
        </Link>
      </div>
    );
  }

  const relatedProjects = projectsData.filter(p => p.id !== project.id && p.category === project.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="grow pt-28 pb-16">
        {/* Back link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-muted-charcoal hover:text-brand-olive">
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Portofolio</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-10 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                CASE STUDY • {project.category.toUpperCase()}
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-sm text-muted-charcoal font-body max-w-2xl">
                {project.overview}
              </p>
            </div>

            {/* Fact Sheet Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#EFECE6] p-6 border border-[#E2DFD7] mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-olive shrink-0" />
                <div>
                  <span className="text-[10px] text-muted-charcoal font-heading uppercase block">Lokasi</span>
                  <span className="font-heading font-bold text-xs text-charcoal">{project.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-brand-olive shrink-0" />
                <div>
                  <span className="text-[10px] text-muted-charcoal font-heading uppercase block">Klien Resmi</span>
                  <span className="font-heading font-bold text-xs text-charcoal">{project.clientName}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-brand-olive shrink-0" />
                <div>
                  <span className="text-[10px] text-muted-charcoal font-heading uppercase block">Luas Area</span>
                  <span className="font-heading font-bold text-xs text-charcoal">{project.areaSize}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-olive shrink-0" />
                <div>
                  <span className="text-[10px] text-muted-charcoal font-heading uppercase block">Durasi & Selesai</span>
                  <span className="font-heading font-bold text-xs text-charcoal">{project.duration} ({project.completionDate})</span>
                </div>
              </div>
            </div>

            {/* Main Hero Image */}
            <div className="relative h-[480px] w-full border border-[#E2DFD7]">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Challenge, Approach & Result Structure */}
        <section className="py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Challenge */}
              <div className="bg-[#EFECE6] p-8 border-t-2 border-charcoal flex flex-col justify-between">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                    01. TANTANGAN PROYEK
                  </span>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-4">
                    Kondisi Lapangan & Kendala Teknis
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="bg-[#EFECE6] p-8 border-t-2 border-brand-olive flex flex-col justify-between">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                    02. SOLUSI & METODE
                  </span>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-4">
                    Rekayasa & Manajemen Presisi
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="bg-dark-green text-offwhite p-8 border-t-2 border-cta-yellow flex flex-col justify-between">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-cta-yellow block mb-2">
                    03. HASIL & NIKMATI DED
                  </span>
                  <h3 className="font-heading font-bold text-xl text-offwhite mb-4">
                    Kualitas Terverifikasi
                  </h3>
                  <p className="text-xs sm:text-sm text-offwhite/80 font-body leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Construction Milestone Vertical Timeline */}
        <ProjectTimeline project={project} />

        {/* Project Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-16 border-b border-[#E2DFD7] bg-[#EFECE6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-1">
                  GALERI DOKUMENTASI FISIK
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-charcoal">
                  Detail Arsitektural & Lapangan
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="relative h-72 w-full border border-[#E2DFD7] overflow-hidden">
                    <Image
                      src={imgUrl}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial from Client */}
        {project.testimonial && (
          <section className="py-16 border-b border-[#E2DFD7]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#EFECE6] p-8 sm:p-10 border-l-4 border-cta-yellow">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-3">
                  TESTIMONI KLIEN PROYEK INI
                </span>
                <p className="text-base sm:text-lg text-charcoal font-body italic leading-relaxed mb-6">
                  &quot;{project.testimonial.quote}&quot;
                </p>
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal">{project.testimonial.author}</h4>
                  <p className="text-xs text-muted-charcoal font-body">{project.testimonial.title}, {project.testimonial.company}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 border-b border-[#E2DFD7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-extrabold text-2xl text-charcoal mb-8">
                Proyek Sejenis Lainnya
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((rp) => (
                  <div key={rp.id} className="bg-white border border-[#E2DFD7] p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative h-44 w-full md:w-56 shrink-0 border border-[#E2DFD7]">
                      <Image src={rp.heroImage} alt={rp.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase text-brand-olive block mb-1">{rp.category}</span>
                      <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{rp.title}</h3>
                      <p className="text-xs text-muted-charcoal font-body line-clamp-2 mb-4">{rp.overview}</p>
                      <Link href={`/projects/${rp.slug}`} className="text-xs font-heading font-bold uppercase text-brand-olive underline">
                        Lihat Case Study
                      </Link>
                    </div>
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
