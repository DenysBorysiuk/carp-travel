export function transformPhoneNumber(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  const formattedNumber = `+${cleanedNumber.substring(0, 2)} (${cleanedNumber.substring(
    2,
    5
  )}) ${cleanedNumber.substring(5, 8)} ${cleanedNumber.substring(8, 10)} ${cleanedNumber.substring(
    10
  )}`;

  return formattedNumber;
}
