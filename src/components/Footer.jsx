import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/90 py-10">
      <div className="container-wide grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">123 Blue Digital</h3>
          <p className="mt-3 text-sm text-slate-400">
            A growth-focused digital agency helping businesses launch modern websites and measurable campaigns.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Let&apos;s Build Something Great</h4>
          <p className="mt-3 text-sm text-slate-400">Ready to turn more traffic into paying customers?</p>
          <Link to="/contact" className="btn-primary mt-4">Get a Quote</Link>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} 123 Blue Digital. All rights reserved.</p>
    </footer>
  );
}
