'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import { ShieldCheck, MessageSquare, ClipboardCheck, HardHat, FileText, CheckCircle2 } from 'lucide-react';
import { InquiryType } from '@/types';

export default function HowWeWorkPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('client');

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Initial Discovery',
      sub: 'Diskusi Kebutuhan, Anggaran & Visi Bangunan',
      desc: 'Kami mendengarkan dengan saksama seluruh kebutuhan ruang, batasan anggaran, dan ekspektasi waktu Anda. Kami memberikan analisis kelayakan awal tanpa biaya komitmen.'
    },
    {
      step: '02',
      title: 'Site Assessment & Soil Test',
      sub: 'Survei Topografi & Daya Dukung Lahan',
      desc: 'Tim engineer kami turun ke lokasi untuk menguji sondir/boring tanah, memetakan kontur, dan memeriksa ketersediaan jaringan utilitas lokal.'
    },
    {
      step: '03',
      title: 'Architectural & Engineering Planning (DED)',
      sub: 'Penyusunan Gambar Kerja DED & Perhitungan Struktur',
      desc: 'Penyusunan Detail Engineering Design lengkap dengan pemodelan BIM 3D, analisis beban gempa/angin, dan spesifikasi material SNI.'
    },
    {
      step: '04',
      title: 'Transparent Proposal & Contract Agreement',
      sub: 'RAB Definitif Tanpa Biaya Tersembunyi',
      desc: 'Penyerahan Rencana Anggaran Biaya (RAB) rinci item per item. Kontrak kerja mencakup pasal garansi struktur, jadwal pembayaran progresif, dan penalti keterlambatan.'
    },
    {
      step: '05',
      title: 'Precision Construction & K3 Execution',
      sub: 'Pengerjaan Lapangan Berstandar ISO 4501',
      desc: 'Eksekusi fisik oleh tenaga ahli bersertifikat. Pengawasan harian oleh Site Engineer dan laporan progres mingguan berbasis foto & video drone.'
    },
    {
      step: '06',
      title: 'Multi-Point Quality Control Inspections',
      sub: 'Inspeksi Bertingkat & Non-Destructive Test',
      desc: 'Pengujian kekuatan beton (cube test), tes kebocoran air (waterproofing pond test), dan tes instalasi listrik sebelum penutupan dinding/plafon.'
    },
    {
      step: '07',
      title: 'Handover & Long-Term Warranty',
      sub: 'Serah Terima Kunci & Masa Pemeliharaan',
      desc: 'Pemeriksaan akhir bersama klien, penyerahan berkas As-Built Drawing & garansi pemeliharaan struktur resmi hingga 10 tahun.'
    }
  ];

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
                  UNCERTAINTY REDUCTION LAYER
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Metodologi Kerja & Transparansi Tanpa Keraguan
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                Konstruksi tanpa kejutan negatif. Setiap tahapan dirancang untuk mengeliminasi risiko pembengkakan biaya, keterlambatan jadwal, dan penurunan mutu.
              </p>
            </div>
          </div>
        </section>

        {/* Core Pillars for Risk Reduction */}
        <section className="py-16 bg-[#EFECE6] border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 border border-[#E2DFD7] flex flex-col gap-3">
                <MessageSquare className="w-8 h-8 text-brand-olive" />
                <h3 className="font-heading font-bold text-lg text-charcoal">
                  Komunikasi Transparan 24/7
                </h3>
                <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                  Akses portal laporan progres mingguan lengkap dengan dokumentasi foto kurasi, grafik realisasi vs jadwal, dan rekapitulasi penggunaan anggaran.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#E2DFD7] flex flex-col gap-3">
                <ClipboardCheck className="w-8 h-8 text-brand-olive" />
                <h3 className="font-heading font-bold text-lg text-charcoal">
                  Manajemen Proyek Terukur
                </h3>
                <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                  Penggunaan S-Curve schedule dan metodologi Critical Path Method (CPM) untuk mendeteksi potensi hambatan sebelum menjadi keterlambatan fisik.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#E2DFD7] flex flex-col gap-3">
                <ShieldCheck className="w-8 h-8 text-brand-olive" />
                <h3 className="font-heading font-bold text-lg text-charcoal">
                  Garansi Pemeliharaan Resmi
                </h3>
                <p className="text-xs text-muted-charcoal font-body leading-relaxed">
                  Jaminan purnajual hingga 10 tahun untuk keandalan struktur dan 6 bulan pemeliharaan intensif pasca serah terima kunci.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Step-by-Step Flow */}
        <section className="py-20 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-2">
                ALUR PROSES LENGKAP
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-charcoal">
                7 Tahapan Kerja Menuju Pembangunan Sempurna
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {processSteps.map((s, idx) => (
                <div key={s.step} className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#EFECE6] p-6 sm:p-8 border-l-4 border-brand-olive items-center">
                  <div className="md:col-span-2">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-cta-yellow block">
                      {s.step}
                    </span>
                  </div>
                  <div className="md:col-span-10 flex flex-col gap-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal">
                      {s.title}
                    </h3>
                    <p className="font-heading text-xs font-bold uppercase text-brand-olive mb-2">
                      {s.sub}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
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
