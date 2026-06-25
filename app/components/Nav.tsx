'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LOGO = 'Pastor Jay'.split('');

const mainLinks = [
  { label: 'HOME', href: '/' },
  { label: 'MY TEAM', href: '/my-team' },
  { label: 'HIS CHURCH', href: '/his-church' },
];

const activities = [
  { label: 'Christmas Joy', href: '/christmas-joy', icon: '🎁', desc: 'Surprise shoeboxes for village children' },
  { label: 'COVID-19 / Feeding', href: '/covid-feeding', icon: '🍚', desc: 'Emergency food relief for tribal families' },
  { label: 'Run For Jesus', href: '/run-for-jesus', icon: '🏃', desc: 'Fundraising run to plant village churches' },
  { label: 'Reaching the Unreached', href: '/reaching', icon: '🌏', desc: 'Gospel to the most remote tribal regions' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [mobileActivities, setMobileActivities] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isActivities = activities.some(a => pathname === a.href);

  /* transparent on pages where hero image covers navbar area */
  const transparent = isHome || pathname === '/donate' || pathname === '/christmas-joy' || pathname === '/covid-feeding' || pathname === '/run-for-jesus' || pathname === '/reaching' || pathname === '/his-church' || pathname === '/my-team';

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActivitiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActivitiesOpen(false);
    setMobileActivities(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const linkCls = transparent
    ? 'text-white/85 hover:text-white'
    : 'text-gray-500 hover:text-slate-900';
  const activeLinkCls = transparent ? 'text-amber-300' : 'text-amber-600';

  return (
    /* relative — scrolls away with the page, no sticky/fixed */
    <header
      className="relative z-50"
      style={
        transparent
          ? { background: 'transparent' }
          : {
              background: '#ffffff',
              borderBottom: '1px solid #F3F4F6',
              boxShadow: '0 1px 0 0 rgba(245,158,11,0.30), 0 2px 20px rgba(0,0,0,0.07)',
            }
      }
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[76px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex flex-col leading-none flex-shrink-0">
          <span
            className="text-2xl sm:text-[1.75rem] font-semibold italic tracking-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {LOGO.map((char, i) =>
              char === ' ' ? (
                <span key={i}>&nbsp;</span>
              ) : (
                <span
                  key={i}
                  className="logo-letter"
                  style={{
                    animationDelay: `${i * 0.07}s`,
                    color: transparent ? '#fcd34d' : '#d97706',
                  }}
                >
                  {char}
                </span>
              )
            )}
          </span>
          <span
            className="text-[8.5px] tracking-[0.28em] uppercase font-medium mt-0.5"
            style={{ color: transparent ? 'rgba(255,255,255,0.55)' : '#9CA3AF' }}
          >
            Sowers Ministry
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">

          {mainLinks.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-[10.5px] tracking-[0.2em] font-semibold transition-colors ${
                isActive(l.href) ? activeLinkCls : linkCls
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Activities dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setActivitiesOpen(o => !o)}
              className={`flex items-center gap-1 text-[10.5px] tracking-[0.2em] font-semibold transition-colors ${
                isActivities || activitiesOpen ? activeLinkCls : linkCls
              }`}
            >
              ACTIVITIES
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : ''}`}
                style={{ color: transparent ? 'rgba(255,255,255,0.45)' : '#9CA3AF' }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activitiesOpen && (
              <div
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[290px] bg-white rounded-2xl overflow-hidden z-50"
                style={{ border: '1px solid #F3F4F6', boxShadow: '0 20px 60px rgba(0,0,0,0.13)' }}
              >
                <div className="bg-blue-900 px-5 py-3">
                  <p className="text-amber-400 text-[9px] tracking-[0.35em] uppercase font-bold">Our Activities</p>
                </div>
                {activities.map(a => (
                  <Link key={a.href} href={a.href} onClick={() => setActivitiesOpen(false)}
                    className={`flex items-center gap-4 px-5 py-3.5 border-b border-gray-50 last:border-0 transition-colors ${
                      isActive(a.href) ? 'bg-amber-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{a.icon}</span>
                    <div>
                      <div className={`text-sm font-semibold leading-tight ${isActive(a.href) ? 'text-amber-600' : 'text-slate-800'}`}>
                        {a.label}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5 leading-snug">{a.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Recent News */}
          <Link href="/recent-news"
            className={`text-[10.5px] tracking-[0.2em] font-semibold transition-colors ${
              isActive('/recent-news') ? activeLinkCls : linkCls
            }`}
          >
            RECENT NEWS
          </Link>

          {/* Donate */}
          <Link href="/donate"
            className="text-[10.5px] tracking-[0.2em] font-semibold px-5 py-2.5 rounded-full text-white transition-all"
            style={{
              background: 'linear-gradient(135deg,#F59E0B,#EA580C)',
              boxShadow: '0 4px 14px rgba(245,158,11,0.38)',
            }}
          >
            ❤ DONATE
          </Link>
        </nav>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ color: transparent ? '#ffffff' : '#6B7280' }}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {mainLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(l.href) ? 'bg-amber-50 text-amber-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}

            <div>
              <button onClick={() => setMobileActivities(o => !o)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActivities ? 'bg-amber-50 text-amber-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                ACTIVITIES
                <svg className={`w-4 h-4 transition-transform ${mobileActivities ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileActivities && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-amber-100 pl-3">
                  {activities.map(a => (
                    <Link key={a.href} href={a.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                        isActive(a.href) ? 'bg-amber-50 text-amber-600 font-semibold' : 'text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      <span>{a.icon}</span>{a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/recent-news"
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive('/recent-news') ? 'bg-amber-50 text-amber-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              RECENT NEWS
            </Link>

            <Link href="/donate"
              className="flex items-center justify-center gap-2 px-4 py-3.5 mt-2 text-white font-bold rounded-xl text-sm"
              style={{ background: 'linear-gradient(135deg,#F59E0B,#EA580C)' }}
            >
              ❤ Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
