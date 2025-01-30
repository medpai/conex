'use client';
import EventDetails from '@/components/events/EventDetails';
import socialImg from '@/img/social.jpg';
import styles from './page.module.css';

export default function SocialEventPage() {
  const schedule = [
    { time: '18:30', activity: 'Accueil & Cocktail de Bienvenue' },
    { time: '19:00', activity: 'Mot de Bienvenue & Introduction' },
    { time: '19:15', activity: 'Session de Speed Networking' },
    { time: '20:00', activity: 'Buffet Dînatoire & Networking Libre' },
    { time: '20:45', activity: 'Présentations Éclair (5 min)' },
    { time: '21:30', activity: 'Networking & Discussions' },
    { time: '22:30', activity: 'Clôture de l\'événement' }
  ];

  const highlights = [
    {
      title: 'Speed Networking',
      description: 'Sessions structurées de 5 minutes pour maximiser vos rencontres'
    },
    {
      title: 'Présentations Éclair',
      description: 'Opportunité de présenter votre projet ou entreprise'
    },
    {
      title: 'Buffet Gourmet',
      description: 'Une sélection de mets raffinés et boissons'
    }
  ];

  const speakers = [
    {
      name: 'Sophie Dubois',
      role: 'CEO, TechMontreal',
      topic: 'L\'avenir de la Tech à Montréal'
    },
    {
      name: 'Marc Tremblay',
      role: 'Fondateur, StartupQC',
      topic: 'Écosystème Startup'
    },
    {
      name: 'Julie Chen',
      role: 'Directrice, Innovation Hub',
      topic: 'Innovation & Networking'
    }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.eventContainer}>
        <EventDetails
          title="Soirée Networking CONEX"
          date="22 Mars 2024"
          description="Participez à notre soirée networking exclusive dédiée aux professionnels de la tech et de l'entrepreneuriat. Une occasion unique de rencontrer des personnes passionnées, d'échanger des idées et de créer des connexions durables.\n\nDans une ambiance sophistiquée au Salon Richmond, venez développer votre réseau professionnel tout en profitant d'un buffet gourmet et de présentations inspirantes."
          imagePath={socialImg}
          location="Le Salon Richmond - Montréal"
          participants="100"
          category="Social"
        />

        <section className={styles.additionalInfo}>
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

          <div className={styles.infoCard}>
            <h2>Ce Que Vous Obtiendrez</h2>
            <ul className={styles.benefits}>
              <li>Opportunités de networking ciblées</li>
              <li>Connexions avec des leaders de l'industrie</li>
              <li>Visibilité pour votre entreprise/projet</li>
              <li>Accès à la communauté CONEX</li>
              <li>Buffet et boissons de qualité</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
