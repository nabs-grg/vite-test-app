export const formatPercentage = ({ value, language }: { value: number; language: string }) => {
  const config = {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }

  return new Intl.NumberFormat(language, config).format(value)
}
