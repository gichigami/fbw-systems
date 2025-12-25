'use client';

export function getTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light';
  }
  
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (stored) {
    return stored;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: 'light' | 'dark') {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

export function applyTheme(theme: 'light' | 'dark') {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function initTheme() {
  if (typeof window === 'undefined') return;
  
  const theme = getTheme();
  applyTheme(theme);
}

