import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact & Donate',
};

export default function ContactPage() {
  const offices = [
    {
      flag: '🇮🇳',
      country: 'India',
      name: 'SOWERS Ministry India',
      lines: ['20-4-168, New Ayodhyanagar', 'Vijayawada, Andhra Pradesh 520003'],
      phone: '+91-94401 09278',
      email: 'info@sowersministry.com',
    },
    {
      flag: '🇺🇸',
      country: 'USA',
      name: 'SOWERS Ministry USA',
      lines: ['30510 Rollingoak', 'Tehachapi, CA 93561'],
      phone: null,
      email: 'info@sowersministry.com',
    },
    {
      flag: '🇨🇦',
      country: 'Canada',
      name: 'Sowers Ministry Canada',
      lines: ['43216 South Sumas Road', 'Chilliwack, BC V2R4L6'],
      phone: null,
      email: 'info@sowersministry.com',
    },
  ];

  const donationTiers = [
    { amount: '$25', impact: 'Feeds an orphaned child for a full month', icon: '🍚' },
    { amount: '$50', impact: 'Sponsors one complete Christmas Joy shoebox', icon: '🎁' },
    { amount: '$100', impact: 'Provides one month of BTCP pastor training', icon: '📖' },
    { amount: '$250', impact: 'Funds transport for 2 tribal pastors for 6 months', icon: '🚗' },
    { amount: '$500', impact: 'Supports a widow for 6 months', icon: '🕊️' },
    { amount: '$1,000', impact: 'Fully sponsors one pastor through annual training', icon: '✝' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-badge mb-4">✦ Get In Touch ✦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Contact &amp; Donate
          </h1>
          <div className="wave-divider" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We would love to hear from you. Whether you want to give, partner, pray, or simply ask a question — reach out. Every contact matters.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-badge mb-4">✦ Our Offices ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Find Us</h2>
            <div className="wave-divider mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {offices.map((o, i) => (
              <div key={i} className="card-lift bg-blue-50 border border-blue-100 rounded-2xl p-7 text-center">
                <div className="text-4xl mb-3">{o.flag}</div>
                <div className="text-amber-600 text-xs font-bold uppercase tracking-wide mb-1">{o.country}</div>
                <h3 className="text-blue-900 font-bold text-base mb-3">{o.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-3">
                  {o.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
                {o.phone && (
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="block text-blue-700 text-sm hover:text-blue-900 transition-colors mb-1">
                    📞 {o.phone}
                  </a>
                )}
                <a href={`mailto:${o.email}`} className="block text-amber-600 text-sm hover:text-amber-700 transition-colors">
                  ✉ {o.email}
                </a>
              </div>
            ))}
          </div>

          {/* Social & Web */}
          <div className="bg-pastel-blue border border-blue-100 rounded-2xl p-6 text-center">
            <h3 className="text-blue-900 font-bold text-base mb-4">Connect Online</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:info@sowersministry.com"
                className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-800 hover:bg-blue-50 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                ✉ info@sowersministry.com
              </a>
              <a
                href="https://www.facebook.com/bethelmissionsindia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-800 hover:bg-blue-50 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://pastorjay.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-800 hover:bg-blue-50 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                🌐 pastorjay.org
              </a>
              <a
                href="https://sowersministry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-800 hover:bg-blue-50 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                🌐 sowersministry.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="bg-pastel-amber py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-badge mb-4">✦ Make an Impact ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">What Your Gift Does</h2>
            <div className="wave-divider mt-4" />
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Every dollar given to SOWERS Ministry goes directly to the field — no overhead, maximum impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {donationTiers.map((d, i) => (
              <div key={i} className="card-lift bg-white rounded-2xl p-5 border border-amber-100 flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{d.icon}</div>
                <div>
                  <div className="text-amber-600 font-bold text-lg">{d.amount}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{d.impact}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://donorbox.org/sowers-ministry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-lg transition-colors shadow-md"
            >
              ❤ Donate via DonorBox
            </a>
            <p className="text-gray-400 text-xs mt-4">
              SOWERS Ministry International is a 501(c)(3) nonprofit. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* PayPal option */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 text-center">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">Donate via DonorBox</h3>
              <p className="text-gray-500 text-sm mb-5">Secure, tax-deductible donations. Set up one-time or recurring giving.</p>
              <a
                href="https://donorbox.org/sowers-ministry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-sm transition-colors"
              >
                Give on DonorBox
              </a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">Donate via PayPal</h3>
              <p className="text-gray-500 text-sm mb-5">Quick and easy donation via your PayPal account or debit/credit card.</p>
              <a
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-full text-sm hover:bg-blue-900 hover:text-white transition-colors"
              >
                Give via PayPal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final scripture */}
      <section className="bg-blue-900 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-blue-100 italic text-xl leading-relaxed mb-3">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <cite className="text-amber-400 font-semibold not-italic text-sm">— 2 Corinthians 9:7</cite>
          <div className="mt-8">
            <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
