import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const faqs = [
  {
    q: 'How long does a website project usually take?',
    a: 'Most standard marketing websites are completed in 3 to 6 weeks depending on scope, revisions, and content readiness.',
  },
  {
    q: 'Do you work with businesses outside Pretoria?',
    a: 'Yes. We support clients across South Africa through a remote-first workflow with regular strategy check-ins.',
  },
  {
    q: 'Can you manage both my website and ad campaigns?',
    a: 'Absolutely. Many clients choose us as a single growth partner for web, SEO, paid media, and reporting.',
  },
  {
    q: 'Do you offer once-off projects and retainers?',
    a: 'Yes. We offer fixed-scope projects for build work and monthly retainers for continuous optimisation and scaling.',
  },
];

export default function FaqPage() {
  return (
    <>
      <SEO
        title="FAQ | 123 Blue Digital"
        description="Answers to common questions about process, timelines, pricing, and support from 123 Blue Digital."
      />
      <section className="container-wide py-16 sm:py-20">
        <h1 className="section-title">Frequently asked questions</h1>
        <p className="section-subtitle">Everything you need to know before starting a project with us.</p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.q} className="card">
              <h2 className="text-lg font-semibold text-white">{faq.q}</h2>
              <p className="mt-3 text-slate-300">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Still have questions?" copy="Send us a message and we’ll guide you through the next best step." />
    </>
  );
}
