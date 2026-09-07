'use client';

import { useSyncExternalStore } from 'react';

const KEY = 'styldoor.consent';

// ponytail: no-op guard. When analytics is added, gate its init on
// readConsent() === 'accepted'.
let listeners: (() => void)[] = [];

function readConsent() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return 'accepted';
  }
}

function subscribe(cb: () => void) {
  listeners.push(cb);
  window.addEventListener('storage', cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
    window.removeEventListener('storage', cb);
  };
}

function decide(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* private mode — nothing to persist */
  }
  listeners.forEach((l) => l());
}

export function CookieConsent() {
  const choice = useSyncExternalStore(subscribe, readConsent, () => 'accepted');

  if (choice === 'accepted' || choice === 'declined') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-prose text-muted-foreground">
          We only use cookies that keep the site working. If we add analytics
          later, this is where you choose.{' '}
          <a href="/privacy" className="font-medium text-foreground underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="border-2 border-foreground bg-background px-3 py-1.5 font-semibold"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="border-2 border-foreground bg-primary px-3 py-1.5 font-semibold text-primary-foreground"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
