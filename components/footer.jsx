'use client';

import styles from './footer.module.css'; // Importation des styles CSS spécifiques pour le pied de page
import Link from 'next/link'; // Importation de la fonctionnalité Link pour la navigation entre les pages

export default function Footer() { // Définition du composant Footer
  return (
    <footer className={styles.footer}> 
      <div className={styles.container}> 
        <div className={styles.grid}> 
          
          {/* Section "À propos de Conex" */}
          <div className={styles.section}>
            <h3>About Conex</h3>
            <p>Connecting students with exciting projects and opportunities in the university community.</p> {/* Description de Conex */}
          </div>
          
          {/* Section des liens rapides */}
          <div className={styles.section}>
            <h3>Quick Links</h3> 
            <ul> {/* Liste des liens */}
              <li><Link href="/events">Events</Link></li> 
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
            </ul>
          </div>
          
          {/* Section des ressources */}
          <div className={styles.section}>
            <h3>Resources</h3> 
            <ul> 
              <li><Link href="/help">Help Center</Link></li> 
              <li><Link href="/guidelines">Community Guidelines</Link></li> 
              <li><Link href="/privacy">Privacy Policy</Link></li> 
              <li><Link href="/terms">Terms of Service</Link></li> 
            </ul>
          </div>
          
          {/* Section pour les liens vers les réseaux sociaux */}
          <div className={styles.section}>
            <h3>Connect With Us</h3> 
            <div className={styles.social}> 
              {/* Lien vers Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              {/* Lien vers LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Lien vers GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Section du bas avec la mention de copyright */}
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Conex. All rights reserved.</p> {/* Affiche l'année actuelle et le texte de copyright */}
        </div>
      </div>
    </footer>
  );
}
