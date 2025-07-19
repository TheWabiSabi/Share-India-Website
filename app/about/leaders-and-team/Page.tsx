import Card from '@/components/Card';
import MoreAboutSection from '../_components/moreAboutSection';

export default function TeamPage() {
  return (
    <div>
      <div className="relative">
        {/* Grey Section - Top Half */}
        <div className="bg-si-bluegreen py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Left Side - Content */}
              <div className="z-10 w-full lg:w-1/2">
                <h1 className="text-si-offwhite mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                  Our Journey
                </h1>

                <p className="text-si-offwhite/90 mb-8 max-w-lg text-lg leading-relaxed sm:text-xl lg:text-2xl">
                  From humble beginnings to industry leadership, discover the milestones that have
                  shaped our path and continue to drive our vision forward.
                </p>
              </div>

              {/* Right Side - Space for Image */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Overlapping Image - Positioned absolutely */}
        <div className="absolute top-8 right-8 bottom-8 hidden w-full lg:block lg:w-2/5 xl:w-1/3">
          <img
            src="/Scenery.jpg"
            alt="Our Journey"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Mobile Image - Only visible on mobile */}
        <div className="block px-4 py-8 lg:hidden">
          <img
            src="/Scenery.jpg"
            alt="Our Journey"
            className="h-64 w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl flex-1">
              <h2 className="text-si-dark mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Our Story
              </h2>
              <div className="text-si-dark/85 space-y-4 text-base leading-relaxed sm:space-y-6 sm:text-lg">
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
              <div className="rounded-lg p-4 sm:p-6 lg:bg-transparent">
                <h3 className="text-si-dark mb-4 text-2xl font-semibold sm:mb-6 sm:text-3xl">
                  Jump to Section
                </h3>

                <nav className="space-y-3 sm:space-y-4">
                  <a
                    href="#what-we-do"
                    className="text-si-dark/85 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">01</span>
                    <span className="border-gray-300 pb-1">What We Do</span>
                  </a>
                  <a
                    href="#our-impact"
                    className="text-si-dark/85 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">02</span>
                    <span>Our Impact</span>
                  </a>
                  <a
                    href="#our-values"
                    className="text-si-dark/85 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">03</span>
                    <span>Our Values</span>
                  </a>
                  <a
                    href="#leadership"
                    className="text-si-dark/85 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
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

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-si-dark px-4 py-8 text-3xl font-bold sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
            Our Executive Committee
          </h1>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                image="/Scenery.jpg"
                imageAlt="Aerial view of golf course"
                category="Case Study"
                title="The LPGA Unlocks Talent Potential with Data"
                description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
                link="/about/journey"
                linkText="Find Out More"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-si-bluegreen text-si-offwhite px-8 py-16 md:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Quote mark */}
          <div className="mb-8">
            <svg
              className="text-si-offwhite h-12 w-12 opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.738.406-1.091.701-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.738.406-1.091.701-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
            </svg>
          </div>

          {/* Quote text */}
          <div className="mb-12">
            <h2 className="text-3xl leading-tight font-light md:text-4xl lg:text-5xl">
              Our impact is greatest when we help our clients address their environmental and social
              challenges.
            </h2>
          </div>

          {/* Profile section */}
          <div className="flex items-center">
            <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Greg Case"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Greg Case</h3>
              <p className="text-lg opacity-90">President and Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-si-dark px-4 py-8 text-3xl font-bold sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
            Board of Directors
          </h1>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                image="/Scenery.jpg"
                imageAlt="Aerial view of golf course"
                category="Case Study"
                title="The LPGA Unlocks Talent Potential with Data"
                description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
                link="/about/journey"
                linkText="Find Out More"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations Section */}
      <section className="bg-si-bluegreen py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-si-offwhite mb-6 text-4xl font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                Investor Relations
              </h2>

              <p className="text-si-offwhite/85 mb-8 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl lg:text-xl">
                Visit our investor relations site for financial reports, regulatory disclosures and
                stock information.
              </p>

              <button className="group bg-si-slate text-si-dark hover:bg-si-offwhite flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-xl">
                <span>Find Out More</span>
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

            {/* Image */}
            <div className="w-full max-w-2xl flex-shrink-0 lg:w-1/2">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop&crop=center"
                  alt="City skyline with modern buildings representing financial district"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreAboutSection />
    </div>
  );
}
