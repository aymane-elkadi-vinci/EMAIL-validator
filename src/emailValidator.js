// src/emailValidator.js
export function isValidEmail(email) {
  // Type & espaces
  if (typeof email !== "string") return false;
  if (email.includes(" ")) return false;

  // Doit contenir exactement un "@"
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return false;

  const [local, domain] = email.split("@");

  // Texte avant et après "@"
  if (!local || !domain) return false;

  // Domaine doit contenir au moins un "." et ne pas se terminer par "."
  if (!domain.includes(".")) return false;
  if (domain.endsWith(".")) return false;

  // Tout passe
  return true;
}
