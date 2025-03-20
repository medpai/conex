// Fichier robots.js pour contrôler l'indexation par les robots des moteurs de recherche
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        /*disallow: ['/login', '/signup', '/admin'],*/
      },
    ],
    sitemap: 'https://conex.com/sitemap.xml',
  };
}
