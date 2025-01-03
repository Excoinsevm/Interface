import { Currency, ETHER, Token } from '@popswap/cubesdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'POP'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
