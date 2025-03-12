 'use client';
// Importations
import { useActionState,useState } from 'react';
import  validateContact  from '@/validation/contact';
import { contactServeur } from '@/actions/contact';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  /**
   * @param {FormData} formData 
   */
  const handleSubmit = async (previousState, formData) => {
    let [error, newState] = validateContact(formData);
    if (!error) {
      [error, newState] = await contactServeur(formData);
      if (!error) {
        setConfirmationMessage('Votre message a été envoyé avec succès.');
      }
    }

 
if (error) {
  newState.name.value = formData.get("name");
  newState.email.value = formData.get("email");
  newState.subject.value = formData.get("subject");
  newState.message.value = formData.get("message");
}
  return newState;
};
  const [formState, formAction] = useActionState(handleSubmit, {
    name: { value: "", error: null },
    email: { value: "", error: null },
    subject: { value: "", error: null },
    message: { value: "", error: null },
  });

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

        <form action={formAction} className={styles.form} noValidate>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              defaultValue={formState.name.value}
              required
            />
            {formState.name.error && <p className={styles.error}>{formState.name.error}</p>}
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              defaultValue={formState.email.value}
              required
            />
            {formState.email.error && <p className={styles.error}>{formState.email.error}</p>}
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              defaultValue={formState.subject.value}
              required
            />
            {formState.subject.error && <p className={styles.error}>{formState.subject.error}</p>}
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Votre message"
              rows="4"
              defaultValue={formState.message.value}
              required
            ></textarea>
            {formState.message.error && <p className={styles.error}>{formState.message.error}</p>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
          {confirmationMessage && <p className={styles.confirmation}>{confirmationMessage}</p>}

        </form>

      </div>
    </div>
  );
}
