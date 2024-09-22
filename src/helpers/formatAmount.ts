type FormatAmountProps = {
  currencyCode: string
  value: number
  currencyDisplay?: Intl.NumberFormatOptions['currencyDisplay']
  notation?: Intl.NumberFormatOptions['notation']
  language?: string
  minorUnits?: number
  hideDecimals?: boolean
  compactDisplay?: Intl.NumberFormatOptions['compactDisplay']
}

const showUSDNarrowSymbolOnly = ({ currencyCode, language }: { currencyCode: string; language: string }) =>
  ['USD'].includes(currencyCode) && ['en-GB'].includes(language)

export const formatAmount = ({
  value,
  currencyCode,
  language,
  currencyDisplay = 'symbol',
  notation,
  minorUnits,
  hideDecimals,
  compactDisplay
}: FormatAmountProps) =>
  new Intl.NumberFormat(
    showUSDNarrowSymbolOnly({
      currencyCode,
      language: language || 'en-US'
    })
      ? 'en-US'
      : language,
    {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay,
      notation,
      compactDisplay,
      minimumFractionDigits: hideDecimals ? 0 : minorUnits,
      maximumFractionDigits: minorUnits
    }
  ).format(value)

type ShortFormatAmountProps = Omit<FormatAmountProps, 'notion' | 'compactDisplay'>

const safeFormat = (props: FormatAmountProps) => {
  try {
    return formatAmount(props)
  } catch (err) {
    if (err instanceof RangeError && err.message.includes('currencyDisplay')) {
      return formatAmount({ ...props, currencyDisplay: 'symbol' })
    }
    throw err
  }
}

export const formatShortAmount = ({ currencyCode, ...props }: ShortFormatAmountProps) =>
  safeFormat({
    ...props,
    currencyCode,
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    compactDisplay: 'short'
  })
    .replace(currencyCode, '')
    .trim()
