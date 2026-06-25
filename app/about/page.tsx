import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Pastor Jay',
};

export default function AboutPage() {
  const timeline = [
    { year: '1977', title: 'Born in Vijayawada', desc: 'Born the eldest son in a Dalit slum along the train tracks of Vijayawada, Andhra Pradesh. His father could not afford school fees; the future seemed written in hardship.' },
    { year: '1994', title: 'The Night Everything Changed', desc: 'At 17, attending Bible College, God called him by name three times in the night. A fireball fell before him. He surrendered everything — and nothing has ever been the same.' },
    { year: '1994–1997', title: 'Diploma in Theology', desc: 'Three grueling years of seminary. Healed miraculously from typhoid. Learned English solely from reading the Bible. Emerged with unshakeable faith and a fire for the unreached.' },
    { year: '1999', title: 'Bachelor of Theology', desc: 'Graduated from Emmanuel Theological Seminary, Kota. One of only a few graduates invited to remain as faculty — a testament to his academic and spiritual depth.' },
    { year: '2001', title: 'Bethel Ministries Launched', desc: 'Founded Bethel Ministries with a vision to reach India\'s forgotten — tribal peoples, Dalits, orphans, and widows. First outreach to Koya, Yerukula, Lambadi, Banjara, and Kondareddy tribes.' },
    { year: '2010s', title: 'SOWERS Ministry International', desc: 'Expanded into a transnational ministry with offices in USA and Canada. Launched BTCP (Bible Training Centre for Pastors) and the mobile Bible School to train indigenous pastors.' },
    { year: '2024+', title: '1,300+ Pastors — The Harvest Grows', desc: 'Three states covered. 1,300+ village churches planted. 1,300+ native pastors trained and deployed. The seed sown in faith is bearing fruit beyond all expectation.' },
  ];

  const facts = [
    ['Born', 'Vijayawada, Andhra Pradesh'],
    ['Called', 'August 21, 1994'],
    ['Ordained', '1999'],
    ['Founded Ministry', '2001'],
    ['Ministry Years', '24+'],
    ['Languages', 'Telugu, English, Hindi'],
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="page-hero py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-badge mb-4">✦ The Founder ✦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About Pastor Jay
          </h1>
          <div className="wave-divider" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rev. Jayakumar Babu Salluri — from a Dalit slum in Vijayawada to leading one of India's most impactful indigenous ministries.
          </p>
        </div>
      </section>

      {/* Bio + Fast Facts */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Fast Facts Card */}
            <div>
              <div className="bg-blue-900 rounded-3xl p-8 text-white mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 60 90" className="w-8 h-12">
                      <line x1="30" y1="5" x2="30" y2="85" stroke="#FCD34D" strokeWidth="7" strokeLinecap="round" />
                      <line x1="8" y1="28" x2="52" y2="28" stroke="#FCD34D" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Rev. Jayakumar Babu Salluri</h2>
                    <p className="text-amber-400 text-sm">Chairman, SOWERS Ministry International</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {facts.map(([k, v]) => (
                    <div key={k} className="bg-white/10 rounded-xl p-3">
                      <div className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{k}</div>
                      <div className="text-white text-sm font-medium">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* His Family */}
              <div className="bg-pastel-amber rounded-2xl p-6 border border-amber-100">
                <h3 className="text-blue-900 font-bold text-lg mb-3">His Family</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Pastor Jay is married to <strong>Vijaya</strong>, a faithful partner in ministry who has walked beside him through every trial and triumph. Together they have two sons — <strong>Samuel</strong> and <strong>Mark</strong> — both raised in the context of radical faith and sacrificial service.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The family has relocated multiple times across India and internationally, always following the call of God rather than the comfort of stability.
                </p>
              </div>
            </div>

            {/* Story */}
            <div>
              <div className="gold-badge mb-4">✦ His Story ✦</div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                My Story,<br />for His Glory
              </h2>

              <div className="quote-bar mb-8">
                <p className="text-blue-700 italic text-lg leading-relaxed">
                  "My son, Jayakumar — Before I formed you in the womb I knew you; before you were born I sanctified you; I ordained you a prophet to the nations."
                </p>
                <cite className="text-amber-600 text-sm font-semibold not-italic block mt-2">
                  Jeremiah 1:5 — spoken to Pastor Jay, August 21, 1994
                </cite>
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Born the eldest son in a Dalit slum along the train tracks of Vijayawada, Andhra Pradesh, Jayakumar grew up in grinding poverty. His father — a humble, uneducated man — could not afford school fees. The future seemed written in hardship and obscurity.
                </p>
                <p>
                  At 17, while attending Bible College and planning his escape from that life, God intervened. One night, in the stillness of his dormitory, God called him by name — three times. A fireball of divine presence fell before him. God spoke the words of Jeremiah 1:5 directly to his heart: <em>"Before I formed you in the womb I knew you."</em>
                </p>
                <p>
                  He surrendered everything that night. He wept. He prayed. He said yes. And nothing — not typhoid, not poverty, not Hindu radical threats, not malaria, not a catastrophic automobile accident — has stopped him since.
                </p>
                <p>
                  After seven years of seminary training — battling illness, language barriers, and financial hardship — he launched Bethel Ministries in 2001. Today, he leads SOWERS Ministry International from offices in India, USA, and Canada, and his vision continues to expand.
                </p>
              </div>

              <blockquote className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-blue-800 italic text-base leading-relaxed mb-3">
                  "I have survived malaria three times, typhus, a catastrophic automobile accident, threats from Hindu radicals, thirst, hunger, and nights freezing in the jungle. But the anointed walk with the authority of the Lord."
                </p>
                <cite className="text-amber-600 text-sm font-semibold not-italic">
                  — Rev. Jayakumar Babu Salluri
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-pastel-blue py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-badge mb-4">✦ God's Faithfulness ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">A Life Surrendered</h2>
            <div className="wave-divider mt-4" />
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-12`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow mt-5" />

                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 card-lift">
                      <div className="text-amber-600 font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="text-blue-900 font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Partner with Pastor Jay's Vision</h2>
          <p className="text-gray-500 mb-8">Your giving enables him to keep going — to the tribal villages, the slums, and the forgotten corners of India.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://donorbox.org/sowers-ministry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors"
            >
              ❤ Donate Now
            </a>
            <Link href="/ministry" className="px-8 py-3.5 border-2 border-blue-900 text-blue-900 font-bold rounded-full hover:bg-blue-900 hover:text-white transition-colors">
              Explore Our Ministry →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
