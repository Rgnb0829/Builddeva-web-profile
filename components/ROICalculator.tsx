'use client';

import React, { useState } from 'react';
import { Calculator, Clock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { CostEstimatorValues } from '@/lib/validations';
import { calculateConstructionEstimate } from '@/lib/db';

interface ROICalculatorProps {
  onOpenInquiry?: (type?: 'client' | 'partner' | 'talent', defaultValues?: Record<string, string>) => void;
}

export default function ROICalculator({ onOpenInquiry }: ROICalculatorProps) {
  const [projectType, setProjectType] = useState<CostEstimatorValues['projectType']>('Commercial');
  const [areaSqm, setAreaSqm] = useState<number>(1500);
  const [qualityGrade, setQualityGrade] = useState<CostEstimatorValues['qualityGrade']>('Premium');
  const [locationZone, setLocationZone] = useState<CostEstimatorValues['locationZone']>('Jabodetabek');

  // Compute estimation result
  const estimate = calculateConstructionEstimate({
    projectType,
    areaSqm,
    qualityGrade,
    locationZone
  });

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApplyRAB = () => {
    const formattedSummary = `[Estimasi Kalkulator BuildDeva]\n- Tipe Proyek: ${projectType}\n- Luas Area: ${areaSqm} m²\n- Kelas Material: ${qualityGrade}\n- Lokasi: ${locationZone}\n- Estimasi Biaya: ${formatCurrency(estimate.estimatedCostMin)} - ${formatCurrency(estimate.estimatedCostMax)}\n- Estimasi Waktu: ${estimate.estimatedDurationMonths} Bulan`;
    
    onOpenInquiry?.('client', {
      projectType,
      estimatedBudget: `${formatCurrency(estimate.estimatedCostMin)} - ${formatCurrency(estimate.estimatedCostMax)}`,
      message: `Saya ingin mengajukan survei lokasi dan konsultasi DED/RAB berdasarkan hasil estimasi kalkulator:\n\n${formattedSummary}`
    });
  };

  return (
    <section className="bg-[#EFECE6] py-24 border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DFD7] mb-4">
            <Calculator className="w-4 h-4 text-brand-olive" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              PROJEK COST & TIMELINE CALCULATOR
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight mb-4">
            Hitung Estimasi Anggaran & Durasi Proyek Anda
          </h2>
          <p className="text-sm sm:text-base text-muted-charcoal font-body leading-relaxed">
            Dapatkan perkiraan biaya konstruksi (RAB Indikatif) dan linimasa pengerjaan transparan sebelum melangkah ke tahap Detail Engineering Design (DED).
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#E2DFD7] p-6 sm:p-10 shadow-lg">
          
          {/* Controls - Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Project Type */}
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                1. Pilih Jenis Konstruksi / Proyek
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Residential', 'Warehouse & Industrial', 'Commercial', 'Renovation'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`p-3 text-xs font-heading font-bold uppercase text-center border transition-all cursor-pointer ${
                      projectType === type
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-[#F7F6F2] text-charcoal border-[#E2DFD7] hover:bg-[#EFECE6]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Building Area Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-charcoal">
                  2. Luas Bangunan / Area (m²)
                </label>
                <span className="font-heading font-extrabold text-lg text-brand-olive">
                  {areaSqm.toLocaleString('id-ID')} m²
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={20000}
                step={50}
                value={areaSqm}
                onChange={(e) => setAreaSqm(Number(e.target.value))}
                className="w-full h-2 bg-[#E2DFD7] rounded-lg appearance-none cursor-pointer accent-brand-olive"
              />
              <div className="flex justify-between text-[11px] text-muted-charcoal mt-1 font-body">
                <span>50 m²</span>
                <span>5.000 m²</span>
                <span>20.000 m²</span>
              </div>
            </div>

            {/* 3. Material & Finishing Quality Grade */}
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                3. Spesifikasi Material & Finishing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Standard', title: 'Standard SNI', sub: 'Kualitas Kokoh & Efisien' },
                  { id: 'Premium', title: 'Premium Quality', sub: 'Standar Komersial High-Grade' },
                  { id: 'Luxury Architectural', title: 'Luxury Architectural', sub: 'Batu/Material Impor & Custom' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setQualityGrade(item.id as CostEstimatorValues['qualityGrade'])}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      qualityGrade === item.id
                        ? 'bg-brand-olive text-white border-brand-olive shadow-xs'
                        : 'bg-[#F7F6F2] text-charcoal border-[#E2DFD7] hover:bg-[#EFECE6]'
                    }`}
                  >
                    <p className="font-heading text-xs font-bold">{item.title}</p>
                    <p className={`text-[11px] ${qualityGrade === item.id ? 'text-white/80' : 'text-muted-charcoal'}`}>
                      {item.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Location Zone */}
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                4. Wilayah Proyek
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Jabodetabek', label: 'Jabodetabek' },
                  { id: 'Java Outer', label: 'Luar Jabodetabek (Jawa)' },
                  { id: 'Outside Java', label: 'Luar Pulau Jawa' },
                ].map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setLocationZone(loc.id as CostEstimatorValues['locationZone'])}
                    className={`p-2.5 text-xs font-heading font-semibold text-center border transition-all cursor-pointer ${
                      locationZone === loc.id
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-[#F7F6F2] text-charcoal border-[#E2DFD7] hover:bg-[#EFECE6]'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output - Right 5 Columns */}
          <motion.div
            key={`${projectType}-${areaSqm}-${qualityGrade}-${locationZone}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-dark-green text-offwhite p-6 sm:p-8 flex flex-col justify-between border border-white/10"
          >
            <div>
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-cta-yellow block mb-2">
                HASIL ESTIMASI INDIKATIF BUILDDEVA
              </span>

              {/* Estimated Price Range */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-offwhite/70 block mb-1">Perkiraan Biaya Konstruksi (RAB Indikatif):</span>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-cta-yellow tracking-tight">
                  {formatCurrency(estimate.estimatedCostMin)}
                </p>
                <span className="text-xs text-offwhite/60">sampai dengan</span>
                <p className="font-heading font-bold text-xl text-offwhite tracking-tight">
                  {formatCurrency(estimate.estimatedCostMax)}
                </p>
              </div>

              {/* Estimated Duration */}
              <div className="mb-6 pb-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-offwhite/70 block">Estimasi Durasi Pengerjaan:</span>
                  <span className="font-heading font-bold text-xl text-offwhite">
                    ± {estimate.estimatedDurationMonths} Bulan Kalender
                  </span>
                </div>
                <Clock className="w-7 h-7 text-cta-yellow" />
              </div>

              {/* Quality Guarantee Note */}
              <div className="flex items-start gap-3 bg-white/5 p-3 border border-white/10 text-xs text-offwhite/80 font-body mb-6">
                <ShieldCheck className="w-5 h-5 text-cta-yellow shrink-0 mt-0.5" />
                <p>Termasuk jaminan garansi pemeliharaan struktur BuildDeva hingga 10 tahun dan pengawasan K3 ISO 4501.</p>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="button"
                onClick={handleApplyRAB}
                id="calculator-submit-rab-btn"
                className="w-full bg-cta-yellow hover:bg-[#c2a24c] text-charcoal font-heading text-xs font-extrabold uppercase tracking-widest py-4 px-6 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>MINTA SURVEI LOKASI & DED RESMI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-offwhite/50 text-center mt-3 font-body">
                {estimate.disclaimer}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
