'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, BarChart2, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';

interface MetricsBarProps {
  metrics?: {
    yearsExperience: number;
    projectsCompleted: number;
    specializations: number;
    clientSatisfaction: number;
  };
}

export default function MetricsBar({ metrics }: MetricsBarProps) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const data = metrics || {
    yearsExperience: 15,
    projectsCompleted: 200,
    specializations: 4,
    clientSatisfaction: 100
  };

  const metricItems = [
    {
      value: `${data.yearsExperience}+`,
      label: 'YEARS EXPERIENCE',
      benchmarkLabel: 'TOLOK UKUR PENGALAMAN INDUSTRI',
      benchmarkTitle: '15+ Tahun Reputasi Teknik Sipil',
      benchmarkDesc: 'Standar rata-rata kontraktor spesialis nasional adalah 8-10 tahun. Jam terbang 15+ tahun BuildDeva mencerminkan kematangan institusional dalam mitigasi risiko geoteknik dan manajemen konstruksi presisi.',
      icon: ShieldCheck,
    },
    {
      value: `${data.projectsCompleted}+`,
      label: 'PROJECTS COMPLETED',
      benchmarkLabel: 'BENCHMARK PORTOFOLIO SELESAI',
      benchmarkTitle: '200+ Bangunan Berhasil Diserahterimakan',
      benchmarkDesc: 'Melampaui benchmark umum industri (120-150 proyek). Tercatat 100% kelulusan audit Sertifikat Laik Fungsi (SLF) dan rekor nol insiden kegagalan struktur fatal.',
      icon: CheckCircle,
    },
    {
      value: data.specializations < 10 ? `0${data.specializations}` : `${data.specializations}`,
      label: 'SPECIALIZATIONS',
      benchmarkLabel: 'KAPABILITAS MULTI-DISIPLIN',
      benchmarkTitle: '4 Divisi Rekayasa Khusus',
      benchmarkDesc: 'Setiap sektor (Residential, Industrial, Commercial, Renovation) dipimpin oleh tim Principal Engineer & Pengawas Lapangan bersertifikasi LPJK/IAI/IPM.',
      icon: BarChart2,
    },
    {
      value: `${data.clientSatisfaction}%`,
      label: 'CLIENT SATISFACTION',
      benchmarkLabel: 'BENCHMARK KEPUASAN KLIEN',
      benchmarkTitle: '100% Penyelesaian Sesuai Kontrak',
      benchmarkDesc: 'Dihitung berdasarkan Net Promoter Score (NPS 94+) dan riwayat penyelesaian seluruh punch-list garansi struktur sebelum masa retensi berakhir.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-base py-16 border-y border-token-subtle relative" id="metrics-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-5 bg-brand-token inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-token">
                VERIFIED BENCHMARKS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-token tracking-tight mb-2">
              The Standard of Excellence
            </h2>
            <p className="text-xs sm:text-sm text-secondary-token font-body leading-relaxed max-w-sm">
              Metrik terverifikasi yang menegaskan komitmen kami terhadap presisi struktur dan akuntabilitas operasional.
            </p>
          </div>

          {/* Right Grid - 4 Columns separated by thin architectural lines */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 border-t lg:border-t-0 lg:border-l border-token-subtle pt-8 lg:pt-0 lg:pl-8">
            {metricItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col gap-1 border-l border-token-subtle pl-4 group"
                onMouseEnter={() => setActiveTooltip(idx)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {/* Metric value and Tooltip Info Trigger */}
                <div className="flex items-center justify-between gap-1">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-token tracking-tight">
                    {item.value}
                  </span>
                  
                  {/* Tooltip trigger icon button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTooltip(activeTooltip === idx ? null : idx);
                    }}
                    aria-label={`Tolok ukur industri untuk ${item.label}`}
                    className="p-1 text-secondary-token hover:text-brand-token transition-colors cursor-pointer rounded-full focus:outline-hidden focus:ring-1 focus:ring-brand-token"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="font-heading text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary-token">
                  {item.label}
                </span>

                {/* Floating Descriptive Tooltip Popover */}
                <AnimatePresence>
                  {activeTooltip === idx && (
                    <motion.div
                      role="tooltip"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute z-50 bottom-full left-0 mb-3 w-64 sm:w-72 bg-primary-token text-white p-4 rounded-xl border border-white/20 shadow-2xl pointer-events-auto"
                    >
                      {/* Tooltip Header */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <item.icon className="w-3.5 h-3.5 text-accent-token shrink-0" />
                        <span className="text-[9px] font-heading font-bold uppercase tracking-widest text-accent-token">
                          {item.benchmarkLabel}
                        </span>
                      </div>

                      {/* Tooltip Title */}
                      <h4 className="font-heading font-bold text-xs text-white mb-1.5 leading-snug">
                        {item.benchmarkTitle}
                      </h4>

                      {/* Tooltip Description */}
                      <p className="text-[11px] text-white/80 font-body leading-relaxed">
                        {item.benchmarkDesc}
                      </p>

                      {/* Arrow Pointer */}
                      <div 
                        className="absolute top-full left-6 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-primary-token" 
                        aria-hidden="true"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
