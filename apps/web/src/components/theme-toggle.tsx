'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/use-mounted';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? `Switch to ${isDark ? 'light' : 'dark'} theme`
          : 'Switch theme'
      }
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="grid size-9 place-items-center border border-border bg-background transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        aria-hidden
        suppressHydrationWarning
      >
        {mounted && isDark ? (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
          </>
        ) : (
          <path d="M20 13a8 8 0 1 1-9-9 6.2 6.2 0 0 0 9 9z" />
        )}
      </svg>
    </button>
  );
}
