'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CTABannerProps {
  onOpenInquiry?: (type?: 'client' | 'partner' | 'talent') => void;
}

export default function CTABanner({ onOpenInquiry }: CTABannerProps) {
  return (
    <section className="bg-base py-28 border-b border-token-subtle text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline matching signature aesthetic */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-primary-token tracking-tight leading-[1.08] mb-6"
        >
          Let&apos;s Create{' '}
          <span className="text-accent-token italic font-serif font-normal tracking-normal">
            Something
          </span>{' '}
          Beautiful, Together<span className="text-accent-token">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-secondary-token font-body max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We invite you to share your ideas with us. Let&apos;s sit down, have a coffee, and discuss how we can bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={() => onOpenInquiry?.('client')}
            id="cta-banner-initiate-btn"
            className="btn-primary group shadow-md px-9 py-4"
          >
            <span>INITIATE PROJECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
