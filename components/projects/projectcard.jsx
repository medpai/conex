'use client';
//Importations
import styles from './projectcard.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Composant pour afficher le modal avec les postes ouverts
function PositionsModal({ isOpen, onClose, title, positions }) {
  // Si le modal n'est pas ouvert, ne rien afficher
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Postes ouverts pour {title}</h3>
          <button 
            className={styles.closeButton}
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={styles.modalContent}>
          {positions.map((position, index) => (
            <div key={index} className={styles.positionCard}>
              <h4 className={styles.positionTitle}>{position.role}</h4>
              <span className={styles.spotBadge}>
                {position.spots} place{position.spots !== 1 ? 's' : ''} disponible{position.spots !== 1 ? 's' : ''}
              </span>
              <div className={styles.skillsLabel}>Compétences requises :</div>
              <div className={styles.skillsList}>
                {position.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skill}>{skill}</span>
                ))}
              </div>
              <button className={styles.applyButton}>Postuler pour ce poste</button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

// Composant principal pour afficher la carte de projet
export default function ProjectCard({ title, student, category, image, description, technologies, openPositions }) {
  const [showPositions, setShowPositions] = useState(false); // Gérer l'état d'affichage des postes
  const [isMounted, setIsMounted] = useState(false); // Vérifier si le composant est monté
  const totalPositions = openPositions.reduce((total, pos) => total + pos.spots, 0); // Calculer le nombre total de postes ouverts

  // Utilisation de useEffect pour gérer le montage du composant
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.student}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Chef de projet : {student}</span>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>{tech}</span>
            ))}
          </div>
          
          <button 
            className={styles.toggleButton} 
            onClick={() => setShowPositions(true)} // Ouvre le modal pour afficher les postes
          >
            <span>{totalPositions} Poste{totalPositions !== 1 ? 's' : ''} ouvert{totalPositions !== 1 ? 's' : ''}</span>
            <svg 
              className={styles.chevron}
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Affiche le modal si le composant est monté et si des postes sont ouverts */}
      {isMounted && (
        <PositionsModal
          isOpen={showPositions}
          onClose={() => setShowPositions(false)} // Ferme le modal
          title={title}
          positions={openPositions}
        />
      )}
    </>
  );
}
