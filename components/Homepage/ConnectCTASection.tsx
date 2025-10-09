import Link from 'next/link';

export default function ConnectCTASection() {
  return (
    // No outer gradient; this lives INSIDE your CardScreen
    <section id="connect-cta" aria-labelledby="connect-cta-title" className="isolate">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
        <h3
          id="connect-cta-title"
          className="text-[clamp(22px,4.2vw,36px)] font-semibold text-slate-900"
        >
          Let&apos;s Connect
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
          Ready to take the next step? Our team of experts is here to help you navigate your journey
          with confidence.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Schedule a Call',
              desc: 'Book a consultation with our advisors',
              href: '/contact?type=call',
              iconBg: 'from-si-primary/20 to-si-primary/10',
              iconCls: 'text-si-primary',
              glowCls: 'hover-glow-blue',
              cardTone: 'card-vibrant',
            },
            {
              title: 'Send a Message',
              desc: 'Get in touch with questions or inquiries',
              href: '/contact?type=message',
              iconBg: 'from-si-red/20 to-si-red/10',
              iconCls: 'text-si-red',
              glowCls: 'hover-glow-red',
              cardTone: 'card-accent-red',
            },
            {
              title: 'Visit Our Office',
              desc: 'Meet our team at our convenient locations',
              href: '/contact?type=visit',
              iconBg: 'from-si-primary/20 to-si-red/10',
              iconCls: 'text-si-primary',
              glowCls: 'hover-glow-blue',
              cardTone: 'card-vibrant',
              wide: true,
            },
          ].map(({ title, desc, href, iconBg, iconCls, glowCls, cardTone, wide }, i) => (
            <Link
              key={title}
              href={href}
              className={[
                'group rounded-xl p-5 text-left sm:p-6',
                'border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5',
                'transition hover:border-slate-300 hover:shadow-md',
                // keep your brand tones on top of the neutral base
                cardTone,
                glowCls,
                wide ? 'sm:col-span-2 lg:col-span-1' : '',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40',
              ].join(' ')}
              aria-label={title}
            >
              <div
                className={[
                  'mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br',
                  iconBg,
                ].join(' ')}
              >
                <svg
                  className={`${iconCls} h-6 w-6`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {i === 0 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  )}
                  {i === 1 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                  {i === 2 && (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </>
                  )}
                </svg>
              </div>

              <h4 className="text-[clamp(15px,3.2vw,18px)] font-semibold text-slate-900">
                {title}
              </h4>
              <p className="mt-1 text-[clamp(13px,2.8vw,15px)] text-slate-700/80">{desc}</p>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 sm:px-8 sm:py-4"
          >
            Connect With Our Team
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
