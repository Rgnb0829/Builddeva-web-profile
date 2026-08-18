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
      description: 'Bespoke private residences crafted to exact architectural specifications.',
    },
    {
      id: 'industrial',
      title: 'Industrial',
      slug: 'industrial',
      icon: Warehouse,
      description: 'High-capacity warehouses and specialized industrial facilities.',
    },
    {
      id: 'commercial',
      title: 'Commercial',
      slug: 'commercial',
      icon: Building2,
      description: 'Modern office buildings and retail spaces designed for performance.',
    },
    {
      id: 'renovation',
      title: 'Renovation',
      slug: 'renovation',
      icon: Wrench,
      description: 'Meticulous restoration and modernization of existing structures.',
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
    <section className="bg-dark-green text-offwhite py-24 border-y border-[#2A372B] relative overflow-hidden">
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
              <span className="h-[1px] w-6 bg-cta-yellow inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-cta-yellow">
                — DISCIPLINES
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-offwhite tracking-tight">
              Our Expertise
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-offwhite/70 font-body max-w-md">
            Specialized divisions delivering precise results across diverse sectors.
          </p>
        </motion.div>

        {/* 4 Cards Grid with staggered scroll-triggered entrance matching image.png */}
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
                className="group bg-[#2A372B]/60 p-8 border border-white/10 flex flex-col justify-between hover:bg-[#2A372B] hover:border-cta-yellow/50 hover:shadow-xl transition-colors duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cta-yellow/60 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-offwhite group-hover:text-cta-yellow group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-offwhite mb-3 group-hover:text-cta-yellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-offwhite/70 font-body leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-offwhite/80 group-hover:text-cta-yellow transition-colors pt-4 border-t border-white/10"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
