export function digitConverter(number: number) {
  if (number < 0) number = 0;
  const stringDigit = Array.from(String(number)).reverse();
  function getDigit(digit: string) {
    if (!digit || Number(digit) < 0) {
      return '0';
    } else return digit
  }

  return [getDigit(stringDigit[2]), getDigit(stringDigit[1]), getDigit(stringDigit[0])]
}
