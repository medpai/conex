import styles from './herosection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
        Connect, Discover, Thrive in  <span className={styles.highlight}>University Life</span>
        </h1>
        <p className={styles.subtitle}>
        Join events, clubs, and connect with peers - all in one place!
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/get-started" className={styles.primaryButton}>
            Get Started
          </Link>
          <Link href="/learn-more" className={styles.secondaryButton}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}