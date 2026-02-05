import { Link } from 'react-router-dom';

export default function CTASection({ title, copy }) {
  return (
    <section className="container-wide py-16">
      <div className="card border-brand-500/30 bg-gradient-to-r from-slate-900 to-slate-900/50 text-center shadow-glow">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">{copy}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
          <a href="https://wa.me/27600000000" className="btn-secondary">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
