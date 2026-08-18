'use client';

import React, { useState } from 'react';
import { Calculator, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
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
    <section className="bg-surface-muted py-24 border-b border-token-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-token-subtle mb-4">
            <Calculator className="w-4 h-4 text-brand-token" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-token">
              PROJEK COST & TIMELINE CALCULATOR
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-token tracking-tight mb-4">
            Hitung Estimasi Anggaran & Durasi Proyek Anda
          </h2>
          <p className="text-sm sm:text-base text-secondary-token font-body leading-relaxed">
            Dapatkan perkiraan biaya konstruksi (RAB Indikatif) dan linimasa pengerjaan transparan sebelum melangkah ke tahap Detail Engineering Design (DED).
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 card-token p-6 sm:p-10 shadow-lg">
          
          {/* Controls - Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-primary-token mb-3">
                1. Kategori & Tipologi Proyek
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Residential', 'Warehouse & Industrial', 'Commercial', 'Renovation'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`py-3 px-2 text-xs font-heading font-bold uppercase tracking-wider border transition-all text-center cursor-pointer ${
                      projectType === type
                        ? 'bg-primary-token text-white border-token-primary shadow-xs'
                        : 'bg-surface text-primary-token border-token-subtle hover:bg-surface-muted'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-primary-token">
                  2. Luas Bangunan (Gross Floor Area)
                </label>
                <span className="font-heading font-extrabold text-sm text-brand-token">
                  {areaSqm.toLocaleString('id-ID')} m²
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={20000}
                step={50}
                value={areaSqm}
                onChange={(e) => setAreaSqm(Number(e.target.value))}
                className="w-full accent-[#66735A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-secondary-token font-body mt-1">
                <span>100 m²</span>
                <span>5,000 m²</span>
                <span>10,000 m²</span>
                <span>20,000 m²</span>
              </div>
            </div>

            {/* 3. Material & Quality Grade */}
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-primary-token mb-3">
                3. Spesifikasi Material & Grade Finishing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { grade: 'Standard', label: 'Standard SNI', desc: 'Baja WF standar, beton K-250, finishing lokal terpilih.' },
                  { grade: 'Premium', label: 'Premium Architectural', desc: 'Presisi tinggi, baja structural bersertifikat, K-350, MEP terintegrasi.' },
                  { grade: 'Luxury Architectural', label: 'Signature Luxury', desc: 'Glulam/Mass Timber, acoustic treatment, heavy-duty industrial grade.' }
                ].map((item) => (
                  <button
                    key={item.grade}
                    type="button"
                    onClick={() => setQualityGrade(item.grade as any)}
                    className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      qualityGrade === item.grade
                        ? 'bg-surface-muted border-token-primary shadow-xs'
                        : 'bg-surface border-token-subtle hover:bg-surface-muted'
                    }`}
                  >
                    <div>
                      <span className="font-heading font-bold text-xs text-primary-token block mb-1">
                        {item.label}
                      </span>
                      <p className="text-[11px] text-secondary-token font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Location Zone */}
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-primary-token mb-3">
                4. Wilayah Lokasi Konstruksi
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Jabodetabek', 'Java Outer', 'Outside Java'] as const).map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setLocationZone(zone)}
                    className={`py-2 px-3 text-xs font-heading font-bold uppercase tracking-wider border transition-all text-center cursor-pointer ${
                      locationZone === zone
                        ? 'bg-primary-token text-white border-token-primary shadow-xs'
                        : 'bg-surface text-primary-token border-token-subtle hover:bg-surface-muted'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary - Right 5 Columns */}
          <motion.div
            key={`${projectType}-${areaSqm}-${qualityGrade}-${locationZone}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-primary-token text-white p-6 sm:p-8 flex flex-col justify-between border border-token-subtle shadow-md"
          >
            <div>
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-token block mb-2">
                HASIL ESTIMASI INDIKATIF BUILDDEVA
              </span>

              {/* Estimated Price Range */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <span className="text-xs text-white/80 block mb-1">Perkiraan Biaya Konstruksi (RAB Indikatif):</span>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-accent-token tracking-tight">
                  {formatCurrency(estimate.estimatedCostMin)}
                </p>
                <span className="text-xs text-white/70">sampai dengan</span>
                <p className="font-heading font-bold text-xl text-white tracking-tight">
                  {formatCurrency(estimate.estimatedCostMax)}
                </p>
              </div>

              {/* Estimated Duration */}
              <div className="mb-6 pb-6 border-b border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/80 block">Estimasi Durasi Pengerjaan:</span>
                  <span className="font-heading font-bold text-xl text-white">
                    ± {estimate.estimatedDurationMonths} Bulan Kalender
                  </span>
                </div>
                <Clock className="w-7 h-7 text-accent-token" />
              </div>

              {/* Quality Guarantee Note */}
              <div className="flex items-start gap-3 bg-black/20 p-3 border border-white/15 text-xs text-white/90 font-body mb-6">
                <ShieldCheck className="w-5 h-5 text-accent-token shrink-0 mt-0.5" />
                <p>Termasuk jaminan garansi pemeliharaan struktur BuildDeva hingga 10 tahun dan pengawasan K3 ISO 4501.</p>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="button"
                onClick={handleApplyRAB}
                id="calculator-submit-rab-btn"
                className="btn-accent w-full py-4 text-xs font-extrabold uppercase tracking-widest shadow-md"
              >
                <span>MINTA SURVEI LOKASI & DED RESMI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-white/60 text-center mt-3 font-body">
                {estimate.disclaimer}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
