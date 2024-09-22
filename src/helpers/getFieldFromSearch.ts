export const getFieldFromSearch = (param: string, search: string) => {
  const params = new URLSearchParams(search)

  return params.get(param)
}
