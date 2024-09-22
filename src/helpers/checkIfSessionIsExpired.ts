import jwtDecode from 'jwt-decode'

export const checkIfSessionIsExpired = (sessionToken: string) => {
  try {
    const { exp } = jwtDecode<{ exp: number }>(sessionToken)
    const expDate = new Date(exp * 1000)

    return expDate < new Date()
  } catch (e) {
    return undefined
  }
}
