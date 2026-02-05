export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27600000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-600"
    >
      <span className="text-base">💬</span>
      WhatsApp Us
    </a>
  );
}
