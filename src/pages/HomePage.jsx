import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const highlights = [
  {
    title: 'Conversion-Focused Websites',
    copy: 'We design clean, fast websites that guide visitors toward clear actions and measurable sales outcomes.',
  },
  {
    title: 'Performance Marketing',
    copy: 'From Meta to Google campaigns, we build ad funnels that prioritize cost efficiency and lead quality.',
  },
  {
    title: 'Brand Systems That Scale',
    copy: 'We align your messaging, visual identity, and digital experience so your brand feels consistent everywhere.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="123 Blue Digital | Websites & Marketing That Convert"
        description="Build a stronger digital presence with modern web design, paid media, and growth strategy from 123 Blue Digital."
      />

      <section className="container-wide py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fadeUp">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">Digital growth partner</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Turn your website into your best salesperson.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              123 Blue Digital helps ambitious businesses in South Africa launch high-performing websites, smart campaigns,
              and strategic branding that drives quality leads.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <a href="https://wa.me/27600000000" className="btn-secondary">WhatsApp Us</a>
            </div>
          </div>
          <div className="card animate-float border-brand-500/20">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-400">This quarter’s impact</p>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="text-3xl font-bold text-white">+143%</p>
                <p className="text-sm text-slate-400">Average lead growth after website redesigns</p>
              </li>
              <li>
                <p className="text-3xl font-bold text-white">R5.8M</p>
                <p className="text-sm text-slate-400">Attributed client revenue from paid campaigns</p>
              </li>
              <li>
                <p className="text-3xl font-bold text-white">3.1x</p>
                <p className="text-sm text-slate-400">Average return on ad spend across active retainers</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-wide pb-16 sm:pb-20">
        <h2 className="section-title">What we do best</h2>
        <p className="section-subtitle">A practical blend of strategy, creative execution, and ongoing optimisation.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card transition hover:border-brand-500/40 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to scale your online results?"
        copy="Let’s map out a growth plan tailored to your goals, audience, and budget."
      />
    </>
  );
}
