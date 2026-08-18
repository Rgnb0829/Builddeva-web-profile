'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '@/types';

interface FeaturedProjectsProps {
  projects?: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // Filter or default to featured ones
  const featuredList = (projects || []).filter(p => p.isFeatured).slice(0, 3);

  return (
    <section className="bg-[#F7F6F2] py-24 border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-brand-olive inline-block"></span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
                — SELECTED WORKS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-charcoal hover:text-brand-olive transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group flex flex-col cursor-pointer"
            >
              <Link href={`/projects/${project.slug}`} className="block relative h-[380px] w-full overflow-hidden border border-[#E2DFD7] mb-5">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </Link>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-charcoal group-hover:text-brand-olive transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-muted-charcoal mt-1">
                    {project.category.toUpperCase()} • {project.year}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View details for ${project.title}`}
                  className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:border-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
