// Importation des styles et des composants
import styles from './page.module.css'
import HeroSection from '@/components/herosection'
import EventSection from '@/components/events/eventsection'
import ProjectSection from '@/components/projects/projectsection'

// Métadonnées spécifiques à la page d'accueil
export const metadata = {
  title: 'Conex | Accueil - Votre plateforme de connexion universitaire',
  description: 'Découvrez Conex, la plateforme qui connecte étudiants et professionnels à travers des événements et projets universitaires innovants.',
};

// Fonction principale pour la page d'accueil
export default function Home() {
  return (
    <>
      {/* Section Hero */}
      <HeroSection />
      {/* Section des evenements */}
      <EventSection />
      {/* Section des projets */}
      <ProjectSection />
    </>
  )
}