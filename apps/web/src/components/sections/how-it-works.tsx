import { steps } from '@/lib/site';
import { Illustration } from '../illustration';
import { Reveal } from '../motion/reveal';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="max-w-[20ch] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
          How a visit works
        </h2>

        <ol className="mt-12 flex flex-col divide-y divide-border border-y border-border">
          {steps.map((step) => (
            <li key={step.n}>
              <Reveal className="grid items-center gap-6 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {String(step.n).padStart(2, '0')}
                  </span>
                  <Illustration
                    src={step.img.src}
                    alt=""
                    width={step.img.w}
                    height={step.img.h}
                    className="w-16 sm:w-24"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[56ch] text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
