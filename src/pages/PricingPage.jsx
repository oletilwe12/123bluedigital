import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const plans = [
  {
    name: 'Launch',
    price: 'From R12,000',
    suitedFor: 'New businesses needing a strong digital foundation',
    features: ['5-page conversion website', 'Core SEO setup', 'Analytics integration', '30-day support'],
  },
  {
    name: 'Growth',
    price: 'From R24,000',
    suitedFor: 'Businesses ready to scale leads consistently',
    features: ['Custom website + landing pages', 'Monthly SEO optimisation', 'Ad campaign setup', 'Bi-weekly reporting'],
  },
  {
    name: 'Scale Partner',
    price: 'Custom retainer',
    suitedFor: 'Established teams wanting an outsourced growth engine',
    features: ['Full-funnel strategy', 'Paid media management', 'Conversion testing', 'Dedicated account lead'],
  },
];

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing | 123 Blue Digital"
        description="Transparent pricing options for web design, SEO, and growth marketing services from 123 Blue Digital."
      />
      <section className="container-wide py-16 sm:py-20">
        <h1 className="section-title">Flexible pricing for every growth stage</h1>
        <p className="section-subtitle">
          Every plan can be tailored to your business goals, timeline, and internal capacity. We’ll guide you toward the best fit.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="card flex flex-col">
              <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
              <p className="mt-2 text-brand-400">{plan.price}</p>
              <p className="mt-3 text-sm text-slate-300">{plan.suitedFor}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Need a tailored quote?" copy="Share your goals and we’ll build a scope that matches your priorities and budget." />
    </>
  );
}
