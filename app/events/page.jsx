// Importation du composant EventSection
import EventSection from '@/components/events/eventsection';

// Export metadata for SEO
export const metadata = {
  title: 'Tous les Événements | Conex',
  description: 'Explorez tous les événements universitaires à venir - technologie, carrière, social et plus encore. Trouvez des opportunités de réseautage et de développement professionnel.',
};

// Fonction principale pour la page des evenements
export default function EventsPage() {
  return (
    // Element principal de la page
    <main>
      {/* Section des evenements */}
      <EventSection />
    </main>
  );
}
