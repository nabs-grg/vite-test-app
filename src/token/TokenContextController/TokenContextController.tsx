import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import { TokenContext } from '../TokenContext/TokenContext'

import { TokenContextControllerProps } from './TokenContextController.types'
import { useLogger } from '@/hooks/useLogger/useLogger'
import { getTokenFromStorage } from '@/helpers/getTokenFromStorage'
import { safeLocalStorage } from '@/helpers/storage'

const getFieldFromQuery = (param: string, search: string) => {
  const params = new URLSearchParams(search)

  return params.get(param)
}

export function TokenContextController({ children }: TokenContextControllerProps) {
  const { search } = useLocation()
  const { logError } = useLogger()
  const navigate = useNavigate()

  const tokenFromUrl = getFieldFromQuery('token', search)

  console.log(tokenFromUrl, 'tokenFromUrl')

  const sessionToken = tokenFromUrl || getTokenFromStorage(logError)
  const [tokenState, setTokenState] = useState({
    sessionToken: tokenFromUrl || getTokenFromStorage(logError),
    tokenError: false,
    donationSessionId: '',
    shouldPersistTokenInUrl: false
  })

  useEffect(() => {
    if (!safeLocalStorage.isAvailable()) {
      setTokenState(a => ({ ...a, shouldPersistTokenInUrl: true }))
    } else {
      const url = new URL(window.location.href)
      url.searchParams.delete('token')
      // history.replace({
      //   ...history,
      //   search: url.searchParams.toString()
      // })
      navigate(
        {
          pathname: location.pathname,
          search: url.searchParams.toString()
        },
        { replace: true }
      )
    }
  }, [])

  useEffect(() => {
    if (sessionToken) {
      try {
        const { id, exp } = jwtDecode<{ id: string; exp: number }>(sessionToken)
        setTokenState(a => ({ ...a, donationSessionId: id }))
        safeLocalStorage.setItem(
          'jwtToken',
          JSON.stringify({
            token: sessionToken,
            exp
          })
        )
      } catch (e) {
        logError(e)
        setTokenState(a => ({ ...a, tokenError: true }))
      }
    } else {
      setTokenState(a => ({ ...a, tokenError: true }))
    }
  }, [logError, sessionToken])

  const tokenStateMemo = useMemo(
    () => ({
      ...tokenState,
      setTokenContext: setTokenState
    }),
    [tokenState, setTokenState]
  )

  return (
    <TokenContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={tokenStateMemo}
    >
      {children}
    </TokenContext.Provider>
  )
}
