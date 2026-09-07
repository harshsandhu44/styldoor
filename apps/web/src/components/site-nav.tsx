'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/site';
import { ThemeToggle } from './theme-toggle';
import { ComingSoon } from './coming-soon';

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-colors ${
        scrolled ? 'bg-background/85 backdrop-blur' : 'bg-background'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight lowercase"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ComingSoon>Get the app</ComingSoon>
          </div>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center border border-border bg-background md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden
            >
              {open ? (
                <path d="M5 5l14 14M19 5 5 19" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <ComingSoon>Get the app</ComingSoon>
          </div>
        </nav>
      )}
    </header>
  );
}
