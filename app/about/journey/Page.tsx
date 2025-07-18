'use client';
import MoreAboutSection from '../_components/moreAboutSection';

export default function JourneyPage() {
  return (
    <div className="relative z-0">
      {/* Hero Section with Split Layout */}
      <div className="relative z-0">
        {/* Grey Section - Top Half */}
        <div className="from-si-bluegreen to-si-slate bg-gradient-to-r py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Left Side - Content */}
              <div className="z-10 w-full lg:w-1/2">
                <h1 className="text-si-offwhite mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                  Our Journey
                </h1>

                <p className="text-si-offwhite mb-8 max-w-lg text-lg leading-relaxed sm:text-xl lg:text-2xl">
                  From humble beginnings to industry leadership, discover the milestones that have
                  shaped our path and continue to drive our vision forward.
                </p>
              </div>

              {/* Right Side - Space for Image */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          </div>
        </div>

        <div className="bg-si-white py-4 sm:py-8 md:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Overlapping Image - Positioned absolutely */}
        <div className="absolute top-8 right-8 bottom-8 z-0 hidden w-full lg:block lg:w-2/5 xl:w-1/3">
          <img
            src="/Scenery.jpg"
            alt="Our Journey"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Mobile Image - Only visible on mobile */}
        <div className="bg-si-offwhite block px-4 py-8 lg:hidden">
          <img
            src="/Scenery.jpg"
            alt="Our Journey"
            className="object-cove h-64 w-full rounded-lg"
          />
        </div>
      </div>

      <section className="bg-si-white relative z-0">
        <div className="container mx-auto">
          <h1 className="text-si-dark px-4 py-8 text-3xl font-bold sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
            Shaping Decisions for the Better
          </h1>
          <p className="text-si-dark px-4 py-2 text-lg sm:px-6 sm:text-xl lg:px-8 lg:text-2xl">
            Our journey is defined by a commitment to excellence, innovation, and a passion for
            making a positive impact in the world.Our journey is defined by a commitment to
            excellence, innovation, and a passion for making a positive impact in the world.Our
            journey is defined by a commitment to excellence, innovation, and a passion for making a
            positive impact in the world.
          </p>
        </div>
      </section>

      {/* Timeline Section with Horizontal Scroll Effect */}
      <section className="bg-si-offwhite relative z-0 overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-si-bluegreen mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Timeline
            </p>
            <h2 className="text-si-dark mb-16 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Milestones That Define Us
            </h2>
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="bg-si-bluegreen absolute top-0 left-1/2 hidden h-full w-1 -translate-x-1/2 lg:block"></div>

            {/* Mobile Timeline Line */}
            <div className="bg-si-bluegreen absolute top-0 left-8 h-full w-1 lg:hidden"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Timeline Item 1 */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                {/* Desktop Timeline Dot */}
                <div className="bg-si-slate absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full lg:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="bg-si-slate absolute left-8 h-6 w-6 -translate-x-1/2 rounded-full lg:hidden"></div>

                {/* Content */}
                <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pr-12">
                  <div className="bg-si-white rounded-lg p-6 shadow-lg lg:text-right">
                    <span className="bg-si-offwhite text-si-bluegreen mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                      2010
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Foundation</h3>
                    <p className="text-gray-600">
                      Our journey began with a vision to transform the industry through innovation
                      and dedication to excellence.
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                {/* Desktop Timeline Dot */}
                <div className="bg-si-slate absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full lg:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="bg-si-slate absolute left-8 h-6 w-6 -translate-x-1/2 rounded-full lg:hidden"></div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block lg:w-1/2"></div>

                {/* Content */}
                <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pl-12">
                  <div className="bg-si-white rounded-lg p-6 shadow-lg">
                    <span className="bg-si-offwhite text-si-bluegreen mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                      2015
                    </span>
                    <h3 className="text-si-dark mb-3 text-xl font-bold">First Milestone</h3>
                    <p className="text-si-dark/70">
                      We achieved our first major breakthrough, establishing ourselves as a trusted
                      partner in the industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                {/* Desktop Timeline Dot */}
                <div className="bg-si-slate absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full lg:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="bg-si-slate absolute left-8 h-6 w-6 -translate-x-1/2 rounded-full lg:hidden"></div>

                {/* Content */}
                <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pr-12">
                  <div className="bg-si-white rounded-lg p-6 shadow-lg lg:text-right">
                    <span className="bg-si-offwhite text-si-bluegreen mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                      2020
                    </span>
                    <h3 className="text-si-dark mb-3 text-xl font-bold">Global Expansion</h3>
                    <p className="text-si-dark/70">
                      We expanded our reach globally, bringing our expertise to new markets and
                      communities worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                {/* Desktop Timeline Dot */}
                <div className="bg-si-slate absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full lg:block"></div>

                {/* Mobile Timeline Dot */}
                <div className="bg-si-slate absolute left-8 h-6 w-6 -translate-x-1/2 rounded-full lg:hidden"></div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block lg:w-1/2"></div>

                {/* Content */}
                <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pl-12">
                  <div className="bg-si-white rounded-lg p-6 shadow-lg">
                    <span className="bg-si-offwhite text-si-bluegreen mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                      2024
                    </span>
                    <h3 className="text-si-dark mb-3 text-xl font-bold">Innovation Leadership</h3>
                    <p className="text-si-dark/70">
                      Today, we continue to lead through innovation, setting new standards and
                      shaping the future of our industry.
                    </p>
                  </div>
                </div>
              </div>
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

      {/* Call to Action Section */}
      <section className="bg-si-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-si-dark sm:text-4xl md:text-5xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-si-dark/80 sm:text-xl">
              Join us as we continue to push boundaries, innovate, and create meaningful impact in
              everything we do.
            </p>
            <button className="rounded-lg bg-si-bluegreen px-8 py-4 font-semibold text-si-offwhite transition-colors hover:bg-si-bluegreen/80 focus:ring-2 focus:ring-si-bluegreen focus:ring-offset-2 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <MoreAboutSection />
    </div>
  );
}
