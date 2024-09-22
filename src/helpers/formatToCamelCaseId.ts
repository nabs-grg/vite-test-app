export const formatToCamelCaseId = (unformattedId: string): string => {
  // capitalize all letters after "_" and then remove the "_"
  // eslint-disable-next-line no-useless-escape
  return unformattedId.replace(/(_\w)/g, m => m.toUpperCase()).replace('_', '')
}
