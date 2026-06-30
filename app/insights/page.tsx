import InsightsFilterBar from './_components/insights-filter';
import { getFeaturedPosts, getLatestPosts, toCard } from '@/lib/ghost';
import MainCarousel from '@/components/main-caraousel';
import InsightsGrid from './_components/insights-grid';

export const metadata = {
  title: 'Expert Insights',
  description:
    'Expert-led articles and blogs featuring actionable insights on market trends, trading strategies, and the evolving Indian financial landscape.',
};

export default async function InsightsPage() {
  const [featuredPosts, latest] = await Promise.all([getFeaturedPosts(10), getLatestPosts(1)]);

  const carouselPosts = featuredPosts.map(toCard);
  const allPosts = [...featuredPosts, ...latest.posts].map(toCard);

  return (
    <div className="section-vibrant-blue from-si-primary-200 w-screen bg-gradient-to-b to-transparent px-2 py-5 pt-[10vh] sm:px-4 md:px-6 lg:px-8 lg:pt-[15vh]">
      <div className="bg-pattern-dots absolute inset-0 opacity-20" />
      <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
        {/* Heading/Intro */}
        <div className="flex flex-col items-center pt-4 lg:w-[25vw] lg:pt-10 lg:pl-4">
          <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-4 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
            Expert Insights
          </div>
          <h1 className="text-si-ink text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:w-[25vw] lg:text-left lg:text-6xl">
            Featured <span className="text-gradient-primary">Insights</span>
          </h1>
          <p className="text-si-ink/80 w-full pt-6 text-center text-base font-medium sm:text-lg lg:pt-10 lg:text-justify">
            Explore expert-led articles and blogs from Share India Brokers featuring actionable
            insights on market trends, trading strategies, and the evolving Indian financial
            landscape.
          </p>
        </div>
        <div className="mt-16 lg:w-[64vw]">
          <MainCarousel posts={carouselPosts} color="blue" layout={1} />
        </div>
      </div>

      {/* Filter Bar + Results Grid (client island) */}
      <div className="relative mt-10 mb-10">
        <InsightsFilterBar />
      </div>

      {/* Results Section */}
      <InsightsGrid initialPosts={allPosts} />
    </div>
  );
}
