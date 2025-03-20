"use server";

// Import de la fonction de validation du dossier de validation
import validateContact from "@/validation/contact";

// Une fonction asynchrone qui traitant les données du formulaire de contact
export async function contactServeur(formData) {
  // Valide les donnees du formulaire et recupere aussi les éventuelles erreurs 
  // newState contient l'état mis à jour après validation
  let [error, newState] = validateContact(formData);

  // Extraction des données du formulaire à partir de l'objet FormData
  const name = formData.get("name");     // Récupère le nom
  const email = formData.get("email");    // Récupère l'email
  const subject = formData.get("subject"); // Récupère le sujet
  const message = formData.get("message"); // Récupère le message

  // Log des données du formulaire pour le débogage
  console.log("Formulaire soumis :", {
    name,
    email,
    subject,
    message
  });

  // Retourne un tableau contenant les erreurs et le nouvel état
  return [error, newState];
}