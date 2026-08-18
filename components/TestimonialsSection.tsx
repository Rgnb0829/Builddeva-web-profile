'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const list = testimonials || [];

  return (
    <section className="bg-[#F7F6F2] py-24 border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              — VERIFIED PROOF & REPUTATION
            </span>
            <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight">
            Trusted by Leaders & Homeowners Across Indonesia
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#EFECE6] p-8 border border-[#E2DFD7] flex flex-col justify-between relative shadow-xs"
            >
              <Quote className="w-8 h-8 text-brand-olive/30 absolute top-6 right-6" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cta-yellow text-cta-yellow" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-charcoal font-body leading-relaxed mb-8 italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#E2DFD7]">
                {item.avatarUrl && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#E2DFD7]">
                    <Image
                      src={item.avatarUrl}
                      alt={item.clientName}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-muted-charcoal font-body">
                    {item.role}, {item.company}
                  </p>
                  <p className="text-[10px] text-brand-olive font-heading font-bold uppercase tracking-wider mt-0.5">
                    Project: {item.projectTitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
