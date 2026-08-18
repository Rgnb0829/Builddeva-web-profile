'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Warehouse, Building2, Wrench, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

export default function DisciplinesSection() {
  const disciplines = [
    {
      id: 'residential',
      title: 'Residential',
      slug: 'residential',
      icon: Home,
      description: 'Bespoke private residences crafted to exact architectural specifications and structural integrity.',
    },
    {
      id: 'industrial',
      title: 'Industrial',
      slug: 'industrial',
      icon: Warehouse,
      description: 'High-capacity logistics warehouses and specialized industrial facilities with certified safety standards.',
    },
    {
      id: 'commercial',
      title: 'Commercial',
      slug: 'commercial',
      icon: Building2,
      description: 'Modern corporate offices and flagship retail spaces designed for long-term commercial performance.',
    },
    {
      id: 'renovation',
      title: 'Renovation',
      slug: 'renovation',
      icon: Wrench,
      description: 'Meticulous structural retrofitting, restoration, and modernization of existing commercial assets.',
    },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-[#66735A] py-24 relative overflow-hidden border-y border-[#546049] shadow-inner">
      {/* Background Architectural Blueprint Grid Texture */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Ambient Watermark "DISCIPLINES" */}
      <div className="absolute -bottom-10 right-4 select-none pointer-events-none opacity-10 font-heading font-black text-[120px] sm:text-[180px] lg:text-[240px] leading-none text-white tracking-tighter uppercase z-0">
        EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with scroll-triggered entrance */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-[#D8B65A] inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#D8B65A]">
                — DISCIPLINES
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FAF9F5] tracking-tight">
              Our Expertise
            </h2>
          </div>
          <p className="text-sm text-[#D6E4C6] font-body max-w-md leading-relaxed">
            Specialized engineering divisions delivering uncompromising precision, ISO-certified safety, and architectural excellence across diverse sectors.
          </p>
        </motion.div>

        {/* 4 Cards Grid - Elegant Off-White Cards with Architectural Accents */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {disciplines.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group bg-[#FAF9F5] rounded-2xl p-8 flex flex-col justify-between border border-[#D6E4C6]/80 shadow-md hover:shadow-2xl hover:border-[#1E2D20] transition-all duration-300"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-13 h-13 rounded-xl bg-[#66735A] flex items-center justify-center mb-6 group-hover:bg-[#1E2D20] group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6 text-[#FAF9F5] group-hover:text-[#D8B65A] transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-[#1B1C1A] mb-3 group-hover:text-[#66735A] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#434842] font-body leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Explore Service Action */}
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center justify-between w-full font-heading text-xs font-bold uppercase tracking-wider text-[#56624A] hover:text-[#1E2D20] transition-colors pt-4 border-t border-[#E3E2DF] group/link"
                >
                  <span>Explore Service</span>
                  <div className="w-7 h-7 rounded-full bg-[#EFECE6] group-hover/link:bg-[#66735A] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1B1C1A] group-hover/link:text-[#FAF9F5] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
