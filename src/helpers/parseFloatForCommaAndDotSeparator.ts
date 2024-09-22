export const parseFloatForCommaAndDotSeparator = (value: string): number => {
  const formattedValue = value.replace(',', '.')

  return parseFloat(formattedValue)
}
