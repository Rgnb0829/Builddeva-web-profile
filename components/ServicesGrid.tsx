'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/lib/db';
import { InquiryType } from '@/types';

interface ServicesGridProps {
  onOpenInquiry?: (type?: InquiryType) => void;
}

export default function ServicesGrid({ onOpenInquiry }: ServicesGridProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-16"
    >
      {servicesData.map((service, idx) => (
        <motion.div
          key={service.id}
          variants={itemVariants}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 bg-[#EFECE6] border border-[#E2DFD7] transition-shadow duration-300 hover:shadow-lg ${
            idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 bg-brand-olive rounded-full inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                DIVISION 0{idx + 1} • {service.category.toUpperCase()}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight"
            >
              {service.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-xs sm:text-sm font-heading font-bold text-muted-charcoal"
            >
              {service.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed"
            >
              {service.description}
            </motion.p>

            {/* Scope highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2"
            >
              {service.scopeOfWork.slice(0, 4).map((item, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 text-xs text-charcoal font-body">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Link
                href={`/services/${service.slug}`}
                className="bg-charcoal text-white hover:bg-brand-olive font-heading text-xs font-bold uppercase tracking-widest px-6 py-3.5 border border-charcoal transition-all duration-200 flex items-center gap-2 group cursor-pointer shadow-xs"
              >
                <span>DETAIL LAYANAN</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenInquiry?.('client')}
                className="text-xs font-heading font-bold uppercase tracking-wider text-brand-olive hover:text-charcoal transition-colors underline cursor-pointer py-2"
              >
                Konsultasi Proyek Ini
              </button>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-6 relative h-[320px] sm:h-[360px] w-full border border-[#E2DFD7] overflow-hidden group"
          >
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
