import { onlyNumbers } from "./onlyNumbers";

export const formatPhone = (phone: string): string => {
  const newPhone = onlyNumbers(phone);

  return newPhone.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
};
