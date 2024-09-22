export const isValidHexColor = (hexColor: string) =>
  /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i.test(hexColor)
