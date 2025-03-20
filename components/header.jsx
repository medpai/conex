'use client';
//Importations
import styles from "./header.module.css"
import { useState, useEffect } from 'react';
import Link from 'next/link';
//EXPORTATION DE LA FONCTION HEADER
export default function Header() {
    // État pour gérer l'ouverture du menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // État pour gérer le défilement de la page
    const [isScrolled, setIsScrolled] = useState(false);
    // État pour vérifier si le composant est monté
    const [mounted, setMounted] = useState(false);

    // useEffect pour gérer l'événement de défilement de la page
    useEffect(() => {
        setMounted(true); // On indique que le composant est monté
        const handleScroll = () => {
            // Change l'état de "isScrolled" si la page est défilée de plus de 20 pixels
            setIsScrolled(window.scrollY > 20);
        };

        // Ajoute un écouteur d'événements pour le défilement de la page
        window.addEventListener('scroll', handleScroll);
        // Nettoie l'écouteur lorsque le composant est démonté
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Si le composant n'est pas encore monté, il ne rend rien
    if (!mounted) {
        return null;
    }

    return (
        // Application de la classe "scrolled" lorsque la page est défilée
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink}>Conex</Link>
            </div>

            {/* Bouton pour afficher ou masquer le menu */}
            <button
                type="button"
                className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menu de navigation qui s'affiche lorsque "isMenuOpen" est vrai */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                <ul className={styles.menu}>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">À propos</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
} 