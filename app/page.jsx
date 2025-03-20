// Importation des styles et des composants
import styles from './page.module.css'
import HeroSection from '@/components/herosection'
import EventSection from '@/components/events/eventsection'
import ProjectSection from '@/components/projects/projectsection'

// Export metadata for SEO
export const metadata = {
  title: 'Conex | Votre réseau d\'événements universitaires',
  description: 'Découvrez et participez aux événements universitaires, développez votre réseau professionnel et explorez des opportunités de carrière avec Conex.',
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