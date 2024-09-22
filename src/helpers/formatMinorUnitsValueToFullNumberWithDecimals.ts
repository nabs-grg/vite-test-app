export const formatMinorUnitsValueToFullNumberWithDecimals = (minorUnitsValue: number, minorUnits: number): number => {
  return minorUnitsValue / 10 ** minorUnits
}
