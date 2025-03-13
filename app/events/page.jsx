// Importation du composant EventSection
import EventSection from '@/components/events/eventsection';

// Métadonnées spécifiques à la page des événements
export const metadata = {
  title: 'Événements Conex | Découvrez nos prochains événements universitaires',
  description: 'Explorez les événements à venir organisés par Conex. Soirées, hackathons, salons de l\'emploi et plus encore pour enrichir votre expérience universitaire.',
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
