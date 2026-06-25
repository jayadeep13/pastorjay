import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HIS Church — Bethel Prayer House',
  description:
    'From a thatched-roof hut in Vijayawada to 70+ families and a network of 1,300+ village churches — the story of HIS Church.',
};

const churchImages = [
  { src: '/church.webp',  alt: 'Bethel Prayer House — Vijayawada' },
  { src: '/church.png',   alt: 'HIS Church congregation in worship' },
  { src: '/church1.webp', alt: 'Village church planted by Sowers Ministry' },
  { src: '/church2.webp', alt: 'Church community gathering in prayer' },
];

export default function HisChurchPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative -mt-[76px] h-screen w-full overflow-hidden">
        <Image
          src="/church1.png"
          alt="HIS Church — Bethel Prayer House, Vijayawada"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
          priority
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(5,15,45,0.42)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 65% 50% at 50% 45%, rgba(180,100,10,0.18) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 10%, rgba(0,0,0,0.08) 26%, transparent 42%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(3,6,16,0.97) 0%, rgba(3,6,16,0.85) 14%, rgba(3,6,16,0.50) 32%, rgba(3,6,16,0.10) 50%, transparent 64%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 42%, rgba(3,6,16,0.52) 75%, rgba(3,6,16,0.80) 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 pb-12 sm:pb-16 flex flex-col items-center text-center pointer-events-none select-none">
          <div className="flex items-center gap-4 mb-5 w-full max-w-lg px-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">The Local Church</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.2rem,5vw,4rem)', letterSpacing: '0.02em', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            HIS Church
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">Bethel Prayer House &nbsp;&middot;&nbsp; Vijayawada &nbsp;&middot;&nbsp; 70+ Families</p>
          <div className="flex items-center gap-3 w-full max-w-xs px-6">
            <div className="flex-1 h-px bg-amber-400/30" />
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <div className="flex-1 h-px bg-amber-400/30" />
          </div>
        </div>
      </section>

      {/* SCRIPTURE — ACTS 20:28 */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-5">&#10022; What He Entrusted US &#10022;</p>
          <blockquote>
            <p className="text-blue-900 italic leading-10 mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)' }}>
              &ldquo;&hellip;Feed and shepherd God&apos;s flock &mdash; <strong>HIS church</strong>, purchased with{' '}
              <strong>HIS OWN BLOOD</strong> &mdash; over which the{' '}
              <strong>HOLY SPIRIT</strong> has appointed you as{' '}
              <strong>LEADERS</strong>.&rdquo;
            </p>
            <cite className="text-amber-600 font-bold not-italic text-sm tracking-widest uppercase">&mdash; Acts 20:28</cite>
          </blockquote>
        </div>
      </section>

      {/* BETHEL PRAYER HOUSE STORY */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; The Beginning &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              Bethel Prayer House &mdash; Vijayawada
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
                <span className="float-left mr-3 mt-1 leading-none text-amber-600 font-bold" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '4.2rem', lineHeight: '3rem' }}>W</span>
                hile doing the series on the Parables of Jesus &mdash; specially on the <strong className="text-blue-900">Parable of the Sowers</strong> &mdash; the Holy Spirit of God asked me: <em>&ldquo;Have you sown the seeds in your own neighbourhood?&rdquo;</em>
              </p>
              <p className="clear-both">
                I had no answer to Him. Because I was just born and brought up in the same community, and people knew me in and out. As the Bible says, <em>no prophet would be honoured in his home town</em> &mdash; but the Spirit of God constrained me to reach these people.
              </p>
              <blockquote className="px-6 py-5 rounded-xl" style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}>
                <p className="text-blue-900 italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>
                  &ldquo;With a little amount of loaned money we set up a small thatched-roof structure &mdash; and had gone through many birth pains. But today, we have more than <strong>70 families</strong> who are first-generation Christians worshipping the Lord at His Sanctuary.&rdquo;
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
              </blockquote>
              <p>
                What started as a humble gathering in a borrowed structure became <strong className="text-blue-900">Bethel Prayer House</strong> &mdash; a living, breathing congregation in the heart of Vijayawada. Over 70 families &mdash; most of them first-generation Christians &mdash; now worship, pray, and serve together in this sanctuary that God built from nothing.
              </p>
              <p>
                What God did in one neighbourhood became the model for what He would do in <strong className="text-blue-900">hundreds of villages across three Indian states</strong>. A church born in faithfulness, multiplied by grace.
              </p>
              <div className="rounded-xl px-6 py-5" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
                <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase font-semibold mb-2">Matthew 16:18</p>
                <p className="text-white italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem' }}>
                  &ldquo;On this rock I will build my church, and the gates of Hades will not overcome it.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8 space-y-4">
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
                <p className="text-amber-500 text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">&#10022; Bethel Prayer House</p>
                <ul className="space-y-3">
                  {[
                    { label: 'Location',             value: 'Vijayawada, Andhra Pradesh' },
                    { label: 'Current Members',      value: '70+ families' },
                    { label: 'First-Gen Christians', value: 'Majority of congregation' },
                    { label: 'Pastor',               value: 'Rev. Jayakumar Babu Salluri' },
                    { label: 'Language of Worship',  value: 'Telugu & English' },
                  ].map(({ label: k, value: v }) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase tracking-wide">{k}</span>
                        <div className="text-blue-900 text-sm font-semibold">{v}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CHURCH PHOTO GALLERY */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; His Sanctuary &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
              Bethel Prayer House &mdash; In Photos
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {churchImages.map((img, i) => {
              const tall = i === 0 || i === 2;
              return (
                <div key={i} className={`relative overflow-hidden rounded-2xl group ${tall ? 'row-span-2' : ''}`}
                  style={{ aspectRatio: tall ? '3/4' : '4/3', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '2px solid rgba(245,158,11,0.25)' }}
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
          <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; Join Hands &#10022;</p>
          <h2 className="text-white font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Help Plant the Next Church
          </h2>
          <p className="text-white/75 leading-8 mb-8 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            Every trained pastor becomes a church planter. Your giving funds the training that multiplies the churches &mdash; one village at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#ffffff', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}>
              &#10084; Donate Now
            </Link>
            <Link href="/reaching" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.10)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}>
              &#127759; Field Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <div style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a' }} className="py-10 px-6 text-center">
        <p className="text-blue-900/70 italic text-sm max-w-2xl mx-auto leading-7">
          &ldquo;Feed and shepherd God&apos;s flock &mdash; HIS church, purchased with HIS OWN BLOOD &mdash; over which the HOLY SPIRIT has appointed you as LEADERS.&rdquo;
          <span className="text-amber-600 font-bold not-italic ml-2">&mdash; Acts 20:28</span>
        </p>
      </div>

    </main>
  );
}
