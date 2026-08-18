'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenInquiry?: (type?: 'client' | 'partner' | 'talent') => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Card - Framed Architectural Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 card-token p-8 sm:p-12 shadow-xl relative z-20"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-token">
                VOL. 01 — ARCHITECTURAL INTEGRITY
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl text-primary-token tracking-tight leading-[1.08] mb-6">
              Crafting Spaces.<br />
              Building Relationships<span className="text-accent-token">.</span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-secondary-token font-body leading-relaxed mb-8 max-w-xl">
              We believe that the best structures are built on a foundation of trust, transparent collaboration, and an unwavering dedication to the craft of construction.
            </p>

            {/* CTA Buttons - Strictly driven by design tokens */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenInquiry?.('client')}
                id="hero-start-conversation-btn"
                className="btn-primary group shadow-xs"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <Link
                href="/projects"
                id="hero-explore-projects-link"
                className="btn-secondary text-center"
              >
                EXPLORE PROJECTS
              </Link>
            </div>
          </motion.div>

          {/* Right Image Container - Construction Site & Architectural View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative h-[420px] sm:h-[550px] lg:h-[620px] w-full overflow-hidden border border-token-subtle shadow-lg"
          >
            <Image
              src="https://picsum.photos/seed/builddevahero/1200/1000"
              alt="BuildDeva Engineers reviewing architectural blueprints on construction site"
              fill
              priority
              className="object-cover filter contrast-[1.05] brightness-[0.98]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Badge overlay on bottom right */}
            <div className="absolute bottom-6 right-6 card-token px-4 py-3 shadow-md hidden sm:block">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary-token">
                PROVEN CERTIFIED QUALITY
              </p>
              <p className="text-[11px] text-secondary-token font-body">
                ISO 9001 & ISO 4501 K3 Safety Standard
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
