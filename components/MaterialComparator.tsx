'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck, Flame, Scale, Clock, DollarSign, Leaf, Layers, ArrowUpRight } from 'lucide-react';
import { InquiryType } from '@/types';

export interface MaterialSpec {
  id: string;
  name: string;
  indonesianName: string;
  category: string;
  description: string;
  compressiveStrength: string;
  tensileStrength: string;
  speedOfConstruction: 'Sangat Cepat' | 'Cepat' | 'Moderat' | 'Lambat';
  fireResistance: string;
  spanCapability: string;
  seismicPerformance: string;
  carbonFootprint: string;
  relativeCostIndex: 'Ekonomis' | 'Menengah' | 'Tinggi' | 'Premium';
  densityWeight: string;
  foundationImpact: 'Sangat Rendah' | 'Rendah' | 'Sedang' | 'Tinggi';
  maintenanceNeeds: string;
  idealApplications: string[];
}

export const constructionMaterials: MaterialSpec[] = [
  {
    id: 'structural-steel',
    name: 'Structural Steel (WF / H-Beam)',
    indonesianName: 'Baja Profil Struktural (WF / H-Beam SS400 / SM490)',
    category: 'Ferrous Metal Alloy',
    description: 'Material berdaya pikul tarik dan lentur sangat tinggi, difabrikasi secara presisi di workshop dengan perakitan baut mutu tinggi (HTB) atau pengelasan standar AWS.',
    compressiveStrength: '250 – 400 MPa',
    tensileStrength: '400 – 550 MPa (fy = 240 – 345 MPa)',
    speedOfConstruction: 'Sangat Cepat',
    fireResistance: 'Perlu Cat Intumescent (R60–R120)',
    spanCapability: 'Ekstra Panjang (20 – 50+ meter)',
    seismicPerformance: 'Unggul (Daktilitas & disipasi energi tinggi)',
    carbonFootprint: 'Moderat (100% Recyclable)',
    relativeCostIndex: 'Menengah',
    densityWeight: '7,850 kg/m³',
    foundationImpact: 'Rendah',
    maintenanceNeeds: 'Proteksi anti-karat / epoxy berkala',
    idealApplications: [
      'Gudang logistik bentang lebar',
      'Pabrik & fasilitas industri',
      'Gedung perkantoran bertingkat tinggi',
      'Mezzanine & struktur atap kanopi'
    ]
  },
  {
    id: 'reinforced-concrete',
    name: 'Reinforced Concrete (K-350 / fc 30 MPa)',
    indonesianName: 'Beton Bertulang Konvensional (SNI 2847:2019)',
    category: 'Composite Cementitious',
    description: 'Kombinasi beton mutu tinggi untuk menahan gaya tekan dan besi tulangan ulir (BJTS 420B) untuk menahan gaya tarik. Bersifat monolit dan kaku.',
    compressiveStrength: '30 – 45 MPa (fc\')',
    tensileStrength: '3.0 – 4.2 MPa (modulus of rupture)',
    speedOfConstruction: 'Moderat',
    fireResistance: 'Sangat Tinggi (Alami R120–R240)',
    spanCapability: 'Menengah (6 – 12 meter)',
    seismicPerformance: 'Baik (Dengan pembesian daktil penuh)',
    carbonFootprint: 'Tinggi (Emisi klinker semen)',
    relativeCostIndex: 'Ekonomis',
    densityWeight: '2,400 kg/m³',
    foundationImpact: 'Tinggi',
    maintenanceNeeds: 'Sangat Rendah (Tahan korosi lingkungan biasa)',
    idealApplications: [
      'Hunian privat mewah bertingkat',
      'Podium gedung & basement komersial',
      'Dinding penahan tanah (Retaining Wall)',
      'Kolam renang & tangki air masif'
    ]
  },
  {
    id: 'precast-concrete',
    name: 'Precast Concrete (Beton Pracetak)',
    indonesianName: 'Beton Pracetak Modular (Factory-Cured)',
    category: 'Engineered Concrete',
    description: 'Elemen struktur dan fasad yang dicetak serta dirawat di lingkungan pabrik terkontrol ketat, lalu dikirim ke lokasi proyek untuk ereksi instan.',
    compressiveStrength: '35 – 50 MPa',
    tensileStrength: '4.5 – 6.0 MPa',
    speedOfConstruction: 'Sangat Cepat',
    fireResistance: 'Sangat Tinggi (R120–R180)',
    spanCapability: 'Panjang (10 – 24 meter)',
    seismicPerformance: 'Baik (Koneksi grouted sleeve presisi)',
    carbonFootprint: 'Moderat (Zero waste di lapangan)',
    relativeCostIndex: 'Menengah',
    densityWeight: '2,450 kg/m³',
    foundationImpact: 'Sedang',
    maintenanceNeeds: 'Sangat Rendah (Mutu permukaan terstandar ISO)',
    idealApplications: [
      'Gedung parkir multi-lantai',
      'Fasad arsitektural tahan gempa',
      'Proyek perumahan skala masif',
      'Saluran drainase box culvert besar'
    ]
  },
  {
    id: 'post-tensioned',
    name: 'Post-Tensioned Concrete (Beton Pascatarik)',
    indonesianName: 'Beton Prategang Pascatarik (PT Slab & Beam)',
    category: 'High-Performance Composite',
    description: 'Plat beton yang diperkuat tendon baja berkekuatan ultra-tinggi (1860 MPa) yang ditarik setelah beton mengeras, memungkinkan plat lantai jauh lebih tipis tanpa balok turun.',
    compressiveStrength: '40 – 60 MPa',
    tensileStrength: 'Sangat Tinggi (Active Prestressing)',
    speedOfConstruction: 'Cepat',
    fireResistance: 'Sangat Tinggi (R120–R240)',
    spanCapability: 'Sangat Panjang (12 – 22 meter tanpa kolom tengah)',
    seismicPerformance: 'Unggul (Defleksi sangat minim)',
    carbonFootprint: 'Lebih Rendah (Hemat 25% volume beton)',
    relativeCostIndex: 'Menengah',
    densityWeight: '2,400 kg/m³',
    foundationImpact: 'Sedang',
    maintenanceNeeds: 'Minimal (Tendon terlindungi ducting & grout)',
    idealApplications: [
      'Lantai perkantoran open-plan',
      'Shopping mall & showroom luas',
      'Ballroom hotel tanpa kolom penghalang',
      'Jembatan & jalan layang komersial'
    ]
  },
  {
    id: 'aac-blocks',
    name: 'AAC Lightweight Concrete (Bata Ringan)',
    indonesianName: 'Beton Aerasi Ringan Autoclaved (AAC)',
    category: 'Lightweight Cellular Material',
    description: 'Material dinding pengisi berpori mikro dengan bobot 1/3 dari bata merah konvensional, memberikan insulasi termal dan akustik superior.',
    compressiveStrength: '4.0 – 5.5 MPa',
    tensileStrength: '0.8 – 1.2 MPa',
    speedOfConstruction: 'Sangat Cepat',
    fireResistance: 'Sangat Baik (Tahan api 4 jam)',
    spanCapability: 'Non-Struktural (Dinding Pengisi)',
    seismicPerformance: 'Unggul untuk dinding (Meringankan inersia)',
    carbonFootprint: 'Rendah',
    relativeCostIndex: 'Ekonomis',
    densityWeight: '550 – 650 kg/m³',
    foundationImpact: 'Sangat Rendah',
    maintenanceNeeds: 'Rendah (Plesteran elastis tahan retak)',
    idealApplications: [
      'Dinding partisi gedung bertingkat tinggi',
      'Sekat kamar hotel kedap suara',
      'Dinding eksterior hunian hemat energi',
      'Renovasi penambahan lantai baru'
    ]
  },
  {
    id: 'glulam-timber',
    name: 'Glulam & Mass Timber (Kayu Rekayasa)',
    indonesianName: 'Kayu Rekayasa Laminasi (Glued Laminated Timber)',
    category: 'Engineered Bio-Composite',
    description: 'Balok dan kolom kayu struktural yang direkatkan secara berlapis dengan perekat berkekuatan struktural, ramah lingkungan dan bernilai estetika alami tinggi.',
    compressiveStrength: '25 – 35 MPa',
    tensileStrength: '20 – 30 MPa (Sejajar Serat)',
    speedOfConstruction: 'Sangat Cepat',
    fireResistance: 'Terprediksi (Charring layer insulatif)',
    spanCapability: 'Panjang (15 – 32 meter)',
    seismicPerformance: 'Luar Biasa (Rasio kekuatan/berat tertinggi)',
    carbonFootprint: 'Negatif (Carbon Sink Alami)',
    relativeCostIndex: 'Premium',
    densityWeight: '500 – 600 kg/m³',
    foundationImpact: 'Sangat Rendah',
    maintenanceNeeds: 'Pelapisan coating UV & anti-rayap berkala',
    idealApplications: [
      'Paviliun & resort arsitektural tropis',
      'Clubhouse & ruang komunal ekspresif',
      'Kubah atap bentang lebar estetis',
      'Bangunan ramah lingkungan (Green Building)'
    ]
  }
];

interface MaterialComparatorProps {
  onOpenInquiry?: (type?: InquiryType) => void;
}

export default function MaterialComparator({ onOpenInquiry }: MaterialComparatorProps) {
  const [materialAId, setMaterialAId] = useState<string>('structural-steel');
  const [materialBId, setMaterialBId] = useState<string>('reinforced-concrete');

  const materialA = constructionMaterials.find(m => m.id === materialAId) || constructionMaterials[0];
  const materialB = constructionMaterials.find(m => m.id === materialBId) || constructionMaterials[1];

  const presets = [
    { label: 'Baja vs. Beton Bertulang', a: 'structural-steel', b: 'reinforced-concrete' },
    { label: 'Beton Konvensional vs. Precast', a: 'reinforced-concrete', b: 'precast-concrete' },
    { label: 'Beton Konvensional vs. Pascatarik (PT)', a: 'reinforced-concrete', b: 'post-tensioned' },
    { label: 'Baja vs. Kayu Rekayasa (Glulam)', a: 'structural-steel', b: 'glulam-timber' },
  ];

  return (
    <section id="material-comparator-section" className="bg-[#EFECE6] py-20 border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              STRUCTURAL ENGINEERING SUITE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight mb-4">
            Komparator Material & Analisis Teknis Komparatif
          </h2>
          <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
            Pilih dua jenis material konstruksi untuk membandingkan kapasitas struktural, durabilitas, estimasi kecepatan ereksi, ketahanan gempa, dan dampak biaya pondasi secara objektif.
          </p>
        </div>

        {/* Preset Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <span className="text-xs font-heading font-bold uppercase text-primary-token shrink-0 mr-2">Preset Cepat:</span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMaterialAId(preset.a);
                setMaterialBId(preset.b);
              }}
              className={`px-3.5 py-1.5 text-xs font-heading font-bold rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                materialAId === preset.a && materialBId === preset.b
                  ? 'bg-primary-token text-white border-token-primary'
                  : 'bg-surface text-primary-token border-token-subtle hover:bg-surface-muted'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Selectors Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-surface p-6 rounded-2xl border border-token-subtle mb-10 shadow-xs">
          
          {/* Dropdown A */}
          <div className="md:col-span-5">
            <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-brand-token mb-2">
              Material Opsi 01 (Primary)
            </label>
            <select
              value={materialAId}
              onChange={(e) => setMaterialAId(e.target.value)}
              className="w-full bg-surface-muted border border-token-subtle p-3 rounded-lg text-xs sm:text-sm font-heading font-bold text-primary-token focus:outline-hidden focus:border-token-primary cursor-pointer"
            >
              {constructionMaterials.map((mat) => (
                <option key={mat.id} value={mat.id} disabled={mat.id === materialBId}>
                  {mat.name} ({mat.category})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Icon */}
          <div className="md:col-span-2 flex justify-center py-2 md:py-0">
            <button
              onClick={() => {
                const temp = materialAId;
                setMaterialAId(materialBId);
                setMaterialBId(temp);
              }}
              aria-label="Tukar Posisi Material"
              className="w-10 h-10 rounded-full border border-token-subtle bg-surface-muted hover:bg-brand-token hover:text-white transition-colors flex items-center justify-center cursor-pointer group shadow-xs"
              title="Tukar Posisi"
            >
              <ArrowLeftRight className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

          {/* Dropdown B */}
          <div className="md:col-span-5">
            <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-brand-token mb-2">
              Material Opsi 02 (Comparison)
            </label>
            <select
              value={materialBId}
              onChange={(e) => setMaterialBId(e.target.value)}
              className="w-full bg-surface-muted border border-token-subtle p-3 rounded-lg text-xs sm:text-sm font-heading font-bold text-primary-token focus:outline-hidden focus:border-token-primary cursor-pointer"
            >
              {constructionMaterials.map((mat) => (
                <option key={mat.id} value={mat.id} disabled={mat.id === materialAId}>
                  {mat.name} ({mat.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Card A */}
          <motion.div
            key={materialA.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-surface p-6 sm:p-8 rounded-2xl border-t-4 border-primary-token border-x border-b border-token-subtle flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-brand-olive block mb-1">
                {materialA.category}
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-charcoal mb-2">
                {materialA.name}
              </h3>
              <p className="font-heading text-xs font-bold text-muted-charcoal mb-4">
                {materialA.indonesianName}
              </p>
              <p className="text-xs text-muted-charcoal font-body leading-relaxed mb-6">
                {materialA.description}
              </p>

              <div className="pt-4 border-t border-[#E2DFD7]">
                <h4 className="font-heading font-bold text-xs uppercase text-charcoal mb-3">Aplikasi Optimal:</h4>
                <ul className="flex flex-col gap-2">
                  {materialA.idealApplications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-charcoal font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card B */}
          <motion.div
            key={materialB.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-surface p-6 sm:p-8 rounded-2xl border-t-4 border-brand-token border-x border-b border-token-subtle flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-brand-token block mb-1">
                {materialB.category}
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-primary-token mb-2">
                {materialB.name}
              </h3>
              <p className="font-heading text-xs font-bold text-secondary-token mb-4">
                {materialB.indonesianName}
              </p>
              <p className="text-xs text-secondary-token font-body leading-relaxed mb-6">
                {materialB.description}
              </p>

              <div className="pt-4 border-t border-token-subtle">
                <h4 className="font-heading font-bold text-xs uppercase text-primary-token mb-3">Aplikasi Optimal:</h4>
                <ul className="flex flex-col gap-2">
                  {materialB.idealApplications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-primary-token font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-token shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Technical Specification Matrix Table */}
        <div className="bg-surface rounded-2xl border border-token-subtle overflow-hidden mb-10 shadow-xs">
          <div className="p-5 border-b border-token-subtle bg-surface-muted flex items-center justify-between">
            <h3 className="font-heading font-bold text-sm text-primary-token uppercase tracking-wider">
              Matrix Spesifikasi Rekayasa Struktur & Fisik
            </h3>
            <span className="text-[11px] font-heading font-bold text-brand-token">
              STANDAR SNI / ASTM VALIDATED
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-token-subtle bg-surface-muted/50">
                  <th className="p-4 font-heading font-bold text-primary-token uppercase text-xs w-1/3">Parameter Rekayasa</th>
                  <th className="p-4 font-heading font-extrabold text-primary-token w-1/3 border-l border-token-subtle bg-surface/60">
                    {materialA.name}
                  </th>
                  <th className="p-4 font-heading font-extrabold text-primary-token w-1/3 border-l border-token-subtle bg-surface/60">
                    {materialB.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-token-subtle">
              
              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Scale className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Kekuatan Tekan (Compressive Strength)</span>
                </td>
                <td className="p-4 font-body text-charcoal border-l border-[#E2DFD7] font-semibold">{materialA.compressiveStrength}</td>
                <td className="p-4 font-body text-charcoal border-l border-[#E2DFD7] font-semibold">{materialB.compressiveStrength}</td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Kekuatan Tarik / Leleh (Tensile Strength)</span>
                </td>
                <td className="p-4 font-body text-charcoal border-l border-[#E2DFD7] font-semibold">{materialA.tensileStrength}</td>
                <td className="p-4 font-body text-charcoal border-l border-[#E2DFD7] font-semibold">{materialB.tensileStrength}</td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Kecepatan Ereksi & Pelaksanaan</span>
                </td>
                <td className="p-4 border-l border-[#E2DFD7]">
                  <span className="font-heading text-xs font-bold uppercase px-2.5 py-1 bg-[#EFECE6] text-charcoal inline-block">
                    {materialA.speedOfConstruction}
                  </span>
                </td>
                <td className="p-4 border-l border-[#E2DFD7]">
                  <span className="font-heading text-xs font-bold uppercase px-2.5 py-1 bg-[#EFECE6] text-charcoal inline-block">
                    {materialB.speedOfConstruction}
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Ketahanan Api & Durabilitas Suhu</span>
                </td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialA.fireResistance}</td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialB.fireResistance}</td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Kapasitas Bentang Bebas (Free Span)</span>
                </td>
                <td className="p-4 font-body text-charcoal font-semibold border-l border-[#E2DFD7]">{materialA.spanCapability}</td>
                <td className="p-4 font-body text-charcoal font-semibold border-l border-[#E2DFD7]">{materialB.spanCapability}</td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Performa Daktilitas Gempa (SNI 1726)</span>
                </td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialA.seismicPerformance}</td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialB.seismicPerformance}</td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Indeks Biaya Material Relatif</span>
                </td>
                <td className="p-4 border-l border-[#E2DFD7]">
                  <span className="font-heading text-xs font-bold uppercase text-brand-olive">
                    {materialA.relativeCostIndex}
                  </span>
                </td>
                <td className="p-4 border-l border-[#E2DFD7]">
                  <span className="font-heading text-xs font-bold uppercase text-brand-olive">
                    {materialB.relativeCostIndex}
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Scale className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Berat Jenis (Density) & Beban Pondasi</span>
                </td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">
                  {materialA.densityWeight} (Beban: {materialA.foundationImpact})
                </td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">
                  {materialB.densityWeight} (Beban: {materialB.foundationImpact})
                </td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Siklus Hidup & Emisi Karbon</span>
                </td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialA.carbonFootprint}</td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialB.carbonFootprint}</td>
              </tr>

              <tr>
                <td className="p-4 font-heading font-bold text-charcoal flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-olive shrink-0" />
                  <span>Kebutuhan Pemeliharaan Purnajual</span>
                </td>
                <td className="p-4 font-body text-muted-charcoal border-l border-[#E2DFD7]">{materialA.maintenanceNeeds}</td>
                <td className="p-4 font-body text-secondary-token border-l border-token-subtle">{materialB.maintenanceNeeds}</td>
              </tr>

            </tbody>
          </table>
          </div>
        </div>

        {/* Structural Recommendation Footer Action */}
        <div className="bg-primary-container text-white p-8 rounded-3xl border border-token-primary flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-token block mb-2">
              ENGINEERING CONSULTATION
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
              Butuh Rekomendasi Material Definitif untuk Proyek Anda?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-body max-w-2xl">
              Tim Principal Structural Engineer BuildDeva siap melakukan kalkulasi pemodelan ETABS / SAP2000 untuk menentukan rasio efisiensi biaya material terbaik.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry?.('client')}
            className="btn-accent px-7 py-4 flex items-center gap-2 shrink-0 cursor-pointer shadow-md rounded-lg"
          >
            <span>KONSULTASI STRUKTUR</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
