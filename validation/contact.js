export default function validateContact (formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    let newState = {
        name: { value: "", error: null },
        email: { value: "", error: null },
        subject: { value: "", error: null },
        message: { value: "", error: null },
      };
  
      let error = false;
  
      if (!name) {
        error = true;
        newState.name.error = "Le nom est requis.";
      }
  
      if (!email) {
        error = true;
        newState.email.error = "L'email est requis.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error = true;
        newState.email.error = "L'email n'est pas valide.";
      }
  
      if (!subject) {
        error = true;
        newState.subject.error = "Le sujet est requis.";
      }
  
      if (!message) {
        error = true;
        newState.message.error = "Le message est requis.";
      }
  
      return [error,newState];

}