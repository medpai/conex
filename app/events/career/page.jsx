//Importations
import EventDetails from '@/components/events/EventDetails';
import careerImg from '@/img/career02.jpg';
import styles from './page.module.css';

// Export metadata for SEO
export const metadata = {
  title: 'Événements Carrière | Conex',
  description: 'Découvrez nos événements carrière universitaires - salons d\'emploi, ateliers CV, simulations d\'entretien et plus encore pour booster votre parcours professionnel.'
};

export default function CareerEventPage() {
  // Definition du programme de l'evenement
  const schedule = [
    { time: '15:30', activity: 'Accueil & Enregistrement' },
    { time: '16:00', activity: 'Mot de Bienvenue & Introduction' },
    { time: '16:30', activity: 'Ouverture des stands et Networking' },
    { time: '16:30', activity: 'Conférence thématiques' },
    { time: '17:00', activity: 'Pause : Buffet et cocktail' },
    { time: '18:00', activity: 'Pannel de discussion : Compétences clés pour le marché du travail' },
    { time: '19:00', activity: 'Clotur et Remerciements' }
  ];

  // Liste des points forts de l'evenement
  const highlights = [
    {
      title: 'Conférences thématiques',
      description: 'Des experts partagent leurs connaissances et conseils afin de réussir dans le monde professionnel'
    },
    {
      title: 'Pannel de discussion',
      description: 'Échangez avec des professionnels et découvrez les compétences essentielles pour votre carrière'
    },
    {
      title: 'Cocktail et Networking',
      description: 'Rencontrez des recruteurs et des professionnels pour élargir votre réseau'
    }
  ];

  // Liste des intervenants
  const speakers = [
    {
      name: 'Pierre Chabrier',
      role: 'Responsable Recrutement, SmartLife',
      topic: 'Votre CV, votre atout'
    },
    {
      name: 'Jean Jacques',
      role: 'Ingenieur IA, Ubisoft',
      topic: 'Le future de l\'intelligence artificielle'
    },
    {
      name: 'Maika Emond',
      role: 'Directrice RH, BrightFuture',
      topic: 'Comment se vendre comme un pro'
    }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.eventContainer}>
        {/* Affichage des details de l'evenement */}
        <EventDetails
          title="Salon de l'emploi TechCareers"
          date="12 Avril 2024"
          description="Rencontrez les entreprises les plus innovantes et découvrez les opportunités de carrière dans le secteur de la tech."
          imagePath={careerImg}
          location="Palais des Congrès - Montréal"
          participants="100"
          category="Carrière"
        />

        <section className={styles.additionalInfo}>
          {/* Programme de la soiree */}
          <div className={styles.infoCard}>
            <h2>Programme de la Soirée</h2>
            <div className={styles.schedule}>
              {schedule.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.activity}>{item.activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Points forts de l'evenement */}
          <div className={styles.infoCard}>
            <h2>Points Forts</h2>
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Liste des intervenants */}
          <div className={styles.infoCard}>
            <h2>Intervenants</h2>
            <div className={styles.speakers}>
              {speakers.map((speaker, index) => (
                <div key={index} className={styles.speaker}>
                  <div className={styles.speakerInfo}>
                    <h3>{speaker.name}</h3>
                    <span className={styles.role}>{speaker.role}</span>
                    <span className={styles.topic}>{speaker.topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liste des benefices pour les participants */}
          <div className={styles.infoCard}>
            <h2>Ce Que Vous Obtiendrez</h2>
            <ul className={styles.benefits}>
              <li>Opportunités de networking ciblées</li>
              <li>Connexions avec des leaders de diverses industrie</li>
              <li>Visibilité pour vos compétences</li>
              <li>Accès à la communauté CONEX</li>
              <li>Buffet et boissons de qualité</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}