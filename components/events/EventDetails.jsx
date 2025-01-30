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
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleJoinEvent = () => {
    setShowModal(true);
  };

  const handleConfirmRegistration = () => {
    setIsRegistered(true);
    setShowModal(false);
  };

  return (
    <div className={styles.eventDetailsContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={title}
          fill
          priority
          quality={90}
          className={styles.eventImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px"
        />
      </div>
      
      <div className={styles.contentContainer}>
        <span className={`${styles.category} ${styles[category.toLowerCase()]}`}>
          {category}
        </span>
        <h1 className={styles.title}>{title}</h1>
        
        <div className={styles.metadata}>
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
          {description}
        </div>

        <button 
          onClick={handleJoinEvent}
          className={styles.joinButton}
          disabled={isRegistered}
        >
          {isRegistered ? 'Registered ✓' : 'Join Event'}
        </button>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Confirm Registration</h2>
            <p>Are you sure you want to register for {title}?</p>
            <div className={styles.modalButtons}>
              <button 
                onClick={handleConfirmRegistration}
                className={styles.confirmButton}
              >
                Confirm
              </button>
              <button 
                onClick={() => setShowModal(false)}
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
