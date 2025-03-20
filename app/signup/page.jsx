'use client';
//Importation
import { useState } from 'react';
import styles from './page.module.css';
//Exportation de la fonction SignUpPage
export default function SignUpPage() {
  // Etat initial des donnees du formulaire avec des champs vides
  const [formData, setFormData] = useState({
    firstName: '',  // Prenom de l'utilisateur
    lastName: '',   // Nom de l'utilisateur
    email: '',      // Email de l'utilisateur
    password: '',   // Mot de passe de l'utilisateur
    confirmPassword: '' // Confirmation du mot de passe
  });

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Affichage des donnees soumises dans la console (pour debug)
    console.log('Formulaire soumis:', formData);
  };

  // Fonction de gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target; // Recuperation du nom et de la valeur du champ modifie
    // Mise a jour de l'etat avec les nouvelles valeurs des champs
    setFormData(prev => ({
      ...prev,
      [name]: value // Mise a jour dynamique en fonction du nom du champ
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Creer un compte</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">Prenom</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">Nom</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            S'inscrire
          </button>
        </form>

        <p className={styles.loginLink}>
          Deja un compte? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
}