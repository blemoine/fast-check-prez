export function getExpeditionFees(
  price: number,
  freeThreshold: number
): number {
  const expeditionFeesRate = 0.009;
  const expeditionFees = expeditionFeesRate * price;
  return expeditionFees >= freeThreshold ? 0 : expeditionFees;
}
