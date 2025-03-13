'use client';

//Importations
import { useState, useRef } from 'react';
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

  // État pour gérer les erreurs de validation
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  // Références pour la gestion du focus
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const submitButtonRef = useRef(null);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut de soumettre le formulaire
    
    // Validation basique
    let isValid = true;
    const errors = {
      email: '',
      password: ''
    };

    if (!formData.email) {
      errors.email = 'Veuillez entrer votre adresse email';
      isValid = false;
      emailInputRef.current?.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Veuillez entrer une adresse email valide';
      isValid = false;
      emailInputRef.current?.focus();
    }

    if (!formData.password) {
      errors.password = 'Veuillez entrer votre mot de passe';
      isValid = false;
      if (formData.email) {
        passwordInputRef.current?.focus();
      }
    }

    setFormErrors(errors);

    if (isValid) {
      console.log('Form submitted:', formData); // Affiche les données du formulaire dans la console
      // Traitement du formulaire ici
    }
  };

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,  // Garde les anciennes données du formulaire
      [name]: type === 'checkbox' ? checked : value  // Si c'est une case à cocher, on met à jour "checked", sinon on met à jour la valeur
    }));

    // Effacer le message d'erreur lorsque l'utilisateur commence à taper
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.formContainer} role="region" aria-labelledby="login-title">
        <h1 id="login-title" className={styles.title}>Connexion</h1>
        
        <form className={styles.form} onSubmit={handleSubmit} noValidate aria-describedby="form-description">
          <p id="form-description" className={styles.visuallyHidden}>
            Formulaire de connexion à votre compte Conex. Tous les champs marqués d'un astérisque sont obligatoires.
          </p>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" id="email-label">Email <span aria-hidden="true">*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              ref={emailInputRef}
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              autoComplete="email"
            />
            {formErrors.email && (
              <div id="email-error" className={styles.errorMessage} role="alert">
                {formErrors.email}
              </div>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" id="password-label">Mot de passe <span aria-hidden="true">*</span></label>
            <input
              id="password"
              type="password"
              name="password"
              ref={passwordInputRef}
              value={formData.password}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!formErrors.password}
              aria-describedby={formErrors.password ? "password-error" : undefined}
              autoComplete="current-password"
            />
            {formErrors.password && (
              <div id="password-error" className={styles.errorMessage} role="alert">
                {formErrors.password}
              </div>
            )}
          </div>
          
          <div className={styles.formOptions}>
            <div className={styles.checkboxContainer}>
              <input
                id="rememberMe"
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className={styles.checkboxInput}
              />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                Se souvenir de moi
              </label>
            </div>
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Mot de passe oublié?
            </Link>
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            ref={submitButtonRef}
          >
            Se connecter
          </button>
        </form>

        <div className={styles.divider} role="separator" aria-hidden="true">
          <span>ou</span>
        </div>

        <div className={styles.socialLogin}>
          <button className={styles.googleButton} aria-label="Continuer avec Google">
            Continuer avec Google
          </button>
          <button className={styles.linkedinButton} aria-label="Continuer avec LinkedIn">
            Continuer avec LinkedIn
          </button>
        </div>

        <p className={styles.signupLink}>
          Pas encore de compte? <Link href="/signup">S'inscrire</Link>
        </p>
      </div>
    </main>
  );
}
