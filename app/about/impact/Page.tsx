import MoreAboutSection from '../_components/moreAboutSection';

export default function ImpactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Scenery.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0">
          <div className="bg-opacity-75 bg-si-dark/60 background-filter h-full w-full backdrop-blur-sm sm:w-4/5 md:w-3/5">
            <div className="flex h-full flex-col justify-end px-4 sm:px-8 md:px-16 lg:px-24">
              <h1 className="text-si-offwhite mb-4 text-xl leading-tight sm:mb-6 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                Impact Report
              </h1>
              <p className="text-si-offwhite/90 max-w-2xl text-base leading-relaxed font-bold sm:text-lg md:text-xl lg:max-w-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                Testing Testing Testing Testing Testing Testing Testing Testing Testing
              </p>
              <button className="group bg-si-bluegreen text-si-offwhite hover:bg-si-slate/60 mt-18 mb-12 flex w-1/2 items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-xl">
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
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl flex-1">
              <h2 className="text-si-dark mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Our Story
              </h2>
              <div className="text-si-dark/80 space-y-4 text-base leading-relaxed sm:space-y-6 sm:text-lg">
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
                    <p className="text-si-dark/90 text-base font-semibold sm:text-lg">
                      How do I protect against risk and volatility?
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-si-bluegreen flex-shrink-0 text-lg font-bold sm:text-xl">
                      2
                    </span>
                    <p className="text-si-dark/90 text-base font-semibold sm:text-lg">
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
                  ensures every Aon client is <strong>better informed</strong>,{' '}
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
                    className="text-si-dark/80 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">01</span>
                    <span className="pb-1">What We Do</span>
                  </a>
                  <a
                    href="#our-impact"
                    className="text-si-dark/80 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">02</span>
                    <span>Our Impact</span>
                  </a>
                  <a
                    href="#our-values"
                    className="text-si-dark/80 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
                  >
                    <span className="text-si-bluegreen flex-shrink-0 font-bold">03</span>
                    <span>Our Values</span>
                  </a>
                  <a
                    href="#leadership"
                    className="text-si-dark/80 hover:text-si-dark/60 flex w-full items-center gap-3 text-left transition-colors"
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

      {/* CEO Section */}
      <section className="bg-si-bluegreen py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
            {/* CEO Image */}
            <div className="w-full max-w-md flex-shrink-0 lg:w-1/2">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Greg Case, CEO"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-si-offwhite mb-6 text-4xl font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                A Message From Our CEO
              </h2>
              <p className="text-si-offwhite/80 mb-8 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl lg:text-xl">
                Greg Case, Aon's chief executive officer, shares his perspective on the important
                role ESG plays in our operations and client engagements.
              </p>
              <button className="group bg-si-dark text-si-offwhite hover:bg-si-dark/70 flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 sm:px-10 sm:py-5 sm:text-xl">
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
        </div>
      </section>

      {/* Quote Section */}
      <div className="bg-si-slate text-si-dark px-8 py-16 md:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Quote mark */}
          <div className="mb-8">
            <svg
              className="text-si-dark h-12 w-12 opacity-90"
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
          {/* Profile */}
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

      {/* Environmental Impact Section */}
      <section id="environmental-impact" className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-si-dark mb-6 text-4xl font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                Environmental Impact
              </h2>
              <p className="text-si-dark/80 mb-8 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl lg:text-xl">
                We're focused on three areas of environmental impact: our own decarbonization and
                sustainability efforts, working to accelerate clients' climate resiliency and
                response, and convening leaders and organizations to collaborate and scale our
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
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&crop=center"
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
              <h2 className="text-si-dark mb-6 text-4xl font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                Social Impact
              </h2>
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
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=450&fit=crop&crop=center"
                  alt="Social Impact - Diverse team collaborating in workplace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section (repeat or for special focus) */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-si-dark mb-6 text-4xl font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                Environmental Impact
              </h2>
              <p className="text-si-dark/85 mb-8 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl lg:text-xl">
                We're focused on three areas of environmental impact: our own decarbonization and
                sustainability efforts, working to accelerate clients' climate resiliency and
                response, and convening leaders and organizations to collaborate and scale our
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
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&crop=center"
                  alt="Environmental Impact - Aerial view of renewable energy and nature"
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
