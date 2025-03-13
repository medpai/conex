'use client';
import Image from 'next/image';
import styles from './EventDetails.module.css';
import { useState, useRef, useEffect } from 'react';

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
  // Référence pour gérer le focus dans la modale
  const confirmButtonRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Fonction pour afficher la modale lorsque l'utilisateur clique sur "Join Event"
  const handleJoinEvent = () => {
    previousFocusRef.current = document.activeElement;
    setShowModal(true);
  };

  // Fonction pour confirmer l'inscription
  const handleConfirmRegistration = () => {
    setIsRegistered(true); // L'utilisateur est inscrit
    setShowModal(false); // Ferme la modale
    // Restaurer le focus sur le bouton d'origine
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  // Fonction pour fermer la modale
  const handleCloseModal = () => {
    setShowModal(false);
    // Restaurer le focus sur le bouton d'origine
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  // Gestion de la touche Escape pour fermer la modale
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (showModal && event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  // Mettre le focus sur le bouton de confirmation lorsque la modale s'ouvre
  useEffect(() => {
    if (showModal && confirmButtonRef.current) {
      confirmButtonRef.current.focus();
    }
  }, [showModal]);

  // Formater la description pour l'affichage (gestion des sauts de ligne)
  const formattedDescription = description.split('\\n\\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <article className={styles.eventDetailsContainer}>
      <div className={styles.imageContainer} role="img" aria-label={`Image de l'événement: ${title}`}>
        <Image
          src={imagePath} // Source de l'image de l'événement
          alt={`${title} - ${category} event`} // Texte alternatif plus descriptif pour l'image
          fill // Remplit l'espace disponible pour l'image
          priority // Charge l'image en priorité
          quality={90} // Qualité de l'image (90%)
          className={styles.eventImage} // Applique les styles de l'image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px" // Gestion des tailles d'image selon la largeur de l'écran
        />
      </div>
      
      <div className={styles.contentContainer}>
        <span className={`${styles.category} ${styles[category.toLowerCase()]}`} role="text">
          {category} {/* Affiche la catégorie de l'événement */}
        </span>
        <h1 className={styles.title} id="event-title">{title}</h1> {/* Affiche le titre de l'événement */}
        
        <div className={styles.metadata}>
          {/* Affiche les informations de l'événement (date, lieu, nombre de participants) */}
          <div className={styles.metaItem}>
            <span className={styles.icon} aria-hidden="true">📅</span>
            <span>{date}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.icon} aria-hidden="true">📍</span>
            <span>{location}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.icon} aria-hidden="true">👥</span>
            <span>{participants} participants</span>
          </div>
        </div>

        <div className={styles.description} aria-labelledby="event-title">
          {formattedDescription} {/* Affiche la description de l'événement */}
        </div>

        <button 
          onClick={handleJoinEvent} // Appel la fonction pour afficher la modale
          className={styles.joinButton} 
          disabled={isRegistered} // Désactive le bouton si l'utilisateur est déjà inscrit
          aria-label={isRegistered ? "Vous êtes déjà inscrit à cet événement" : `S'inscrire à l'événement ${title}`}
        >
          {isRegistered ? 'Registered ✓' : 'Join Event'} {/* Affiche un texte différent selon l'état d'inscription */}
        </button>
      </div>

      {/* Modale de confirmation d'inscription */}
      {showModal && (
        <div 
          className={styles.modal} 
          role="dialog" 
          aria-labelledby="modal-title" 
          aria-describedby="modal-description"
          aria-modal="true"
        >
          <div className={styles.modalContent}>
            <h2 id="modal-title">Confirm Registration</h2> {/* Titre de la modale */}
            <p id="modal-description">Are you sure you want to register for {title}?</p> {/* Question pour confirmer l'inscription */}
            <div className={styles.modalButtons}>
              <button 
                ref={confirmButtonRef}
                onClick={handleConfirmRegistration} // Confirme l'inscription
                className={styles.confirmButton}
              >
                Confirm
              </button>
              <button 
                ref={cancelButtonRef}
                onClick={handleCloseModal} // Annule l'inscription et ferme la modale
                className={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default EventDetails;