'use client';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import HorizontalCarousal from './about/_components/horizontalCarousal';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <style jsx>{`
        .buttonStyle {
          position: relative;
        }
        .hoverMebottom:after {
          position: absolute;
          top: 100%;
          left: 0%;
          width: 0;
          height: 2px;
          background: white;
          display: block;
          content: '';
          transition: width 0.35s ease-in-out;
        }
        .hoverMebottom:hover:after {
          width: 100%;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Scenery.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0">
          <div className="bg-opacity-75 bg-si-dark/60 background-filter flex h-full w-full backdrop-blur-sm sm:w-4/5 md:w-4/5">
            <div className="bg-opacity-75 bg-si-dark/20 background-filter h-full w-full backdrop-blur-sm sm:w-3/5 md:w-3/5">
              <div className="flex h-full flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
                <h1 className="text-si-offwhite mb-4 text-xl leading-tight sm:mb-6 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Impact Report
                </h1>
                <p className="text-si-offwhite/90 max-w-2xl text-base leading-relaxed font-bold sm:text-lg md:text-xl lg:max-w-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  Testing Testing Testing Testing Testing Testing Testing Testing Testing
                </p>
                <button className="group bg-si-bluegreen text-si-offwhite hover:bg-si-slate/60 mt-18 mb-12 flex w-1/2 items-center gap-3 px-4 py-2 text-lg font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-xl">
                  <span>Read More</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex h-full w-2/5 flex-col items-start justify-center gap-2 px-8 text-white sm:px-12 md:px-16 lg:px-24">
              <p>I want to...</p>
              <div className="group hoverMebottom relative">
                <Link
                  className="hoverMebottom flex h-[5vh] items-center gap-[0.5vw] text-lg transition-all duration-300"
                  href={`#`}
                >
                  {' '}
                  Browse Capabilities
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="group hoverMebottom relative">
                <Link
                  className="hoverMebottom flex h-[5vh] items-center gap-[0.5vw] text-lg transition-all duration-300"
                  href={`/insights`}
                >
                  {' '}
                  Explore Insights
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="group hoverMebottom relative">
                <Link
                  className="hoverMebottom flex h-[5vh] items-center gap-[0.5vw] text-lg transition-all duration-300"
                  href={`/about`}
                >
                  {' '}
                  Discover Our Story
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Scenery.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="flex w-full items-center justify-start">
              <div className="mx-4 my-4 w-full max-w-md px-6 py-6 sm:mx-6 sm:my-6 sm:px-8 sm:py-8 md:mx-8 md:my-8 md:w-3/4 md:max-w-lg md:px-10 md:py-10 lg:mx-12 lg:my-12 lg:w-1/2 lg:max-w-xl lg:px-12 lg:py-12 xl:w-2/5 xl:max-w-2xl">
                <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
                  Social Impact
                </h2>
                <h3 className="mb-4 text-lg text-black sm:mb-6 sm:text-xl md:text-2xl lg:text-3xl">
                  Making Social Impact
                </h3>
                <p className="mb-8 text-base leading-relaxed text-black/85 sm:mb-12 sm:text-lg md:mb-16 md:text-xl lg:mb-20 lg:text-2xl">
                  We continue to build on actions and programs that support inclusion, workforce
                  wellbeing and civic outreach to build an equitable culture within our organization
                  and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section
        id="what-we-do"
        className="bg-si-slate relative z-10 overflow-hidden py-8 md:py-10 lg:py-12"
      >
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="text-si-offwhite/30 font-bold whitespace-nowrap select-none"
                  style={{ fontSize: '6rem', lineHeight: 1 }}
                >
                  What We Do What We Do What We Do What We Do What We Do What We Do What We Do What We Do
                </div>
              </div> */}
        <HorizontalCarousal />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
            <div className="max-w-xl flex-1">
              <p className="text-si-bluegreen mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
                What We Do
              </p>
              <h2 className="text-si-dark mb-6 text-3xl leading-tight font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Expertise Across Today&#39;s Risk and People Issues
              </h2>
            </div>
            <div className="mt-0 max-w-2xl flex-shrink-0 lg:mt-16 lg:max-w-md xl:max-w-lg">
              <p className="text-si-dark/90 text-lg leading-relaxed sm:text-xl">
                At Share India, we&#39;ve spent years developing insight and technology to help
                clients face today&#39;s market challenges—connecting capital, advice, and solutions
                for better financial confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="environmental-impact" className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <p className="text-si-bluegreen">Overview</p>
              <h2 className="text-si-dark text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl">
                Environmental Impact
              </h2>
              <h3 className="text-si-dark mb-6 text-lg sm:mb-8 sm:text-xl md:text-2xl lg:text-2xl">
                Making Environmental Impact
              </h3>
              <p className="text-si-dark/80 mb-8 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl lg:text-xl">
                We&#39;re focused on three areas of environmental impact: our own decarbonization
                and sustainability efforts, working to accelerate clients&#39; climate resiliency
                and response, and convening leaders and organizations to collaborate and scale our
                ambitions.
              </p>
              <button className="group bg-si-bluegreen text-si-offwhite hover:bg-si-dark flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-xl">
                <span>Learn More</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full max-w-2xl flex-shrink-0 lg:w-1/2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/about-img/trees.png"
                  alt="Environmental Impact - Aerial view of renewable energy and nature"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="social-impact" className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
            <div className="w-full lg:w-1/2">
              <p className="text-si-bluegreen">Overview</p>
              <h2 className="text-si-dark text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl">
                Social Impact
              </h2>
              <h3 className="text-si-dark mb-6 text-lg sm:mb-8 sm:text-xl md:text-2xl lg:text-2xl">
                Making Social Impact
              </h3>
              <p className="text-si-dark/85 mb-8 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl lg:text-xl">
                We continue to build on actions and programs that support inclusion, workforce
                wellbeing and civic outreach to build an equitable culture within our organization
                and beyond.
              </p>
              <button className="group bg-si-bluegreen text-si-offwhite hover:bg-si-dark flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-xl">
                <span>Learn More</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full max-w-2xl flex-shrink-0 lg:w-1/2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/about-img/meeting.png"
                  alt="Social Impact - Diverse team collaborating in workplace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="bg-si-dark relative z-10 overflow-hidden py-8 md:py-10 lg:py-12"
      >
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="text-si-offwhite/30 font-bold whitespace-nowrap select-none"
                  style={{ fontSize: '6rem', lineHeight: 1 }}
                >
                  What We Do What We Do What We Do What We Do What We Do What We Do What We Do What We Do
                </div>
              </div> */}
        <HorizontalCarousal />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
            <div className="max-w-xl flex-1">
              <p className="text-si-offwhite mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
                What We Do
              </p>
              <h2 className="text-si-offwhite mb-6 text-3xl leading-tight font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Expertise Across Today&#39;s Risk and People Issues
              </h2>
            </div>
            <div className="mt-0 max-w-2xl flex-shrink-0 lg:mt-16 lg:max-w-md xl:max-w-lg">
              <p className="text-si-offwhite/90 text-lg leading-relaxed sm:text-xl">
                At Share India, we&#39;ve spent years developing insight and technology to help
                clients face today&#39;s market challenges—connecting capital, advice, and solutions
                for better financial confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience matters */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/people-street-crossing-1150072427.avif')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="flex w-full items-center justify-center md:justify-end">
              <div className="mx-4 my-4 w-full max-w-md bg-white px-6 py-6 sm:mx-6 sm:my-6 sm:px-8 sm:py-8 md:mx-8 md:my-8 md:w-3/4 md:max-w-lg md:px-10 md:py-10 lg:mx-12 lg:my-12 lg:w-1/2 lg:max-w-xl lg:px-12 lg:py-12 xl:w-2/5 xl:max-w-2xl">
                <h2 className="text-si-dark text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                  Social Impact
                </h2>
                <h3 className="text-si-dark mb-4 text-base sm:mb-6 sm:text-lg md:text-xl lg:text-2xl">
                  Making Social Impact
                </h3>
                <p className="text-si-dark/85 mb-8 text-sm leading-relaxed sm:mb-12 sm:text-base md:mb-16 md:text-lg lg:mb-20 lg:text-xl">
                  We continue to build on actions and programs that support inclusion, workforce
                  wellbeing and civic outreach to build an equitable culture within our organization
                  and beyond.
                </p>
                <button className="group bg-si-bluegreen text-si-offwhite hover:bg-si-dark flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 sm:gap-3 sm:px-8 sm:py-4 sm:text-base md:text-lg lg:px-10 lg:py-5 lg:text-xl">
                  <span>Learn More</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts Section */}
      <section className="bg-si-dark text-si-offwhite py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-16">
              {/* Left Content */}
              <div className="lg:col-span-1">
                <h2 className="text-si-offwhite mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Quick Facts
                </h2>
                <p className="text-si-offwhite/80 text-lg leading-relaxed sm:text-xl lg:text-2xl">
                  Working as a united team, our colleagues help clients make better risk and people
                  decisions every day.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2 lg:gap-12">
                {/* Stat 1 */}
                <div className="text-center md:text-left">
                  <div className="mb-4">
                    <div className="mx-auto mb-6 h-1 w-full bg-red-600 md:mx-0"></div>
                    <h3 className="text-si-offwhite mb-4 text-5xl font-bold sm:text-6xl lg:text-7xl">
                      60K
                    </h3>
                  </div>
                  <p className="text-si-offwhite/80 text-lg sm:text-xl lg:text-2xl">
                    Colleagues around the world.
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center md:text-left">
                  <div className="mb-4">
                    <div className="mx-auto mb-6 h-1 w-full bg-red-600 md:mx-0"></div>
                    <h3 className="text-si-offwhite mb-4 text-5xl font-bold sm:text-6xl lg:text-7xl">
                      120+
                    </h3>
                  </div>
                  <p className="text-si-offwhite/80 text-lg sm:text-xl lg:text-2xl">
                    Countries and sovereignties where we operate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="bg-si-offwhite py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-si-dark mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Let's Connect
              </h2>
              <p className="text-si-dark/80 mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl lg:text-2xl">
                Ready to take the next step? Our team of experts is here to help you navigate your
                financial journey with confidence.
              </p>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Connect Option 1 */}
              <div className="bg-si-white group rounded-lg p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="bg-si-bluegreen/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <svg
                      className="text-si-bluegreen h-8 w-8"
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
                </div>
                <h3 className="text-si-dark mb-2 text-lg font-semibold">Schedule a Call</h3>
                <p className="text-si-dark/70 text-sm">
                  Book a consultation with our financial advisors
                </p>
              </div>

              {/* Connect Option 2 */}
              <div className="bg-si-white group rounded-lg p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="bg-si-bluegreen/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <svg
                      className="text-si-bluegreen h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-si-dark mb-2 text-lg font-semibold">Send a Message</h3>
                <p className="text-si-dark/70 text-sm">Get in touch with questions or inquiries</p>
              </div>

              {/* Connect Option 3 */}
              <div className="bg-si-white group rounded-lg p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="mb-4 flex justify-center">
                  <div className="bg-si-bluegreen/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <svg
                      className="text-si-bluegreen h-8 w-8"
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
                </div>
                <h3 className="text-si-dark mb-2 text-lg font-semibold">Visit Our Office</h3>
                <p className="text-si-dark/70 text-sm">Meet our team at our convenient locations</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="group bg-si-bluegreen text-si-offwhite hover:bg-si-dark inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-xl"
              >
                <span>Connect With Our Team</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
