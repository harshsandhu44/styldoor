import { faq } from '@/lib/site';

export function Faq() {
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
          Questions people ask
        </h2>

        <div className="mt-10 border-t border-border">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </summary>
              <p className="mt-3 max-w-[62ch] text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
