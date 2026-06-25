import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'COVID-19 / Feeding the Hungry',
  description:
    'During the COVID-19 lockdown, Sowers Ministry fed over 1,000 people daily in tribal regions of India — one ragpicker family at a time.',
};

const covidImages = [
  { src: '/covid.webp',   alt: 'COVID feeding outreach — community distribution' },
  { src: '/covid1.webp',  alt: 'COVID feeding — preparing meals for families' },
  { src: '/covid2.webp',  alt: 'COVID feeding — distribution lines in the village' },
  { src: '/covid3.webp',  alt: 'COVID feeding — volunteers serving food packs' },
  { src: '/covid4.webp',  alt: 'COVID feeding — families receiving care' },
  { src: '/covid5.webp',  alt: 'COVID feeding — children in the distribution line' },
  { src: '/covid6.webp',  alt: 'COVID feeding — tribal community reached' },
  { src: '/covid7.webp',  alt: 'COVID feeding — Pastor Jay with volunteers' },
  { src: '/covid8.webp',  alt: 'COVID feeding — meal packets stacked for delivery' },
  { src: '/covid9.webp',  alt: 'COVID feeding — reaching the most vulnerable' },
  { src: '/covid10.webp', alt: 'COVID feeding — community gathering and prayer' },
  { src: '/covid11.webp', alt: 'COVID feeding — remote village distribution' },
  { src: '/covid12.webp', alt: 'COVID feeding — children receiving meals' },
  { src: '/covid14.webp', alt: 'COVID feeding — family receiving food pack' },
  { src: '/covid15.webp', alt: 'COVID feeding — end of the day outreach' },
  { src: '/covid16.webp', alt: 'COVID feeding — final distribution day' },
];

export default function CovidFeedingPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative -mt-[76px] h-screen w-full overflow-hidden">
        <Image
          src="/covhero1.png"
          alt="COVID-19 Feeding the Hungry — Sowers Ministry International"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(5,15,45,0.42)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 65% 50% at 50% 45%, rgba(180,100,10,0.22) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 10%, rgba(0,0,0,0.08) 26%, transparent 42%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(3,6,16,0.97) 0%, rgba(3,6,16,0.85) 14%, rgba(3,6,16,0.50) 32%, rgba(3,6,16,0.10) 50%, transparent 64%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 42%, rgba(3,6,16,0.52) 75%, rgba(3,6,16,0.80) 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 pb-12 sm:pb-16 flex flex-col items-center text-center pointer-events-none select-none">
          <div className="flex items-center gap-4 mb-5 w-full max-w-lg px-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">Emergency Outreach</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.2rem,5vw,4rem)', letterSpacing: '0.02em', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            COVID-19 / Feeding the Hungry
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">1,000+ Meals &nbsp;&middot;&nbsp; 200 People Daily &nbsp;&middot;&nbsp; Day 9+</p>
          <div className="flex items-center gap-3 w-full max-w-xs px-6">
            <div className="flex-1 h-px bg-amber-400/30" />
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <div className="flex-1 h-px bg-amber-400/30" />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {[
            { num: '1,000+', label: 'Meals Served' },
            { num: '200',    label: 'People Fed Daily' },
            { num: '$300',   label: 'Cost Per Day' },
            { num: 'Day 9+', label: 'Continuous Relief' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="font-bold text-amber-400" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)' }}>{s.num}</div>
              <div className="text-white/60 text-xs mt-1 leading-tight tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY — DAY 9 */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; A True Story &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              Day 9 &mdash; The Ragpicker Family
            </h2>
            <div className="flex items-center gap-3 justify-center mt-4">
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-amber-400 text-sm">&#10022;</span>
              <div className="h-px w-20 bg-amber-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">

            <div className="space-y-5 text-gray-600 leading-9" style={{ fontSize: '1.05rem' }}>
              <p>
                <span className="float-left mr-3 mt-1 leading-none text-amber-600 font-bold" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '4.2rem', lineHeight: '3rem' }}>R</span>
                oaming the lanes and by-lanes while distributing food during the COVID lockdown, we came across a family who are ragpickers by profession &mdash; a husband, wife, and their 8-year-old son &mdash; huddled in a tiny shelter built on the pavement. All businesses were shut, all avenues of income were gone.
              </p>
              <p className="clear-both">
                The parents had not eaten for 3 days &mdash; giving the little food they had to their child, choosing hunger so he would not face it.
              </p>
              <p>
                When we handed them the food packs, <strong className="text-blue-900">they could not stop weeping</strong>. Not because they were ashamed &mdash; but because someone had seen them. Someone had come.
              </p>

              <blockquote className="px-6 py-5 rounded-xl" style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}>
                <p className="text-blue-900 italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>
                  &ldquo;It is now Day 9 of our food distribution. Hundreds of families like this one are waiting. The need is great &mdash; but so is our God. Every $300 feeds 200 people for one full day.&rdquo;
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
              </blockquote>

              <p>
                We served them, prayed with them, and moved on &mdash; to the next family, the next lane, the next face that hadn&apos;t eaten. By the end of Day 9, we had served over <strong className="text-blue-900">1,000 people</strong> across these tribal and urban-poor communities.
              </p>

              <div className="rounded-xl px-6 py-5" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
                <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase font-semibold mb-2">Matthew 25:35</p>
                <p className="text-white italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem' }}>
                  &ldquo;For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.&rdquo;
                </p>
              </div>
            </div>

            {/* Side cards */}
            <div className="lg:sticky lg:top-8 space-y-4">

              <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
                <p className="text-amber-500 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">&#10022; Who We Served</p>
                <ul className="space-y-3">
                  {[
                    { icon: '&#9787;', title: 'Ragpickers & Pavement Dwellers', desc: 'Families living in roadside shelters with no income during the lockdown.' },
                    { icon: '&#9787;', title: 'Daily Wage Labourers',            desc: 'Workers whose jobs vanished the moment the lockdown began.' },
                    { icon: '&#9787;', title: 'Tribal Community Families',       desc: 'Remote tribal households cut off from any aid during the crisis.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-base mt-0.5 flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.icon }} />
                      <div>
                        <div className="text-blue-900 font-semibold text-sm">{item.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
                <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">&#10022; The Numbers</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { num: '1,000+', label: 'Meals Served' },
                    { num: '200',    label: 'Per Day' },
                    { num: '$300',   label: 'Daily Cost' },
                    { num: '9+',     label: 'Days Running' },
                  ].map((s, i) => (
                    <div key={i} className="text-center rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div className="text-amber-400 font-bold" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem' }}>{s.num}</div>
                      <div className="text-white/60 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/donate" className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}>
                &#10084; Feed a Family Today
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; From the Field &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
              COVID-19 Feeding Outreach &mdash; In Photos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {covidImages.map((img, i) => {
              const tall = i === 0 || i === 4 || i === 8 || i === 12;
              return (
                <div key={i} className={`relative overflow-hidden rounded-xl group ${tall ? 'md:row-span-2' : ''}`}
                  style={{ aspectRatio: tall ? '3/4' : '4/3', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.80) 0%, transparent 55%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/90 text-xs leading-snug">{img.alt}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#0a1535 0%,#0d1f4a 60%,#0f2255 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; You Can Help &#10022;</p>
          <h2 className="text-white font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Feed a Family. Change a Story.
          </h2>
          <p className="text-white/75 leading-8 mb-2 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            Just <strong className="text-amber-400">$300</strong> feeds 200 people for a full day. Every dollar reaches families who have no other way to survive.
          </p>
          <p className="text-white/50 text-sm mb-8">Tribal families &middot; Ragpickers &middot; Daily-wage workers &middot; Children</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#ffffff', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}>
              &#10084; Feed the Hungry Now
            </Link>
            <Link href="/#contact" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.10)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}>
              &#9993; Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <div style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a' }} className="py-10 px-6 text-center">
        <p className="text-blue-900/70 italic text-sm max-w-2xl mx-auto leading-7">
          &ldquo;For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.&rdquo;
          <span className="text-amber-600 font-bold not-italic ml-2">&mdash; Matthew 25:35</span>
        </p>
      </div>

    </main>
  );
}
