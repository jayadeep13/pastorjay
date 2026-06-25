import Link from 'next/link';

const LOGO = 'Pastor Jay'.split('');

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'My Team', href: '/my-team' },
  { label: 'HIS Church', href: '/his-church' },
  { label: 'Christmas Joy', href: '/christmas-joy' },
  { label: 'COVID-19 / Feeding', href: '/covid-feeding' },
  { label: 'Run For Jesus', href: '/run-for-jesus' },
  { label: 'Reaching the Unreached', href: '/reaching' },
  { label: 'Updates', href: '/recent-news' },
];

const offices = [
  { flag: '🇮🇳', country: 'India', lines: ['Vijayawada, Andhra Pradesh', '+91-94401 09278'] },
  { flag: '🇺🇸', country: 'USA', lines: ['Tehachapi, CA 93561'] },
  { flag: '🇨🇦', country: 'Canada', lines: ['Chilliwack, BC V2R4L6'] },
];

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(160deg, #0e0c1a 0%, #120e08 45%, #0b1020 100%)' }}
    >
      {/* ── Top amber accent stripe ── */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #F59E0B 30%, #FCD34D 50%, #F59E0B 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-12 mb-12">

          {/* ── Brand column ── */}
          <div>
            {/* Logo — same style as navbar */}
            <div className="mb-1">
              <span
                className="text-[2rem] font-semibold italic tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {LOGO.map((char, i) =>
                  char === ' ' ? (
                    <span key={i}>&nbsp;</span>
                  ) : (
                    <span
                      key={i}
                      className="logo-letter"
                      style={{ animationDelay: `${i * 0.07}s`, color: '#fcd34d' }}
                    >
                      {char}
                    </span>
                  )
                )}
              </span>
            </div>
            <p className="text-[9px] tracking-[0.35em] uppercase font-medium mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Sowers Ministry International
            </p>

            <p className="text-sm leading-7 mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Reaching the unreached — planting churches, training pastors, feeding the hungry, and caring for orphans and widows across India since 2001.
            </p>

            {/* Scripture */}
            <div className="mb-7 pl-4" style={{ borderLeft: '2px solid rgba(245,158,11,0.5)' }}>
              <p className="text-xs italic leading-relaxed mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '0.95rem' }}>
                "Before I formed you in the womb I knew you; before you were born I sanctified you."
              </p>
              <cite className="text-[10px] font-bold not-italic tracking-wider" style={{ color: '#f59e0b' }}>
                — JEREMIAH 1:5
              </cite>
            </div>

            {/* Email */}
            <a
              href="mailto:info@sowersministry.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#fbbf24' }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@sowersministry.com
            </a>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4
              className="text-[9px] tracking-[0.4em] uppercase font-bold mb-6"
              style={{ color: '#f59e0b' }}
            >
              Pages
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2.5 text-sm transition-colors group"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-colors"
                      style={{ background: 'rgba(245,158,11,0.5)' }}
                    />
                    <span className="group-hover:text-white transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Offices + Donate ── */}
          <div>
            <h4
              className="text-[9px] tracking-[0.4em] uppercase font-bold mb-6"
              style={{ color: '#f59e0b' }}
            >
              Our Offices
            </h4>

            <div className="space-y-5 mb-8">
              {offices.map((o) => (
                <div key={o.country}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">{o.flag}</span>
                    <span className="text-xs font-bold tracking-wide text-white">{o.country}</span>
                  </div>
                  {o.lines.map((line, i) => (
                    <p key={i} className="text-xs leading-relaxed pl-6" style={{ color: 'rgba(255,255,255,0.40)' }}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Donate */}
            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white transition-all mb-3"
              style={{ background: 'linear-gradient(135deg,#F59E0B,#EA580C)', boxShadow: '0 4px 18px rgba(245,158,11,0.30)' }}
            >
              ❤ Donate Now
            </Link>

            <p className="text-center text-[9px] tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
              501(c)(3) Registered Nonprofit
            </p>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.20) 30%, rgba(245,158,11,0.20) 70%, transparent)' }} />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.25)' }}>
          <p>© 2025 Pastor Jay · Sowers Ministry International · All Rights Reserved</p>
          <p>Est. 2001 &nbsp;·&nbsp; India &nbsp;·&nbsp; USA &nbsp;·&nbsp; Canada</p>
        </div>

      </div>
    </footer>
  );
}
