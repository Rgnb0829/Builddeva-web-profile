'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

type Theme = 'offwhite' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'offwhite',
  toggleTheme: () => {},
  setTheme: () => {},
});

const themeListeners = new Set<() => void>();

function subscribe(callback: () => void) {
  themeListeners.add(callback);
  return () => {
    themeListeners.delete(callback);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'offwhite';
  const saved = localStorage.getItem('builddeva-theme');
  return saved === 'dark' ? 'dark' : 'offwhite';
}

function getServerSnapshot(): Theme {
  return 'offwhite';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('builddeva-theme', newTheme);
    themeListeners.forEach((listener) => listener());
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'offwhite' ? 'dark' : 'offwhite';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
