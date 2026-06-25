import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'My Arrows' };

export default function MyArrowsPage() {
  return (
    <main>
      <section className="page-hero py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🏹</div>
          <div className="gold-badge mb-4">✦ The Next Generation ✦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">My Arrows</h1>
          <div className="wave-divider" />
          <p className="text-blue-800 italic text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
            "Like arrows in the hands of a warrior are children born in one's youth. Blessed is the man whose quiver is full of them."
          </p>
          <p className="text-amber-600 font-bold mt-3 text-sm">— Psalm 127:4–5</p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border-2 border-dashed border-amber-300 rounded-2xl p-10 text-center mb-12">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Page Being Designed</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Stories, photos, and updates about the children and young people in our care are coming soon to this page.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '📚', title: 'Education', desc: 'Equipping the next generation with education, faith, and a vision for their communities.' },
              { icon: '❤', title: 'Care & Love', desc: 'Every child in our care is known by name and loved as a gift from God.' },
              { icon: '🌱', title: 'Future Leaders', desc: 'Today\'s arrows become tomorrow\'s arrows of the Gospel in their own generation.' },
            ].map((c) => (
              <div key={c.title} className="card-lift bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-blue-900 font-bold mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-12 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-blue-100 italic text-lg mb-3">"Children are a heritage from the Lord, offspring a reward from him."</p>
          <cite className="text-amber-400 font-semibold not-italic text-sm">— Psalm 127:3</cite>
          <div className="mt-6">
            <a href="https://donorbox.org/sowers-ministry" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm transition-colors">
              ❤ Sponsor a Child
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
