"use server";

import validateContact from "@/validation/contact";

export async function contactServeur(formData) {
  let [error, newState] = validateContact(formData);

  const name = formData.get("name");
  const email = formData.get("email");
 const subject = formData.get("subject");
  const message = formData.get("message");

  console.log("Formulaire soumis :", {
    name,
    email,
    subject,
    message
  });

  return [error, newState];
}
