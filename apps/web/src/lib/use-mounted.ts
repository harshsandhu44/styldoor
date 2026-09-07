import { useSyncExternalStore } from 'react';

const noop = () => () => {};

/** true after client hydration, false during SSR — without a setState-in-effect. */
export function useMounted() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
