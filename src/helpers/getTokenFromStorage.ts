import { getFieldFromSearch } from './getFieldFromSearch'
import { safeLocalStorage } from './storage'

export const getTokenFromStorage = (logError: (error: Error) => void) => {
  const tokenFromStorage = safeLocalStorage.getItem('jwtToken')

  if (tokenFromStorage) {
    try {
      const parsedTokenInfo = JSON.parse(tokenFromStorage)

      return parsedTokenInfo.token
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      logError(e)

      return null
    }
  }

  return getFieldFromSearch('token', window.location.search)
}
