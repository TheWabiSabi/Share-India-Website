import Link from 'next/link';

interface IndustryServed {
  detail: string;
  type: string;
}

const getPremiumEstimatorHref = (industryDetail: string) =>
  `/premium-estimator?industry=${encodeURIComponent(industryDetail)}`;

const IndustriesServedSection = ({ industries }: { industries: IndustryServed[] }) => (
  <section className="border-t border-gray-100 bg-white py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-si-ink text-2xl font-bold md:text-3xl">Industries We Serve</h2>
      <ul className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
        {industries.map((industry) => (
          <li key={industry.detail} className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="min-w-0">
              <span className="text-si-ink block text-sm font-medium">{industry.detail}</span>
              <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600 uppercase">
                {industry.type}
              </span>
            </div>
            <Link
              href={getPremiumEstimatorHref(industry.detail)}
              className="border-si-primary/30 text-si-primary hover:bg-si-primary/5 shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors"
            >
              Premium Estimator
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default IndustriesServedSection;
