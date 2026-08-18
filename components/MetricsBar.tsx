'use client';

import React from 'react';
import { motion } from 'motion/react';

interface MetricsBarProps {
  metrics?: {
    yearsExperience: number;
    projectsCompleted: number;
    specializations: number;
    clientSatisfaction: number;
  };
}

export default function MetricsBar({ metrics }: MetricsBarProps) {
  const data = metrics || {
    yearsExperience: 15,
    projectsCompleted: 200,
    specializations: 4,
    clientSatisfaction: 100
  };

  const metricItems = [
    {
      value: `${data.yearsExperience}+`,
      label: 'YEARS EXPERIENCE',
    },
    {
      value: `${data.projectsCompleted}+`,
      label: 'PROJECTS COMPLETED',
    },
    {
      value: data.specializations < 10 ? `0${data.specializations}` : `${data.specializations}`,
      label: 'SPECIALIZATIONS',
    },
    {
      value: `${data.clientSatisfaction}%`,
      label: 'CLIENT SATISFACTION',
    },
  ];

  return (
    <section className="bg-base py-16 border-y border-token-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-token tracking-tight mb-2">
              The Standard of Excellence
            </h2>
            <p className="text-xs sm:text-sm text-secondary-token font-body leading-relaxed max-w-sm">
              Metrics that define our commitment to structural and operational perfection.
            </p>
          </div>

          {/* Right Grid - 4 Columns separated by thin architectural lines */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 border-t lg:border-t-0 lg:border-l border-token-subtle pt-8 lg:pt-0 lg:pl-8">
            {metricItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col gap-1 border-l border-token-subtle pl-4"
              >
                {/* Large numerical values in Deep Green (#344335 / var(--color-primary)) */}
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-token tracking-tight">
                  {item.value}
                </span>
                <span className="font-heading text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary-token">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
