'use client';
//Importations
import styles from './projectsection.module.css';
import ProjectCard from './projectcard';
import ai from '/img/ai.jpg';
import social from '/img/social1.jpg';
import sustainablity from '/img/sustainability.jpg';

// Définition des projets étudiants
const projects = [
  {
    title: "AI Study Assistant", // Titre du projet
    student: "Sarah Johnson", // Nom de l'étudiant
    category: "Artificial Intelligence", // Catégorie du projet
    image: ai, // Image du projet
    description: "An AI-powered study assistant that helps students organize their notes and create personalized study plans.", // Description du projet
    technologies: ["Python", "TensorFlow", "React"], // Technologies utilisées
    openPositions: [ // Positions ouvertes pour ce projet
      {
        role: "ML Engineer", // Rôle disponible
        spots: 2, // Nombre de places disponibles
        skills: ["Python", "TensorFlow", "Machine Learning"] // Compétences requises
      },
      {
        role: "Frontend Developer",
        spots: 1,
        skills: ["React", "TypeScript", "UI/UX"]
      }
    ]
  },
  {
    title: "EcoTrack", 
    student: "Michael Chen", 
    category: "Sustainability", 
    image: sustainablity, 
    description: "A mobile app that helps students track and reduce their carbon footprint on campus.", 
    technologies: ["React Native", "Node.js", "MongoDB"], 
    openPositions: [
      {
        role: "Mobile Developer",
        spots: 1,
        skills: ["React Native", "JavaScript", "Mobile UI"]
      },
      {
        role: "Backend Developer",
        spots: 1,
        skills: ["Node.js", "MongoDB", "API Design"]
      }
    ]
  },
  {
    title: "Campus Connect", 
    student: "Emma Rodriguez", 
    category: "Social", 
    image: social, 
    description: "A platform for students to find study groups and collaborate on projects across different courses.", // Description du projet
    technologies: ["Vue.js", "Firebase", "Tailwind"], 
    openPositions: [ 
      {
        role: "UI/UX Designer",
        spots: 1,
        skills: ["Figma", "UI Design", "User Research"]
      },
      {
        role: "Full Stack Developer",
        spots: 2,
        skills: ["Vue.js", "Firebase", "JavaScript"]
      }
    ]
  }
];

// Fonction principale du composant qui affiche la section des projets
export default function ProjectSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Student Projects</h2> {/* Titre de la section */}
          <p>Join exciting student projects and gain hands-on experience</p> {/* Description de la section */}
        </div>
        
        <div className={styles.projectGrid}>
          {/* Boucle pour afficher chaque projet sous forme de carte */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} /> // Rendu de la carte de chaque projet
          ))}
        </div>
      </div>
    </section>
  );
}
