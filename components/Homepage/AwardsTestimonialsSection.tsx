import Image from 'next/image';

export default function AwardsTestimonialsSection() {
  const awards = [
    {
      year: '2023',
      award: 'Best Insurance Broker – IRDAI Recognition',
      img: '/images/awards/trophy-1.svg',
    },
    {
      year: '2022',
      award: 'Excellence in Client Service – Insurance Today',
      img: '/images/awards/trophy-2.svg',
    },
    {
      year: '2021',
      award: 'Top 10 Brokerage Firms – Business India',
      img: '/images/awards/trophy-3.svg',
    },
    {
      year: '2020',
      award: 'Innovation in Claims Advocacy – FinServ Awards',
      img: '/images/awards/trophy-4.svg',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Menon',
      role: 'CFO, TechNova Pvt Ltd',
      text: 'Share India Brokers made our policy renewal seamless and negotiated significant savings without compromising coverage.',
      avatar: '/images/clients/priya.jpg',
    },
    {
      name: 'Arjun Verma',
      role: 'HR Head, Zenith Industries',
      text: 'Their claims advocacy was exceptional—we felt supported throughout the entire process.',
      avatar: '/images/clients/arjun.jpg',
    },
    {
      name: 'Kavita Iyer',
      role: 'Founder, GreenEdge Retail',
      text: 'We value their transparency and ability to simplify complex insurance products for growing businesses.',
      avatar: '/images/clients/kavita.jpg',
    },
  ];

  return (
    // Card-friendly: no full-bleed BGs here (CardScreen provides the chrome)
    <section
      id="awards-testimonials"
      aria-labelledby="awards-testimonials-title"
      className="isolate scroll-mt-[var(--header-h)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header className="mb-8 text-center sm:mb-10">
          <span className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-3 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm sm:px-4 sm:py-2">
            <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
            Recognition &amp; Trust
          </span>
          <h2
            id="awards-testimonials-title"
            className="text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold text-slate-900"
          >
            <span className="text-gradient-primary">Awards &amp; Testimonials</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
            Celebrated for excellence, trusted by clients. Here&apos;s what the industry and our
            partners say about us.
          </p>
        </header>

        {/* Awards Grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a) => (
            <article
              key={a.award}
              className="card-vibrant group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition focus-within:ring-2 focus-within:ring-blue-500/30 hover:border-slate-300 hover:shadow-md sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <Image
                    src={a.img}
                    alt={`${a.year} award`}
                    width={48}
                    height={48}
                    className="object-contain opacity-90"
                  />
                </div>
                <div>
                  <div className="accent-bar-gradient mb-1 h-1.5 w-10 rounded" />
                  <h3 className="text-[clamp(16px,3.2vw,18px)] font-semibold text-slate-900">
                    {a.year}
                  </h3>
                </div>
              </div>
              <p className="text-[clamp(13px,2.8vw,15px)] text-slate-700/85">{a.award}</p>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="mb-5 text-center sm:mb-7">
            <h3 className="text-[clamp(20px,3.8vw,30px)] leading-tight font-semibold text-slate-900">
              <span className="text-gradient-primary">What Our Clients Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="card-accent-red flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:border-slate-300 hover:shadow-md sm:p-6"
              >
                <blockquote className="text-[clamp(13px,2.8vw,15px)] leading-relaxed text-slate-700/90">
                  &quot;{t.text}&quot;
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full shadow ring-2 ring-white">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} photo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-600">{t.role}</div>
                  </div>
                </figcaption>

                <div className="accent-bar-gradient mt-5 h-1.5 w-10 rounded" />
              </figure>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-[15px] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            aria-label="Contact Share India Brokers"
          >
            Read More
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
