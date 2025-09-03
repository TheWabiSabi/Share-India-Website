import Card from '@/components/Card';
import MoreAboutSection from './_components/moreAboutSection';
import HorizontalCarousal from './_components/horizontalCarousal';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('Scenery.jpg')",
          }}
        />
        <div className="from-si-ink/80 via-si-ink/60 absolute inset-0 bg-gradient-to-r to-transparent">
          <div className="from-si-primary/20 to-si-red/10 h-full w-[100vw] bg-gradient-to-br via-transparent backdrop-blur-sm sm:w-4/5 md:w-3/5">
            <div className="flex h-full flex-col justify-center px-10 sm:px-4 md:px-8 lg:px-20">
              <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-6 inline-flex w-fit items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
                Our Story
              </div>
              <h1 className="mb-4 text-xl leading-tight font-bold text-white sm:mb-6 sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl">
                About <span className="text-gradient-primary">Share India</span>
              </h1>
              <p className="md:text-md text-justify text-sm leading-relaxed font-medium text-white/90 sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                We are passionate about creating exceptional digital experiences that inspire and
                connect people. Our journey began with a simple vision: to transform ideas into
                meaningful solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-vibrant-blue relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="bg-pattern-dots absolute inset-0 opacity-15" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl items-start">
            {/* Timeline vertical indicator */}
            <div
              className="accent-bar-gradient mr-4 w-2 flex-shrink-0 rounded-full sm:mr-6 sm:w-3 lg:mr-8"
              style={{ height: '180px' }}
            ></div>
            <h2 className="text-si-ink text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              At Share India, we exist to shape decisions for the better — to protect and enrich the
              lives of people across <span className="text-gradient-primary">India</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-gradient-accent relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="bg-pattern-grid absolute inset-0 opacity-20" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
            {/* Main Content */}
            <div className="card-vibrant hover-lift shadow-elevate-vibrant max-w-3xl flex-1 rounded-xl p-8">
              <div className="accent-bar-gradient mb-4 h-2 w-16" />
              <h2 className="text-si-ink mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Our <span className="text-gradient-accent">Story</span>
              </h2>
              <div className="text-si-ink/90 space-y-4 text-base leading-relaxed font-medium sm:space-y-6 sm:text-lg">
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
                  <div className="card-accent-red hover-glow-red flex items-start gap-3 rounded-lg p-4 sm:gap-4">
                    <div className="from-si-red to-si-red-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white sm:text-xl">
                      1
                    </div>
                    <p className="text-si-ink text-base font-semibold sm:text-lg">
                      How do I protect against risk and volatility?
                    </p>
                  </div>
                  <div className="card-vibrant hover-glow-blue flex items-start gap-3 rounded-lg p-4 sm:gap-4">
                    <div className="from-si-primary to-si-primary-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white sm:text-xl">
                      2
                    </div>
                    <p className="text-si-ink text-base font-semibold sm:text-lg">
                      How do I grow my organization and realize the potential of my workforce?
                    </p>
                  </div>
                </div>
                <p>
                  At Share India, we&#39;ve been on a decade-plus journey to connect our industry
                  expertise, so we can address our clients&#39; top priorities more effectively.
                  Through our teams across capital markets, digital platforms, and wealth
                  management, our clients are better advised within, and across, their investment
                  strategies.
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
              <div className="card-accent-red hover-lift shadow-vibrant-red rounded-xl p-6 sm:p-8">
                <div className="accent-bar-gradient mb-4 h-2 w-12" />
                <h3 className="text-si-ink mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
                  Jump to <span className="text-gradient-accent">Section</span>
                </h3>
                <nav className="space-y-3 sm:space-y-4">
                  <a
                    href="#what-we-do"
                    className="text-si-ink hover:text-si-primary hover:bg-si-primary/10 flex w-full items-center gap-3 rounded-lg p-2 text-left transition-all hover:translate-x-2"
                  >
                    <div className="from-si-primary to-si-primary-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white">
                      01
                    </div>
                    <span className="font-semibold">What We Do</span>
                  </a>
                  <a
                    href="#our-impact"
                    className="text-si-ink hover:text-si-primary hover:bg-si-primary/10 flex w-full items-center gap-3 rounded-lg p-2 text-left transition-all hover:translate-x-2"
                  >
                    <div className="from-si-red to-si-red-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white">
                      02
                    </div>
                    <span className="font-semibold">Our Impact</span>
                  </a>
                  <a
                    href="#our-values"
                    className="text-si-ink hover:text-si-primary hover:bg-si-primary/10 flex w-full items-center gap-3 rounded-lg p-2 text-left transition-all hover:translate-x-2"
                  >
                    <div className="from-si-primary to-si-primary-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white">
                      03
                    </div>
                    <span className="font-semibold">Our Values</span>
                  </a>
                  <a
                    href="#leadership"
                    className="text-si-ink hover:text-si-primary hover:bg-si-primary/10 flex w-full items-center gap-3 rounded-lg p-2 text-left transition-all hover:translate-x-2"
                  >
                    <div className="from-si-red to-si-red-600 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white">
                      04
                    </div>
                    <span className="font-semibold">Leadership</span>
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
        className="section-vibrant-red relative z-10 overflow-hidden py-8 md:py-10 lg:py-12"
      >
        <div className="bg-pattern-dots absolute inset-0 opacity-20" />
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
              <div className="from-si-red/15 to-si-primary/10 text-si-red border-si-red/20 mb-4 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
                What We Do
              </div>
              <h2 className="text-si-ink mb-6 text-3xl leading-tight font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Expertise Across Today&#39;s <span className="text-gradient-accent">Risk</span> and
                People Issues
              </h2>
            </div>
            <div className="mt-0 max-w-2xl flex-shrink-0 lg:mt-16 lg:max-w-md xl:max-w-lg">
              <div className="card-vibrant hover-lift shadow-vibrant-blue rounded-xl p-6">
                <div className="accent-bar-gradient mb-4 h-2 w-12" />
                <p className="text-si-ink/90 text-lg leading-relaxed font-medium sm:text-xl">
                  At Share India, we&#39;ve spent years developing insight and technology to help
                  clients face today&#39;s market challenges—connecting capital, advice, and
                  solutions for better financial confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-spot-alt relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-pattern-grid absolute inset-0 opacity-15" />
        <div className="relative container mx-auto">
          <div className="mb-8 text-center">
            <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-4 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
              Capabilities
            </div>
            <h1 className="text-si-ink px-4 py-4 text-3xl font-bold sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
              Our <span className="text-gradient-primary">Capabilities</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-6 p-4 sm:flex-row sm:gap-8 sm:p-6">
            <Card
              image="/Scenery.jpg"
              imageAlt="Aerial view of golf course"
              category="Case Study"
              title="The LPGA Unlocks Talent Potential with Data"
              description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
              link="/about/journey"
              linkText="Find Out More"
            />
            <Card
              image="/Scenery.jpg"
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
