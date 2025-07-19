import Card from '@/components/Card';
import MoreAboutSection from './_components/moreAboutSection';
import HorizontalCarousal from './_components/horizontalCarousal';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('Scenery.jpg')",
          }}
        />
        <div className="absolute inset-0">
          <div className="bg-opacity-75 background-filter bg-si-dark/60 h-full w-full backdrop-blur-sm sm:w-4/5 md:w-3/5">
            <div className="flex h-full flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
              <h1 className="text-si-offwhite mb-4 text-xl leading-tight sm:mb-6 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                About Us
              </h1>
              <p className="text-si-offwhite max-w-2xl text-base leading-relaxed font-bold sm:text-lg md:text-xl lg:max-w-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                We are passionate about creating exceptional digital experiences that inspire and
                connect people. Our journey began with a simple vision: to transform ideas into
                meaningful solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl items-start">
            {/* Timeline vertical indicator */}
            <div
              className="bg-si-bluegreen mr-4 w-1 flex-shrink-0 sm:mr-6 sm:w-2 lg:mr-8"
              style={{ height: '180px' }}
            ></div>
            <h2 className="text-si-dark text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              At Share India, we exist to shape decisions for the better — to protect and enrich the
              lives of people across India.
            </h2>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl flex-1">
              <h2 className="text-si-dark mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Our Story
              </h2>
              <div className="text-si-dark/90 space-y-4 text-base leading-relaxed sm:space-y-6 sm:text-lg">
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
                    <span className="text-si-bluegreen flex-shrink-0 text-lg font-bold sm:text-xl">
                      1
                    </span>
                    <p className="text-si-dark text-base font-semibold sm:text-lg">
                      How do I protect against risk and volatility?
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-si-bluegreen flex-shrink-0 text-lg font-bold sm:text-xl">
                      2
                    </span>
                    <p className="text-si-dark text-base font-semibold sm:text-lg">
                      How do I grow my organization and realize the potential of my workforce?
                    </p>
                  </div>
                </div>
                <p>
                  At Share India, we've been on a decade-plus journey to connect our industry
                  expertise, so we can address our clients' top priorities more effectively. Through
                  our teams across capital markets, digital platforms, and wealth management, our
                  clients are better advised within, and across, their investment strategies.
                </p>
                <p>
                  United as one firm, we help our clients{' '}
                  <strong>shape business decisions for the better</strong>. We believe that
                  businesses thrive when the communities they serve and the people they employ also
                  flourish. We provide our clients with the advice and solutions that give them the{' '}
                  <strong>clarity and confidence</strong> to make better decisions to{' '}
                  <strong>protect and grow</strong> their business. Our collaborative approach
                  ensures every Share India client is <strong>better informed</strong>,
                  <strong>better advised</strong> and able to make <strong>better decisions</strong>{' '}
                  that protect and grow their business.
                </p>
              </div>
            </div>

            {/* Navigation Sidebar (no smooth scroll, just anchors) */}
            <div className="w-full flex-shrink-0 lg:w-80">
              <div className="bg-si-offwhite rounded-lg p-4 sm:p-6 lg:bg-transparent">
                <h3 className="text-si-dark mb-4 text-2xl font-semibold sm:mb-6 sm:text-3xl">
                  Jump to Section
                </h3>
                <nav className="space-y-3 sm:space-y-4">
                  <a
                    href="#what-we-do"
                    className="text-si-dark hover:text-si-slate flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">01</span>
                    <span>What We Do</span>
                  </a>
                  <a
                    href="#our-impact"
                    className="text-si-dark hover:text-si-slate flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">02</span>
                    <span>Our Impact</span>
                  </a>
                  <a
                    href="#our-values"
                    className="text-si-dark hover:text-si-slate flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">03</span>
                    <span>Our Values</span>
                  </a>
                  <a
                    href="#leadership"
                    className="text-si-dark hover:text-si-slate flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">04</span>
                    <span>Leadership</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Expertise Across Today's Risk and People Issues
              </h2>
            </div>
            <div className="mt-0 max-w-2xl flex-shrink-0 lg:mt-16 lg:max-w-md xl:max-w-lg">
              <p className="text-si-dark/90 text-lg leading-relaxed sm:text-xl">
                At Share India, we've spent years developing insight and technology to help clients
                face today’s market challenges—connecting capital, advice, and solutions for better
                financial confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="z-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-si-dark px-4 py-4 text-3xl font-bold sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
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
    </div>
  );
}
