export function toCurrency(amount) {
  if (amount) {
    return `$${amount.toFixed(2)}`;
  }
  return '$0';
}
export function toShortDate() {

}
