import Link from 'next/link';
import Image from 'next/image';
import HorizontalCarousal from './about/_components/horizontalCarousal';
import FeaturedCarousel from './insights/_components/featured-section/featured-caraousel';
import './style.css';

export default function HomePage() {
  return (
    <main className="text-si-dark bg-white font-sans">
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div
          className="animate-zoomSlow absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Scenery.jpg')" }}
        />
        <div className="to-si-dark/60 absolute inset-0 bg-gradient-to-br from-black/70 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-10 md:px-12">
          <div className="max-w-2xl space-y-6 text-left">
            <h1 className="text-si-offwhite text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
              Impact Report 2025
            </h1>
            <p className="text-si-offwhite/90 max-w-xl text-lg leading-relaxed sm:text-xl">
              Discover how we’re transforming lives through innovation, sustainability, and social
              responsibility.
            </p>
            <Link
              href="#what-we-do"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-red-700"
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
            </Link>
          </div>

          {/* Quick actions (desktop only) */}
          <nav className="hidden min-w-[260px] flex-col gap-3 text-white lg:flex">
            {[
              { label: 'Browse Capabilities', href: '#' },
              { label: 'Explore Insights', href: '/insights' },
              { label: 'Discover Our Story', href: '/about' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group inline-flex items-center justify-between rounded-md bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur-sm transition hover:bg-white/15"
              >
                <span>{item.label}</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H7"
                  />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="relative overflow-hidden bg-white py-20 md:py-28">
        <HorizontalCarousal />
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
            <div className="max-w-xl flex-1">
              <p className="mb-3 text-sm font-semibold tracking-wider text-red-600 uppercase">
                What We Do
              </p>
              <h2 className="text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
                Expertise Across Today’s Risk and People Issues
              </h2>
            </div>
            <div className="max-w-2xl lg:mt-6">
              <p className="text-si-dark/90 text-lg">
                At Share India, we’ve spent years developing insight and technology to help clients
                face today’s market challenges—connecting capital, advice, and solutions for better
                financial confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section id="environmental-impact" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <p className="mb-2 text-sm font-semibold tracking-wider text-red-600 uppercase">
                Overview
              </p>
              <h3 className="text-3xl font-semibold sm:text-4xl">Environmental Impact</h3>
              <p className="text-si-dark/80 mt-5 text-lg">
                We’re focused on three areas of environmental impact: our own decarbonization and
                sustainability efforts, working to accelerate clients’ climate resiliency, and
                convening leaders to scale our ambitions.
              </p>
              <Link
                href="#"
                className="bg-si-bluegreen hover:bg-si-dark mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-white transition-colors"
              >
                Learn More
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
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-sm">
                <Image
                  fill
                  src="/about-img/trees.png"
                  alt="Environmental Impact - Aerial view of renewable energy and nature"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section id="social-impact" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <p className="mb-2 text-sm font-semibold tracking-wider text-red-600 uppercase">
                Overview
              </p>
              <h3 className="text-3xl font-semibold sm:text-4xl">Social Impact</h3>
              <p className="text-si-dark/85 mt-5 text-lg">
                We continue to build on actions and programs that support inclusion, workforce
                wellbeing and civic outreach to build an equitable culture within our organization
                and beyond.
              </p>
              <Link
                href="#"
                className="bg-si-bluegreen hover:bg-si-dark mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-white transition-colors"
              >
                Learn More
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
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-sm">
                <Image
                  fill
                  src="/about-img/meeting.png"
                  alt="Social Impact - Diverse team collaborating in workplace"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-semibold tracking-wider text-red-600 uppercase">
              Insights
            </p>
            <h3 className="text-3xl font-semibold sm:text-4xl">Featured Insights</h3>
            <p className="text-si-dark/70 mt-4 text-base sm:text-lg">
              Explore expert-led articles and blogs from Share India Brokers featuring actionable
              insights on market trends, risk solutions, and the evolving Indian financial
              landscape.
            </p>
          </div>

          {/* Carousel (kept your component) */}
          <FeaturedCarousel />
        </div>
      </section>

      {/* What We Do (Dark band) */}
      <section className="bg-si-dark text-si-offwhite relative z-10 py-20 md:py-28">
        <HorizontalCarousal />
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
            <div className="max-w-xl flex-1">
              <p className="mb-3 text-sm font-semibold tracking-wider text-red-400 uppercase">
                What We Do
              </p>
              <h3 className="text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
                Expertise Across Today’s Risk and People Issues
              </h3>
            </div>
            <div className="max-w-2xl lg:mt-6">
              <p className="text-si-offwhite/90 text-lg">
                We connect capital, advice, and solutions to help clients navigate uncertainty and
                build financial confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience (reduced height already) */}
      <section className="relative h-[66vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/people-street-crossing-1150072427.avif')" }}
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-end px-6 sm:px-10 md:px-12">
            <div className="w-full max-w-xl rounded-md bg-white p-8 shadow-lg sm:p-10">
              <h3 className="text-2xl font-semibold sm:text-3xl">Industry Experience</h3>
              <p className="text-si-dark/80 mt-3 text-base sm:text-lg">
                We serve diverse sectors with tailored, innovative insurance and risk solutions.
              </p>
              <Link
                href="#"
                className="bg-si-bluegreen hover:bg-si-dark mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-white transition-colors"
              >
                Learn More
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
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-si-dark text-si-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 text-3xl font-semibold sm:text-4xl">Quick Facts</h3>
              <p className="text-lg text-white/80">
                Our colleagues work as one team to help clients make better risk and people
                decisions every day.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-2">
              <div>
                <div className="mb-4 h-1 w-16 bg-red-500" />
                <h4 className="text-5xl font-semibold sm:text-6xl">60K</h4>
                <p className="mt-2 text-white/80">Colleagues around the world.</p>
              </div>
              <div>
                <div className="mb-4 h-1 w-16 bg-red-500" />
                <h4 className="text-5xl font-semibold sm:text-6xl">120+</h4>
                <p className="mt-2 text-white/80">Countries and sovereignties where we operate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 md:px-12">
          <h3 className="text-3xl font-semibold sm:text-4xl">Let’s Connect</h3>
          <p className="text-si-dark/80 mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Ready to take the next step? Our team of experts is here to help you navigate your
            journey with confidence.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="bg-si-bluegreen/10 mx-auto mb-3 h-12 w-12 rounded-full" />
              <h4 className="text-lg font-semibold">Schedule a Call</h4>
              <p className="text-si-dark/70 mt-1 text-sm">Book a consultation with our advisors</p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="bg-si-bluegreen/10 mx-auto mb-3 h-12 w-12 rounded-full" />
              <h4 className="text-lg font-semibold">Send a Message</h4>
              <p className="text-si-dark/70 mt-1 text-sm">
                Get in touch with questions or inquiries
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="bg-si-bluegreen/10 mx-auto mb-3 h-12 w-12 rounded-full" />
              <h4 className="text-lg font-semibold">Visit Our Office</h4>
              <p className="text-si-dark/70 mt-1 text-sm">
                Meet our team at our convenient locations
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-red-700"
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
    </main>
  );
}
