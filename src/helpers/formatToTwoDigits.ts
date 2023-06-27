export function formatToTwoDigits(number?: number | undefined) {
  if (!number || isNaN(number)) {
    return '00'
  }
  return number < 10 ? '0' + number : number.toString()
}
