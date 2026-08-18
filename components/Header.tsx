'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onOpenInquiry?: (type?: 'client' | 'partner' | 'talent') => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'EXPERTISE', href: '/services' },
    { name: 'PORTFOLIO', href: '/projects' },
    { name: 'HOW WE WORK', href: '/how-we-work' },
    { name: 'PARTNERSHIP', href: '/partnership' },
    { name: 'CAREER', href: '/careers' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#E2DFD7] py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1 focus:outline-hidden">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight group-hover:text-brand-olive transition-colors">
              BuildDeva<span className="text-cta-yellow inline-block animate-pulse">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading text-xs xl:text-sm font-semibold tracking-wider transition-colors relative py-1 ${
                    isActive ? 'text-brand-olive' : 'text-charcoal/80 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-olive rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => onOpenInquiry?.('client')}
              id="header-inquire-btn"
              className="btn-primary px-5 py-2.5 shadow-xs hover:shadow-md"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-charcoal hover:text-brand-olive focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#F7F6F2] pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-heading uppercase tracking-widest text-brand-olive font-bold">
                Navigation Menu
              </span>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-xl font-bold text-charcoal hover:text-brand-olive py-2 border-b border-[#E2DFD7] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2DFD7] flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.('client');
                }}
                className="w-full bg-charcoal text-offwhite hover:bg-brand-olive font-heading text-sm font-bold uppercase tracking-wider py-3.5 text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-muted-charcoal text-center font-body">
                Graha BuildDeva, Sudirman CBD, Jakarta | hello@builddeva.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
