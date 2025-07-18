import FeaturedCarousel from './_components/featured-section/featured-caraousel';
// import FeaturedBlogCard from './_components/featured-cards';
import InsightsFilterBar from './_components/insights-filter';

export default function InsightsPage() {
  return (
    <div className="w-[100vw] p-5">
      <div className="flex flex-row justify-between">
        <div className="flex w-[30vw] flex-col items-center pt-10 pl-4">
          <h1 className="text-si-dark w-full text-justify text-6xl font-semibold">
            Featured Insights
          </h1>
          <p className="text-si-dark/70 pt-10 text-lg font-medium">
            Explore expert-led articles and blogs from Share India Brokers featuring actionable
            insights on market trends, trading strategies, and the evolving Indian financial
            landscape.
          </p>
        </div>
        <FeaturedCarousel />
      </div>
      <InsightsFilterBar />
    </div>
  );
}
