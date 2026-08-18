'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'offwhite' ? 'Architectural Dark Mode' : 'Signature Offwhite Mode'}`}
      title={theme === 'offwhite' ? 'Beralih ke Dark Mode Arsitektural' : 'Beralih ke Mode Offwhite'}
      className="p-2 rounded-none border border-token-subtle bg-surface-muted hover:bg-surface text-primary-token transition-all duration-200 flex items-center gap-1.5 text-xs font-heading font-bold cursor-pointer group shadow-2xs"
    >
      {theme === 'offwhite' ? (
        <>
          <Moon className="w-4 h-4 text-brand-token group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Dark View</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-accent-token group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Light View</span>
        </>
      )}
    </button>
  );
}
