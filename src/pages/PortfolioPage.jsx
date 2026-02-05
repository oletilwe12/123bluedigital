import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const projects = [
  {
    client: 'Fintech Training Academy',
    result: '122% increase in demo bookings',
    summary: 'Redesigned a dated website into a modern conversion funnel with integrated paid search campaigns.',
  },
  {
    client: 'National Interior Brand',
    result: '3.8x ROAS in 90 days',
    summary: 'Built a high-intent e-commerce ad strategy with audience segmentation and creative testing.',
  },
  {
    client: 'Professional Services Firm',
    result: '67% growth in inbound leads',
    summary: 'Launched a new authority-driven website with SEO-led service pages and lead capture automation.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SEO
        title="Portfolio | 123 Blue Digital"
        description="See how 123 Blue Digital delivers websites and campaigns that grow leads, sales, and brand visibility."
      />
      <section className="container-wide py-16 sm:py-20">
        <h1 className="section-title">Selected client outcomes</h1>
        <p className="section-subtitle">
          We focus on business impact, not vanity metrics. Here are examples of results achieved through strategic digital execution.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.client} className="card">
              <p className="text-sm uppercase tracking-wide text-brand-400">{project.result}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{project.client}</h2>
              <p className="mt-3 text-slate-300">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Want results like these?" copy="Let’s discuss your current challenges and map out your next growth phase." />
    </>
  );
}
