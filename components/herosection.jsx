//Importations
import styles from './herosection.module.css';
import Link from 'next/link';
//Exportation de la fonction HeroSection
export default function HeroSection() {
  return (
    // Section principale de la page avec un style de fond ou d'image de héros
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Titre principal avec une mise en surbrillance pour "University Life" */}
        <h1 className={styles.title}>
          Connect, Discover, Thrive in  <span className={styles.highlight}>University Life</span>
        </h1>

        {/* Sous-titre avec une brève description de ce que propose le site */}
        <p className={styles.subtitle}>
          Join events, clubs, and connect with peers - all in one place!
        </p>

        <div className={styles.buttonGroup}>
          {/* Bouton principal pour commencer, redirige vers la page de connexion */}
          <Link
            href="/login"
            className={styles.primaryButton}
            aria-label="Se connecter à votre compte Conex ou créer un nouveau compte"
          >
            Get Started
          </Link>

          {/* Bouton secondaire pour en savoir plus, redirige vers la page "Learn More" */}
          <Link
            href="/learn-more"
            className={styles.secondaryButton}
            aria-label="En savoir plus sur les services et fonctionnalités de Conex"
          >
            En savoir plus sur Conex
          </Link>
        </div>
      </div>
    </section>
  )
}  