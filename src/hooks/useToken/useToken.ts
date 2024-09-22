import { useContext } from 'react'

import { TokenContext } from '@/token/TokenContext/TokenContext'

export const useToken = () => {
  const context = useContext(TokenContext)

  if (context === undefined) {
    throw new Error('useToken must be used within a TokenContextController')
  }

  return context
}
