'use client';
//Importation du style css
import styles from './page.module.css';

// Exportation de la fonction LearnMorePage
export default function LearnMorePage() {
  return (
    <div className={styles.container}>
      {/* Section Hero avec titre et sous-titre */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Découvrez Conex</h1>
        <p className={styles.subtitle}>Une plateforme innovante pour les professionnels</p>
      </div>

      <div className={styles.content}>
        {/* Section "Pourquoi Conex" avec les principales fonctionnalités */}
        <section className={styles.section}>
          <h2>Pourquoi Conex?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Networking Efficace</h3>
              <p>Connectez-vous avec des professionnels partageant les mêmes intérêts et développez votre réseau.</p>
            </div>
            <div className={styles.feature}>
              <h3>Événements Exclusifs</h3>
              <p>Participez à des événements professionnels de haute qualité et des conférences enrichissantes.</p>
            </div>
            <div className={styles.feature}>
              <h3>Opportunités Professionnelles</h3>
              <p>Accédez à des opportunités uniques et développez votre carrière.</p>
            </div>
          </div>
        </section>

        {/* Section "Comment ça marche" avec les étapes du processus */}
        <section className={styles.section}>
          <h2>Comment ça marche?</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Créez votre profil</h3>
              <p>Inscrivez-vous et personnalisez votre profil professionnel</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Connectez-vous</h3>
              <p>Trouvez et connectez-vous avec d'autres professionnels</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Participez</h3>
              <p>Rejoignez des événements et développez votre réseau</p>
            </div>
          </div>
        </section>

        {/* Section des avantages Premium */}
        <section className={styles.section}>
          <h2>Avantages Premium</h2>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3>Accès Prioritaire</h3>
              <p>Réservation prioritaire pour les événements exclusifs</p>
            </div>
            <div className={styles.benefit}>
              <h3>Networking Avancé</h3>
              <p>Fonctionnalités de mise en relation avancées</p>
            </div>
            <div className={styles.benefit}>
              <h3>Contenu Exclusif</h3>
              <p>Accès à des ressources et contenus premium</p>
            </div>
          </div>
        </section>

        {/* Section d'appel à l'action (CTA) pour inciter à l'inscription */}
        <section className={styles.cta}>
          <h2>Prêt à commencer?</h2>
          <p>Rejoignez notre communauté de professionnels dès aujourd'hui</p>
          <div className={styles.buttons}>
            {/* Bouton pour s'inscrire */}
            <a href="/signup" className={styles.primaryButton}>S'inscrire maintenant</a>
            {/* Bouton pour contacter */}
            <a href="/contact" className={styles.secondaryButton}>Nous contacter</a>
          </div>
        </section>
      </div>
    </div>
  );
}