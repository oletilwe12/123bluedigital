import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
      <nav className="container-wide flex items-center justify-between py-4">
        <NavLink to="/" className="text-lg font-bold tracking-wide text-white">
          123 <span className="text-brand-500">Blue Digital</span>
        </NavLink>
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-brand-500' : 'text-slate-300 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <NavLink to="/contact" className="btn-primary hidden md:inline-flex">
          Get a Quote
        </NavLink>
      </nav>
      <div className="container-wide pb-3 md:hidden">
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-xs font-medium ${
                  isActive ? 'bg-brand-500 text-slate-950' : 'bg-slate-900 text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
