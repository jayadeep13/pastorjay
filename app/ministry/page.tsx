import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Ministry — SOWERS',
};

export default function MinistryPage() {
  const letters = [
    { l: 'S', word: 'Serving', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { l: 'O', word: 'Orphans', color: 'bg-rose-100 text-rose-800 border-rose-200' },
    { l: 'W', word: 'Widows', color: 'bg-violet-100 text-violet-800 border-violet-200' },
    { l: 'E', word: 'Educating &', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { l: 'R', word: 'Reaching', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { l: 'S', word: 'Society', color: 'bg-sky-100 text-sky-800 border-sky-200' },
  ];

  const pillars = [
    {
      icon: '👶',
      letter: 'O',
      title: 'Orphans',
      color: 'border-rose-300',
      bgAccent: 'bg-rose-50',
      desc: 'Millions of orphans in India risk exploitation, trafficking, and a life without love. We provide education, food, shelter, medical care — and the transforming love of Christ — to precious children who have been abandoned or bereaved.',
      points: ['Safe shelter & housing', 'Education & school fees', 'Medical care', 'Spiritual discipleship'],
    },
    {
      icon: '🕊️',
      letter: 'W',
      title: 'Widows',
      color: 'border-violet-300',
      bgAccent: 'bg-violet-50',
      desc: 'In India, widows face profound social exclusion — barred from work, ostracized by communities, and left without provision. We step in with food, rent support, medical care, and the dignity they deserve as beloved daughters of God.',
      points: ['Monthly food provision', 'Rent & housing support', 'Medical assistance', 'Community & belonging'],
    },
    {
      icon: '📖',
      letter: 'E',
      title: 'Educating',
      color: 'border-emerald-300',
      bgAccent: 'bg-emerald-50',
      desc: 'Through BTCP (Bible Training Centre for Pastors) and our mobile Bible School, we train tribal men and women to become effective ministers of the Gospel — equipping them with theology, practical skills, and spiritual authority.',
      points: ['BTCP certification', 'Mobile Bible School', 'Tribal language training', '1,300+ graduates'],
    },
    {
      icon: '🌍',
      letter: 'R',
      title: 'Reaching Society',
      color: 'border-amber-300',
      bgAccent: 'bg-amber-50',
      desc: 'Our native pastors carry the radical, counter-cultural love of Jesus to Dalits and unreached communities — planting churches, healing the sick, and proclaiming hope where despair has reigned for generations.',
      points: ['Church planting', 'Tribal outreach', 'Healing ministry', '1,300+ village churches'],
    },
  ];

  const tribes = ['Koya', 'Yerukula', 'Lambadi', 'Banjara', 'Kondareddy', 'Gondi', 'Oraon', 'Munda'];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-badge mb-4">✦ Our Mission ✦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Ministry — <span className="shimmer-gold">SOWERS</span>
          </h1>
          <div className="wave-divider" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every letter carries a sacred calling — a covenant to the forgotten, the broken, and the unreached across India.
          </p>
        </div>
      </section>

      {/* SOWERS Acronym */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-badge mb-4">✦ Our Identity ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Does SOWERS Stand For?
            </h2>
            <div className="wave-divider" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {letters.map((item, i) => (
              <div key={i} className={`card-lift rounded-2xl p-5 text-center border-2 ${item.color} ${item.color.includes('bg') ? '' : 'bg-white'}`}>
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-xl font-bold border-2 ${item.color}`}>
                  {item.l}
                </div>
                <div className="text-sm font-semibold text-gray-700 leading-tight">{item.word}</div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-blue-800 italic text-lg leading-relaxed mb-3">
              "Before I formed you in the womb I knew you; before you were born I sanctified you; I ordained you a prophet to the nations."
            </p>
            <cite className="text-amber-600 font-semibold not-italic text-sm">
              — Jeremiah 1:5 · The scripture spoken to Pastor Jay, August 21, 1994
            </cite>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="bg-pastel-blue py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-badge mb-4">✦ The Four Pillars ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Our Ministry Focus</h2>
            <div className="wave-divider mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className={`card-lift bg-white rounded-3xl p-8 border-2 ${p.color}`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className={`text-4xl flex-shrink-0`}>{p.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">{p.title}</h3>
                    <div className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold mt-1 ${p.bgAccent} border ${p.color}`}>
                      SOWERS · {p.letter}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-amber-500 font-bold">✓</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BTCP Training */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gold-badge mb-4">✦ Bible Training ✦</div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                BTCP — Training the Trainers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Bible Training Centre for Pastors (BTCP) is a rigorous, practical theological training program designed specifically for indigenous pastors in India. Students study while continuing their ministry — making it accessible to those who cannot leave their villages.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mobile Bible School brings the classroom into the tribal heartland — training men and women who speak the local languages and know the local culture. These graduates become the most effective missionaries possible because they already belong to the communities they serve.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { num: '1,300+', label: 'Pastors Trained' },
                  { num: '24+', label: 'Years Running' },
                  { num: '3', label: 'States Covered' },
                  { num: '1,300+', label: 'Churches Planted' },
                ].map((s) => (
                  <div key={s.label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-900">{s.num}</div>
                    <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-pastel-amber border border-amber-100 rounded-2xl p-7 mb-5">
                <h3 className="text-blue-900 font-bold text-lg mb-3">Tribes We Reach</h3>
                <div className="flex flex-wrap gap-2">
                  {tribes.map((t) => (
                    <span key={t} className="bg-amber-100 border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                  <span className="bg-gray-100 border border-gray-200 text-gray-500 px-3 py-1 rounded-full text-sm">& more</span>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
                <h3 className="text-blue-900 font-bold text-lg mb-3">States We Work In</h3>
                <ul className="space-y-3">
                  {[
                    { state: 'Andhra Pradesh', note: 'Primary base — Vijayawada region, coastal districts' },
                    { state: 'Telangana', note: 'Tribal heartland, Adivasi communities' },
                    { state: 'Odisha', note: 'Remote jungle villages, Scheduled Tribe areas' },
                  ].map((s) => (
                    <li key={s.state} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{s.state}</div>
                        <div className="text-gray-500 text-xs">{s.note}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Support the Ministry</h2>
          <p className="text-blue-200 mb-8">Every gift funds pastoral training, feeds orphans, and cares for widows. 100% goes to the field.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://donorbox.org/sowers-ministry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full transition-colors"
            >
              ❤ Donate Now
            </a>
            <Link href="/reaching" className="px-8 py-3.5 border-2 border-white/50 text-white hover:bg-white/10 font-bold rounded-full transition-colors">
              See Impact Stories →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
