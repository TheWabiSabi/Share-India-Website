import FeaturedCarousel from './_components/featured-section/featured-caraousel';
// import FeaturedBlogCard from './_components/featured-cards';
import InsightsFilterBar from './_components/insights-filter';

export default function InsightsPage() {
  return (
    <div className="w-full px-2 py-5 sm:px-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
        {/* Heading/Intro */}
        <div className="flex w-full flex-col items-center pt-4 lg:w-[30vw] lg:pt-10 lg:pl-4">
          <h1 className="text-si-dark w-full text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-left lg:text-6xl">
            Featured Insights
          </h1>
          <p className="text-si-dark/70 pt-6 text-center text-base font-medium sm:text-lg lg:pt-10 lg:text-justify">
            Explore expert-led articles and blogs from Share India Brokers featuring actionable
            insights on market trends, trading strategies, and the evolving Indian financial
            landscape.
          </p>
        </div>
        {/* Carousel */}
        <FeaturedCarousel />
      </div>
      <div className="mt-10">
        <InsightsFilterBar />
      </div>
    </div>
  );
}
