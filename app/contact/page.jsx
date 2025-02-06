'use client';
// Importations
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  // Etat initial du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter la soumission du formulaire ici
    console.log('Formulaire soumis:', formData);
  };

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-nous</h1>
      
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          {/* Informations de contact */}
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>contact@conex.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Adresse</h3>
            <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Champ pour le nom */}
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Champ pour l'email */}
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Champ pour le sujet */}
          <div className={styles.formGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Champ pour le message */}
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          {/* Bouton de soumission */}
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}