import styles from './eventsection.module.css';
import EventCard from './eventcard';
import socialImg from '@/img/social.jpg';
import techImg from '@/img/tech.jpg';
import careerImg from '@/img/career.jpg';

const upcomingEvents = [
  {
    title: "Freshman Welcome Party",
    date: "Jan 25, 2025",
    location: "Student Center",
    category: "Social",
    image: socialImg,
    description: "Join us for an unforgettable evening of music, games, and making new friends! Perfect for new students to connect."
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

export default function EventSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Upcoming Events</h2>
        <p className={styles.subheading}>Discover exciting events and activities happening on campus</p>
        <div className={styles.grid}>
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
