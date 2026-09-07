// Non-interactive CTA. There is no backend yet — every call to action on the
// site resolves to "coming soon", not a real destination.
const styles = {
  solid: 'border-primary bg-primary text-primary-foreground',
  outline: 'border-border bg-background text-foreground hover:bg-muted',
} as const;

export function ComingSoon({
  children,
  variant = 'outline',
  className = '',
}: {
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <span
      role="button"
      aria-disabled="true"
      title="Not open yet — check back soon"
      className={`inline-flex cursor-not-allowed items-center gap-2 border px-4 py-2 text-sm font-medium ${styles[variant]} ${className}`}
    >
      {children}
      <span className="border border-current px-1 text-[0.7rem] opacity-70">
        soon
      </span>
    </span>
  );
}
