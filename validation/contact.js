// Fonction principale de validation du formulaire de contact
export default function validateContact(formData) {
  // Extraction des valeurs du formulaire
  const name = formData.get("name");     // Récupère le nom de l'utilisateur
  const email = formData.get("email");    // Récupère l'adresse email
  const subject = formData.get("subject"); // Récupère le sujet du message
  const message = formData.get("message"); // Récupère le contenu du message

  // Initialisation de l'état du formulaire avec les valeurs par défaut
  // Chaque champ contient sa valeur et un message d'erreur potentiel
  let newState = {
    name: { value: "", error: null },
    email: { value: "", error: null },
    subject: { value: "", error: null },
    message: { value: "", error: null },
  };

  // Variable pour suivre si des erreurs ont été trouvées
  let error = false;

  // Validation du champ nom
  // Vérifie si le champ est vide
  if (!name) {
    error = true;
    newState.name.error = "Le nom est requis.";
  }

  // Validation du champ email
  // Vérifie d'abord si le champ est vide
  if (!email) {
    error = true;
    newState.email.error = "L'email est requis.";
  }
  // Si l'email est présent, vérifie son format avec une regex
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error = true;
    newState.email.error = "L'email n'est pas valide.";
  }

  // Validation du champ sujet
  // Vérifie si le champ est vide
  if (!subject) {
    error = true;
    newState.subject.error = "Le sujet est requis.";
  }

  // Validation du champ message
  // Vérifie si le champ est vide
  if (!message) {
    error = true;
    newState.message.error = "Le message est requis.";
  }

  // Retourne un tableau contenant :
  return [error, newState];
}