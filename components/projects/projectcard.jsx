'use client';

import styles from './projectcard.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ title, student, category, image, description, technologies, openPositions }) {
  const [showPositions, setShowPositions] = useState(false);
  const totalPositions = openPositions.reduce((total, pos) => total + pos.spots, 0);

  return (
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
          <span>Project Lead: {student}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>{tech}</span>
          ))}
        </div>
        
        <button 
          className={styles.toggleButton} 
          onClick={() => setShowPositions(!showPositions)}
        >
          <span>{totalPositions} Open Position{totalPositions !== 1 ? 's' : ''}</span>
          <svg 
            className={`${styles.chevron} ${showPositions ? styles.chevronUp : ''}`}
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

        {showPositions && (
          <div className={styles.positions}>
            <h4 className={styles.positionsTitle}>Open Positions</h4>
            {openPositions.map((position, index) => (
              <div key={index} className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <span className={styles.positionTitle}>{position.role}</span>
                  <span className={styles.positionBadge}>{position.spots} spot{position.spots !== 1 ? 's' : ''}</span>
                </div>
                <div className={styles.positionDetails}>
                  <div className={styles.skillsRequired}>
                    <span className={styles.detailLabel}>Skills needed:</span>
                    <div className={styles.skillTags}>
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <button className={styles.applyButton}>Apply for Position</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
