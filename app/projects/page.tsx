'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import InquiryModal from '@/components/InquiryModal';
import { projectsData } from '@/lib/db';
import { ProjectCategory, InquiryType } from '@/types';
import { ArrowUpRight, Search, Filter, ArrowUpDown } from 'lucide-react';
import { motion } from 'motion/react';

type SortOption = 'newest' | 'largest-area' | 'featured';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('client');

  const categories: ProjectCategory[] = ['All', 'Residential', 'Warehouse & Industrial', 'Commercial', 'Renovation'];

  const filteredProjects = projectsData
    .filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.clientName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return (b.year || 0) - (a.year || 0);
      }
      if (sortBy === 'largest-area') {
        const areaA = parseFloat(a.areaSize.replace(/[^0-9.]/g, '')) || 0;
        const areaB = parseFloat(b.areaSize.replace(/[^0-9.]/g, '')) || 0;
        return areaB - areaA;
      }
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return (b.year || 0) - (a.year || 0);
      }
      return 0;
    });

  const featuredProject = projectsData.find(p => p.isFeatured) || projectsData[0];

  const handleOpenInquiry = (type: InquiryType = 'client') => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-charcoal flex flex-col font-body">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="grow pt-28 pb-16">
        {/* Projects Hero */}
        <section className="bg-[#F7F6F2] py-16 border-b border-[#E2DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                  BUILDDEVA PROOF ENGINE
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal tracking-tight mb-6">
                Portofolio Proyek & Case Studies Presisi
              </h1>
              <p className="text-base sm:text-lg text-muted-charcoal font-body leading-relaxed">
                Bukti nyata rekayasa struktur, manajemen proyek tanpa keterlambatan, dan kepuasan klien di seluruh Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search Bar */}
        <section className="py-6 bg-[#EFECE6] border-b border-[#E2DFD7] sticky top-20 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-brand-olive shrink-0 mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-charcoal text-white border-charcoal'
                      : 'bg-white text-charcoal border-[#E2DFD7] hover:bg-[#F7F6F2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Controls Right: Search + Sort */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-muted-charcoal whitespace-nowrap hidden sm:inline">
                  Urutkan:
                </span>
                <div className="relative w-full sm:w-44">
                  <select
                    id="sort-projects-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full bg-white border border-[#E2DFD7] px-3 py-2 text-xs font-heading font-bold text-charcoal focus:outline-hidden focus:border-brand-olive cursor-pointer appearance-none pr-8"
                  >
                    <option value="newest">Newest (Terbaru)</option>
                    <option value="largest-area">Largest Area (Luas)</option>
                    <option value="featured">Most Featured</option>
                  </select>
                  <ArrowUpDown className="w-3.5 h-3.5 text-muted-charcoal absolute right-2.5 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-64 shrink-0">
                <input
                  type="text"
                  placeholder="Cari lokasi, nama proyek..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#E2DFD7] pl-9 pr-4 py-2 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                />
                <Search className="w-4 h-4 text-muted-charcoal absolute left-3 top-2.5" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study Spotlight */}
        {selectedCategory === 'All' && !searchQuery && featuredProject && (
          <section className="py-16 border-b border-[#E2DFD7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-cta-yellow bg-charcoal px-3 py-1 inline-block">
                  FEATURED CASE STUDY
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EFECE6] border border-[#E2DFD7] p-6 sm:p-10">
                <div className="lg:col-span-7 relative h-[380px] w-full border border-[#E2DFD7]">
                  <Image
                    src={featuredProject.heroImage}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-olive block mb-2">
                      {featuredProject.category.toUpperCase()} • {featuredProject.year}
                    </span>
                    <h2 className="font-heading font-extrabold text-3xl text-charcoal mb-3">
                      {featuredProject.title}
                    </h2>
                    <p className="text-xs text-muted-charcoal font-body mb-4">
                      {featuredProject.location} | Client: {featuredProject.clientName}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal font-body leading-relaxed mb-6">
                      {featuredProject.overview}
                    </p>

                    {featuredProject.metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-6 bg-white p-4 border border-[#E2DFD7]">
                        {featuredProject.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <span className="font-heading font-extrabold text-base text-charcoal block">{m.value}</span>
                            <span className="text-[10px] text-muted-charcoal uppercase font-heading">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="btn-primary py-3.5 px-6"
                  >
                    <span>BACA CASE STUDY LENGKAP</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Editorial Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-heading font-bold text-xl text-charcoal">
                Menampilkan {filteredProjects.length} Proyek Terverifikasi
              </h3>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="py-16 text-center bg-[#EFECE6] border border-[#E2DFD7]">
                <p className="font-heading font-bold text-lg text-charcoal mb-2">
                  Tidak Ada Proyek Ditemukan
                </p>
                <p className="text-xs text-muted-charcoal font-body mb-4">
                  Coba ubah kata kunci pencarian atau pilih kategori lain.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="bg-charcoal text-white font-heading text-xs uppercase font-bold py-2 px-4"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.25, ease: 'easeOut' },
                    }}
                    className="group flex flex-col bg-white border border-[#E2DFD7] hover:border-brand-olive hover:shadow-xl transition-colors duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-[280px] w-full overflow-hidden">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-charcoal/90 text-white font-heading text-[10px] font-bold uppercase px-3 py-1">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col justify-between grow">
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted-charcoal font-body mb-2">
                          <span>{project.location}</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-charcoal group-hover:text-brand-olive transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-charcoal font-body line-clamp-2 leading-relaxed mb-6">
                          {project.overview}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#E2DFD7] flex items-center justify-between">
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-brand-olive">
                          {project.areaSize}
                        </span>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-brand-olive group-hover:text-white group-hover:border-brand-olive transition-colors"
                          aria-label={`View ${project.title}`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
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
