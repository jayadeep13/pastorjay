import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Run For Jesus',
  description:
    'Run For Jesus is an ecumenical marathon proclamation of the Resurrection of Jesus Christ, run in association with all denominations.',
};

const galleryImages = [
  { src: '/rfj.webp',   alt: 'Run For Jesus — ecumenical gathering',   caption: 'All denominations united in one proclamation' },
  { src: '/rfj2.webp',  alt: 'Run For Jesus — runners at the start',   caption: 'The run begins — proclaiming the Resurrection' },
  { src: '/rfj3.webp',  alt: 'Run For Jesus — community participation', caption: 'Thousands joining the marathon' },
  { src: '/rfj4.webp',  alt: 'Run For Jesus — worship and celebration', caption: 'Worship before the run' },
  { src: '/rfj5.webp',  alt: 'Run For Jesus — children participating',  caption: 'The next generation running for Jesus' },
  { src: '/rfj6.webp',  alt: 'Run For Jesus — crowd gathering',         caption: 'A peaceful ecumenical witness' },
  { src: '/rfj7.webp',  alt: 'Run For Jesus — street proclamation',     caption: 'Proclaiming resurrection through the streets' },
  { src: '/rfj8.webp',  alt: 'Run For Jesus — finish line celebration', caption: 'Crossing the finish line together' },
  { src: '/rfj9.webp',  alt: 'Run For Jesus — banners and flags',       caption: 'Denominations marching as one body' },
  { src: '/rfj10.webp', alt: 'Run For Jesus — prayer at the route',     caption: 'Prayer points along the marathon route' },
  { src: '/rfj11.webp', alt: 'Run For Jesus — closing ceremony',        caption: 'Celebrating the Risen Lord together' },
];

export default function RunForJesusPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative -mt-[76px] h-screen w-full overflow-hidden">
        <Image
          src="/rfj2.webp"
          alt="Run For Jesus — ecumenical marathon proclamation"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
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
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">Ecumenical Marathon</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '0.02em', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            Run For Jesus
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">All Denominations &nbsp;&middot;&nbsp; One Proclamation &nbsp;&middot;&nbsp; The Resurrection</p>
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
            { num: 'All',  label: 'Denominations United' },
            { num: '1',    label: 'Proclamation — He Is Risen' },
            { num: '&#127939;', label: 'Marathon Through the Streets' },
            { num: '&#10013;', label: 'The Resurrection of Jesus' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="font-bold text-amber-400" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)' }} dangerouslySetInnerHTML={{ __html: s.num }} />
              <div className="text-white/60 text-xs mt-1 leading-tight tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; One Body, One Race &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              What Is Run For Jesus?
            </h2>
            <div className="flex items-center gap-3 justify-center mt-4">
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-amber-400 text-sm">&#10022;</span>
              <div className="h-px w-20 bg-amber-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

            <div className="space-y-5 text-gray-600 leading-9" style={{ fontSize: '1.05rem' }}>
              <p>
                <strong className="text-blue-900">Run For Jesus</strong> is an ecumenical program, in association with all denominations &mdash; a peaceful marathon proclamation of the <strong className="text-blue-900">Resurrection of Jesus Christ</strong>.
              </p>
              <p>
                What sets this run apart is its unity. Christians from every tradition &mdash; Catholic, Orthodox, Pentecostal, Baptist, Methodist, and more &mdash; run together as one body, carrying a single message to the streets: <em>He is Risen.</em>
              </p>
              <p>
                The run is not a competition. It is a proclamation. Participants carry banners, sing worship songs, and pray as they move through the city &mdash; a living testimony of resurrection faith shared across all dividing lines of tradition and denomination.
              </p>

              <blockquote className="px-6 py-5 rounded-xl" style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}>
                <p className="text-blue-900 italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>
                  &ldquo;When believers from every denomination run together, the world sees that Jesus is not a denomination &mdash; He is the Lord of the whole Church.&rdquo;
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
              </blockquote>

              <p>
                The proceeds from Run For Jesus go directly toward village church planting and the training of local pastors through Sowers Ministry International &mdash; so every step of the run plants a seed of the Gospel in unreached communities.
              </p>

              <div className="rounded-xl px-6 py-5" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
                <p className="text-amber-400 text-[10px] tracking-[0.3em] uppercase font-semibold mb-2">Hebrews 12:1&ndash;2</p>
                <p className="text-white italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.25rem' }}>
                  &ldquo;Let us run with endurance the race that is set before us, looking unto Jesus, the author and finisher of our faith &mdash; who for the joy that was set before Him endured the cross, despising the shame, and has sat down at the right hand of the throne of God.&rdquo;
                </p>
              </div>
            </div>

            {/* Side sticky card */}
            <div className="lg:sticky lg:top-8 space-y-4">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', border: '2px solid rgba(245,158,11,0.3)' }}>
                <Image src="/rfj5.webp" alt="Participants in Run For Jesus" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.82) 0%, transparent 50%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                  <p className="text-amber-400 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">&#10022; The Body United &#10022;</p>
                  <p className="text-white italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem' }}>
                    One race &mdash; one message &mdash; one Lord
                  </p>
                </div>
              </div>

              {[
                { title: 'Ecumenical Unity',      desc: 'All denominations run together — one body, one witness to the city.' },
                { title: 'Peaceful Proclamation', desc: 'A marathon proclamation of the Resurrection of Jesus Christ through the streets.' },
                { title: 'Gospel Fruit',          desc: 'Run proceeds fund village church planting and local pastor training.' },
              ].map((card, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 text-sm">&#10022;</span>
                    <span className="text-blue-900 font-semibold text-sm">{card.title}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; From the Route &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
              Run For Jesus &mdash; In Photos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => {
              const tall = i === 0 || i === 4 || i === 8;
              return (
                <div key={i} className={`relative overflow-hidden rounded-xl group ${tall ? 'md:row-span-2' : ''}`}
                  style={{ aspectRatio: tall ? '3/4' : '4/3', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.80) 0%, transparent 55%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/90 text-xs leading-snug">{img.caption}</p>
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
          <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; Join the Race &#10022;</p>
          <h2 className="text-white font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Run With Us &mdash; Proclaim With Us
          </h2>
          <p className="text-white/75 leading-8 mb-8 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            Support the Run For Jesus mission &mdash; every gift helps plant a village church and train a local pastor to carry the Gospel forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#ffffff', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}>
              &#10084; Support the Run
            </Link>
            <Link href="/#contact" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.10)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}>
              &#9993; Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <div style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a' }} className="py-10 px-6 text-center">
        <p className="text-blue-900/70 italic text-sm max-w-2xl mx-auto leading-7">
          &ldquo;Let us run with endurance the race that is set before us, looking unto Jesus, the author and finisher of our faith.&rdquo;
          <span className="text-amber-600 font-bold not-italic ml-2">&mdash; Hebrews 12:1&ndash;2</span>
        </p>
      </div>

    </main>
  );
}
