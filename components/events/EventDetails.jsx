'use client';
import Image from 'next/image';
import styles from './EventDetails.module.css';
import { useState } from 'react';

const EventDetails = ({ 
  title, 
  date, 
  description, 
  imagePath, 
  location, 
  participants,
  category 
}) => {
  // Déclare l'état pour savoir si l'utilisateur est inscrit
  const [isRegistered, setIsRegistered] = useState(false);
  // Déclare l'état pour afficher ou non la fenêtre modale
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher la modale lorsque l'utilisateur clique sur "Join Event"
  const handleJoinEvent = () => {
    setShowModal(true);
  };

  // Fonction pour confirmer l'inscription
  const handleConfirmRegistration = () => {
    setIsRegistered(true); // L'utilisateur est inscrit
    setShowModal(false); // Ferme la modale
  };

  return (
    <div className={styles.eventDetailsContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath} // Source de l'image de l'événement
          alt={title} // Texte alternatif pour l'image
          fill // Remplit l'espace disponible pour l'image
          priority // Charge l'image en priorité
          quality={90} // Qualité de l'image (90%)
          className={styles.eventImage} // Applique les styles de l'image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px" // Gestion des tailles d'image selon la largeur de l'écran
        />
      </div>
      
      <div className={styles.contentContainer}>
        <span className={`${styles.category} ${styles[category.toLowerCase()]}`}>
          {category} {/* Affiche la catégorie de l'événement */}
        </span>
        <h1 className={styles.title}>{title}</h1> {/* Affiche le titre de l'événement */}
        
        <div className={styles.metadata}>
          {/* Affiche les informations de l'événement (date, lieu, nombre de participants) */}
          <div className={styles.metaItem}>
            <span className={styles.icon}>📅</span>
            <span>{date}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.icon}>📍</span>
            <span>{location}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.icon}>👥</span>
            <span>{participants} participants</span>
          </div>
        </div>

        <div className={styles.description}>
          {description} {/* Affiche la description de l'événement */}
        </div>

        <button 
          onClick={handleJoinEvent} // Appel la fonction pour afficher la modale
          className={styles.joinButton} 
          disabled={isRegistered} // Désactive le bouton si l'utilisateur est déjà inscrit
        >
          {isRegistered ? 'Registered ✓' : 'Join Event'} {/* Affiche un texte différent selon l'état d'inscription */}
        </button>
      </div>

      {/* Modale de confirmation d'inscription */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Confirm Registration</h2> {/* Titre de la modale */}
            <p>Are you sure you want to register for {title}?</p> {/* Question pour confirmer l'inscription */}
            <div className={styles.modalButtons}>
              <button 
                onClick={handleConfirmRegistration} // Confirme l'inscription
                className={styles.confirmButton}
              >
                Confirm
              </button>
              <button 
                onClick={() => setShowModal(false)} // Annule l'inscription et ferme la modale
                className={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;