// Importations
import styles from './eventsection.module.css';
import EventCard from './eventcard';
import socialImg from '@/img/social.jpg';
import techImg from '@/img/tech.jpg';
import careerImg from '@/img/career.jpg';

// Définition des événements à venir avec leurs détails
const upcomingEvents = [
  {
    title: "Freshman Welcome Party", // Titre de l'événement
    date: "Jan 25, 2025", // Date de l'événement
    location: "Student Center", // Lieu de l'événement
    category: "Social", // Catégorie de l'événement
    image: socialImg, // Image associée à l'événement
    description: "Join us for an unforgettable evening of music, games, and making new friends! Perfect for new students to connect." // Description de l'événement
  },
  {
    title: "Tech Club Hackathon",
    date: "Feb 1-2, 2025",
    location: "Engineering Building",
    category: "Technology",
    image: techImg,
    description: "24-hour coding challenge with amazing prizes. All skill levels welcome! Learn, build, and compete with peers."
  },
  {
    title: "Career Fair 2025",
    date: "Feb 15, 2025",
    location: "Main Hall",
    category: "Career",
    image: careerImg,
    description: "Meet top employers and explore internship opportunities. Resume workshops and mock interviews included."
  }
];

// Fonction principale pour afficher la section des événements à venir
export default function EventSection() {
  return (
    // Section principale contenant tous les éléments des événements à venir
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Upcoming Events</h2> {/* Titre principal */}
        <p className={styles.subheading}>Discover exciting events and activities happening on campus</p> {/* Sous-titre */}
        
        {/* Grille d'événements, chaque événement est affiché dans un composant EventCard */}
        <div className={styles.grid}>
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} /> // Création d'un EventCard pour chaque événement
          ))}
        </div>
      </div>
    </section>
  );
}
