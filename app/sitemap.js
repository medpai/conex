/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
  return [
    {
      url: 'https://conex.com/',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://conex.com/about',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://conex.com/contact',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://conex.com/events',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://conex.com/login',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://conex.com/signup',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://conex.com/learn-more',
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
