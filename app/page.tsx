import Image from 'next/image';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative -mt-[76px] h-screen w-full overflow-hidden">
        <Image src="/jay1.png" alt="Pastor Jay — Sowers Ministry International" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 30%, transparent 50%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(3,6,16,0.97) 0%, rgba(3,6,16,0.88) 14%, rgba(3,6,16,0.60) 30%, rgba(3,6,16,0.20) 46%, transparent 62%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.50) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.50) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 38%, transparent 0%, rgba(0,0,0,0.22) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 pb-10 sm:pb-14 flex flex-col items-center text-center pointer-events-none select-none">
          <div className="flex items-center gap-4 mb-5 w-full max-w-lg px-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">Est. 2001</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)', letterSpacing: '0.02em' }}>
            {'Rev. Jayakumar Babu Salluri'.split('').map((char, i) =>
              char === ' ' ? <span key={i}>&nbsp;</span> : (
                <span key={i} className="hero-letter" style={{ animationDelay: `${5 + i * 0.055}s`, color: '#ffffff', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>{char}</span>
              )
            )}
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">Chairman &amp; Founder &nbsp;·&nbsp; India &nbsp;·&nbsp; USA &nbsp;·&nbsp; Canada</p>
          <div className="flex items-center gap-3 w-full max-w-xs px-6">
            <div className="flex-1 h-px bg-amber-400/30" />
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <div className="flex-1 h-px bg-amber-400/30" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STORY BANNER — pastel warm light
      ══════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(160deg, #fffbeb 0%, #fef3c7 50%, #fffbeb 100%)', borderBottom: '1px solid #FDE68A' }}>
        <div className="max-w-4xl mx-auto px-6 py-14 sm:py-18 text-center">
          <div className="flex items-center justify-center gap-5 mb-5">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(217,119,6,0.5))' }} />
            <span className="text-[9px] tracking-[0.45em] uppercase font-medium" style={{ color: 'rgba(180,83,9,0.7)' }}>His Testimony</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(217,119,6,0.5))' }} />
          </div>
          <h2 className="reveal font-semibold italic leading-tight mb-3" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', color: '#1e3a8a', transitionDelay: '0.1s' }}>
            My Story for <span style={{ color: '#d97706' }}>HIS GLORY</span>
          </h2>
          <p className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(30,58,138,0.45)' }}>
            Rev. Jayakumar Babu Salluri &nbsp;·&nbsp; Chairman &amp; Founder &nbsp;·&nbsp; Sowers Ministry International
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CHAPTER 1 — GREETING
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-3xl mx-auto px-6 pt-14 pb-4">
          <p className="text-blue-900 font-semibold mb-2 italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>My Dear Brothers and Sisters,</p>
          <p className="text-gray-600 leading-8 mb-8" style={{ fontSize: '1.02rem' }}>
            Greetings to you all in the precious name of our Lord Jesus. God transformed me as a lad of seventeen into a mighty arrow to reach the tribal nooks of the great nation of India. I consider it an honor to share what God has done and is still doing in my life.
          </p>
          <blockquote className="my-8 px-7 py-6 rounded-2xl" style={{ background: 'linear-gradient(135deg,rgba(30,58,138,0.05),rgba(30,58,138,0.02))', borderLeft: '3px solid #d97706' }}>
            <p className="text-blue-900 italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}>
              "God transformed me as a lad of seventeen into a mighty arrow to reach the tribal nooks of the great nation of India."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CHAPTER 1B — EARLY LIFE (image LEFT + text RIGHT)
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex-1 h-px bg-amber-200" />
            <span className="text-amber-400 text-xs">✦</span>
            <div className="flex-1 h-px bg-amber-200" />
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">

            {/* ── Left — Pastor Jay real photo with blessing overlay ── */}
            <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-5rem)]">
              <div
                className="relative rounded-3xl overflow-hidden h-full"
                style={{
                  animation: 'glowBorder 4s ease-in-out infinite, tilt3d 8s ease-in-out infinite',
                  border: '3px solid rgba(245,158,11,0.70)',
                  background: '#08122a',
                }}
              >
                <div className="relative h-full">
                  <Image src="/jay4.png" alt="Pastor Jay" fill className="object-cover object-top" />

                  {/* Dark navy gradient at bottom */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.90) 0%, rgba(8,18,42,0.40) 35%, transparent 65%)' }} />

                  {/* Rotating golden rays */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'conic-gradient(from 0deg at 50% 38%, transparent 0%, rgba(245,158,11,0.09) 6%, transparent 12%, rgba(245,158,11,0.07) 18%, transparent 24%, rgba(245,158,11,0.09) 30%, transparent 36%, rgba(245,158,11,0.07) 42%, transparent 48%, rgba(245,158,11,0.09) 54%, transparent 60%, rgba(245,158,11,0.07) 66%, transparent 72%, rgba(245,158,11,0.09) 78%, transparent 84%, rgba(245,158,11,0.07) 90%, transparent 96%)', animation: 'haloSpin 30s linear infinite' }} />

                  {/* Second counter-rotating ring */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'conic-gradient(from 0deg at 50% 38%, transparent 0%, rgba(255,255,255,0.04) 8%, transparent 16%, rgba(255,255,255,0.04) 24%, transparent 32%, rgba(255,255,255,0.04) 40%, transparent 48%, rgba(255,255,255,0.04) 56%, transparent 64%, rgba(255,255,255,0.04) 72%, transparent 80%, rgba(255,255,255,0.04) 88%, transparent 96%)', animation: 'haloSpinRev 20s linear infinite', opacity: 0.6 }} />

                  {/* ✦ Golden Cross — top centre */}
                  <div className="absolute pointer-events-none" style={{ top: '7%', left: '50%', transform: 'translateX(-50%)', animation: 'crossPulse 3.5s ease-in-out infinite', filter: 'drop-shadow(0 0 10px rgba(245,158,11,0.9))' }}>
                    <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
                      <rect x="11" y="0" width="6" height="40" rx="3" fill="#FCD34D" />
                      <rect x="0" y="11" width="28" height="6" rx="3" fill="#FCD34D" />
                    </svg>
                  </div>

                  {/* ✦ Small crosses — corners */}
                  {[
                    { top: '6%', left: '8%', size: 14, delay: '0.8s' },
                    { top: '6%', right: '8%', size: 14, delay: '1.6s' },
                  ].map((c, i) => (
                    <div key={i} className="absolute pointer-events-none" style={{ top: c.top, left: c.left, right: (c as {right?:string}).right, animation: `crossPulse 4s ease-in-out ${c.delay} infinite`, filter: 'drop-shadow(0 0 6px rgba(245,158,11,0.7))' }}>
                      <svg width={c.size} height={c.size * 1.4} viewBox="0 0 14 20" fill="none">
                        <rect x="5.5" y="0" width="3" height="20" rx="1.5" fill="#FCD34D" />
                        <rect x="0" y="5.5" width="14" height="3" rx="1.5" fill="#FCD34D" />
                      </svg>
                    </div>
                  ))}

                  {/* ✦ Praying hands — left */}
                  <div className="absolute pointer-events-none" style={{ bottom: '28%', left: '5%', animation: 'handFloat 4s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.6))' }}>
                    <svg width="28" height="34" viewBox="0 0 28 34" fill="rgba(245,158,11,0.65)">
                      <path d="M14 2 C14 2 8 6 6 12 C4 18 5 24 5 28 C5 30 7 32 9 32 L14 32 L14 2Z" />
                      <path d="M14 2 C14 2 20 6 22 12 C24 18 23 24 23 28 C23 30 21 32 19 32 L14 32 L14 2Z" />
                      <ellipse cx="14" cy="2" rx="3" ry="3" fill="rgba(245,158,11,0.65)" />
                    </svg>
                  </div>

                  {/* ✦ Praying hands — right */}
                  <div className="absolute pointer-events-none" style={{ bottom: '28%', right: '5%', animation: 'handFloat 4s ease-in-out 2s infinite', filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.6))' }}>
                    <svg width="28" height="34" viewBox="0 0 28 34" fill="rgba(245,158,11,0.65)">
                      <path d="M14 2 C14 2 8 6 6 12 C4 18 5 24 5 28 C5 30 7 32 9 32 L14 32 L14 2Z" />
                      <path d="M14 2 C14 2 20 6 22 12 C24 18 23 24 23 28 C23 30 21 32 19 32 L14 32 L14 2Z" />
                      <ellipse cx="14" cy="2" rx="3" ry="3" fill="rgba(245,158,11,0.65)" />
                    </svg>
                  </div>

                  {/* ✦ Rising light particles */}
                  {[
                    { left: '20%', bottom: '20%', anim: 'rise1 4s ease-in-out 0s infinite' },
                    { left: '35%', bottom: '18%', anim: 'rise2 4s ease-in-out 1.3s infinite' },
                    { left: '50%', bottom: '22%', anim: 'rise3 4s ease-in-out 0.6s infinite' },
                    { left: '65%', bottom: '19%', anim: 'rise1 4s ease-in-out 1.9s infinite' },
                    { left: '78%', bottom: '21%', anim: 'rise2 4s ease-in-out 0.9s infinite' },
                  ].map((p, i) => (
                    <div key={i} className="absolute pointer-events-none rounded-full"
                      style={{ left: p.left, bottom: p.bottom, width: 5, height: 5, background: '#FCD34D', boxShadow: '0 0 6px 2px rgba(245,158,11,0.8)', animation: p.anim }} />
                  ))}

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-8 text-center" style={{ background: 'linear-gradient(to top, rgba(8,18,42,1) 60%, transparent)' }}>
                    <p className="text-amber-400 text-[9px] tracking-[0.35em] uppercase font-semibold mb-0.5">✦ Vijayawada, India</p>
                    <p className="text-white text-base font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>Pastor Jay</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right text ── */}
            <div className="reveal-right">
              <h3 className="text-blue-900 font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.7rem' }}>
                Born in Vijayawada
              </h3>
              <div className="space-y-5 text-gray-600 leading-8" style={{ fontSize: '1.02rem' }}>
                <p>I was born the eldest son with three siblings in the city of Vijayawada, State of Andhra Pradesh, South India. I live in the same place today, a neighborhood of the Dalit caste (the broken people, the untouchables). We live on one side of the street, right next to the train tracks, on a piece of land about eighty square yards. This is property given to us by the government — one of many slums for the poorest to struggle to live in. Twenty-five percent of the population of Vijayawada live in slums and are trapped in poverty with little hope of pulling out of it.</p>
                <p>As is common in India, my father struggled to meet our daily needs. My greatest humiliation came when I was ten years old and my father was unable to pay my school fee on time. The headmaster sent me home on many occasions until I could bring back the fee, so I missed most of my classes and fell behind in my studies.</p>
                <p>As a result, I didn't do well in mathematics. This brought the attention of the principal who cursed me in front of the entire class. "When you grow old, you will be a cow dung basket carrier," he said, which meant that I would be good for nothing and my life was doomed.</p>
                <p>I'm certain he does not remember that incident today, but my heart is still scarred by it. In India, teachers are considered next to gods. Nobody wants to be cursed by them or receive any ill spoken words by them.</p>
                <p>Following the same feeble pattern of education, I passed each year only by the mercy of my teachers. But in tenth grade, the government conducts the exam. I failed math, English, science and Hindi. I would have to wait a full academic year to retake the exam.</p>
                <p>My father had a good friend who was a pastor and visited our home every week. When he heard of my dilemma, he suggested my father send me to a Bible College run by the Church of God. It was located in a city called Kakinada, situated along the Bay of Bengal, in the southeastern part of India.</p>
                <p>The school ran a tight schedule starting with prayer every morning at 5:00 a.m. and ending with prayer at 10:00 p.m. I did not adjust well to the long hours of religious activities; reading the Bible, classes, manual duties, simple food. And I did not receive a deeper knowledge or relationship with Christ.</p>
                <p>Growing up, my influences were the Catholic Church from my father, and the Hindu religion, as my mother was a strong devotee. So everything at this school was going over my head and my heart. I felt like I did not belong there and was wasting my time.</p>
                <p>Two months later, I decided to run away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CHAPTER 2 — THE DIVINE CALL (21 Aug 1994)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#030210' }}>

        {/* ── Base atmosphere ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 140% 100% at 50% -5%, #250d6a 0%, #100640 38%, #030210 70%)' }} />

        {/* ── Aurora 1 — vivid violet ── */}
        <div className="absolute pointer-events-none" style={{ top: '-18%', left: '-10%', width: '70%', height: '60%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(120,50,230,0.35) 0%, transparent 70%)', filter: 'blur(55px)', animation: 'auroraMove 14s ease-in-out infinite' }} />

        {/* ── Aurora 2 — deep blue ── */}
        <div className="absolute pointer-events-none" style={{ top: '-10%', right: '-12%', width: '65%', height: '55%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(30,90,230,0.28) 0%, transparent 70%)', filter: 'blur(65px)', animation: 'auroraMove 17s ease-in-out 4s infinite reverse' }} />

        {/* ── Aurora 3 — teal ── */}
        <div className="absolute pointer-events-none" style={{ top: '30%', left: '-5%', width: '45%', height: '50%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(15,140,160,0.18) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'auroraMove 22s ease-in-out 9s infinite' }} />

        {/* ── Aurora 4 — rose/magenta (subtle) ── */}
        <div className="absolute pointer-events-none" style={{ top: '25%', right: '-8%', width: '40%', height: '45%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,30,120,0.14) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'auroraMove 19s ease-in-out 12s infinite reverse' }} />

        {/* ── Bottom mist ── */}
        <div className="absolute pointer-events-none" style={{ bottom: '-5%', left: '12%', width: '76%', height: '40%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(70,20,150,0.22) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'mistDrift 22s ease-in-out 7s infinite' }} />

        {/* ── Vertical divine light beam ── */}
        <div className="absolute pointer-events-none" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, rgba(245,158,11,0.55) 0%, rgba(245,158,11,0.18) 30%, rgba(180,160,255,0.08) 65%, transparent 100%)', filter: 'blur(4px)', animation: 'beamBreath 5s ease-in-out infinite' }} />
        <div className="absolute pointer-events-none" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '50%', background: 'linear-gradient(to bottom, rgba(245,158,11,0.15) 0%, transparent 100%)', filter: 'blur(18px)', animation: 'beamBreath 5s ease-in-out infinite' }} />

        {/* ── Divine golden glow — top centre ── */}
        <div className="absolute pointer-events-none" style={{ top: '-2%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '260px', background: 'radial-gradient(ellipse, rgba(245,158,11,0.30) 0%, transparent 60%)', filter: 'blur(40px)', animation: 'divineGlow 6s ease-in-out infinite' }} />


        {/* ── Shooting star 1 — top left to right ── */}
        <div className="absolute pointer-events-none" style={{ top: '7%', left: '8%', width: '130px', height: '1.5px', borderRadius: '9px', background: 'linear-gradient(to right, transparent, rgba(200,220,255,0.95), white)', transform: 'rotate(30deg)', transformOrigin: 'left center', animation: 'shoot1 8s ease-out 1.5s infinite' }} />

        {/* ── Shooting star 2 — top right to left ── */}
        <div className="absolute pointer-events-none" style={{ top: '5%', right: '10%', width: '110px', height: '1.5px', borderRadius: '9px', background: 'linear-gradient(to left, transparent, rgba(200,220,255,0.95), white)', transform: 'rotate(-30deg)', transformOrigin: 'right center', animation: 'shoot2 9s ease-out 6s infinite' }} />

        {/* ── Shooting star 3 — mid, diagonal ── */}
        <div className="absolute pointer-events-none" style={{ top: '18%', left: '55%', width: '90px', height: '1px', borderRadius: '9px', background: 'linear-gradient(to right, transparent, rgba(245,200,255,0.90), white)', transform: 'rotate(28deg)', transformOrigin: 'left center', animation: 'shoot3 7s ease-out 11s infinite' }} />

        {/* ── Stars — 50 twinkling ── */}
        {([
          [3,4,1.5,0,3.1],[10,9,2,.5,4.0],[20,6,1,1.2,3.5],[30,3,2.5,.8,5.0],[42,7,1,1.6,4.3],
          [52,5,3,.2,3.8],[63,9,1.5,1.1,4.6],[74,4,2,.7,3.2],[84,7,1,1.9,5.2],[93,12,2.5,.3,4.1],
          [7,18,1,.6,3.7],[16,22,2,1.4,4.8],[26,16,1.5,.1,3.3],[36,25,1,1.7,5.0],[47,20,2,.9,4.5],
          [57,17,1.5,.4,3.9],[68,23,1,1.3,4.2],[78,19,2.5,.8,5.3],[88,26,1,0,3.6],[96,15,2,1.5,4.4],
          [5,34,1.5,.7,4.7],[14,42,1,1.2,3.4],[23,38,2,.3,5.1],[33,44,1.5,1.8,4.0],[43,35,1,.6,3.8],
          [54,47,2.5,1.0,5.4],[64,40,1,1.5,4.1],[75,36,2,.2,3.6],[86,43,1.5,.9,4.9],[95,50,1,1.7,3.3],
          [2,56,2,0.4,4.8],[12,62,1,.8,3.5],[22,58,1.5,1.6,5.2],[32,65,1,0.1,4.3],[44,60,2.5,1.3,3.9],
          [55,70,1,0.6,4.6],[66,63,1.5,1.9,5.0],[77,68,1,0.4,3.7],[88,60,2,1.1,4.4],[97,72,1.5,0.8,5.1],
          [8,78,1,1.4,3.2],[19,82,2,0.2,4.7],[30,76,1.5,1.8,5.3],[42,84,1,0.9,3.8],[53,79,2,1.5,4.1],
          [64,86,1.5,0.3,5.0],[75,80,1,1.2,3.5],[84,88,2,0.7,4.8],[92,82,1.5,1.6,3.9],[98,76,1,0.5,4.5],
        ] as [number,number,number,number,number][]).map(([l,t,s,d,dur], i) => (
          <div key={i} className="absolute pointer-events-none rounded-full"
            style={{ left:`${l}%`, top:`${t}%`, width:s, height:s, background:'#fff', boxShadow:`0 0 ${s*3}px ${s*2}px rgba(180,200,255,0.70)`, animation:`starTwinkle ${dur}s ease-in-out ${d}s infinite` }} />
        ))}

        {/* ── Floating orbs (coloured) ── */}
        {[
          { left:'18%', bottom:'22%', size:5, color:'#a78bfa', delay:'0s', dur:'5.5s' },
          { left:'31%', bottom:'18%', size:4, color:'#fcd34d', delay:'1.4s', dur:'6.0s' },
          { left:'45%', bottom:'25%', size:6, color:'#93c5fd', delay:'2.8s', dur:'5.0s' },
          { left:'60%', bottom:'20%', size:4, color:'#f9a8d4', delay:'0.7s', dur:'6.5s' },
          { left:'74%', bottom:'24%', size:5, color:'#6ee7b7', delay:'1.9s', dur:'5.8s' },
          { left:'87%', bottom:'19%', size:4, color:'#fcd34d', delay:'3.5s', dur:'5.2s' },
          { left:'9%',  bottom:'30%', size:3, color:'#c4b5fd', delay:'2.2s', dur:'6.2s' },
          { left:'52%', bottom:'35%', size:3, color:'#fde68a', delay:'4.1s', dur:'5.7s' },
        ].map((o, i) => (
          <div key={i} className="absolute pointer-events-none rounded-full"
            style={{ left:o.left, bottom:o.bottom, width:o.size, height:o.size, background:o.color, boxShadow:`0 0 ${o.size*4}px ${o.size*3}px ${o.color}55`, animation:`floatOrb ${o.dur} ease-in-out ${o.delay} infinite` }} />
        ))}

        {/* ── Content ── */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(245,158,11,0.3)' }} />
            <span className="px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white" style={{ background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.35)' }}>21 August 1994</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(245,158,11,0.3)' }} />
          </div>
          <h3 className="reveal font-semibold italic mb-8 text-center text-white" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', transitionDelay: '0.1s' }}>
            The Night God Called My Name
          </h3>
          <div className="reveal space-y-5 leading-8 mb-8" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.02rem', transitionDelay: '0.22s' }}>
            <p>On the 21st of August, 1994, my plan was clearly hatched in my mind. I slipped into sleep but woke when someone clearly called my name. <span className="text-amber-300 font-semibold">"My son, Jayakumar."</span> I looked around to see who called me. My roommate was asleep, so I checked outside, but nobody was there.</p>
            <p>I went back to bed and believe about twenty minutes passed when I heard the same clear voice once more. <span className="text-amber-300 font-semibold">"My son, Jayakumar."</span> I roused my roommate and asked if he had called me. He said he didn't, so I shared what was happening. He suggested that if I heard the voice again, to kneel down and pray.</p>
            <p>I didn't like his suggestion as I still harboured ideas of escape.</p>
            <p>I went back to bed, but around twenty minutes to midnight, I heard the same voice again. <span className="text-amber-300 font-semibold">"My son, Jayakumar."</span> He spoke my name as distinctly as if he communicated with me on the telephone. Without thinking, I knelt beside my bed. The voice continued speaking.</p>
          </div>
          <div className="reveal-scale rounded-2xl px-8 py-7 mb-8 text-center" style={{ background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.28)', transitionDelay: '0.15s' }}>
            <p className="text-amber-300 italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}>
              "My son, Jayakumar, I have chosen you before you were formed in your mother's womb."
            </p>
            <p className="mt-5 leading-7" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.02rem' }}>"But I am a child," I said.</p>
            <p className="mt-3 text-amber-300 font-medium" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.15rem' }}>
              "Don't say you are a child. Read from the scripture, Jeremiah 1:4–10."
            </p>
          </div>
          <div className="reveal rounded-2xl px-7 py-8 mb-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', transitionDelay: '0.1s' }}>
            <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-5">✦ Jeremiah 1:4–10 · NKJV</p>
            <div className="space-y-4 leading-8" style={{ color: 'rgba(255,255,255,0.80)', fontSize: '1.02rem', fontFamily: 'var(--font-cormorant), Georgia, serif', fontStyle: 'italic' }}>
              <p><span className="text-amber-400 font-bold not-italic text-sm">4</span> Then the word of the Lord came to me, saying: <span className="text-amber-300 font-bold not-italic">5</span> "Before I formed you in the womb I knew you; before you were born I sanctified you; I ordained you a prophet to the nations." <span className="text-amber-300 font-bold not-italic">6</span> Then said I: "Ah, Lord God! Behold, I cannot speak, for I am a youth." <span className="text-amber-300 font-bold not-italic">7</span> But the Lord said to me: "Do not say, 'I am a youth,' for you shall go to all to whom I send you, and whatever I command you, you shall speak. <span className="text-amber-300 font-bold not-italic">8</span> Do not be afraid of their faces, for I am with you to deliver you," says the Lord. <span className="text-amber-300 font-bold not-italic">9</span> Then the Lord put forth His hand and touched my mouth, and the Lord said to me:</p>
              <p className="text-amber-200 font-semibold">"Behold, I have put My words in your mouth. <span className="text-amber-300 font-bold not-italic">10</span> See, I have this day set you over the nations and over the kingdoms, to root out and to pull down, to destroy and to throw down, to build and to plant."</p>
            </div>
          </div>
          <div className="space-y-5 leading-8" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.02rem' }}>
            <p>I had never read from Jeremiah before and while contemplating this, a fireball, that would have fit in my hand, fell in front of me. It was not a figment of my imagination — my blanket burned where it had fallen. The fireball divided into two parts, one to the north and one to the south, both two meters distance from the other. And then it vanished.</p>
            <p>I knew the Lord was saying to me that He was going to take me to the north and south part of my nation, to places I had never been before. At the same time, I prayed. I confessed all of my sins and accepted Jesus Christ as my personal saviour.</p>
            <p>I dropped into a deep sleep and saw a vision of myself standing in front of a harvest field ready to reap. A man dressed in white handed me a sickle to gather the harvest. So I did, and when I finished I was very tired. The same man in my vision said, "Now go and rest." At the same time the bell for morning prayers rang and I awoke with great relief. I felt like a huge burden had been removed from me and inexpressible joy filled my heart.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CHAPTER 3 — SEMINARY JOURNEY
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex-1 h-px bg-amber-200" />
            <span className="text-amber-400 text-xs">✦</span>
            <div className="flex-1 h-px bg-amber-200" />
          </div>
          <h3 className="reveal text-blue-900 font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.7rem' }}>The Journey to Seminary</h3>
          <div className="reveal space-y-5 text-gray-600 leading-8 mb-10" style={{ fontSize: '1.02rem', transitionDelay: '0.15s' }}>
            <p>By God's grace, I finished my three-year course and received my diploma in 1997. But I still wanted to learn more about the Word of God and pursued higher education in theology. While I prayed about this, an opportunity came to me from the northern part of my country.</p>
            <p>At the same time, my family faced its toughest time. My youngest sister, Tabitha, suffered and died from leukemia in 1996. The illness strained our family emotionally and financially. And then my father tore down our thatched roof house in hopes of building a new one, before finding out he was not eligible for a bank loan to rebuild. So, he constructed a temporary, smaller thatched roof house.</p>
            <p>I knew that for him to send me to seminary was monetarily beyond him. But my Aunty Navaneetham who was a close friend to our family, not a related aunt — loaned him the money to pay for my travels and school. I ventured to northern India to Emmanuel Theological Seminary in Kota, Rajasthan.</p>
            <p>After a thirty-six hour train ride, I arrived in a state with a distinctly different culture. India is a multilingual, multi-ethnic country, with many differences between each region. Everything was foreign to me; the language, the people, the cuisine. But the weather was the biggest change. It was freezing! I was used to the hot and humid weather of southern India.</p>
            <p>The food served by the seminary was very poor, mostly Roti (like a flour tortilla) and lentils. And they were very behind in technology. We didn't have a phone, a letter took seven days to reach home, and email had not reached that corner of India yet.</p>
            <p>I had to think twice to call home on a telephone — long distance was very expensive. My pocket money was equal to US$ 2.00. It was all my dad could afford and barely enough to buy soap, shampoo and toothpaste.</p>
            <p>I started attending the classes and a team from Liberty University was there to teach a curriculum called, Bible Training Centre for Pastors (BTCP). It was my first experience with American teaching and I found their accent difficult to understand. At the same time, I became very sick and was diagnosed with typhoid fever. I had no money for treatment, no phone to call home, and I also feared failing the semester because I could not understand the Americans.</p>
            <p>My temperature climbed dangerously high and I began to vomit in the night. But everybody was sleeping and the seminary did not offer medical care. I left the room to vomit and thought, I should leave, this is not the place I belong to.</p>
          </div>
          <blockquote className="reveal-scale my-10 px-7 py-6 rounded-2xl" style={{ background: 'linear-gradient(135deg,rgba(30,58,138,0.05),rgba(30,58,138,0.02))', borderLeft: '3px solid #d97706' }}>
            <p className="text-blue-900 italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}>
              "Then I heard the same voice as before. The Lord said to me, 'No, you are not going from here.'"
            </p>
          </blockquote>
          <div className="space-y-5 text-gray-600 leading-8" style={{ fontSize: '1.02rem' }}>
            <p>"I am sick, Lord, and I do not understand the language," I said.</p>
            <p>He told me to read the Bible in English and in my native language, Telugu, together. And then my temperature dropped as he healed my body at the same time. I obeyed the words he spoke to me and read the Bible in both languages. I referred to a small dictionary many times, and through that process, I learned to speak English.</p>
            <p>The same year, I had the privilege of meeting and translating for Mark Gonzalez, a Compound Pharmacist student, from Yorba Linda, California. Mark was on a mission trip with World Help Organisation. We developed a close relationship and are still good friends today. God continued to bring more people into my life; Pastor Sam &amp; Sherry Holliday of Skyway Church in Goodyear, Arizona, and Pastor Larry Whitehead of Grace Family Church, Alvarado, Texas.</p>
            <p>God has used all of these people in key ways in my life and ministry.</p>
            <p>Going back to the seminary, God gave me a very good knowledge and command of English. Because of this, I was blessed to be able to interpret for renowned speakers that came to the seminary. It remains one of the greatest privileges of my life. I did well on my thesis and graduated February, 1999. Out of four-hundred-fifty graduates, I was one of the few asked to stay on as faculty.</p>
            <p>I stayed and worked there for two years and then heard the Lord's voice again. He told me to go to places in India where no one had reached with the gospel.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CHAPTER 4 — MINISTRY 2001 (Sowers green)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#0e2505' }}>

        {/* ── Base radial gradient ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 130% 90% at 50% 20%, #2e6b0e 0%, #1a3d0a 45%, #0a1e03 100%)' }} />

        {/* ── Aurora blob 1 — bright forest green ── */}
        <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '65%', height: '65%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(60,160,20,0.28) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'greenAurora 14s ease-in-out infinite' }} />

        {/* ── Aurora blob 2 — olive/yellow-green ── */}
        <div className="absolute pointer-events-none" style={{ top: '-10%', right: '-12%', width: '60%', height: '55%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(100,180,20,0.22) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'greenAurora 18s ease-in-out 5s infinite reverse' }} />

        {/* ── Aurora blob 3 — golden amber (harvest) ── */}
        <div className="absolute pointer-events-none" style={{ top: '30%', left: '20%', width: '60%', height: '50%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(180,130,10,0.16) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'greenAurora 22s ease-in-out 10s infinite' }} />

        {/* ── Aurora blob 4 — deep teal ── */}
        <div className="absolute pointer-events-none" style={{ bottom: '-10%', right: '5%', width: '50%', height: '45%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,100,60,0.20) 0%, transparent 70%)', filter: 'blur(65px)', animation: 'greenAurora 16s ease-in-out 7s infinite reverse' }} />

        {/* ── Light rays — sunlight through canopy ── */}
        {[
          { left: '8%',  rotate: '-18deg', delay: '0s',   dur: '9s',  w: 70  },
          { left: '22%', rotate: '-12deg', delay: '2.5s', dur: '11s', w: 90  },
          { left: '40%', rotate: '-6deg',  delay: '5s',   dur: '8s',  w: 60  },
          { left: '58%', rotate: '5deg',   delay: '1.5s', dur: '12s', w: 80  },
          { left: '74%', rotate: '12deg',  delay: '4s',   dur: '9s',  w: 65  },
          { left: '88%', rotate: '18deg',  delay: '7s',   dur: '10s', w: 75  },
        ].map((r, i) => (
          <div key={i} className="absolute pointer-events-none" style={{ top: '-5%', left: r.left, width: r.w, height: '120%', background: 'linear-gradient(to bottom, rgba(220,200,60,0.22) 0%, rgba(100,200,50,0.08) 50%, transparent 100%)', transform: `rotate(${r.rotate}) skewX(-4deg)`, filter: 'blur(22px)', animation: `rayPulse ${r.dur} ease-in-out ${r.delay} infinite` }} />
        ))}

        {/* ── Golden glow — top divine light ── */}
        <div className="absolute pointer-events-none" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '200px', background: 'radial-gradient(ellipse, rgba(210,180,20,0.30) 0%, transparent 65%)', filter: 'blur(35px)', animation: 'divineGlow 7s ease-in-out infinite' }} />

        {/* ── 3D spinning crosses — different depths ── */}
        {[
          { top: '10%', left: '6%',  sz: 26, delay: '0s',   dur: '9s'  },
          { top: '18%', right: '7%', sz: 18, delay: '3s',   dur: '12s' },
          { top: '55%', left: '4%',  sz: 14, delay: '6s',   dur: '10s' },
          { top: '60%', right: '5%', sz: 20, delay: '1.5s', dur: '14s' },
          { top: '35%', left: '92%', sz: 12, delay: '4.5s', dur: '11s' },
        ].map((c, i) => (
          <div key={i} className="absolute pointer-events-none" style={{ top: c.top, left: (c as {left?:string}).left, right: (c as {right?:string}).right, animation: `${i % 2 === 0 ? 'cross3d' : 'crossSpin3d'} ${c.dur} ease-in-out ${c.delay} infinite`, filter: 'drop-shadow(0 0 8px rgba(200,220,60,0.6))' }}>
            <svg width={c.sz} height={c.sz * 1.4} viewBox="0 0 20 28" fill="none">
              <rect x="7.5" y="0" width="5" height="28" rx="2.5" fill="rgba(200,230,80,0.70)" />
              <rect x="0"   y="7" width="20" height="5"  rx="2.5" fill="rgba(200,230,80,0.70)" />
            </svg>
          </div>
        ))}

        {/* ── Floating seed/sparkle particles ── */}
        {[
          { left:'12%', bot:'18%', sz:4, delay:'0s',   dur:'6s',  color:'rgba(200,230,60,0.9)'  },
          { left:'25%', bot:'22%', sz:3, delay:'1.4s', dur:'7s',  color:'rgba(240,210,30,0.85)' },
          { left:'38%', bot:'16%', sz:5, delay:'2.8s', dur:'5.5s',color:'rgba(180,240,80,0.80)' },
          { left:'52%', bot:'24%', sz:3, delay:'0.7s', dur:'6.5s',color:'rgba(240,210,30,0.90)' },
          { left:'65%', bot:'19%', sz:4, delay:'3.5s', dur:'7.5s',color:'rgba(200,230,60,0.85)' },
          { left:'78%', bot:'21%', sz:3, delay:'1.9s', dur:'6s',  color:'rgba(180,240,80,0.80)' },
          { left:'88%', bot:'17%', sz:4, delay:'4.2s', dur:'5s',  color:'rgba(240,210,30,0.85)' },
          { left:'5%',  bot:'35%', sz:3, delay:'2.1s', dur:'8s',  color:'rgba(200,230,60,0.75)' },
          { left:'46%', bot:'40%', sz:2, delay:'5.0s', dur:'6.8s',color:'rgba(240,210,30,0.70)' },
          { left:'93%', bot:'30%', sz:3, delay:'3.1s', dur:'7.2s',color:'rgba(180,240,80,0.75)' },
        ].map((p, i) => (
          <div key={i} className="absolute pointer-events-none rounded-full"
            style={{ left:p.left, bottom:p.bot, width:p.sz, height:p.sz, background:p.color, boxShadow:`0 0 ${p.sz*3}px ${p.sz*2}px ${p.color}`, animation:`seedFloat ${p.dur} ease-in-out ${p.delay} infinite` }} />
        ))}

        {/* ── Content ── */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(245,158,11,0.35)' }} />
            <span className="px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white" style={{ background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.35)' }}>2001 — The Mission Begins</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(245,158,11,0.35)' }} />
          </div>
          <h3 className="reveal text-white font-semibold italic mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', transitionDelay: '0.1s' }}>Reaching the Unreached</h3>
          <div className="reveal space-y-5 leading-8 mb-8" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.02rem', transitionDelay: '0.22s' }}>
            <p>My resignation upset my superiors at the seminary, but I had to listen to what God was saying to me. I entered full time ministry in 2001, and began to reach the tribes of; Koya, Yerukula, Lambadi, Banjara, and Kondareddy, among others. These remote tribes are simple, not well developed, and can be quite barbaric in their culture. For one example, some still observe infanticide, believing their goddesses are pacified with that.</p>
            <p>We have now trained eight-hundred-fifty tribal young men and women for the ministry. We send them back to their respective villages, and provide bicycles for them to travel and share the gospel. It is a challenge every day. In their journeys, they constantly battle evil forces and heal people who were slaves to darkness. But the anointed walk with the authority of the Lord. They are reaching people, healing the sick, teaching the Word of God, and plant churches.</p>
            <p>It started in 2001 within a county, now the wings are spread into three different states of the Country. I have dealt with many issues; spiritual, physical (malaria three times and typhus once), problems with the government and law enforcement, and life-threatening Hindu radicals. I survived a catastrophic automobile accident with a minor injury to one of my toes, suffered from thirst, hunger, and spent many nights freezing in the jungle. But God has remained faithful through it all.</p>
          </div>
          <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10" style={{ transitionDelay: '0.30s' }}>
            {[
              { num: '1,300+', label: 'Pastors Trained' },
              { num: '170', label: 'Village Churches' },
             
              { num: '24+', label: 'Years of Service' },
              { num: '2001', label: 'Ministry Founded' },
            ].map((s) => (
              <div key={s.label} className="text-center rounded-xl py-5 px-3" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(245,158,11,0.22)' }}>
                <p className="text-amber-400 font-bold text-2xl leading-none mb-1" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>{s.num}</p>
                <p className="text-[10px] tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.50)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CHAPTER 5 — HIS FAMILY (full-width image then text)
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fefcf8' }}>

        {/* Full-width family photo — clean, full image, no overlays */}
        <div className="relative w-full" style={{ height: '650px' }}>
          <Image src="/jayfamily.webp" alt="The Salluri Family" fill className="object-cover object-center" />

          {/* Thin gradient at bottom only — just enough for caption text */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '110px', background: 'linear-gradient(to top, rgba(0,0,0,0.62), transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 pb-5 text-center pointer-events-none">
            <p className="text-amber-400 text-[9px] tracking-[0.4em] uppercase font-semibold mb-1">God&apos;s Greatest Gift</p>
            <p className="text-white text-xl sm:text-2xl font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>The Salluri Family</p>
            <p className="text-white/55 text-xs tracking-wide mt-0.5">Vijayakumari &nbsp;·&nbsp; Sam Holliday &nbsp;·&nbsp; Mark Jay</p>
          </div>
        </div>

        {/* Family story text below */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h3 className="reveal text-blue-900 font-semibold italic mb-6 text-center" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.9rem' }}>
            Blessed with Family
          </h3>
          <div className="reveal space-y-5 text-gray-600 leading-8 mb-10" style={{ fontSize: '1.02rem', transitionDelay: '0.15s' }}>
            <p>He blessed me with my beautiful wife, Vijayakumari Salluri, and two boys. Our first was born fourteen years ago as a special gift. He was born premature and we named him, Sam Holliday. Sam was declared dead in the womb, but by God's grace, he was born alive and is now in ninth grade. Our second son, Mark Jay Holliday, was born on August 2, 2018 and is just over a year old.</p>
            <p>Each day often brings a life-threatening situation. But leading with faith, the journey continues with a broad vision to equip more and more people to reach every nook of the nation of India.</p>
          </div>
          <div className="reveal grid grid-cols-3 gap-4" style={{ transitionDelay: '0.28s' }}>
            {[
              { name: 'Vijayakumari', role: 'Wife', icon: '🕊️', note: 'Partner in ministry' },
              { name: 'Sam Holliday', role: 'Eldest Son', icon: '⭐', note: 'A miracle from God' },
              { name: 'Mark Jay', role: 'Youngest Son', icon: '✝', note: 'Born Aug 2, 2018' },
            ].map((m) => (
              <div key={m.name} className="rounded-2xl p-4 text-center" style={{ background: '#fff', border: '1px solid #FDE68A', boxShadow: '0 4px 16px rgba(245,158,11,0.08)' }}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="text-blue-900 font-bold text-xs leading-tight">{m.name}</div>
                <div className="text-amber-600 text-[10px] mt-0.5 font-medium">{m.role}</div>
                <div className="text-gray-400 text-[9px] mt-1 leading-snug">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CLOSING SCRIPTURE BANNER
      ══════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(160deg, #0e0c1a 0%, #120e08 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="h-px w-16" style={{ background: 'rgba(245,158,11,0.4)' }} />
            <span className="text-[9px] tracking-[0.45em] uppercase" style={{ color: 'rgba(245,158,11,0.60)' }}>To God Be the Glory</span>
            <div className="h-px w-16" style={{ background: 'rgba(245,158,11,0.4)' }} />
          </div>
          <blockquote className="italic leading-relaxed mb-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'rgba(255,255,255,0.85)' }}>
            "Before I formed you in the womb I knew you; before you were born I sanctified you."
          </blockquote>
          <cite className="text-amber-400 text-[10px] tracking-[0.35em] uppercase not-italic font-semibold">— Jeremiah 1:5</cite>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT — Let's Get In Touch
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fefcf8', borderTop: '1px solid #FDE68A' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">

          {/* Heading */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-5 mb-5">
              <div className="h-px w-16 bg-amber-200" />
              <span className="text-amber-400 text-xs">✦</span>
              <div className="h-px w-16 bg-amber-200" />
            </div>
            <h2 className="font-semibold italic text-blue-900" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Let&apos;s Get In Touch
            </h2>
            <p className="text-gray-400 text-sm mt-2 tracking-wide">We would love to hear from you</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Left: Contact Form ── */}
            <div className="reveal-left rounded-3xl p-8 sm:p-10" style={{ background: '#fff', border: '1px solid #FDE68A', boxShadow: '0 20px 60px rgba(217,119,6,0.08)' }}>
              <h3 className="text-blue-900 font-bold text-xl mb-6" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>Send a Message</h3>
              <ContactForm />
            </div>

            {/* ── Right: Contact Info ── */}
            <div className="reveal-right space-y-8" style={{ transitionDelay: '0.12s' }}>

              {/* Name header */}
              <div>
                <h3 className="text-blue-900 font-semibold italic mb-1" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.8rem' }}>Pastor Jay</h3>
                <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold">Rev. Jayakumar Babu Salluri</p>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,158,11,0.12)' }}>
                  <svg className="w-5 h-5" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase font-bold mb-1" style={{ color: '#9CA3AF' }}>Phone</p>
                  <a href="tel:+919440109278" className="text-gray-700 text-sm hover:text-amber-600 transition-colors">+91-9440109278</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,158,11,0.12)' }}>
                  <svg className="w-5 h-5" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase font-bold mb-1" style={{ color: '#9CA3AF' }}>Email</p>
                  <a href="mailto:info@sowersministry.com" className="text-gray-700 text-sm hover:text-amber-600 transition-colors">info@sowersministry.com</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
