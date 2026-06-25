import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recent News',
  description: 'Field updates and stories from Sowers Ministry International — Transforming lives for His Glory.',
};

export default function RecentNewsPage() {
  return (
    <main>

      {/* ── Page Header ── */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb 0%,#fef3c7 100%)', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">✦ Updates of Ministry ✦</p>
          <h1
            className="text-blue-900 font-semibold italic"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem,4.5vw,3rem)' }}
          >
            Recent News
          </h1>
          <div className="flex items-center gap-3 justify-center mt-4">
            <div className="h-px w-20 bg-amber-300" />
            <span className="text-amber-400 text-sm">✦</span>
            <div className="h-px w-20 bg-amber-300" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          STORY 1 — Lakshmi (Angel)
          Image LEFT · Text RIGHT
      ════════════════════════════════════ */}
      <article style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Story label */}
          <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-6 text-center">Story One</p>

          {/* Two-column: image left, text right */}
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-14 items-start">

            {/* Image card */}
            <div className="lg:sticky lg:top-8">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '3px solid rgba(245,158,11,0.40)' }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/laxmi.webp"
                    alt="Lakshmi (Angel) and her daughter"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.75) 0%, transparent 45%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 text-center">
                    <p className="text-amber-400 text-[9px] tracking-[0.3em] uppercase font-semibold">✦ Lakshmi (Angel)</p>
                    <p className="text-white/80 text-xs mt-0.5">A Young Widow &amp; Her Daughter</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div>
              <h2
                className="text-blue-900 font-semibold italic leading-tight mb-2"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.7rem,3.5vw,2.5rem)' }}
              >
                Story of Lakshmi (Angel)
              </h2>
              <p className="text-amber-600 font-medium italic mb-7" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.15rem' }}>
                "Transforming Lives for His Glory"
              </p>

              <div className="space-y-5 text-gray-600 leading-8" style={{ fontSize: '1.04rem' }}>
                <p>
                  I received a phone call last night around 11 — the voice on the other side was weeping and sobbing. I was worried. Finally, after 2 minutes of pause, she said <strong className="text-blue-900">"ANNA"</strong> — I wanted to come to you. I recognized the voice. She is <strong className="text-blue-900">Angel (Lakshmi)</strong>, who was raised from our Orphanage.
                </p>
                <p>
                  Right after her Tenth grade, her mother took her from us by force and got her married as a teenager, purely on her mother&apos;s interest. We lost contact with the family. Later we found out Angel got married and was blessed with a daughter. After a year, her life was jeopardized — she lost her husband at the age of 20, and her mother too. Everybody cursed her life.
                </p>
                <p>
                  Angel has been staying with her maternal aunt, while all her paternal side and in-laws abandoned her. She didn&apos;t have a phone — she borrowed somebody&apos;s phone on the street to call me. I asked if she had money for a ticket. She said she had just enough. I told her to come, and we prayed for her safety throughout.
                </p>

                <blockquote
                  className="px-6 py-4 rounded-xl"
                  style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}
                >
                  <p className="text-blue-900 italic leading-7" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem' }}>
                    "She and her daughter would have been crushed by the grey world, but Praise the Lord — He saved these precious souls."
                  </p>
                </blockquote>

                <p>
                  By evening she called from a borrowed phone on the train, confirming her arrival after an 8-hour journey. Her baby — still on bottle feed — was crying for milk. We gave her food and milk to the baby, then left her alone to rest. My wife and I decided to share our meal with her.
                </p>
                <p>
                  Should I call this girl a <strong>WIDOW</strong> — who is now 21 years old, who lost her parents and husband? And her little girl, just 2 years old — an <strong>ORPHAN</strong>? I might use these terms in different circumstances, but I <em>hate</em> to call them a Widow or Orphan. I am praying that she be healed from trauma and find a God-fearing gentleman.
                </p>
                <p>
                  I am thanking all my friends who have been walking with me in prayer and financial support. Here is the extra mile — we take the step of faith to reach out to this family. She needs to be rehabbed. She needs courage. <strong className="text-blue-900">Praise the Lord, He gave us an opportunity to pour our love beyond our ability into these lives.</strong>
                </p>
              </div>

              <blockquote
                className="mt-8 px-6 py-5 rounded-xl text-center"
                style={{ background: 'linear-gradient(135deg,rgba(245,158,11,0.10),rgba(245,158,11,0.04))', border: '1px solid rgba(245,158,11,0.28)' }}
              >
                <p className="text-blue-900 italic mb-2" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.25rem' }}>
                  "My friends, as you read this story, I am asking you directly — would you join us in prayer or in any other means to transform this story for His Glory?"
                </p>
                <p className="text-amber-600 font-semibold text-sm">— Pastor Jay</p>
              </blockquote>

              <p className="mt-6 text-center font-bold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.7rem', color: '#d97706' }}>
                "Transforming lives slowly, but Surely."
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Story divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-amber-200" />
          <span className="text-amber-400 text-sm">✦</span>
          <div className="flex-1 h-px bg-amber-200" />
        </div>
      </div>

      {/* ════════════════════════════════════
          STORY 2 — Jomol and Jyothi
          Text LEFT · Image RIGHT
      ════════════════════════════════════ */}
      <article style={{ background: '#f8faff' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Story label */}
          <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-6 text-center">Story Two</p>

          {/* Two-column: text left, image right */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">

            {/* Story text */}
            <div>
              <h2
                className="text-blue-900 font-semibold italic leading-tight mb-4"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.7rem,3.5vw,2.5rem)' }}
              >
                Story of Jomol and Jyothi
              </h2>

              <blockquote
                className="mb-7 px-5 py-4 rounded-xl"
                style={{ background: 'rgba(30,58,138,0.04)', borderLeft: '3px solid #d97706' }}
              >
                <p className="text-blue-900 italic leading-7" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.1rem' }}>
                  "Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father."
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-2">— Matthew 10:29</p>
              </blockquote>

              <div className="space-y-5 text-gray-600 leading-8" style={{ fontSize: '1.04rem' }}>
                <p>
                  This is my second trip to Trivandrum to meet these gorgeous precious kids. I was waiting to board my flight after spending my day with this family — and I was so amazed of how the Lord knit things together to care even for these little sparrows.
                </p>
                <p>
                  They were hungry, lost their father, with no hope of continuing school. Honestly, not even proper clothing, health issues, no pair of sandals, and they were cold. The Lord flashed the beam into their hopeless life through people like you who donate to Bethel / Sowers — especially <strong className="text-blue-900">Patty Tyson and Family</strong>.
                </p>

                <blockquote
                  className="px-6 py-4 rounded-xl"
                  style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}
                >
                  <p className="text-blue-900 italic leading-7" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem' }}>
                    "I had great peace in my heart after this second trip — their worries were blown away, they have peace, great confidence, and their countenance is lifted up."
                  </p>
                </blockquote>

                <p>
                  They are getting <strong className="text-blue-900">A+ grades</strong> in their studies — Oh! What a great joy through the Lord! Now they are both very clear about what they want to be. <strong className="text-blue-900">Jomol</strong> wants to spread her wings in the field of medicine. <strong className="text-blue-900">Jyothi</strong> — the younger — wants to become a Bank Employee.
                </p>
                <p>
                  I thought Jyothi still needed time to figure out her future, but I was wrong. She has a clear vision about her life. Thanks Patty for investing into their lives for time and eternity.
                </p>
              </div>

              <div
                className="mt-8 rounded-xl px-6 py-5 text-center"
                style={{ background: 'linear-gradient(135deg,#1e3a8a,#1e40af)', color: '#ffffff' }}
              >
                <p className="text-amber-300 font-semibold tracking-wide text-xs uppercase mb-2">Mission Complete</p>
                <p className="text-white/90 leading-7" style={{ fontSize: '1rem' }}>
                  MISSION COMPLETE for now — waiting for more.
                </p>
                <p className="text-white/60 text-sm mt-1 italic">
                  The Lord who sees the sparrow, sees Jomol and Jyothi too.
                </p>
              </div>

              <p className="mt-6 text-center font-bold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.7rem', color: '#d97706' }}>
                "Transforming lives slowly, but surely."
              </p>
            </div>

            {/* Image card */}
            <div className="lg:sticky lg:top-8">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '3px solid rgba(30,58,138,0.25)' }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/orp.webp"
                    alt="Jomol and Jyothi — Trivandrum"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.75) 0%, transparent 45%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 text-center">
                    <p className="text-amber-400 text-[9px] tracking-[0.3em] uppercase font-semibold">✦ Jomol &amp; Jyothi</p>
                    <p className="text-white/80 text-xs mt-0.5">Trivandrum, India</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* ── Combined CTA ── */}
      <section style={{ background: 'linear-gradient(135deg,#0a1535 0%,#0d1f4a 60%,#0f2255 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">✦ Join Hands ✦</p>
          <h2
            className="text-white font-semibold italic mb-5"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)' }}
          >
            Do Contact Us for More Updates
          </h2>
          <p className="text-white/75 leading-8 mb-8 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            Reach these families — help transform their stories for His Glory. Your prayer, your giving, and your love makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}
            >
              ✉ Contact Pastor Jay
            </Link>
            <a
              href="https://donorbox.org/sowers-ministry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.10)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              ❤ Support These Families
            </a>
          </div>
        </div>
      </section>

      {/* ── Scripture footer ── */}
      <div style={{ background: 'linear-gradient(135deg,#fffbeb 0%,#fef3c7 100%)', borderTop: '1px solid #fde68a' }} className="py-10 px-6 text-center">
        <p className="text-blue-900/70 italic text-sm max-w-2xl mx-auto leading-7">
          "He defends the cause of the fatherless and the widow, and loves the foreigner residing among you, giving them food and clothing."
          <span className="text-amber-600 font-bold not-italic ml-2">— Deuteronomy 10:18</span>
        </p>
      </div>

    </main>
  );
}
