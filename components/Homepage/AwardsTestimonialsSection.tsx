export default function AwardsTestimonialsSection() {
  const awards = [
    {
      year: '2023',
      award: 'Best Insurance Broker – IRDAI Recognition',
      img: '/images/awards/trophy-1.svg', // Placeholder path - replace with actual images
    },
    {
      year: '2022',
      award: 'Excellence in Client Service – Insurance Today',
      img: '/images/awards/trophy-2.svg', // Placeholder path - replace with actual images
    },
    {
      year: '2021',
      award: 'Top 10 Brokerage Firms – Business India',
      img: '/images/awards/trophy-3.svg', // Placeholder path - replace with actual images
    },
    {
      year: '2020',
      award: 'Innovation in Claims Advocacy – FinServ Awards',
      img: '/images/awards/trophy-4.svg', // Placeholder path - replace with actual images
    },
  ];

  const testimonials = [
    {
      name: 'Priya Menon',
      role: 'CFO, TechNova Pvt Ltd',
      text: 'Share India Brokers made our policy renewal seamless and negotiated significant savings without compromising coverage.',
      avatar: '/images/clients/priya.jpg', // Placeholder path - replace with actual images
    },
    {
      name: 'Arjun Verma',
      role: 'HR Head, Zenith Industries',
      text: 'Their claims advocacy was exceptional—we felt supported throughout the entire process.',
      avatar: '/images/clients/arjun.jpg', // Placeholder path - replace with actual images
    },
    {
      name: 'Kavita Iyer',
      role: 'Founder, GreenEdge Retail',
      text: 'We value their transparency and ability to simplify complex insurance products for growing businesses.',
      avatar: '/images/clients/kavita.jpg', // Placeholder path - replace with actual images
    },
  ];

  return (
    <section id="awards-testimonials" className="relative isolate py-20 md:py-28">
      {/* Background patterns */}
      <div className="bg-pattern-dots absolute inset-0 opacity-15" />
      <div className="from-si-primary-200 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-3 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
            Recognition & Trust
          </span>
          <h2 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl">
            <span className="text-gradient-primary">Awards & Testimonials</span>
          </h2>
          <p className="text-si-ink/80 mx-auto mt-4 max-w-2xl text-base leading-relaxed">
            Celebrated for excellence, trusted by clients. Here's what the industry and our partners
            say about us.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <div
              key={award.award}
              className="card-vibrant hover-lift hover-glow-blue flex flex-col rounded-xl p-6"
            >
              {/* Trophy placeholder */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={award.img}
                  alt={`${award.year} award`}
                  className="h-12 w-12 object-contain opacity-90"
                />
              </div>

              <div className="accent-bar-gradient mb-2 h-2 w-12" />
              <h3 className="text-si-ink text-xl font-semibold">{award.year}</h3>
              <p className="text-si-ink/70 mt-1 text-sm">{award.award}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10">
          <div className="mb-8 text-center">
            <h2 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl">
              <span className="text-gradient-primary">What Our Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="card-accent-red hover-lift hover-glow-red flex flex-col justify-between rounded-xl p-6"
              >
                <blockquote className="text-si-ink/80 text-sm leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3">
                  {/* Circular avatar */}
                  <div className="relative h-12 w-12 overflow-hidden rounded-full shadow ring-2 ring-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} photo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-si-ink font-semibold">{testimonial.name}</div>
                    <div className="text-si-ink/60 text-xs">{testimonial.role}</div>
                  </div>
                </figcaption>

                {/* Red accent underline */}
                <div className="accent-bar-gradient mt-5 h-2 w-10" />
              </figure>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="from-si-primary-500 to-si-red-300 hover:bg-si-primary-600 inline-flex items-center gap-2 rounded-md bg-gradient-to-r via-transparent px-6 py-3 font-semibold text-black"
          >
            Read More
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
