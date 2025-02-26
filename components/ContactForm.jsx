'use client';
// Importations
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactPage() {
  // Etat initial du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Fonction de validation des champs
  const validateForm = () => {
    let newErrors = {};
    if (formData.name === '') {
      newErrors.name = "Le nom est requis.";
    }
    if (formData.email === '') {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (formData.subject === '') {
      newErrors.subject = "Le sujet est requis.";
    }
    if (formData.message === '') {
      newErrors.message = "Le message est requis.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulaire soumis:', formData);
      // Réinitialiser le formulaire après soumission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
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
    <div className={styles.container} >
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

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && <p className={styles.error}>{errors.subject}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
