import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Christmas Joy',
  description:
    'Christmas Joy is a Sowers Ministry outreach serving children in remote and underserved regions of India with clothing, meals, toys, and hope.',
};

const images = [
  { src: '/chrjoy-opt.webp',   alt: 'Christmas Joy outreach gathering',         caption: 'Children blessed through Christmas Joy' },
  { src: '/chrjoy2-opt.webp',  alt: 'Christmas Joy event moments',              caption: 'Sharing joy in remote communities' },
  { src: '/chrjoy3-opt.webp',  alt: 'Children receiving Christmas Joy gifts',   caption: 'Gift packs prepared with care' },
  { src: '/chrjoyba-opt.webp', alt: 'Christmas Joy ministry in the field',      caption: 'Serving children with love and care' },
  { src: '/chrjoy7.webp',      alt: 'Christmas Joy programme activity',         caption: 'Reaching new areas every year' },
  { src: '/chrjoy8.webp',      alt: 'Christmas Joy outreach to children',       caption: 'Dignity restored through giving' },
  { src: '/chrjoy10-opt.webp', alt: 'Christmas Joy children gathered together', caption: 'Joy shared among children and families' },
  { src: '/gal1-opt.webp',     alt: 'Christmas Joy gift and outreach moment',   caption: 'Nutritious care reaching children' },
];

const videos = [
  { year: '2021', title: 'Christmas Joy 2021', embed: 'https://www.youtube.com/embed/ErsCHzPuRNw', note: 'Christmas Joy outreach moments from 2021.' },
  { year: '2022', title: 'Christmas Joy 2022', embed: 'https://www.youtube.com/embed/klnochde08o', note: 'A glimpse into the children, communities, and care reached in 2022.' },
  { year: '2023', title: 'Christmas Joy 2023', embed: 'https://www.youtube.com/embed/3ahgbMShGhQ', note: 'Christmas Joy in action during the 2023 outreach season.' },
  { year: '2024', title: 'Christmas Joy 2024', embed: 'https://www.youtube.com/embed/1447mj_x5A0', note: 'Recent field footage from the 2024 Christmas Joy programme.' },
];

const boxItems = [
  { emoji: '🍱', label: 'Nutritious Meal',    desc: 'A hot, nutritious meal served with love on Christmas Day.' },
  { emoji: '👗', label: 'New Outfit',         desc: 'A complete set of new clothing — shirt, pants or skirt — bright and beautiful.' },
  { emoji: '👟', label: 'Flip Flops / Shoes', desc: 'Brand-new footwear, often the first pair a child has ever owned.' },
  { emoji: '🧸', label: 'A Toy',             desc: 'Something to play with — perhaps the first toy a child has ever received.' },
  { emoji: '🍬', label: 'Candy & Sweets',    desc: 'Simple joys that speak volumes to a child who goes without.' },
];

export default function ChristmasJoyPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative -mt-[76px] h-[65vh] w-full overflow-hidden">
        <Image
          src="/chjoyh.png"
          alt="Christmas Joy — Sowers Ministry International"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.50) 12%, rgba(0,0,0,0.10) 28%, transparent 44%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(3,6,16,0.97) 0%, rgba(3,6,16,0.85) 16%, rgba(3,6,16,0.55) 34%, rgba(3,6,16,0.15) 52%, transparent 66%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.35) 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 pb-12 sm:pb-16 flex flex-col items-center text-center pointer-events-none select-none">
          <div className="flex items-center gap-4 mb-5 w-full max-w-lg px-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
            <span className="text-amber-400/70 text-[9px] tracking-[0.45em] uppercase font-medium whitespace-nowrap">Annual Outreach</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
          </div>
          <p className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-medium mb-3">Sowers Ministry International</p>
          <h1 className="font-semibold italic leading-none mb-3 text-white px-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '0.02em', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            Christmas Joy
          </h1>
          <p className="text-white/45 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-5">Clothing &nbsp;&middot;&nbsp; Meals &nbsp;&middot;&nbsp; Gifts &nbsp;&middot;&nbsp; Hope</p>
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
            { num: '8,000+', label: 'Boxes Since Inception 2020' },
            { num: '5',      label: 'States — KL · KA · AP · TG · OD' },
            { num: '$30',    label: 'Sponsors One Child' },
            { num: '3,000',  label: 'Goal for This Year' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="font-bold text-amber-400" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem,4vw,2.8rem)' }}>{s.num}</div>
              <div className="text-white/60 text-xs mt-1 leading-tight tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; Dear Friends &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              More Than Gifts &mdash; It Is Dignity
            </h2>
            <div className="flex items-center gap-3 justify-center mt-4">
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-amber-400 text-sm">&#10022;</span>
              <div className="h-px w-20 bg-amber-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

            <div className="space-y-5 text-gray-600 leading-9" style={{ fontSize: '1.05rem' }}>
              <p>
                India has become a world leader in religious persecution. Their government declared that Hinduism is the only religion, and many states have made it illegal to convert or practise Christianity. Christians are being dragged into the streets and beaten for singing Christmas carols, pastors are being routinely jailed. Organisations like Compassion International and Samaritan&apos;s Purse have been evicted, even though the government knows there is no one in the country to support malnourished and suffering children.
              </p>
              <p>
                India is full of wonders, colours, beautiful people, and exciting exotic adventures. But it appears to care nothing for the most vulnerable population &mdash; the poor and destitute. The small villages have been hit unreasonably hard. A true humanitarian crisis has developed, and children are suffering the most. On a good day, a child may receive one small meal. Today, those meals come every other day if they are lucky.
              </p>
              <p>
                The situation is heartbreaking and seems overwhelming &mdash; <strong className="text-blue-900">except for the fact that we have a big God</strong> to open doors to relieve their pain.
              </p>

              <blockquote className="px-6 py-5 rounded-xl" style={{ background: 'rgba(30,58,138,0.05)', borderLeft: '3px solid #d97706' }}>
                <p className="text-blue-900 italic leading-8" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem' }}>
                  &ldquo;Sowers Ministry is in country and ready to help. The focus is on the small villages hit hardest. The plan is to deliver boxes of joy to each child &mdash; your gift box of love will contain a nutritious meal, a new outfit, flip flops, a toy, and candy.&rdquo;
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-3">&mdash; Pastor Jay</p>
              </blockquote>

              <p>
                You can sponsor one child and a box for <strong className="text-amber-600">$30</strong>. That is all it will take to bring joy into the life of a child in India &mdash; and no child will be turned away, regardless of their faith.
              </p>
              <p>
                Since our inception in <strong className="text-blue-900">2020</strong>, we have distributed over <strong className="text-blue-900">8,000 boxes</strong> across <strong className="text-blue-900">Kerala, Karnataka, Andhra Pradesh, Telangana, and Odisha</strong>. This year we are hoping to give <strong className="text-blue-900">3,000 boxes</strong>. Please help us be faithful in meeting this need again and growing the ministry as more churches reach out to us for help.
              </p>
            </div>

            {/* Box contents card */}
            <div className="lg:sticky lg:top-8">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #fde68a', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}>
                <div style={{ background: 'linear-gradient(135deg,#0a1535,#0d1f4a)' }} className="px-6 py-5">
                  <p className="text-amber-400 text-[10px] tracking-[0.35em] uppercase font-semibold mb-1">&#10022; Inside the Box &#10022;</p>
                  <h3 className="text-white font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem' }}>
                    What&apos;s in a Surprise Shoebox?
                  </h3>
                </div>
                <div className="bg-amber-50/60 p-5 space-y-3">
                  {boxItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4" style={{ border: '1px solid #fde68a' }}>
                      <div className="text-2xl flex-shrink-0">{item.emoji}</div>
                      <div>
                        <div className="font-semibold text-blue-900 text-sm">{item.label}</div>
                        <div className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 text-center">
                    <p className="text-amber-600 font-bold text-xl" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>
                      All for just $30 per child
                    </p>
                    <Link
                      href="/donate"
                      className="mt-3 inline-block px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 6px 20px rgba(217,119,6,0.35)' }}
                    >
                      🎁 Sponsor a Child Now
                    </Link>
                  </div>
                </div>
              </div>
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
              Christmas Joy in Action
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl group ${i === 0 || i === 3 || i === 6 ? 'md:row-span-2' : ''}`}
                style={{
                  aspectRatio: (i === 0 || i === 3 || i === 6) ? '3/4' : '4/3',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(8,18,42,0.80) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/90 text-xs leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEOS */}
      <section style={{ background: '#fefcf8' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">&#10022; Watch the Ministry &#10022;</p>
            <h2 className="text-blue-900 font-semibold italic" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
              Christmas Joy Videos
            </h2>
            <div className="flex items-center gap-3 justify-center mt-4">
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-amber-400 text-sm">&#10022;</span>
              <div className="h-px w-20 bg-amber-300" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.10)', border: '1px solid #fde68a' }}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={v.embed}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
                <div className="px-5 py-4 bg-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] tracking-[0.25em] font-semibold px-2 py-0.5 rounded-full" style={{ background: '#fef3c7', color: '#b45309' }}>{v.year}</span>
                    <span className="text-blue-900 font-semibold text-sm">{v.title}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#0a1535 0%,#0d1f4a 60%,#0f2255 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">&#10022; You Are Needed &#10022;</p>
          <h2 className="text-white font-semibold italic mb-5" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Sponsor a Shoebox This Christmas
          </h2>
          <p className="text-white/75 leading-8 mb-2 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            For just <strong className="text-amber-400">$30</strong>, you can bring a child joy they will never forget. No child will be turned away, regardless of their faith.
          </p>
          <p className="text-white/50 text-sm mb-8">Your gift covers: nutritious meal &middot; new outfit &middot; flip flops &middot; toy &middot; candy</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#ffffff', boxShadow: '0 6px 20px rgba(217,119,6,0.40)' }}>
              🎁 Sponsor a Child &mdash; $30
            </Link>
            <Link href="/#contact" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.10)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}>
              &#9993; Contact Us
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-6">Sowers Ministry International is a registered nonprofit. All donations are tax-deductible.</p>
        </div>
      </section>

      {/* Scripture footer */}
      <div style={{ background: 'linear-gradient(135deg,#fffbeb,#fef3c7)', borderTop: '1px solid #fde68a' }} className="py-10 px-6 text-center">
        <p className="text-blue-900/70 italic text-sm max-w-2xl mx-auto leading-7">
          &ldquo;Pure and undefiled religion before God the Father is this: to visit orphans and widows in their trouble.&rdquo;
          <span className="text-amber-600 font-bold not-italic ml-2">&mdash; James 1:27</span>
        </p>
      </div>

    </main>
  );
}
