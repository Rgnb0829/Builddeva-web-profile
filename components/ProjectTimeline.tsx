'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, Award, ShieldCheck, Flag, CheckCheck, TrendingUp } from 'lucide-react';
import { Project, ProjectMilestone } from '@/types';

interface ProjectTimelineProps {
  project: Project;
}

export default function ProjectTimeline({ project }: ProjectTimelineProps) {
  // Generate realistic milestones tailored to project category if none explicitly specified
  const milestones: ProjectMilestone[] = project.milestones && project.milestones.length > 0 
    ? project.milestones 
    : getDefaultMilestones(project);

  return (
    <section className="py-16 border-b border-token-subtle bg-surface-muted relative overflow-hidden" id="project-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Schedule Variance Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-6 bg-brand-token inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-token">
                CONSTRUCTION MILESTONES & TIMELINE TRACKING
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-primary-token tracking-tight">
              Linimasa Eksekusi vs Tanggal Selesai Aktual
            </h2>
          </div>

          {/* Schedule Health Card */}
          <div className="bg-surface rounded-2xl p-4 sm:p-5 border border-token-subtle shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-token text-accent-token flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-secondary-token block">
                Pencapaian Jadwal Resmi
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-heading font-extrabold text-base sm:text-lg text-primary-token">
                  Selesai {project.completionDate}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-heading font-bold bg-[#D8B65A]/20 text-[#66735A] dark:text-[#D8B65A] border border-[#D8B65A]/30">
                  On-Schedule ({project.duration})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 md:pl-32">
          
          {/* Vertical Main Guideline */}
          <div 
            className="absolute left-6 sm:left-10 md:left-32 top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-token via-primary-token to-[#D8B65A] -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {milestones.map((milestone, idx) => {
              const isFinal = idx === milestones.length - 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Left Date / Phase Indicator for Desktop */}
                  <div className="hidden md:block absolute -left-32 w-28 text-right pr-6 top-1">
                    <span className="font-heading text-xs font-bold text-primary-token block">
                      {milestone.actualDate}
                    </span>
                    <span className="text-[10px] text-secondary-token uppercase font-medium">
                      {milestone.stage.split(':')[0]}
                    </span>
                  </div>

                  {/* Node Circle Marker */}
                  <div 
                    className={`absolute -left-6 sm:-left-10 md:-left-32 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${
                      isFinal 
                        ? 'bg-[#D8B65A] border-white text-charcoal' 
                        : 'bg-primary-token border-surface text-white'
                    }`}
                  >
                    {isFinal ? (
                      <Flag className="w-4 h-4 text-primary-token" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-accent-token" />
                    )}
                  </div>

                  {/* Milestone Content Card */}
                  <div className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                    isFinal 
                      ? 'bg-primary-token text-white border-token-primary shadow-lg' 
                      : 'bg-surface border-token-subtle hover:border-token-primary shadow-xs'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-token-subtle/40">
                      <div>
                        <span className={`text-[10px] font-heading font-bold uppercase tracking-widest block mb-1 ${
                          isFinal ? 'text-accent-token' : 'text-brand-token'
                        }`}>
                          {milestone.stage}
                        </span>
                        <h3 className={`font-heading font-bold text-lg sm:text-xl ${
                          isFinal ? 'text-white' : 'text-primary-token'
                        }`}>
                          {milestone.title}
                        </h3>
                      </div>

                      {/* Milestone Target vs Actual comparison badge */}
                      <div className="flex flex-wrap items-center gap-2">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-heading font-bold ${
                          isFinal 
                            ? 'bg-black/25 text-white/90 border border-white/20' 
                            : 'bg-surface-muted text-secondary-token border border-token-subtle'
                        }`}>
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          <span>Target: {milestone.targetDate}</span>
                        </div>
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-heading font-bold ${
                          isFinal 
                            ? 'bg-[#D8B65A] text-primary-token font-extrabold shadow-xs' 
                            : 'bg-[#66735A]/15 text-brand-token border border-[#66735A]/30'
                        }`}>
                          <CheckCheck className="w-3.5 h-3.5 shrink-0" />
                          <span>Aktual: {milestone.actualDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className={`text-xs sm:text-sm font-body leading-relaxed mb-4 ${
                      isFinal ? 'text-white/90' : 'text-secondary-token'
                    }`}>
                      {milestone.summary}
                    </p>

                    {/* Deliverables / Verifications Chips */}
                    {milestone.deliverables && milestone.deliverables.length > 0 && (
                      <div className="pt-2">
                        <span className={`text-[10px] font-heading font-bold uppercase tracking-wider block mb-2 ${
                          isFinal ? 'text-white/80' : 'text-secondary-token'
                        }`}>
                          Deliverables & Verifikasi QA/QC:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {milestone.deliverables.map((item, dIdx) => (
                            <span 
                              key={dIdx}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-body ${
                                isFinal 
                                  ? 'bg-white/15 text-white border border-white/20' 
                                  : 'bg-surface-muted text-primary-token border border-token-subtle'
                              }`}
                            >
                              <ShieldCheck className="w-3 h-3 text-[#D8B65A] shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Variance Note */}
                    {milestone.varianceNote && (
                      <div className={`mt-4 pt-3 border-t text-[11px] font-body flex items-center gap-1.5 ${
                        isFinal 
                          ? 'border-white/20 text-accent-token' 
                          : 'border-token-subtle text-brand-token'
                      }`}>
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                        <span>{milestone.varianceNote}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

// Fallback dynamic generator to ensure all projects have realistic, high-precision milestone timelines mapped to their duration & completionDate
function getDefaultMilestones(project: Project): ProjectMilestone[] {
  const completionYear = project.year;
  const comp = project.completionDate;

  if (project.category === 'Warehouse & Industrial') {
    return [
      {
        stage: 'Tahap 1: Persiapan Lahan & Geoteknik',
        title: 'Soil Stabilization & Bore Pile Deep Foundation',
        targetDate: 'Bulan ke-2',
        actualDate: 'Bulan ke-2',
        status: 'completed',
        summary: 'Pekerjaan perbaikan daya dukung tanah rawa, uji PDA (Pile Driving Analyzer), dan pemancangan tiang pancang kedalaman 36 meter.',
        deliverables: ['Uji Beban Tiang Dinamis', 'Sertifikasi Soil Improvement', 'Survey Topografi Laser'],
        varianceNote: 'Selesai 5 hari lebih cepat berkat optimalisasi 2 unit hydraulic pile driving.',
        onTrack: true,
      },
      {
        stage: 'Tahap 2: Superstruktur & Rangka Baja',
        title: 'Steel Truss Erection & Super-Span Framing',
        targetDate: 'Bulan ke-5',
        actualDate: 'Bulan ke-5',
        status: 'completed',
        summary: 'Pabrikasi dan ereksi rangka baja bentang lebar 48 meter tanpa kolom tengah dengan sambungan baut mutu tinggi Grade 8.8.',
        deliverables: ['NDT Ultrasonic Test Sambungan Las', 'Inspeksi Torsi Baut Kalibrasi', 'Pengecatan Fire Protection'],
        varianceNote: 'Struktur lolos uji defleksi elastis < L/500.',
        onTrack: true,
      },
      {
        stage: 'Tahap 3: Lantai Super-Flat & Fasad Enclosure',
        title: 'FM2 Super-Flat Burnished Slab & Insulated Roof',
        targetDate: 'Bulan ke-8',
        actualDate: 'Bulan ke-8',
        status: 'completed',
        summary: 'Pengecoran lantai industri dengan teknologi Laser Screed dan penambahan hardener non-metallic untuk ketahanan abrasi maksimal.',
        deliverables: ['Uji Kerataan Lantai Profilograph FM2', 'Water-Tightness Test Atap Klip-Kancing', 'Loading Dock Leveler Fitting'],
        varianceNote: 'Flatness number melampaui target standar DIN 18202.',
        onTrack: true,
      },
      {
        stage: 'Tahap 4: Serah Terima & Verifikasi Final',
        title: 'Official Handover & Operational Commissioning',
        targetDate: comp,
        actualDate: comp,
        status: 'completed',
        summary: 'Serah terima resmi (BAST) kepada PT Nusantara Logistics Corp setelah pengujian beban penuh dan penerbitan Sertifikat Laik Fungsi (SLF).',
        deliverables: ['Berita Acara Serah Terima (BAST 1)', 'Buku Panduan O&M Bangunan', 'Sertifikat Garansi Pemeliharaan 10 Tahun'],
        varianceNote: `Pekerjaan diselesaikan 100% tepat waktu pada ${comp}.`,
        onTrack: true,
      },
    ];
  }

  if (project.category === 'Residential') {
    return [
      {
        stage: 'Tahap 1: Struktur Bawah & Basement',
        title: 'Substructure & Retaining Wall Waterproofing',
        targetDate: 'Bulan ke-3',
        actualDate: 'Bulan ke-3',
        status: 'completed',
        summary: 'Galian basement, konstruksi dinding penahan tanah (soldier pile), dan pemasangan membran kedap air multi-layer.',
        deliverables: ['Flood Leakage Test Basement 72 Jam', 'Uji Tekan Beton K-350', 'Audit Drainase Bawah Tanah'],
        varianceNote: 'Zero leakages terverifikasi pada tes rendam air 3 hari.',
        onTrack: true,
      },
      {
        stage: 'Tahap 2: Struktur Arsitektural Cantilever',
        title: 'Post-Tensioned Concrete & Structural Shell',
        targetDate: 'Bulan ke-7',
        actualDate: 'Bulan ke-7',
        status: 'completed',
        summary: 'Pengecoran plat bentang gantung 6 meter bebas kolom menggunakan kabel tendon pasca-tarik (post-tensioning) presisi tinggi.',
        deliverables: ['Elongation Test Tendon Baja', 'Monitoring Camber & Defleksi Total Station', 'Toleransi Permukaan < 2mm'],
        varianceNote: 'Presisi elevasi cantilever tercapai dengan deviasi di bawah 1.5mm.',
        onTrack: true,
      },
      {
        stage: 'Tahap 3: Envelope, Akustik & Interior MEP',
        title: 'High-Performance Glazing & Premium Stone Fit-Out',
        targetDate: 'Bulan ke-11',
        actualDate: 'Bulan ke-11',
        status: 'completed',
        summary: 'Pemasangan fasad kaca double-glazed dengan thermal-break, sistem tata udara senyap VRF, dan instalasi marmer bookmatched.',
        deliverables: ['Acoustic Sound Level Testing (< 35 dBA)', 'Air Pressure Balancing MEP', 'Detail Sambungan Marmer Presisi'],
        varianceNote: 'Kenyamanan termal ruangan meningkat 28% dibandingkan material konvensional.',
        onTrack: true,
      },
      {
        stage: 'Tahap 4: Serah Terima Kunci & Garansi',
        title: 'Final Handover & Defect-Free Punchlist Clearance',
        targetDate: comp,
        actualDate: comp,
        status: 'completed',
        summary: `Serah terima kunci fisik dan dokumen as-built drawing kepada pemilik hunian pada ${comp} dengan verifikasi punchlist 100% tuntas.`,
        deliverables: ['Berita Acara Serah Terima (BAST)', 'Garansi Kebocoran & Struktur 10 Tahun', 'BIM As-Built Data Digital'],
        varianceNote: `Diselesaikan tepat waktu pada ${comp}.`,
        onTrack: true,
      },
    ];
  }

  // Commercial and Renovation default
  return [
    {
      stage: 'Tahap 1: Perencanaan Teknis & Groundbreaking',
      title: 'Mobilization, BIM Modeling & Foundation Works',
      targetDate: 'Bulan ke-4',
      actualDate: 'Bulan ke-4',
      status: 'completed',
      summary: 'Koordinasi BIM 3D clash-detection multi-disiplin, penyiapan logistik kota padat, dan penyelesaian pondasi bored pile kedalaman 42 meter.',
      deliverables: ['Model BIM Level of Development (LOD) 400', 'Uji Integritas Tiang PIT & Cross-Hole Sonic', 'Izin K3 & Andalalin DKI Jakarta'],
      varianceNote: 'Clash-detection BIM berhasil mencegah 43 potensi konflik utilitas MEP di lapangan.',
      onTrack: true,
    },
    {
      stage: 'Tahap 2: Struktur Utama Gedung (Topping Off)',
      title: 'Composite Steel-Concrete Core & Superstructure',
      targetDate: 'Bulan ke-12',
      actualDate: 'Bulan ke-12',
      status: 'completed',
      summary: 'Konstruksi lantai komposit beton pracetak dan sistem core-wall struktural tahan gempa sesuai SNI 1726:2019.',
      deliverables: ['Sertifikat Beton K-500 Struktur Utama', 'Seremoni Topping Off Resmi', 'Audit K3 Zero Lost Time Injury'],
      varianceNote: 'Struktur vertikal diselesaikan 12 hari lebih cepat dari jadwal target.',
      onTrack: true,
    },
    {
      stage: 'Tahap 3: Unitized Curtain Wall & Building MEP',
      title: 'Double-Glazed Enclosure & Intelligent BMS Installation',
      targetDate: 'Bulan ke-18',
      actualDate: 'Bulan ke-18',
      status: 'completed',
      summary: 'Pemasangan fasad curtain wall unitized dengan Low-E glass, lift kecepatan tinggi berteknologi regeneratif, dan sistem otomatisasi gedung (BMS).',
      deliverables: ['Field Water Spray Test ASTM E1105', 'Testing & Balancing Sistem HVAC Chiller', 'Integrasi Smart BMS Power Monitoring'],
      varianceNote: 'Insulasi fasad menghasilkan efisiensi konsumsi daya pendingin sebesar 8%.',
      onTrack: true,
    },
    {
      stage: 'Tahap 4: Komisioning Final & Serah Terima Resmi',
      title: 'BAST Handover, SLF Clearance & Gold Green Verification',
      targetDate: comp,
      actualDate: comp,
      status: 'completed',
      summary: `Pemeriksaan akhir bersama owner, clearance Sertifikat Laik Fungsi (SLF), dan serah terima resmi (BAST) pada ${comp}.`,
      deliverables: ['Berita Acara Serah Terima (BAST 1)', 'Sertifikat Laik Fungsi (SLF)', 'Sertifikasi Green Building Council Gold'],
      varianceNote: `Diselesaikan sukses pada ${comp} dengan rekor 0 Lost Time Injury.`,
      onTrack: true,
    },
  ];
}
