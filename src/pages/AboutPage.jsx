import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About | 123 Blue Digital"
        description="Learn about 123 Blue Digital, a strategy-led agency helping South African brands grow through smart digital execution."
      />
      <section className="container-wide py-16 sm:py-20">
        <h1 className="section-title">A strategic partner, not just a service provider</h1>
        <p className="section-subtitle">
          123 Blue Digital was founded to help growing businesses compete with confidence online. We combine practical strategy,
          clear communication, and high-quality execution to deliver outcomes that matter.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="card lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">Our approach</h2>
            <p className="mt-4 text-slate-300">
              We start by understanding your business model, margins, and sales journey. Then we design digital systems that attract
              the right audience, build trust quickly, and convert attention into opportunities.
            </p>
            <p className="mt-4 text-slate-300">
              Our team is based in Pretoria and serves clients throughout South Africa with remote-friendly collaboration and fast turnarounds.
            </p>
          </article>
          <article className="card">
            <h3 className="text-lg font-semibold text-white">Core values</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Clarity before complexity</li>
              <li>• Measure what matters</li>
              <li>• Build for long-term growth</li>
              <li>• Communicate proactively</li>
            </ul>
          </article>
        </div>
      </section>
      <CTASection title="Looking for a long-term growth partner?" copy="Let’s discuss your roadmap and where digital can unlock the biggest gains." />
    </>
  );
}
