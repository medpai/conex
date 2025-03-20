export const metadata = {
  title: 'Contact | Conex',
  description: 'Contactez l\'équipe Conex pour toute question, suggestion ou partenariat concernant notre plateforme d\'événements universitaires.',
  keywords: ['contact', 'support', 'aide', 'partenariat', 'questions'],
  authors: [{ name: 'Conex Team' }],
  creator: 'Conex',
  publisher: 'Conex',
  openGraph: {
    title: 'Contact | Conex',
    description: 'Contactez l\'équipe Conex pour toute question ou suggestion concernant notre plateforme.',
    url: 'https://conex.com/contact',
    siteName: 'Conex',
    images: [
      {
        url: '/contact-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contactez Conex',
      },
    ],
    locale: 'fr-CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact | Conex',
    description: 'Contactez l\'équipe Conex pour toute question ou suggestion concernant notre plateforme.',
    images: ['/contact-image.jpg'],
    creator: '@conexnetwork',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://conex.com/contact',
    languages: {
      'fr-CA': 'https://conex.com/contact',
      'en-US': 'https://conex.com/en/contact',
    },
  },
  metadataBase: new URL('https://conex.com'),
};
