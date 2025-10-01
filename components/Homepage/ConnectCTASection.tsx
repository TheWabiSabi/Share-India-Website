import Link from 'next/link';

export default function ConnectCTASection() {
  return (
    <section className="from-si-primary-200 to-si-red-100 bg-gradient-to-b py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 md:px-12">
        <h3 className="text-3xl font-semibold sm:text-4xl">Let&apos;s Connect</h3>
        <p className="text-si-dark/80 mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Ready to take the next step? Our team of experts is here to help you navigate your journey
          with confidence.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card-vibrant hover-lift hover-glow-blue rounded-lg p-6">
            <div className="from-si-primary/20 to-si-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
              <svg
                className="text-si-primary h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold">Schedule a Call</h4>
            <p className="text-si-dark/70 mt-1 text-sm">Book a consultation with our advisors</p>
          </div>

          <div className="card-accent-red hover-lift hover-glow-red rounded-lg p-6">
            <div className="from-si-red/20 to-si-red/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
              <svg
                className="text-si-red h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold">Send a Message</h4>
            <p className="text-si-dark/70 mt-1 text-sm">Get in touch with questions or inquiries</p>
          </div>

          <div className="card-vibrant hover-lift hover-glow-blue rounded-lg p-6 sm:col-span-2 lg:col-span-1">
            <div className="from-si-primary/20 to-si-red/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
              <svg
                className="text-si-primary h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
              </svg>
            </div>
            <h4 className="text-lg font-semibold">Visit Our Office</h4>
            <p className="text-si-dark/70 mt-1 text-sm">
              Meet our team at our convenient locations
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="btn-primary px-8 py-4 text-base">
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
