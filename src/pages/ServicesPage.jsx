import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const services = [
  {
    name: 'Website Design & Development',
    details: 'Custom, responsive websites built for speed, trust, and conversion. Includes UX planning, copy structure, and technical SEO foundations.',
  },
  {
    name: 'Search Engine Optimisation',
    details: 'Ongoing SEO covering technical improvements, content strategy, and local discoverability to generate compounding organic traffic.',
  },
  {
    name: 'Paid Media Management',
    details: 'Campaign strategy and daily optimisation across Google and Meta to increase qualified leads while reducing acquisition costs.',
  },
  {
    name: 'Brand Positioning & Messaging',
    details: 'Clarify your value proposition and voice so your audience immediately understands why they should choose your business.',
  },
  {
    name: 'Landing Pages & Funnels',
    details: 'Conversion-focused campaign pages and funnel flows designed for lead generation, bookings, and product enquiries.',
  },
  {
    name: 'Analytics & Reporting',
    details: 'Clear reporting dashboards and monthly strategy insights so you can see what is working and where to invest next.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services | 123 Blue Digital"
        description="Explore web design, SEO, paid media, and branding services tailored for growth-focused South African businesses."
      />
      <section className="container-wide py-16 sm:py-20">
        <h1 className="section-title">Services built for measurable growth</h1>
        <p className="section-subtitle">
          Whether you need a full digital partner or support in a specific channel, our team combines strategy and execution to move key metrics.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="card">
              <h2 className="text-xl font-semibold text-white">{service.name}</h2>
              <p className="mt-3 text-slate-300">{service.details}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Need a custom solution?" copy="Tell us your growth goals and we’ll recommend the right service mix." />
    </>
  );
}
