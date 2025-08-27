import Card from '@/components/Card';
import FeaturedCarousel from './_components/featured-section/featured-caraousel';
// import FeaturedBlogCard from './_components/featured-cards';
import InsightsFilterBar from './_components/insights-filter';

export default function InsightsPage() {
  return (
    <div className="w-screen px-2 py-5 pt-[10vh] sm:px-4 md:px-6 lg:px-8 lg:pt-[15vh]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
        {/* Heading/Intro */}
        <div className="flex flex-col items-center pt-4 lg:w-[25vw] lg:pt-10 lg:pl-4">
          <h1 className="text-si-dark text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:w-[25vw] lg:text-left lg:text-6xl">
            Featured Insights
          </h1>
          <p className="text-si-dark/70 w-full pt-6 text-center text-base font-medium sm:text-lg lg:pt-10 lg:text-justify">
            Explore expert-led articles and blogs from Share India Brokers featuring actionable
            insights on market trends, trading strategies, and the evolving Indian financial
            landscape.
          </p>
        </div>
        <div className="pr-5 lg:w-[64vw]">
          <FeaturedCarousel />
        </div>
        {/* Carousel */}
      </div>
      <div className="mt-10 mb-10">
        <InsightsFilterBar />
      </div>
      <div className="-z-10 flex flex-col justify-center gap-4 p-4 sm:flex-row sm:gap-6 sm:p-6">
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
  );
}
