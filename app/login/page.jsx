'use client';
//Importations
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
//Exportation de la fonction LoginPage
export default function LoginPage() {
  // Déclaration de l'état du formulaire avec useState
  const [formData, setFormData] = useState({
    email: '',           
    password: '',       
    rememberMe: false    // Case à cocher pour se souvenir de l'utilisateur
  });

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut de soumettre le formulaire
    
    console.log('Form submitted:', formData); // Affiche les données du formulaire dans la console
  };

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,  // Garde les anciennes données du formulaire
      [name]: type === 'checkbox' ? checked : value  // Si c'est une case à cocher, on met à jour "checked", sinon on met à jour la valeur
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Connexion</h1>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}  // Appel de la fonction handleChange à chaque modification du champ
              required  // Le champ est obligatoire
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}  // Appel de la fonction handleChange à chaque modification du champ
              required  // Le champ est obligatoire
            />
          </div>
          
          <div className={styles.formOptions}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}  // Appel de la fonction handleChange pour le changement de l'état de la case à cocher
              />
              <span>Se souvenir de moi</span>
            </label>
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Mot de passe oublié?
            </Link>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>
        </form>

        <div className={styles.divider}>
          <span>ou</span>
        </div>

        <div className={styles.socialLogin}>
          <button className={styles.googleButton}>
            Continuer avec Google
          </button>
          <button className={styles.linkedinButton}>
            Continuer avec LinkedIn
          </button>
        </div>

        <p className={styles.signupLink}>
          Pas encore de compte? <Link href="/signup">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}
