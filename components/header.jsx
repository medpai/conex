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

    // Gestion de la fermeture du menu avec la touche Escape
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [isMenuOpen]);

    // Si le composant n'est pas encore monté, il ne rend rien
    if (!mounted) {
        return null;
    }

    // Composant des boutons de connexion et d'inscription
    const AuthButtons = () => (
        <div className={styles.authButtons} role="group" aria-label="Authentification">
            <Link href="/login" className={styles.authLink}>
                <button type="button" className={styles.loginButton}>Se connecter</button>
            </Link>
            <Link href="/signup" className={styles.authLink}>
                <button type="button" className={styles.signupButton}>S'inscrire</button>
            </Link>
        </div>
    );

    return (
        // Application de la classe "scrolled" lorsque la page est défilée
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} role="banner">
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink} aria-label="Accueil Conex">Conex</Link>
            </div>
            
            {/* Bouton pour afficher ou masquer le menu */}
            <button 
                type="button"
                className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMenuOpen}
                aria-controls="navigation-menu"
            >
                <span className={styles.visuallyHidden}>Menu</span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menu de navigation qui s'affiche lorsque "isMenuOpen" est vrai */}
            <nav 
                className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}
                id="navigation-menu"
                aria-label="Navigation principale"
            >    
                <ul className={styles.menu} role="menubar">
                    <li role="none"><Link href="/" role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Accueil</Link></li>
                    <li role="none"><Link href="/about" role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>À propos</Link></li>
                    <li role="none"><Link href="/contact" role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Contact</Link></li>
                </ul>
                {/* Composant pour afficher les boutons de connexion et d'inscription */}
                <AuthButtons />
            </nav>
        </header> 
    );
}
