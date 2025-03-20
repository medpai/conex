// Fichier sitemap.js pour générer automatiquement le sitemap du site
export default async function sitemap() {
  // URL de base du site
  const baseUrl = 'https://conex.com';

  // Date de dernière modification (aujourd'hui)
  const currentDate = new Date().toISOString();

  // Liste des routes statiques principales
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events/tech`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events/social`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events/career`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/learn-more`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Ici, vous pourriez ajouter du code pour générer dynamiquement des URLs
  // basées sur votre contenu, comme les événements à venir, articles, etc.
  // Exemple:
  // const dynamicRoutes = await fetchDynamicRoutes();
  // return [...staticRoutes, ...dynamicRoutes];

  return staticRoutes;
}
