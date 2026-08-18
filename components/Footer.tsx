import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F7F6F2] border-t border-[#E2DFD7] pt-16 pb-12 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#E2DFD7]">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block focus:outline-hidden">
              <span className="font-heading font-extrabold text-3xl text-charcoal tracking-tight">
                BuildDeva<span className="text-cta-yellow">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-charcoal max-w-sm font-body leading-relaxed">
              Architectural Integrity in Construction. Elevating the standard of built environments globally with transparency and precision.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/builddeva"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal hover:text-brand-olive transition-colors underline underline-offset-4"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/builddeva"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal hover:text-brand-olive transition-colors underline underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/6281188990011"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal hover:text-brand-olive transition-colors underline underline-offset-4"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Office Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              OFFICE
            </h4>
            <address className="not-italic text-xs text-muted-charcoal leading-relaxed font-body">
              Graha BuildDeva, Suite 400<br />
              Jl. Jend. Sudirman No. 88<br />
              Jakarta Selatan, DKI 12930
            </address>
            <p className="text-xs text-charcoal font-semibold mt-1">
              hello@builddeva.com
            </p>
            <p className="text-xs text-muted-charcoal">
              +62 21 5558 9900
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-heading font-medium text-charcoal/80">
              <li>
                <Link href="/about" className="hover:text-brand-olive transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-olive transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-olive transition-colors">
                  Expertise & Services
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-brand-olive transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-brand-olive transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-olive transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              LEGAL
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-heading font-medium text-charcoal/80">
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-olive transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-brand-olive transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-olive transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-charcoal font-heading font-medium gap-4">
          <p>© 2026 BUILDDEVA. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase">DESIGN BY ARCHITECTURAL STANDARDS</p>
        </div>
      </div>
    </footer>
  );
}
