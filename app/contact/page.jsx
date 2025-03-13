import ContactPage from "@/components/ContactForm";

// Métadonnées spécifiques à la page de contact
export const metadata = {
  title: 'Contactez Conex | Formulaire de contact et coordonnées',
  description: 'Contactez l\'équipe Conex pour toute question ou demande. Formulaire de contact, email, téléphone et adresse disponibles pour vous aider.',
};

export default function Contact() {
  return <ContactPage />;
}