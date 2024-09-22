import {
  CurrencyCode,
  currencyMap,
  toMajorUnits,
  toMinorUnits,
} from './currency'

export type Money = {
  amount: number
  currency: CurrencyCode
}

export const createMoney = (major: number, currency: CurrencyCode): Money => ({
  amount: toMinorUnits(major, currency),
  currency,
})

type MoneyOptions = Omit<
  Intl.NumberFormatOptions,
  'currency' | 'currencySign'
> & {
  locale?: string
  forceLocale?: boolean
  hideDecimalsIfZero?: boolean
}

export const formatMoney = (
  amount: Money,
  {
    locale,
    forceLocale = false,
    hideDecimalsIfZero = false,
    ...options
  }: MoneyOptions = {
    locale: 'en-US',
    forceLocale: false,
  }
): string => {
  const minorUnits = currencyMap[amount.currency].minorUnits

  const major = toMajorUnits(amount.amount, amount.currency)

  return new Intl.NumberFormat(
    !forceLocale && amount.currency === 'USD' ? 'en-US' : locale ?? 'en-US',
    {
      style: 'currency',
      currency: amount.currency,
      minimumFractionDigits:
        hideDecimalsIfZero && Math.floor(major) === major ? 0 : minorUnits,
      maximumFractionDigits: minorUnits,
      ...options,
    }
  ).format(major)
}

const wordAtBeginning = /^[A-Z,a-z]/

export const formatMoneyShort = (
  amount: Money,
  options: MoneyOptions
): string =>
  wordAtBeginning.exec(
    formatMoney(amount, {
      ...options,
      currencyDisplay: 'narrowSymbol',
      notation: 'compact',
    })
  )
    ? formatMoney(amount, { ...options, currencyDisplay: 'code' })
        .replace(amount.currency, '')
        .trim()
    : formatMoney(amount, { ...options, currencyDisplay: 'narrowSymbol' })

export const sumMoney = (...monies: [Money, ...Money[]]) => {
  const currency = monies[0].currency
  if (monies.some((m) => m.currency !== currency))
    throw Error('all currencies must be the same when summing together money')
  return { amount: monies.reduce((acc, m) => acc + m.amount, 0), currency }
}
export const subtractMoney = (...monies: [Money, ...Money[]]) => {
  const currency = monies[0].currency
  if (monies.some((m) => m.currency !== currency))
    throw Error('all currencies must be the same when summing together money')
  return { amount: monies.reduce((acc, m) => acc - m.amount, 0), currency }
}
