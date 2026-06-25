import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PastorCarousel from './PastorCarousel';

export const metadata: Metadata = {
  title: 'My Team — Adopt-A-Pastor',
  description:
    'Over 1,300 native pastors serve on the front lines of the Gospel in rural India. Learn how you can Adopt-A-Pastor and stand with them monthly.',
};

const pdfs = [
  { file: 'ANANIYA ASI.pdf',               name: 'Ananiya Asi',              img: null },
  { file: 'BABU RAO SOSEM.pdf',            name: 'Babu Rao Sodem',           img: 'Pastor Babu Rao Sodem.webp' },
  { file: 'BAITA PRASAD.pdf',              name: 'Baita Prasad',             img: 'Pastor Prasad Baita.webp' },
  { file: 'CHANTI BABU GONDHI.pdf',        name: 'Chanti Babu Gondhi',       img: 'Pastor Chanti Babu Gondhe.webp' },
  { file: 'DAIVA PRAKASH KURASAM.pdf',     name: 'Daiva Prakash Kursam',     img: 'Pastor Daiva Prasad Kursam.webp' },
  { file: 'DANIEL CHELLU.pdf',             name: 'Daniel Chellu',            img: 'Pastor Daniel Chellu.webp' },
  { file: 'EMMANUEL KAVALA.pdf',           name: 'Emmanuel Kavala',          img: 'Pastor.Emmanuel Kavala.webp' },
  { file: 'ESHWARA RAO DARABOINA.pdf',     name: 'Eshwara Rao Daraboina',    img: 'Pastor Eeswar Rao Daraboina.webp' },
  { file: 'ESU RAJU PEDDEHAM.pdf',         name: 'Esu Raju Peddeham',        img: null },
  { file: 'HOSEA CHELLU.pdf',              name: 'Hosea Chellu',             img: null },
  { file: 'ISRAEL BETAMPUDI.pdf',          name: 'Israel Betampudi',         img: 'Pastor. Israel Bethampudi.webp' },
  { file: 'JACOB MANEPALLI.pdf',           name: 'Jacob Manepalli',          img: null },
  { file: 'JOHN CHILAKA.pdf',              name: 'John Chilaka',             img: null },
  { file: 'JOHN VIPPILI.pdf',              name: 'John Vippili',             img: null },
  { file: 'KANNA RAO SOYAM.pdf',           name: 'Kanna Rao Soyam',          img: 'Pastor Kanna Rao Soyam.webp' },
  { file: 'KANNAPPA MADIVI.pdf',           name: 'Kannappa Madivi',          img: 'Pastor Kannappa Madivi.webp' },
  { file: 'KUMAR RAJU GONE.pdf',           name: 'Kumar Raju Gone',          img: 'Pastor.Kumar Raja Gone.webp' },
  { file: 'LAKSHMANA RAO VONKA.pdf',       name: 'Lakshmana Rao Vonka',      img: 'Pastor Lakshman Vanka.webp' },
  { file: 'MAHESH MADIVI.pdf',             name: 'Mahesh Madivi',            img: 'Pastor Mahesh Babu Madivi.webp' },
  { file: 'NAGA RAJU (EZRA) THATI.pdf',    name: 'Naga Raju (Ezra) Thati',   img: 'Pastor.Naga Raju Thaati.webp' },
  { file: 'NIREEKSHAN RAO KURSAM.pdf',     name: 'Nireekshan Rao Kursam',    img: null },
  { file: 'PRASAD (DANIEL) KURAM.pdf',     name: 'Prasad (Daniel) Kuram',    img: 'Pastor Prasad Kuram.webp' },
  { file: 'RAMBABU KOWASI.pdf',            name: 'Rambabu Kovasi',           img: 'Pastor Rambabu Kovasi.webp' },
  { file: 'RAMBABU NERSU.pdf',             name: 'Rambabu Nersu',            img: 'Pastor Ram Babu Nersu.webp' },
  { file: 'RAMESH CHILAKA.pdf',            name: 'Ramesh Chilaka',           img: 'Pastor Ramesh Chilaka.webp' },
  { file: 'SANTHOSAMMA ERRA.pdf',          name: 'Santhosamma Erra',         img: 'Pastor.Santhosamma Katti.webp' },
  { file: 'SATYAM NARLAPATI.pdf',          name: 'Satyam Narlapati',         img: 'Pastor Satyam Narlapati.webp' },
  { file: 'SEETHA KAKA.pdf',              name: 'Seetha Kaka',              img: 'Pastor Seetha Kaaka.webp' },
  { file: 'SHARATH BABU NALLAMALLI.pdf',   name: 'Sharath Babu Nallamalli',  img: null },
  { file: 'SHIVA KRISHNA OOKE.pdf',        name: 'Shiva Krishna Ooke',       img: 'Pastor Siva Krishna Vuke.webp' },
  { file: 'SURESH (SIMYONU) MAREEDU.pdf',  name: 'Suresh (Simeon) Mareedu',  img: 'Pastor.Simeon Mareedu.webp' },
  { file: 'THOMAS THUMPATI.pdf',           name: 'Thomas Thumpati',          img: 'Pastor Thomas Thumpati.webp' },
  { file: 'TIRUPATHI KOWASI.pdf',          name: 'Tirupathi Kovasi',         img: 'Pastor Tirupataiah Kovasi.webp' },
  { file: 'VARA PRASAD KODAMANCHALI.pdf',  name: 'Vara Prasad Kodamanchali', img: 'Pastor Vara Prasad Kodamanchili.webp' },
  { file: 'VENKATESWARLU MADAKAM.pdf',     name: 'Venkateswarlu Madakam',    img: 'Pastor Venkateswar Madakam.webp' },
];

export default function MyTeamPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative -mt-[76px] h-[65vh] w-full overflow-hidden">
        <Image
          src="/church1.webp"
          alt="My Team — Pastors of Sowers Ministry International"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(5,15,45,0.48)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 10%, rgba(0,0,0,0.08) 26%, transparent 42%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(3,6,16,0.97) 0%, rgba(3,6,16,0.85) 14%, rgba(3,6,16,0.50) 32%, rgba(3,6,16,0.10) 50%, transparent 64%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 42%, rgba(3,6,16,0.52) 75%, rgba(3,6,16,0.80) 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 pb-12 sm:pb-16 flex flex-col items-center text-center pointer-events-none select-none">
          <div className="flex items-center gap-4 mb-5 w-full max-w-lg px-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">The Workers</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '0.02em', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            My Team
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">1,300+ Native Pastors &nbsp;&middot;&nbsp; Rural India &nbsp;&middot;&nbsp; Front Lines</p>
          <div className="flex items-center gap-3 w-full max-w-xs px-6">
            <div className="flex-1 h-px bg-amber-400/30" />
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <div className="flex-1 h-px bg-amber-400/30" />
          </div>
        </div>
      </section>

      {/* ADOPT-A-PASTOR HEADER */}
      <section style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; pastorjay.org &#10022;</p>
          <h2 className="text-blue-900 font-semibold italic mb-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
            Adopt-A-Pastor
          </h2>
          <div className="flex items-center gap-3 justify-center mb-5">
            <div className="h-px w-20 bg-amber-300" />
            <span className="text-amber-400 text-sm">&#10022;</span>
            <div className="h-px w-20 bg-amber-300" />
          </div>
          <p className="text-blue-900/70 italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}>
            What is Adopt-A-Pastor?
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-600 leading-9" style={{ fontSize: '1.05rem' }}>

          <p>Pastors in India, especially in rural areas, are always on the front line of Persecution.</p>

          <p>
            Living with their siblings in small thatched-roof leaking huts, having only one or two pairs of white shirt and pant which turn yellow due to un-bleach &mdash; they walk miles on dark paths in the dense forests, pedal counties reaching villages for the sake of the Gospel. Beaten to death, churches burnt, family members threatened, starved, suffered from malaria, typhoid, jaundice due to contaminated water and food &mdash; but they never imagine a day remaining silent without preaching the Gospel, or not carrying Bible in their hands.
          </p>

          <blockquote className="px-7 py-6 rounded-2xl" style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '4px solid #d97706' }}>
            <p className="text-blue-900 italic leading-9" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>
              &ldquo;In the villages where darkness prevails they are the true torches; where there is confusion they show the wisdom of answers; where sickness drags the whole village into death through contagious diseases they are the primary medical caregivers and simultaneously the faith healers too &mdash; finally they are the transformers of lies from ages into truth, changing entire barbaric cultures into Christ-centred villages. It is a noble task.&rdquo;
            </p>
            <p className="text-amber-600 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
          </blockquote>

          <p>We want to honour them with a monthly donation that could help to feed their families and take care of their children&apos;s education.</p>

          {/* 3 benefit cards */}
          <div className="grid md:grid-cols-3 gap-5 pt-2">
            {[
              { icon: '&#128220;', title: 'Quarterly Report',   desc: 'You may receive a Quarterly Report from your adopted pastor — updates from the field, lives changed, and answers to prayer.' },
              { icon: '&#128247;', title: 'Share Your Family',  desc: 'You can share your family picture with details and prayer needs with them — building a real relationship across the miles.' },
              { icon: '&#128591;', title: 'Lifted in Prayer',   desc: "Every Pastor's Church observes fasting prayer every Friday. Your family will surely be uplifted in their prayers." },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a', boxShadow: '0 6px 24px rgba(0,0,0,0.07)' }}>
                <div className="text-4xl mb-4" dangerouslySetInnerHTML={{ __html: card.icon }} />
                <h3 className="text-blue-900 font-bold text-base mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl px-7 py-5 text-center" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
            <p className="text-white leading-8">
              If you are interested in <strong className="text-amber-400">Adopt-A-Pastor</strong>, download a Profile below and let us know &mdash; we will connect you with that Pastor.
            </p>
          </div>

        </div>
      </section>

      {/* PASTOR CAROUSEL */}
      <section style={{ borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a' }}>
        <div className="max-w-4xl mx-auto px-0 py-0">
          <div className="text-center py-10 px-6" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)' }}>
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; The Faces &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
              Pastors in the Field
            </h2>
            <p className="text-gray-500 text-sm mt-2">Click the arrows or any thumbnail to browse all {40} pastors</p>
          </div>
          <PastorCarousel />
        </div>
      </section>

      {/* PDF DOWNLOADS */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; Pastor Profiles &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
              Download &amp; Adopt
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              Each PDF contains the pastor&apos;s profile, ministry details, and contact information. Download one, choose who you feel called to support, then contact us.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pdfs.map((pdf, i) => (
              <a
                key={i}
                href={`/myteam/${encodeURIComponent(pdf.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)', border: '1px solid rgba(245,158,11,0.35)' }}
              >
                {/* Photo or placeholder */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  {pdf.img ? (
                    <Image
                      src={`/myteam/${encodeURIComponent(pdf.img)}`}
                      alt={pdf.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="text-amber-400/60 text-[9px] tracking-widest uppercase">Profile</span>
                    </div>
                  )}
                  {/* PDF badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide text-white" style={{ background: 'rgba(217,119,6,0.90)' }}>PDF</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.65) 0%, transparent 50%)' }} />
                </div>

                {/* Name */}
                <div className="px-3 py-2.5 bg-white text-center" style={{ borderBottom: '1px solid #fde68a' }}>
                  <p className="text-blue-900 font-semibold text-[11px] leading-snug group-hover:text-amber-600 transition-colors">Pastor {pdf.name}</p>
                </div>

                {/* Download bar */}
                <div className="flex items-center justify-center gap-1.5 py-2.5" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-amber-700 text-[10px] font-bold uppercase tracking-wide">Download</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '1px solid #fde68a' }}>
            <p className="text-blue-900 font-semibold mb-2">Ready to adopt a pastor?</p>
            <p className="text-gray-500 text-sm mb-5">After downloading a profile, reach out to us and we will connect you with your chosen pastor directly.</p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 6px 20px rgba(217,119,6,0.35)' }}>
              &#9993;&nbsp; Contact Us to Get Connected
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <div style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }} className="py-12 px-6 text-center">
        <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; Romans 10:15 &#10022;</p>
        <p className="text-white/80 italic max-w-2xl mx-auto leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}>
          &ldquo;How beautiful are the feet of those who bring good news!&rdquo;
        </p>
        <div className="flex items-center gap-3 justify-center mt-5">
          <div className="h-px w-16 bg-amber-400/30" />
          <span className="text-amber-400/50 text-xs">&#10022;</span>
          <div className="h-px w-16 bg-amber-400/30" />
        </div>
      </div>

    </main>
  );
}
