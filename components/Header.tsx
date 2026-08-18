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
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto mx-auto h-[72px] sm:h-[78px] flex items-center justify-between transition-all duration-300 ease-out rounded-[22px] ${
            isScrolled
              ? 'max-w-[1240px] bg-surface/90 backdrop-blur-xl border border-token-subtle shadow-lg shadow-black/5 px-6 sm:px-8'
              : 'max-w-[1400px] bg-transparent border border-transparent shadow-none px-4 sm:px-8'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1 focus:outline-hidden">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-token tracking-tight group-hover:text-brand-token transition-colors duration-250">
              BuildDeva<span className="text-accent-token inline-block animate-pulse">.</span>
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
                  className={`font-heading text-xs xl:text-sm font-semibold tracking-wider transition-colors duration-250 relative py-1.5 px-0.5 ${
                    isActive ? 'text-brand-token font-bold' : 'text-primary-token/80 hover:text-primary-token'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-token rounded-full"
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
              className="btn-primary px-5 py-2.5 shadow-xs hover:shadow-md transition-all duration-250 rounded-lg"
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
              className="p-2 text-primary-token hover:text-brand-token focus:outline-hidden cursor-pointer"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-base pt-28 px-6 pb-8 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-heading uppercase tracking-widest text-brand-token font-bold">
                Navigation Menu
              </span>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-xl font-bold text-primary-token hover:text-brand-token py-2.5 border-b border-token-subtle flex items-center justify-between transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-token-subtle flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.('client');
                }}
                className="btn-primary w-full py-4 text-center text-xs font-bold uppercase tracking-wider"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-secondary-token text-center font-body">
                Graha BuildDeva, Sudirman CBD, Jakarta | hello@builddeva.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
