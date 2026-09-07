import { SiteNav } from '@/components/site-nav';
import { CookieConsent } from '@/components/cookie-consent';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { RankingExplainer } from '@/components/sections/ranking-explainer';
import { Services } from '@/components/sections/services';
import { TwoLanes } from '@/components/sections/two-lanes';
import { Faq } from '@/components/sections/faq';
import { FinalCta } from '@/components/sections/final-cta';
import { SiteFooter } from '@/components/sections/site-footer';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <RankingExplainer />
        <Services />
        <TwoLanes />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
