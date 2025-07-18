'use client';
import Card from '@/components/Card';
import { useEffect, useRef } from 'react';
import MoreAboutSection from './_components/moreAboutSection';

export default function AboutPage() {
  // Fix: Properly type the ref for HTMLDivElement
  const scrollTextRef = useRef<HTMLDivElement>(null);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTextRef.current) {
        const scrollY = window.scrollY;
        const scrollSpeed = 0.4; // Adjust this value to control scroll sensitivity
        // Now this will work without TypeScript errors
        scrollTextRef.current.style.transform = `translateX(${-scrollY * scrollSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Full-width background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('Scenery.jpg')",
          }}
        />

        {/* Semi-transparent grey overlay - responsive width */}
        <div className="absolute inset-0">
          <div
            className="bg-opacity-75 background-filter h-full w-full backdrop-blur-sm sm:w-4/5 md:w-3/5"
            style={{ background: 'rgba(38, 40, 54, .6)' }}
          >
            {/* Content container */}
            <div className="flex h-full flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
              {/* Small heading */}
              <h1 className="mb-4 text-xl leading-tight text-white sm:mb-6 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                About Us
              </h1>

              {/* Small description */}
              <p className="max-w-2xl text-base leading-relaxed font-bold text-gray-200 sm:text-lg md:text-xl lg:max-w-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                We are passionate about creating exceptional digital experiences that inspire and
                connect people. Our journey began with a simple vision: to transform ideas into
                meaningful solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl items-start">
            {/* Red vertical line */}
            <div
              className="mr-4 w-1 flex-shrink-0 bg-red-500 sm:mr-6 sm:w-2 lg:mr-8"
              style={{
                height: '180px',
                //  '@media (min-width: 640px)': { height: '200px' },
                //  '@media (min-width: 1024px)': { height: '220px' }
              }}
            ></div>

            {/* Main heading */}
            <h2 className="text-2xl leading-tight font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              At Aon, we exist to shape decisions for the better — to protect and enrich the lives
              of people around the world.
            </h2>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl flex-1">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Our Story
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:space-y-6 sm:text-lg">
                <p>
                  Our world has become more volatile — economically, socially and geopolitically —
                  than ever before. In an interconnected and interdependent world, organizations and
                  individuals are under constant pressure to make complex business decisions,
                  sometimes without all the necessary facts — and almost always at speed.
                </p>

                <p>
                  In this challenging economic and social environment, organizations are asking
                  themselves two fundamental questions:
                </p>

                <div className="my-6 space-y-4 sm:my-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 text-lg font-bold text-red-500 sm:text-xl">
                      1
                    </span>
                    <p className="text-base font-semibold text-gray-900 sm:text-lg">
                      How do I protect against risk and volatility?
                    </p>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 text-lg font-bold text-red-500 sm:text-xl">
                      2
                    </span>
                    <p className="text-base font-semibold text-gray-900 sm:text-lg">
                      How do I grow my organization and realize the potential of my workforce?
                    </p>
                  </div>
                </div>

                <p>
                  At Aon, we've been on a decade-plus journey to connect our global capabilities, so
                  we can address our clients' top priorities more effectively. Through our global
                  expertise across two key areas of need — Risk Capital and Human Capital — our
                  clients are better advised within, and across, their risk and people strategies.
                </p>

                <p>
                  United as one firm, we help our clients{' '}
                  <strong>shape business decisions for the better</strong>. We believe that
                  businesses thrive when the communities they serve and the people they employ also
                  flourish. We provide our clients with the advice and solutions that give them the{' '}
                  <strong>clarity and confidence</strong> to make better decisions to{' '}
                  <strong>protect and grow</strong> their business. Our collaborative approach
                  ensures every Aon client is <strong>better informed</strong>,
                  <strong>better advised</strong> and able to make <strong>better decisions</strong>{' '}
                  that protect and grow their business.
                </p>
              </div>
            </div>

            {/* Navigation Sidebar */}
            <div className="w-full flex-shrink-0 lg:w-80">
              <div className="rounded-lg bg-gray-50 p-4 sm:p-6 lg:bg-transparent">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 sm:mb-6 sm:text-3xl">
                  Jump to Section
                </h3>

                <nav className="space-y-3 sm:space-y-4">
                  <button
                    onClick={() => scrollToSection('what-we-do')}
                    className="flex w-full items-center gap-3 text-left text-gray-700 transition-colors hover:text-red-500"
                  >
                    <span className="flex-shrink-0 font-bold text-red-500">01</span>
                    <span className="border-gray-300 pb-1">What We Do</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('our-impact')}
                    className="flex w-full items-center gap-3 text-left text-gray-700 transition-colors hover:text-red-500"
                  >
                    <span className="flex-shrink-0 font-bold text-red-500">02</span>
                    <span>Our Impact</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('our-values')}
                    className="flex w-full items-center gap-3 text-left text-gray-700 transition-colors hover:text-red-500"
                  >
                    <span className="flex-shrink-0 font-bold text-red-500">03</span>
                    <span>Our Values</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('leadership')}
                    className="flex w-full items-center gap-3 text-left text-gray-700 transition-colors hover:text-red-500"
                  >
                    <span className="flex-shrink-0 font-bold text-red-500">04</span>
                    <span>Leadership</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section with Horizontal Scroll */}
      <section
        id="what-we-do"
        className="relative z-10 overflow-hidden bg-gray-50 py-8 md:py-10 lg:py-12"
      >
        {/* Scrolling Background Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            ref={scrollTextRef}
            className="horizontal-scroll-text font-bold whitespace-nowrap text-gray-200 select-none"
          >
            What We Do What We Do What We Do What We Do What We Do What We Do What We Do What We Do
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
            {/* Main Content */}
            <div className="max-w-xl flex-1">
              <p className="mb-4 text-2xl font-bold text-gray-500 sm:text-3xl lg:text-4xl">
                What We Do
              </p>

              <h2 className="mb-6 text-3xl leading-tight font-bold text-gray-900 sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Expertise Across Today's Risk and People Issues
              </h2>
            </div>

            {/* Description */}
            <div className="mt-0 max-w-2xl flex-shrink-0 lg:mt-16 lg:max-w-md xl:max-w-lg">
              <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
                At Aon, we've been on a decade-plus journey to connect our global capabilities so we
                can address our clients' top priorities more effectively. Through our global
                expertise across two key areas of need — Risk Capital and Human Capital — our
                clients are better advised within, and across, their risk and people strategies.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .horizontal-scroll-text {
            font-size: 6rem;
            line-height: 1;
            transition: transform 0.1s ease-out;
          }

          @media (min-width: 640px) {
            .horizontal-scroll-text {
              font-size: 8rem;
            }
          }

          @media (min-width: 1024px) {
            .horizontal-scroll-text {
              font-size: 10rem;
            }
          }

          @media (min-width: 1280px) {
            .horizontal-scroll-text {
              font-size: 12rem;
            }
          }
        `}</style>
      </section>

      <section className="z-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="px-4 py-4 text-3xl font-bold text-gray-900 sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
            Our Capabilities
          </h1>
          <div className="flex flex-col justify-center gap-4 p-4 sm:flex-row sm:gap-6 sm:p-6">
            <Card
              image="Scenery.jpg"
              imageAlt="Aerial view of golf course"
              category="Case Study"
              title="The LPGA Unlocks Talent Potential with Data"
              description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
              link="/about/journey"
              linkText="Find Out More"
            />
            <Card
              image="Scenery.jpg"
              imageAlt="Aerial view of golf course"
              category="Case Study"
              title="The LPGA Unlocks Talent Potential with Data"
              description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
              link="/about/journey"
              linkText="Find Out More"
            />
          </div>
        </div>
      </section>

      <MoreAboutSection />

      {/* Horizontal Carousal Component */}

      {/* <ul>
        <li>
          <Link href={'about/journey'}>Journey of SIIB</Link>
        </li>
        <li>
          <Link href={'about/impact'}>Impact of SIIB</Link>
        </li>
        <li>
          <Link href={'about/leaders-and-team'}>Leaders and Team</Link>
        </li>
        <li>
          <Link href={'about/testimonials'}>Testimonials</Link>
        </li>
      </ul> */}
    </div>
  );
}
