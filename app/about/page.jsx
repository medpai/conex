'use client';
// Importation du fichier de styles CSS
import styles from './page.module.css';
// Exportation de la fonction AboutPage
export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Titre principal de la page "À propos de Conex" */}
      <h1 className={styles.title}>A propos de Conex</h1>
      <div className={styles.content}>
        {/* Section sur la mission de l'entreprise */}
        <section className={styles.section}>
          <h2>Notre Mission</h2>
          <p>
            Conex est dediee a creer des connexions significatives entre les professionnels
            et les opportunites. Notre plateforme facilite les rencontres et les echanges
            dans un environnement professionnel dynamique.
          </p>
        </section>
        
        {/* Section sur la vision de l'entreprise */}
        <section className={styles.section}>
          <h2>Notre Vision</h2>
          <p>
            Nous aspirons a devenir la reference en matiere de networking professionnel,
            en offrant des outils innovants et des evenements enrichissants pour developper
            votre reseau professionnel.
          </p>
        </section>

        {/* Section sur les valeurs de l'entreprise */}
        <section className={styles.section}>
          <h2>Nos Valeurs</h2>
          <ul className={styles.valuesList}>
            {/* Liste des valeurs */}
            <li>Innovation continue</li>
            <li>Integrite professionnelle</li>
            <li>Collaboration efficace</li>
            <li>Excellence du service</li>
          </ul>
        </section>
      </div>
    </div>
  );
}