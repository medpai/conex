import styles from "./header.module.css"
export default function Header() {
    return<header className={styles.header}>
        <div className={styles.logo}>
            <a href="/">Conex</a>
        </div>
        <nav className={styles.nav}>    
            <ul className={styles.menu} >
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">A propos</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className={styles.cta}>
            <button className="cta-button">S'inscrire</button>
        </div>
      </header> 
    
};
