import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Joy of Suffering — Persecution',
};

export default function PersecutionPage() {
  const prayerPoints = [
    { title: 'Protection for Pastors', desc: 'Our native pastors face physical threats, eviction, and arrest. Pray for their safety, courage, and families.' },
    { title: 'Wisdom for Leaders', desc: 'Pray that Pastor Jay and our leadership team navigate threats with wisdom, discernment, and unshakeable peace.' },
    { title: 'Comfort for Families', desc: 'Many families have lost fathers, sons, and brothers to persecution. Pray for the widows and children left behind.' },
    { title: 'Change in Policy', desc: 'Pray for just governance in India — that religious freedom would be protected and the tide of anti-Christian violence would turn.' },
    { title: 'Grace for Persecutors', desc: 'Jesus said to pray for those who persecute. Pray that those who oppose the Gospel would encounter the love of Christ.' },
    { title: 'Boldness for the Church', desc: 'Pray that persecution would not silence the Church in India but embolden it — as it did in Acts 4.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">✊</div>
          <div className="gold-badge mb-4">✦ Advocacy & Witness ✦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Joy of Suffering
          </h1>
          <div className="wave-divider" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            India is among the most dangerous nations in the world for Christians. Our pastors face threats, beatings, and displacement — yet they press on in faith, counting it a privilege to suffer for Christ.
          </p>
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-blue-900 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-100 italic text-xl leading-relaxed mb-3">
            "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance."
          </p>
          <cite className="text-amber-400 font-semibold not-italic text-sm">— James 1:2–3</cite>
        </div>
      </section>

      {/* The Reality */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="gold-badge mb-4">✦ The Reality ✦</div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                The Cost of Faithful Ministry in India
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                India is not a safe place to be a Christian. Radical religious nationalism has created an environment where believers — particularly converts from Hinduism and tribal religions — face intense social pressure, legal harassment, and outright violence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Churches are burned. Pastors are beaten. Women are assaulted. Families are driven from their homes. In some villages, conversion to Christianity results in the immediate loss of government rations, employment, and community belonging.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our own pastors have been threatened, arrested on false charges, and physically attacked. Pastor Jay himself has survived threats from Hindu radical groups on multiple occasions.
              </p>
              <div className="quote-bar">
                <p className="text-blue-700 italic leading-relaxed">
                  "I have survived malaria, typhus, a catastrophic accident, threats from Hindu radicals, and nights in the freezing jungle. But the anointed walk with the authority of the Lord — and no weapon formed against them shall prosper."
                </p>
                <cite className="text-amber-600 text-sm font-semibold not-italic block mt-2">— Pastor Jay</cite>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🔥', title: 'Churches Burned', desc: 'Dozens of rural churches have been destroyed by radical groups — many of them simple structures our pastors built with their own hands.' },
                { icon: '⚖️', title: 'False Charges', desc: 'Pastors are regularly arrested on fabricated "forced conversion" charges — weaponized laws used to silence Gospel witness.' },
                { icon: '🏠', title: 'Families Displaced', desc: 'Converting Christians are evicted from their homes, denied water access, and cut off from community life in an effort to coerce them back.' },
                { icon: '📰', title: 'Documented & Reported', desc: 'We document persecution cases, advocate with government officials, and partner with organisations that defend Christian rights internationally.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-rose-50 border border-rose-100 rounded-xl p-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-blue-900 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Response */}
      <section className="bg-pastel-rose py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-badge mb-4">✦ Our Response ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">How We Respond to Persecution</h2>
            <div className="wave-divider mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✝', title: 'Press On in Faith', desc: 'Our pastors do not retreat when threatened. They count it a privilege to suffer as Christ suffered. The churches keep meeting.' },
              { icon: '🕊️', title: 'Peaceful Advocacy', desc: 'Pastor Jay advocates peacefully for Christian rights through dialogue with officials, media engagement, and international partnerships.' },
              { icon: '❤', title: 'Support the Suffering', desc: 'We provide practical care — food, shelter, legal support — to families of pastors who have been imprisoned or driven from their homes.' },
            ].map((r, i) => (
              <div key={i} className="card-lift bg-white rounded-2xl p-6 border border-rose-100">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-blue-900 font-bold text-base mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joy in Suffering */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="gold-badge mb-4">✦ The Paradox ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Why "Joy" of Suffering?</h2>
            <div className="wave-divider mt-4" />
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
              The early Church was not diminished by persecution — it was refined and multiplied by it. The Apostle Paul wrote his most joyful letter (Philippians) from a Roman prison. Stephen forgave his murderers as stones fell.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our pastors in India have learned what the early Church knew: that suffering for the Name of Jesus is not a tragedy to be escaped, but a participation in His sufferings — and a sign that the Gospel is threatening the kingdom of darkness.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              This is why we use the phrase "Joy of Suffering." Not because suffering is pleasant — it is not. But because suffering for Christ produces something that comfort never can: tested faith, deep character, and the kind of testimony that turns persecutors into believers.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-blue-800 italic text-sm leading-relaxed mb-2">
                  "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."
                </p>
                <cite className="text-amber-600 text-xs font-bold not-italic">— Matthew 5:10</cite>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <p className="text-amber-900 italic text-sm leading-relaxed mb-2">
                  "For it has been granted to you on behalf of Christ not only to believe in him, but also to suffer for him."
                </p>
                <cite className="text-amber-600 text-xs font-bold not-italic">— Philippians 1:29</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Points */}
      <section className="bg-pastel-blue py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-badge mb-4">✦ How You Can Help ✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Pray with Us</h2>
            <div className="wave-divider mt-4" />
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Prayer is not a last resort — it is the first and most powerful weapon. Here are specific ways to pray for the persecuted Church in India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prayerPoints.map((p, i) => (
              <div key={i} className="card-lift bg-white rounded-2xl p-5 border border-blue-100">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="text-blue-900 font-bold text-sm mb-1.5">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Stand with the Persecuted Church</h2>
          <p className="text-blue-200 mb-8">
            Your giving sustains pastors under threat, supports their families, and sends a message that the global Church has not forgotten them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://donorbox.org/sowers-ministry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full transition-colors"
            >
              ❤ Support Persecuted Pastors
            </a>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white/50 text-white hover:bg-white/10 font-bold rounded-full transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
