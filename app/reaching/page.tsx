import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reaching the Unreached',
  description:
    'Sowers Ministry International reaches the most unreached tribal communities in India — training 1,300+ pastors, planting village churches across three states.',
};

export default function ReachingPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative -mt-[76px] h-screen w-full overflow-hidden">
        <Image
          src="/unreached.png"
          alt="Reaching the Unreached — Sowers Ministry International"
          fill
          className="object-cover object-center"
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
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">Tribal Missions</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.2rem,5vw,4rem)', letterSpacing: '0.02em', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            Reaching the Unreached
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">1.4 Billion &nbsp;&middot;&nbsp; 3 States &nbsp;&middot;&nbsp; Hundreds of Villages</p>
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
            { num: '1.4B',   label: 'Unreached in India' },
            { num: '3',      label: 'States Covered' },
            { num: '100s',   label: 'Pastors Trained' },
            { num: '&#8734;', label: 'Villages Still Waiting' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="font-bold text-amber-400" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)' }} dangerouslySetInnerHTML={{ __html: s.num }} />
              <div className="text-white/60 text-xs mt-1 leading-tight tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRASAD STORY */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; A Changed Life &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              Prasad &mdash; From Darkness to Light
            </h2>
            <div className="flex items-center gap-3 justify-center mt-4">
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-amber-400 text-sm">&#10022;</span>
              <div className="h-px w-20 bg-amber-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[360px_1fr] gap-12 items-start">

            {/* Prasad portrait */}
            <div className="lg:sticky lg:top-8">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4', boxShadow: '0 20px 50px rgba(0,0,0,0.18)', border: '2px solid rgba(245,158,11,0.30)' }}>
                <Image src="/prasad.webp" alt="Prasad — transformed by the Gospel" fill className="object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.80) 0%, transparent 50%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                  <p className="text-amber-400 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">&#10022; His Story &#10022;</p>
                  <p className="text-white italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem' }}>
                    Prasad &mdash; delivered, trained, deployed
                  </p>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="space-y-5 text-gray-600 leading-9" style={{ fontSize: '1.05rem' }}>
              <p>
                Prasad was a man bound by alcohol, violence, and the hopelessness of a life without direction. He came from a remote tribal community where the Gospel had never been preached &mdash; where the only gods known were fear and tradition.
              </p>
              <p>
                When Sowers Ministry reached his village, Prasad heard the name of Jesus for the first time. What followed was not a slow change &mdash; it was a <strong className="text-blue-900">sudden and complete transformation</strong>. The drinking stopped. The violence stopped. His family, who had feared him, now found peace.
              </p>
              <blockquote className="px-6 py-5 rounded-xl" style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}>
                <p className="text-blue-900 italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>
                  &ldquo;He not only received salvation &mdash; he became a carrier of it. Today Prasad is one of our trained pastors, reaching his own people in the same villages where darkness once reigned.&rdquo;
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
              </blockquote>
              <p>
                Prasad went through our 3-phase training programme &mdash; first receiving the Word, then being discipled, then going back out as a church planter. He now leads a congregation in the very region where he once lived in bondage.
              </p>

              {/* Phase cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[
                  { phase: 'Phase 1', title: 'Reach',    desc: 'The Gospel is preached in the village. Prasad hears and responds.' },
                  { phase: 'Phase 2', title: 'Train',    desc: 'Prasad undergoes discipleship and pastor training through Sowers Ministry.' },
                  { phase: 'Phase 3', title: 'Deploy',   desc: 'Prasad returns as a church planter to reach his own community.' },
                ].map((p, i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a' }}>
                    <div className="text-amber-500 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">{p.phase}</div>
                    <div className="text-blue-900 font-bold text-base mb-2">{p.title}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NAGAMANI SECTION */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; A Healing Story &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              Nagamani &mdash; Before, During &amp; After
            </h2>
            <div className="flex items-center gap-3 justify-center mt-4">
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-amber-400 text-sm">&#10022;</span>
              <div className="h-px w-20 bg-amber-300" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { src: '/before-opt.webp', label: 'Before', badge: 'Bound', color: '#dc2626', bg: '#fef2f2', desc: 'Nagamani lived in darkness &mdash; physical suffering and spiritual bondage were her daily reality.' },
              { src: '/during-opt.webp', label: 'During',  badge: 'Prayer', color: '#d97706', bg: '#fffbeb', desc: 'The team prayed, ministered, and stood with her through a long season of healing and transformation.' },
              { src: '/after-opt.webp',  label: 'After',   badge: 'Free',   color: '#16a34a', bg: '#f0fdf4', desc: 'Today Nagamani stands free &mdash; healed, restored, and a living witness to the power of Jesus.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.10)', border: '1px solid #fde68a' }}>
                <div className="relative" style={{ aspectRatio: '4/3' }}>
                  <Image src={item.src} alt={`Nagamani — ${item.label}`} fill className="object-cover object-center" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white"
                      style={{ background: item.color }}>
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="px-5 py-4" style={{ background: item.bg }}>
                  <div className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-1" style={{ color: item.color }}>{item.label}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reflection quote */}
          <div className="rounded-2xl px-8 py-6 text-center" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
            <p className="text-white italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)' }}>
              &ldquo;Nagamani&apos;s story is not an exception &mdash; it is what happens when the Gospel reaches people no one else is reaching.&rdquo;
            </p>
            <p className="text-amber-400 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
          </div>

        </div>
      </section>

      {/* HOW WE REACH */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; Our Strategy &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              How We Reach the Unreached
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Train Local Pastors',
                icon: '&#128218;',
                desc: 'We identify men and women from within tribal communities and train them as church planters. Local leaders reach their own people most effectively.',
              },
              {
                title: 'Plant Village Churches',
                icon: '&#127968;',
                desc: 'Each trained pastor returns to their community to plant a church. Simple, sustainable, rooted in the local culture and language.',
              },
              {
                title: 'Care for the Whole Person',
                icon: '&#10084;',
                desc: 'We do not just preach &mdash; we care. Food, healing prayer, and practical support are part of every outreach we undertake.',
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a', boxShadow: '0 8px 30px rgba(0,0,0,0.07)' }}>
                <div className="text-4xl mb-4" dangerouslySetInnerHTML={{ __html: card.icon }} />
                <h3 className="text-blue-900 font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#0a1535 0%,#0d1f4a 60%,#0f2255 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; The Harvest Is Plentiful &#10022;</p>
          <h2 className="text-white font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Send Labourers Into the Harvest
          </h2>
          <p className="text-white/75 leading-8 mb-8 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            Every gift trains a pastor, plants a church, and reaches a family that has never heard the Gospel. The field is ready &mdash; the labourers need your support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#ffffff', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}>
              &#10084; Support the Mission
            </Link>
            <Link href="/his-church" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.10)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}>
              &#127968; See HIS Church
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <div style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a' }} className="py-10 px-6 text-center">
        <p className="text-blue-900/70 italic text-sm max-w-2xl mx-auto leading-7">
          &ldquo;The harvest truly is plentiful, but the labourers are few. Therefore pray the Lord of the harvest to send out labourers into His harvest.&rdquo;
          <span className="text-amber-600 font-bold not-italic ml-2">&mdash; Matthew 9:37&ndash;38</span>
        </p>
      </div>

    </main>
  );
}
