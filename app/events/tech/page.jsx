'use client';

// Importation du composant EventDetails
import EventDetails from '@/components/events/EventDetails';
import techImg from '@/img/tech.jpg';
import styles from './page.module.css';

// Fonction principale pour la page des evenements tech
export default function TechEventPage() {
  // Agenda de l'evenement
  const agenda = [
    { time: '09:00', activity: 'Registration & Breakfast' },
    { time: '10:00', activity: 'Opening Keynote: Future of AI' },
    { time: '11:30', activity: 'Workshop Sessions' },
    { time: '13:00', activity: 'Networking Lunch' },
    { time: '14:30', activity: 'Hackathon Kickoff' },
    { time: '18:00', activity: 'Project Presentations' },
    { time: '19:00', activity: 'Awards Ceremony' }
  ];

  // Liste des intervenants
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      topic: 'Machine Learning Innovation'
    },
    {
      name: 'Mark Rodriguez',
      role: 'Tech Lead, Google',
      topic: 'Cloud Computing'
    },
    {
      name: 'Lisa Wang',
      role: 'CTO, TechStart',
      topic: 'Startup Technology'
    }
  ];

  // Retourne le rendu de la page
  return (
    <main className={styles.main}>
      <div className={styles.eventContainer}>
        {/* Details de l'evenement */}
        <EventDetails
          title="AI & Innovation Hackathon 2024"
          date="15-16 Mars 2024"
          description="Rejoignez-nous pour un hackathon exceptionnel centre sur l'intelligence artificielle et l'innovation technologique. Une opportunite unique de collaborer avec des experts du domaine, d'apprendre les dernieres technologies, et de developper des solutions innovantes.\n\nCet evenement rassemblera des developpeurs, des designers et des entrepreneurs passionnes par l'IA et son impact sur notre futur."
          imagePath={techImg}
          location="Campus ÉTS - Montreal"
          participants="150"
          category="Technology"
        />
           {/* Programme de l'evenement */}
        <section className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h2>Programme de l'evenement</h2>
            <div className={styles.agenda}>
              {agenda.map((item, index) => (
                <div key={index} className={styles.agendaItem}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.activity}>{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Speakers */}
          <div className={styles.infoCard}>
            <h2>Speakers</h2>
            <div className={styles.speakers}>
              {speakers.map((speaker, index) => (
                <div key={index} className={styles.speaker}>
                  <div className={styles.speakerInfo}>
                    <h3>{speaker.name}</h3>
                    <span className={styles.role}>{speaker.role}</span>
                    <span className={styles.topic}>Topic: {speaker.topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
           {/* ce que vous apprendrez */}
          <div className={styles.infoCard}>
            <h2>Ce que vous apprendrez</h2>
            <ul className={styles.learningPoints}>
              <li>Intelligence Artificielle et Machine Learning</li>
              <li>Cloud Computing et Architecture Scalable</li>
              <li>DevOps et MLOps Best Practices</li>
              <li>Design Thinking et Innovation</li>
              <li>Presentation et Pitch de Projets</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
