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
        
        {/* Formulaire d'inscription */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameGroup}>
            <div className={styles.formGroup}>
              <label>Prenom</label>
              <input
                type="text"
                name="firstName" // Nom du champ pour le prenom
                value={formData.firstName} // Valeur actuelle du champ prenom
                onChange={handleChange} // Appel de la fonction pour gérer les changements
                required // Champ obligatoire
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          {/* Bouton de soumission du formulaire */}
          <button type="submit" className={styles.submitButton}>
            S'inscrire
          </button>
        </form>

        {/* Lien pour les utilisateurs ayant deja un compte */}
        <p className={styles.loginLink}>
          Deja un compte? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
}