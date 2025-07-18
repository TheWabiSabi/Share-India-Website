import FeaturedBlogCard from './_components/featured-cards';

export default function InsightsPage() {
  return (
    <div className="p-5">
      <h1 className="pb-5">Insights</h1>
      <FeaturedBlogCard
        title="How India's Market Structure Impacts Retail Investors"
        author="Rohit Sharma"
        date="July 18, 2025"
        description="A deep dive into market reforms and what they mean for everyday investors, featuring key insights from the latest SEBI updates."
        category="Market Insights"
        imageUrl="/insights-img/demoimg.png"
      />
    </div>
  );
}
