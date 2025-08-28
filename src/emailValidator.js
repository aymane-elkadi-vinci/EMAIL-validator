export function isValidEmail(email) {
  // Check type and spaces
  if (typeof email !== "string") return false;
  if (email.includes(" ")) return false;

  // Must contain exactly one '@'
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return false;

  // Split into local part (before '@') and domain part (after '@')
  const [local, domain] = email.split("@");

  // Local and domain parts must not be empty
  if (!local || !domain) return false;

  // Domain must contain at least one '.' and not end with '.'
  if (!domain.includes(".")) return false;
  if (domain.endsWith(".")) return false;

  // If all checks pass, the email is valid
  return true;
}
