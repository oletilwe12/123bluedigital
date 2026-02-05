import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ContactPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thanks');
  };

  return (
    <>
      <SEO
        title="Contact | 123 Blue Digital"
        description="Contact 123 Blue Digital to request a quote for your website, SEO, or performance marketing project."
      />
      <section className="container-wide py-16 sm:py-20">
        <h1 className="section-title">Let&apos;s talk about your growth goals</h1>
        <p className="section-subtitle">
          Share a few details and we’ll send a tailored recommendation. Prefer WhatsApp? Tap the floating button and chat with us directly.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <form className="card space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sm text-slate-300">Full Name</label>
              <input id="name" name="name" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-slate-300">Email</label>
              <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white" />
            </div>
            <div>
              <label htmlFor="service" className="text-sm text-slate-300">Service Needed</label>
              <select id="service" name="service" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white">
                <option>Website Design</option>
                <option>SEO</option>
                <option>Paid Media</option>
                <option>Full Growth Partner</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-slate-300">Project Details</label>
              <textarea id="message" name="message" rows="4" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white" />
            </div>
            <button type="submit" className="btn-primary w-full">Get a Quote</button>
          </form>

          <aside className="card">
            <h2 className="text-2xl font-semibold text-white">Contact details</h2>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li><span className="font-medium text-white">Email:</span> hello@123bluedigital.co.za</li>
              <li><span className="font-medium text-white">WhatsApp:</span> +27 60 000 0000</li>
              <li><span className="font-medium text-white">Availability:</span> Monday to Friday, 08:00–17:00</li>
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              We typically respond to new enquiries within one business day.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
