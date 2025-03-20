//Importations
import styles from './eventcard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function EventCard({ title, date, location, category, image, description }) {
  // Fonction qui retourne le "slug" correspondant à la catégorie d'événement 
  const getCategorySlug = (category) => {
    const categoryMap = {
      'Technology': 'tech',
      'Social': 'social',
      'Career': 'career'
    };
    return categoryMap[category] || category.toLowerCase(); // Retourne le slug ou la catégorie en minuscules si elle n'est pas dans le mapping
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image} // Source de l'image
          alt={title} // Texte alternatif pour l'image
          fill // Remplissage de l'espace de l'image en fonction du conteneur
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className={styles.category}>{category}</span> {/* Affichage de la catégorie de l'événement */}
      </div>
      <div className={styles.content}> {/* Conteneur pour le contenu texte de la carte */}
        <h3 className={styles.title}>{title}</h3> {/* Affichage du titre de l'événement */}
        <div className={styles.details}> {/* Conteneur pour les détails de l'événement */}
          <div className={styles.detail}> {/* Détail pour la date */}
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect> {/* Icone rectangulaire pour la date */}
              <line x1="16" y1="2" x2="16" y2="6"></line> {/* Ligne pour la partie supérieure */}
              <line x1="8" y1="2" x2="8" y2="6"></line> {/* Ligne pour la partie supérieure */}
              <line x1="3" y1="10" x2="21" y2="10"></line> {/* Ligne horizontale pour séparer la date */}
            </svg>
            <span>{date}</span> {/* Affichage de la date */}
          </div>
          <div className={styles.detail}> {/* Détail pour la localisation */}
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path> {/* Icone pour la localisation */}
              <circle cx="12" cy="10" r="3"></circle> {/* Cercle représentant l'emplacement précis */}
            </svg>
            <span>{location}</span> {/* Affichage de la localisation */}
          </div>
        </div>
        <p className={styles.description}>{description}</p> {/* Affichage de la description de l'événement */}
        <Link
          href={`/events/${getCategorySlug(category)}`} // Lien vers la page de l'événement en fonction de sa catégorie
          className={styles.button}
        >
          Join Event
        </Link>
      </div>
    </div>
  );
}