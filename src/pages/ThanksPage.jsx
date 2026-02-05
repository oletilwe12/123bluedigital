import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ThanksPage() {
  return (
    <>
      <SEO title="Thank You | 123 Blue Digital" description="Thanks for contacting 123 Blue Digital. Our team will get back to you shortly." />
      <section className="container-wide py-24 text-center">
        <div className="card mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-wider text-brand-400">Enquiry received</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Thank you for reaching out.</h1>
          <p className="mt-4 text-slate-300">
            We’ve received your message and a strategist will contact you shortly to discuss your goals.
          </p>
          <div className="mt-8">
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
