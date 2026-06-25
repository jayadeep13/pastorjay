'use client';
import Script from 'next/script';
import Image from 'next/image';
import { HeartHandshake, HandCoins } from 'lucide-react';
import FadeInSection from '@/app/components/FadeInSection';

export default function DonateClient() {
  return (
    <>
      <Script
        src="https://donorbox.org/widget.js"
        data-paypal-express="false"
        strategy="lazyOnload"
      />

      {/* HERO — full-screen, covers navbar */}
      <section className="relative -mt-[76px] h-[65vh] w-full overflow-hidden">
        <Image
          src="/donatehero.webp"
          alt="Donate — Sowers Ministry International"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 30%, transparent 50%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(3,6,16,0.97) 0%, rgba(3,6,16,0.85) 16%, rgba(3,6,16,0.55) 34%, rgba(3,6,16,0.15) 52%, transparent 66%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.45) 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 pb-12 sm:pb-16 flex flex-col items-center text-center pointer-events-none select-none">
          <div className="flex items-center gap-4 mb-5 w-full max-w-lg px-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">Give Generously</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', letterSpacing: '0.02em', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            Your Gift Changes Lives Across India
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">Train Pastors &nbsp;&middot;&nbsp; Care for Orphans &nbsp;&middot;&nbsp; Plant Churches</p>
          <div className="flex items-center gap-3 w-full max-w-xs px-6">
            <div className="flex-1 h-px bg-amber-400/30" />
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <div className="flex-1 h-px bg-amber-400/30" />
          </div>
        </div>
      </section>

      {/* DONATE SECTION */}
      <section id="donate-form" className="relative overflow-hidden py-14 sm:py-24" style={{ background: '#fffaf1' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top left, rgba(214,172,77,0.18) 0%, transparent 28%), radial-gradient(circle at bottom right, rgba(10,25,48,0.08) 0%, transparent 30%)' }}
        />
        <div className="absolute left-0 top-24 h-56 w-56 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(245,158,11,0.10)' }} />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(10,25,48,0.08)' }} />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-[1320px] rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-8 lg:p-10"
              style={{ border: '1px solid rgba(255,255,255,0.80)', background: '#ffffff', boxShadow: '0 30px 80px rgba(15,23,42,0.10)' }}
            >
              <div className="mx-auto mb-6 max-w-5xl sm:mb-8">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
                    style={{ background: 'rgba(246,183,60,0.18)', color: '#d97706' }}>
                    <HandCoins size={22} />
                  </div>
                  <p className="text-base leading-8 sm:text-2xl sm:leading-10" style={{ color: 'rgba(10,25,48,0.90)' }}>
                    Every gift reaches real lives with care, hope, and the love of Christ.
                  </p>
                </div>
              </div>

              <div className="mx-auto grid w-full max-w-[1120px] gap-6 rounded-[1.3rem] p-3 sm:rounded-[1.9rem] sm:p-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)] lg:p-6"
                style={{ border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 18px 50px rgba(15,23,42,0.06)' }}
              >
                {/* Left: Donorbox popup */}
                <div className="rounded-[1.1rem] px-4 py-6 text-center text-white sm:rounded-[1.5rem] sm:px-8 sm:py-10"
                  style={{ background: 'linear-gradient(135deg, #0b1f3f 0%, #15386a 55%, #d8a23f 145%)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: '#fde68a' }}>Secure Giving</p>
                  <p className="mt-3 font-serif text-[2rem] leading-tight sm:text-5xl">Open the Donorbox donation form</p>
                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 sm:mt-5 sm:text-lg sm:leading-8" style={{ color: 'rgba(255,255,255,0.82)' }}>
                    Click below to give safely through Donorbox. The donation form will open for one-time or monthly support.
                  </p>
                  <a
                    href="https://donorbox.org/sowers-ministry"
                    className="custom-dbox-popup mt-7 inline-flex w-full max-w-[280px] items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 sm:mt-8 sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-lg"
                    style={{ background: '#f6b73c', color: '#07111f', boxShadow: '0 14px 30px rgba(214,172,77,0.35)' }}
                    aria-label="Open Donorbox donation form"
                  >
                    Donate Now
                  </a>
                  <p className="mt-4 text-sm leading-6 sm:leading-7" style={{ color: 'rgba(255,255,255,0.70)' }}>
                    Secure popup donation form for one-time or monthly giving.
                  </p>
                </div>

                {/* Right: QR code */}
                <div className="rounded-[1.1rem] p-5 text-center sm:rounded-[1.5rem] sm:p-7"
                  style={{ border: '1px solid rgba(246,183,60,0.60)', background: '#fffaf1', boxShadow: '0 18px 50px rgba(15,23,42,0.05)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: '#b45309' }}>Scan to Give</p>
                  <p className="mt-3 font-serif text-3xl leading-tight sm:text-4xl" style={{ color: '#07111f' }}>Donate using the QR code</p>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 sm:text-base" style={{ color: 'rgba(10,25,48,0.72)' }}>
                    You can also scan this QR code from your phone and complete your giving quickly and securely.
                  </p>
                  <div className="mx-auto mt-6 flex max-w-[280px] justify-center rounded-[1.6rem] bg-white p-4"
                    style={{ border: '1px solid rgba(246,183,60,0.70)', boxShadow: '0 16px 40px rgba(15,23,42,0.08)' }}
                  >
                    <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-[1.1rem]">
                      <Image src="/qr.webp" alt="Sowers Ministry Donation QR Code" fill className="object-contain" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6" style={{ color: 'rgba(10,25,48,0.60)' }}>
                    Scan the QR code to give through the available payment method.
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-3xl px-2 text-center sm:mt-12" style={{ color: '#07111f' }}>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
                    style={{ background: 'rgba(246,183,60,0.15)', color: '#d97706' }}>
                    <HeartHandshake size={18} />
                  </div>
                  <p className="text-sm leading-7 sm:text-lg sm:leading-8" style={{ color: 'rgba(10,25,48,0.65)' }}>
                    Thank you for giving. We pray the Lord blesses you as you bless others.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
