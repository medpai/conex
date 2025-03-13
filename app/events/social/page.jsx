'use client';
//Importation des composants
import EventDetails from '@/components/events/EventDetails';
import socialImg from '@/img/social.jpg';
import styles from './page.module.css';

export default function SocialEventPage() {
  // Programme de la soiree
  const schedule = [
    { time: '18:30', activity: 'Accueil & Cocktail de Bienvenue' },
    { time: '19:00', activity: 'Mot de Bienvenue & Introduction' },
    { time: '19:15', activity: 'Session de Speed Networking' },
    { time: '20:00', activity: 'Buffet Dinatoire & Networking Libre' },
    { time: '20:45', activity: 'Presentations Eclair (5 min)' },
    { time: '21:30', activity: 'Networking & Discussions' },
    { time: '22:30', activity: 'Cloture de l\'evenement' }
  ];

  // Points forts de l'evenement
  const highlights = [
    {
      title: 'Speed Networking',
      description: 'Sessions structurees de 5 minutes pour maximiser vos rencontres'
    },
    {
      title: 'Presentations Eclair',
      description: 'Opportunite de presenter votre projet ou entreprise'
    },
    {
      title: 'Buffet Gourmet',
      description: 'Une selection de mets raffines et boissons'
    }
  ];

  // Liste des intervenants
  const speakers = [
    {
      name: 'Sophie Dubois',
      role: 'CEO, TechMontreal',
      topic: 'L\'avenir de la Tech a Montreal'
    },
    {
      name: 'Marc Tremblay',
      role: 'Fondateur, StartupQC',
      topic: 'Ecosysteme Startup'
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
        {/* Details de l'evenement */}
        <EventDetails
          title="Soiree Networking CONEX"
          date="22 Mars 2024"
          description="Participez a notre soiree networking exclusive dediee aux professionnels de la tech et de l'entrepreneuriat. Une occasion unique de rencontrer des personnes passionnees, d'echanger des idees et de creer des connexions durables.\n\nDans une ambiance sophistiquee au Salon Richmond, venez developper votre reseau professionnel tout en profitant d'un buffet gourmet et de presentations inspirantes."
          imagePath={socialImg}
          location="Le Salon Richmond - Montreal"
          participants="100"
          category="Social"
        />

        <section className={styles.additionalInfo} aria-labelledby="additional-info-heading">
          <h2 id="additional-info-heading" className={styles.visuallyHidden}>Informations supplémentaires</h2>
          
          {/* Programme de la soiree */}
          <div className={styles.infoCard}>
            <h2 id="schedule-heading">Programme de la Soiree</h2>
            <div className={styles.schedule} role="table" aria-labelledby="schedule-heading">
              <div className={styles.scheduleHeader} role="row">
                <span role="columnheader" className={styles.timeHeader}>Heure</span>
                <span role="columnheader" className={styles.activityHeader}>Activité</span>
              </div>
              {schedule.map((item, index) => (
                <div key={index} className={styles.scheduleItem} role="row">
                  <span className={styles.time} role="cell">{item.time}</span>
                  <span className={styles.activity} role="cell">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Points forts */}
          <div className={styles.infoCard}>
            <h2 id="highlights-heading">Points Forts</h2>
            <div className={styles.highlights} aria-labelledby="highlights-heading">
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <h3 id={`highlight-${index}`}>{highlight.title}</h3>
                  <p aria-labelledby={`highlight-${index}`}>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Liste des intervenants */}
          <div className={styles.infoCard}>
            <h2 id="speakers-heading">Intervenants</h2>
            <div className={styles.speakers} aria-labelledby="speakers-heading">
              {speakers.map((speaker, index) => (
                <div key={index} className={styles.speaker}>
                  <div className={styles.speakerInfo}>
                    <h3 id={`speaker-${index}`}>{speaker.name}</h3>
                    <span className={styles.role} aria-labelledby={`speaker-${index}`}>{speaker.role}</span>
                    <span className={styles.topic} aria-labelledby={`speaker-${index}`}>{speaker.topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avantages pour les participants */}
          <div className={styles.infoCard}>
            <h2 id="benefits-heading">Ce Que Vous Obtiendrez</h2>
            <ul className={styles.benefits} aria-labelledby="benefits-heading">
              <li>Opportunites de networking ciblees</li>
              <li>Connexions avec des leaders de l'industrie</li>
              <li>Visibilite pour votre entreprise/projet</li>
              <li>Acces a la communaute CONEX</li>
              <li>Buffet et boissons de qualite</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
