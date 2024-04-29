export const isEmailValid = (email: string) =>
  email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(email) && true;
