'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

const pastors = [
  { file: 'Pastor Babu Rao Sodem.webp',           name: 'Babu Rao Sodem' },
  { file: 'Pastor Bheemula Salagani.webp',         name: 'Bheemula Salagani' },
  { file: 'Pastor Chanti Babu Gondhe.webp',        name: 'Chanti Babu Gondhe' },
  { file: 'Pastor Daiva Prasad Kursam.webp',       name: 'Daiva Prasad Kursam' },
  { file: 'Pastor Daniel Chellu.webp',             name: 'Daniel Chellu' },
  { file: 'Pastor Eeswar Rao Daraboina.webp',      name: 'Eeswar Rao Daraboina' },
  { file: 'Pastor Elizabeth Meduri.webp',          name: 'Elizabeth Meduri' },
  { file: 'Pastor Kanna Rao Soyam.webp',           name: 'Kanna Rao Soyam' },
  { file: 'Pastor Kannappa Madivi.webp',           name: 'Kannappa Madivi' },
  { file: 'Pastor Lakshman Vanka.webp',            name: 'Lakshman Vanka' },
  { file: 'Pastor Mahesh Babu Madivi.webp',        name: 'Mahesh Babu Madivi' },
  { file: 'Pastor Naga Raju Naaram.webp',          name: 'Naga Raju Naaram' },
  { file: 'Pastor Nagaraju Korsa.webp',            name: 'Nagaraju Korsa' },
  { file: 'Pastor Narshimha Rao Vade.webp',        name: 'Narshimha Rao Vade' },
  { file: 'Pastor Prasad Baita.webp',              name: 'Prasad Baita' },
  { file: 'Pastor Prasad Kuram.webp',              name: 'Prasad Kuram' },
  { file: 'Pastor Ram Babu Nersu.webp',            name: 'Ram Babu Nersu' },
  { file: 'Pastor Rambabu Anantham.webp',          name: 'Rambabu Anantham' },
  { file: 'Pastor Rambabu Kovasi.webp',            name: 'Rambabu Kovasi' },
  { file: 'Pastor Ramesh Chilaka.webp',            name: 'Ramesh Chilaka' },
  { file: 'Pastor Ruth Korsa.webp',                name: 'Ruth Korsa' },
  { file: 'Pastor Satyam Narlapati.webp',          name: 'Satyam Narlapati' },
  { file: 'Pastor Seetha Kaaka.webp',              name: 'Seetha Kaaka' },
  { file: 'Pastor Siva Krishna Vuke.webp',         name: 'Siva Krishna Vuke' },
  { file: 'Pastor Srinivas Madivi.webp',           name: 'Srinivas Madivi' },
  { file: 'Pastor Thomas Thumpati.webp',           name: 'Thomas Thumpati' },
  { file: 'Pastor Tirupataiah Kovasi.webp',        name: 'Tirupataiah Kovasi' },
  { file: 'Pastor Vara Prasad Kodamanchili.webp',  name: 'Vara Prasad Kodamanchili' },
  { file: 'Pastor Venkateswar Madakam.webp',       name: 'Venkateswar Madakam' },
  { file: 'Pastor Venkateswar Rao Aasi.webp',      name: 'Venkateswar Rao Aasi' },
  { file: 'Pastor. Israel Bethampudi.webp',        name: 'Israel Bethampudi' },
  { file: 'Pastor.David Raju Madasu.webp',         name: 'David Raju Madasu' },
  { file: 'Pastor.Emmanuel Kavala.webp',           name: 'Emmanuel Kavala' },
  { file: 'Pastor.Kumar Raja Gone.webp',           name: 'Kumar Raja Gone' },
  { file: 'Pastor.Naga Raju Thaati.webp',          name: 'Naga Raju Thaati' },
  { file: 'Pastor.Ramesh Babu Kondapalli.webp',    name: 'Ramesh Babu Kondapalli' },
  { file: 'Pastor.Santhosamma Katti.webp',         name: 'Santhosamma Katti' },
  { file: 'Pastor.Saramma Ranki Reddy.webp',       name: 'Saramma Ranki Reddy' },
  { file: 'Pastor.Simeon Mareedu.webp',            name: 'Simeon Mareedu' },
  { file: 'Pastors Team with their Families.webp', name: ' Team with their Families' },
];

function imgSrc(file: string) {
  return `/myteam/${encodeURIComponent(file)}`;
}

export default function PastorCarousel() {
  const [active, setActive] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    const idx = ((i % pastors.length) + pastors.length) % pastors.length;
    setActive(idx);
    setTimeout(() => {
      const el = stripRef.current?.children[idx] as HTMLElement;
      el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }, 30);
  };

  const prevIdx = ((active - 1) + pastors.length) % pastors.length;
  const nextIdx = (active + 1) % pastors.length;

  return (
    <div className="w-full" style={{ background: '#f8f8f8' }}>

      {/* ── 3-panel main view ── */}
      <div className="relative overflow-hidden" style={{ height: 520 }}>

        {/* Left sliver — previous */}
        <div
          className="absolute left-0 top-0 bottom-0 cursor-pointer"
          style={{ width: '10%' }}
          onClick={() => goTo(active - 1)}
        >
          <div className="relative w-full h-full">
            <Image
              src={imgSrc(pastors[prevIdx].file)}
              alt=""
              fill
              sizes="10vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
          </div>
        </div>

        {/* Centre — current */}
        <div className="absolute top-0 bottom-0" style={{ left: '10%', right: '10%' }}>
          <div className="relative w-full h-full">
            <Image
              src={imgSrc(pastors[active].file)}
              alt={`Pastor ${pastors[active].name}`}
              fill
              sizes="80vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Right sliver — next */}
        <div
          className="absolute right-0 top-0 bottom-0 cursor-pointer"
          style={{ width: '10%' }}
          onClick={() => goTo(active + 1)}
        >
          <div className="relative w-full h-full">
            <Image
              src={imgSrc(pastors[nextIdx].file)}
              alt=""
              fill
              sizes="10vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
          </div>
        </div>

        {/* Left arrow button */}
        <button
          onClick={() => goTo(active - 1)}
          aria-label="Previous pastor"
          className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all hover:scale-110"
          style={{ left: 'calc(10% - 22px)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 20 }}
        >
          &#8249;
        </button>

        {/* Right arrow button */}
        <button
          onClick={() => goTo(active + 1)}
          aria-label="Next pastor"
          className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all hover:scale-110"
          style={{ right: 'calc(10% - 22px)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 20 }}
        >
          &#8250;
        </button>
      </div>

      {/* ── Name + counter ── */}
      <div className="py-4 text-center" style={{ background: '#fff', borderBottom: '1px solid #f0e6c8' }}>
        <p className="text-blue-900 font-semibold text-lg" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem' }}>
          Pastor {pastors[active].name}
        </p>
        <p className="text-gray-400 text-xs mt-0.5">{active + 1} of {pastors.length}</p>
      </div>

      {/* ── Thumbnail strip ── */}
      <div
        ref={stripRef}
        className="flex gap-2 px-4 py-3 overflow-x-auto"
        style={{ background: '#fff', scrollbarWidth: 'thin', scrollbarColor: '#d97706 #f3f0e8' }}
      >
        {pastors.map((p, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={`Pastor ${p.name}`}
            className="relative flex-shrink-0 overflow-hidden transition-all"
            style={{
              width: 72,
              height: 72,
              borderRadius: 8,
              border: i === active ? '2px solid #dc2626' : '2px solid transparent',
              opacity: i === active ? 1 : 0.65,
              outline: 'none',
            }}
          >
            <Image
              src={imgSrc(p.file)}
              alt={p.name}
              fill
              sizes="72px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
