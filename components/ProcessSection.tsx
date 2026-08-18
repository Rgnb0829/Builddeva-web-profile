'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with a deep dive into your aspirations, establishing a shared language of design and functional requirements.',
    },
    {
      number: '02',
      title: 'Site Assessment',
      description: 'Our experts conduct rigorous technical evaluations to harmonize your vision with the unique characteristics of the landscape.',
    },
    {
      number: '03',
      title: 'Planning',
      description: 'Detailed blueprints and transparent timelines are developed, ensuring every structural detail is accounted for before ground is broken.',
    },
    {
      number: '04',
      title: 'Construction',
      description: 'Our master craftsmen bring the plans to life, utilizing premium materials and advanced techniques with unwavering precision.',
    },
    {
      number: '05',
      title: 'Quality Control',
      description: 'Continuous multi-point inspections ensure that every element meets our exacting standards for safety and aesthetic integrity.',
    },
    {
      number: '06',
      title: 'Handover',
      description: 'The final reveal of your completed space, delivered with a comprehensive walkthrough and a commitment to long-term support.',
    },
  ];

  return (
    <section className="bg-[#F7F6F2] py-24 relative overflow-hidden border-b border-[#E2DFD7]">
      {/* Background Watermark Text "PROCESS" matching image.png */}
      <div className="absolute top-12 left-4 select-none pointer-events-none opacity-5 font-heading font-black text-[140px] sm:text-[220px] lg:text-[280px] leading-none text-charcoal tracking-tighter uppercase z-0">
        PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              — HOW WE WORK
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight">
            A Meticulous Journey from Vision to Reality
          </h2>
        </div>

        {/* 6 Grid Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#EFECE6]/60 p-8 border-t-2 border-brand-olive flex flex-col justify-between hover:bg-[#EFECE6] transition-colors"
            >
              <div>
                <span className="font-heading font-extrabold text-sm text-cta-yellow block mb-4">
                  {step.number}
                </span>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-charcoal font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full Process Page */}
        <div className="mt-12 text-center sm:text-right">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-charcoal hover:text-brand-olive transition-colors group"
          >
            <span>Learn More About Our Risk-Reduction Process</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
