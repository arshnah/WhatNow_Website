"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'whatnow-theme';

function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The no-flash script in layout.tsx has already set the correct class before
  // paint; this state just mirrors it so the toggle UI is in sync.
  const [theme, setThemeState] = useState<Theme>('light');

  // Default is light. Only an explicit saved choice (the toggle) switches to dark.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    setThemeState(saved === 'dark' ? 'dark' : 'light');
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    applyThemeClass(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
