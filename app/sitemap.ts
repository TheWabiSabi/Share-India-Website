import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insurance.shareindia.com';
  const currentDate = new Date();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services-by-shareindia`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/premium-estimator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/be-a-posp`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal-disclaimers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cancellation-refund`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Retail insurance pages
  const retailPages = [
    'retail',
    'retail/life',
    'retail/term',
    'retail/health',
    'retail/motor',
    'retail/home',
    'retail/travel',
    'retail/cyber',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Corporate insurance pages
  const corporatePages = [
    'corporate-insurance',
    'corporate-insurance/property-and-engineering-insurance',
    'corporate-insurance/liability-insurance',
    'corporate-insurance/marine-transit-insurance',
    'corporate-insurance/motor-fleet-insurance',
    'corporate-insurance/employee-benefits-insurance',
    'corporate-insurance/office-package-insurance',
    'corporate-insurance/shopkeepers-package-and-jewellers-block',
    'corporate-insurance/media-and-entertainment-insurance',
    'corporate-insurance/group-travel-insurance-plans',
    'corporate-insurance/trade-credit-insurance',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Industry pages
  const industryPages = [
    'industries',
    'industries/infrastructure-industry',
    'industries/chemical-industry',
    'industries/solar-industry',
    'industries/textile-industry',
    'industries/logistics-industry',
    'industries/real-estate-industry',
    'industries/life-sciences-and-pharma-industry',
    'industries/plastic-industry',
    'industries/startup-industry',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...retailPages, ...corporatePages, ...industryPages];
}
